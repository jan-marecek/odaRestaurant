import type { ParamMatcher } from '@sveltejs/kit';

const validSlugs = new Set([
  'menu',
  'o-nas',
  'about',
  'kontakt',
  'contact',
  'rezervace',
  'reservations'
]);

export const match: ParamMatcher = (param) => validSlugs.has(param);
