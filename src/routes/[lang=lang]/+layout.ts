import { error } from '@sveltejs/kit';
import { isLanguage } from '$lib/i18n/config';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ params }) => {
  if (!isLanguage(params.lang)) {
    error(404, 'Language not found');
  }

  return { lang: params.lang };
};
