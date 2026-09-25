import { error } from '@sveltejs/kit';
import { languages, type Language } from '$lib/i18n/config';
import { routePath, type RouteKey } from '$lib/i18n/routes';
import type { EntryGenerator, PageLoad } from './$types';

const contentRoutes: RouteKey[] = ['menu', 'food', 'drinks', 'visit', 'about', 'contact', 'reservations'];

export const entries: EntryGenerator = () =>
  languages.flatMap((lang) =>
    contentRoutes.map((route) => ({
      lang,
      page: routePath(lang, route).split('/').filter(Boolean).at(-1) as string
    }))
  );

export const load: PageLoad = ({ params }) => {
  const lang = params.lang as Language;
  const route = contentRoutes.find((candidate) => routePath(lang, candidate).endsWith(`/${params.page}/`));

  if (!route) {
    error(404, 'Page not found');
  }

  return { route };
};
