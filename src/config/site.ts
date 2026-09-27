export interface SiteConfig {
  name: string;
  url: string;
  /** Digits only, with country code (wa.me format). */
  phone: string;
  phoneDisplay: string;
  github: string;
  vcard: string;
  linkedin?: string;
  email?: string;
}

export const site: SiteConfig = {
  name: 'Luis Felipe Perfeito',
  url: 'https://luisperfeito.com.br',
  phone: '5511999202024',
  phoneDisplay: '+55 11 99920-2024',
  github: 'https://github.com/Luis-Perf',
  vcard: '/luis-perfeito.vcf',
  linkedin: 'https://www.linkedin.com/in/luis-felipe-perfeito/',
  email: 'luisperfeito.1@hotmail.com',
};
