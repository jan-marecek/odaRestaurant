import type { Language } from './config';

export type RouteKey = 'home' | 'menu' | 'about' | 'contact' | 'reservations';

const slugs: Record<RouteKey, Record<Language, string>> = {
  home: { cz: '', en: '' },
  menu: { cz: 'menu', en: 'menu' },
  about: { cz: 'o-nas', en: 'about' },
  contact: { cz: 'kontakt', en: 'contact' },
  reservations: { cz: 'rezervace', en: 'reservations' }
};

export function routePath(language: Language, route: RouteKey): string {
  const slug = slugs[route][language];
  return `/${language}${slug ? `/${slug}` : ''}/`;
}

export function translatedPath(pathname: string, targetLanguage: Language): string {
  const currentLanguage: Language = pathname.startsWith('/en') ? 'en' : 'cz';
  const currentSlug = pathname.replace(/^\/(cz|en)\/?/, '').replace(/\/$/, '');
  const route = (Object.keys(slugs) as RouteKey[]).find(
    (key) => slugs[key][currentLanguage] === currentSlug
  );

  return routePath(targetLanguage, route ?? 'home');
}
