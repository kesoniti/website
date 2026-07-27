import { en, type Content } from './en';
import { tr } from './tr';
import { es } from './es';

export const languages = ['en', 'tr', 'es'] as const;
export type Lang = (typeof languages)[number];

const contentMap: Record<Lang, Content> = { en, tr, es };

export function getContent(lang: Lang): Content {
  return contentMap[lang];
}

/** getStaticPaths helper — one path per language. */
export function languagePaths() {
  return languages.map((lang) => ({ params: { lang } }));
}

export type { Content };
