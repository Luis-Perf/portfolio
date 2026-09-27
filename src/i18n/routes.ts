import type { Lang } from './ui';

export type Alternates = Record<Lang, string>;

export const homePath = (lang: Lang): string => (lang === 'pt' ? '/' : '/en/');

export const casePath = (lang: Lang, slug: string): string =>
  lang === 'pt' ? `/projetos/${slug}/` : `/en/projects/${slug}/`;

export const otherLang = (lang: Lang): Lang => (lang === 'pt' ? 'en' : 'pt');
