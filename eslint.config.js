import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  { ignores: ['dist/', '.astro/', '.wrangler/', 'node_modules/'] },
  js.configs.recommended,
  tseslint.configs.strict,
  astro.configs.recommended,
  astro.configs['jsx-a11y-strict'],
  {
    rules: {
      // Safari drops list semantics when list-style is none, so role="list" is kept on purpose.
      'astro/jsx-a11y/no-redundant-roles': ['error', { ul: ['list'], ol: ['list'] }],
    },
  },
);
