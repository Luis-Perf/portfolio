import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { AstroIntegration } from 'astro';

// JSON-LD and other data blocks are not executed, so they are left out of script-src.
const INLINE_SCRIPT = /<script\b(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/gi;
const DATA_SCRIPT_TYPE = /\btype=["']?application\/(ld\+)?json/i;
const INLINE_STYLE = /<style\b[^>]*>([\s\S]*?)<\/style>/gi;
const STYLE_ATTRIBUTE = /<[^>]+\sstyle=/i;

// Cloudflare Web Analytics beacon, injected by Pages when analytics is on.
const ANALYTICS_SCRIPT = 'https://static.cloudflareinsights.com';
const ANALYTICS_CONNECT = 'https://cloudflareinsights.com';

const sha256 = (content: string) => `'sha256-${createHash('sha256').update(content, 'utf8').digest('base64')}'`;

async function htmlFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { recursive: true, withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.html'))
    .map((entry) => join(entry.parentPath, entry.name));
}

function buildCsp(scriptHashes: Set<string>, styleHashes: Set<string>): string {
  const directives = [
    "default-src 'self'",
    `script-src 'self' ${[...scriptHashes].sort().join(' ')} ${ANALYTICS_SCRIPT}`,
    `style-src 'self' ${[...styleHashes].sort().join(' ')}`,
    "img-src 'self' data:",
    "font-src 'self'",
    `connect-src 'self' ${ANALYTICS_CONNECT}`,
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'none'",
    "frame-ancestors 'none'",
    'upgrade-insecure-requests',
  ];
  return directives.map((directive) => directive.replace(/\s+/g, ' ').trim()).join('; ');
}

function buildHeaders(csp: string): string {
  return `/*
  Content-Security-Policy: ${csp}
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()
  Cross-Origin-Opener-Policy: same-origin

/_astro/*
  Cache-Control: public, max-age=31536000, immutable

/*.vcf
  Content-Type: text/vcard; charset=utf-8
`;
}

/**
 * Writes the Cloudflare Pages `_headers` file after the build. Inline scripts are
 * hashed from the final HTML, so the CSP never needs 'unsafe-inline' and stays in
 * sync when a script changes.
 */
export default function securityHeaders(): AstroIntegration {
  return {
    name: 'security-headers',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const outDir = fileURLToPath(dir);
        const scriptHashes = new Set<string>();
        const styleHashes = new Set<string>();
        const styleAttributeFiles: string[] = [];

        for (const file of await htmlFiles(outDir)) {
          const html = await readFile(file, 'utf8');
          for (const [, attributes = '', content = ''] of html.matchAll(INLINE_SCRIPT)) {
            if (!DATA_SCRIPT_TYPE.test(attributes)) scriptHashes.add(sha256(content));
          }
          for (const [, content = ''] of html.matchAll(INLINE_STYLE)) styleHashes.add(sha256(content));
          if (STYLE_ATTRIBUTE.test(html)) styleAttributeFiles.push(file);
        }

        if (styleAttributeFiles.length > 0) {
          throw new Error(
            `Inline style attributes are blocked by the CSP. Move them to a stylesheet:\n${styleAttributeFiles.join('\n')}`,
          );
        }

        await writeFile(join(outDir, '_headers'), buildHeaders(buildCsp(scriptHashes, styleHashes)));
        logger.info(`_headers written (${scriptHashes.size} script hash(es), ${styleHashes.size} style hash(es))`);
      },
    },
  };
}
