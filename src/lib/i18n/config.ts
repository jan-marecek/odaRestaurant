export const languages = ['cz', 'en'] as const;

export type Language = (typeof languages)[number];

export const defaultLanguage: Language = 'cz';

export const localeByLanguage: Record<Language, string> = {
  cz: 'cs-CZ',
  en: 'en-US'
};

export const languageLabels: Record<Language, string> = {
  cz: 'CZ',
  en: 'EN'
};

export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language);
}
