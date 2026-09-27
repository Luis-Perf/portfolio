import { getCollection, type CollectionEntry } from 'astro:content';
import { casePath, type Alternates } from '../i18n/routes';
import { languages, type Lang } from '../i18n/ui';

export type Case = CollectionEntry<'cases'>;

const isLang = (value: string): value is Lang => value in languages;

function parseId(entry: Case): { lang: Lang; slug: string } {
  const [lang, slug] = entry.id.split('/');
  if (!lang || !slug || !isLang(lang)) {
    throw new Error(`Case "${entry.id}" must live in src/content/cases/<pt|en>/<slug>.md`);
  }
  return { lang, slug };
}

export const caseLang = (entry: Case): Lang => parseId(entry).lang;
export const caseSlug = (entry: Case): string => parseId(entry).slug;

export async function getCases(lang: Lang): Promise<Case[]> {
  const all = await getCollection('cases');
  assertTranslated(all);
  return all.filter((entry) => caseLang(entry) === lang).sort((a, b) => a.data.order - b.data.order);
}

/** Fails the build when a case is missing one of its translations. */
function assertTranslated(all: Case[]): void {
  const langsByKey = new Map<string, Set<Lang>>();
  for (const entry of all) {
    const langs = langsByKey.get(entry.data.translationKey) ?? new Set<Lang>();
    langs.add(caseLang(entry));
    langsByKey.set(entry.data.translationKey, langs);
  }
  for (const [key, langs] of langsByKey) {
    const missing = (Object.keys(languages) as Lang[]).filter((lang) => !langs.has(lang));
    if (missing.length > 0) throw new Error(`Case "${key}" is missing translation(s): ${missing.join(', ')}`);
  }
}

export async function caseAlternates(entry: Case): Promise<Alternates> {
  const all = await getCollection('cases');
  const alternates = {} as Alternates;
  for (const candidate of all) {
    if (candidate.data.translationKey === entry.data.translationKey) {
      alternates[caseLang(candidate)] = casePath(caseLang(candidate), caseSlug(candidate));
    }
  }
  return alternates;
}

/** First paragraph of the body: teaser on the home page and meta description. */
export function caseLead(entry: Case): string {
  return (entry.body ?? '').trim().split(/\r?\n\s*\r?\n/)[0]?.trim() ?? '';
}
