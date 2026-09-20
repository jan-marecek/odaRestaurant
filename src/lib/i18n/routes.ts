import { base } from '$app/paths';
import type { Language } from './config';

export type RouteKey = 'home' | 'menu' | 'food' | 'drinks' | 'about' | 'contact' | 'reservations';

const slugs: Record<RouteKey, Record<Language, string>> = {
  home: { cz: '', en: '' },
  menu: { cz: 'menu', en: 'menu' },
  food: { cz: 'stala-nabidka', en: 'food-menu' },
  drinks: { cz: 'napoje', en: 'drinks' },
  about: { cz: 'o-nas', en: 'about' },
  contact: { cz: 'kontakt', en: 'contact' },
  reservations: { cz: 'rezervace', en: 'reservations' }
};

export function routePath(language: Language, route: RouteKey): string {
  const slug = slugs[route][language];
  return `${base}/${language}${slug ? `/${slug}` : ''}/`;
}

export function translatedPath(pathname: string, targetLanguage: Language): string {
  const localPathname = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  const currentLanguage: Language = localPathname.startsWith('/en') ? 'en' : 'cz';
  const currentSlug = localPathname.replace(/^\/(cz|en)\/?/, '').replace(/\/$/, '');
  const route = (Object.keys(slugs) as RouteKey[]).find(
    (key) => slugs[key][currentLanguage] === currentSlug
  );

  return routePath(targetLanguage, route ?? 'home');
}
