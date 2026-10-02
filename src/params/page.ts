import type { ParamMatcher } from '@sveltejs/kit';

const validSlugs = new Set([
  'menu',
  'stala-nabidka',
  'food-menu',
  'napoje',
  'drinks',
  'degustacni-menu',
  'degustation-menu',
  'navsteva',
  'visit',
  'o-nas',
  'about',
  'kontakt',
  'contact',
  'rezervace',
  'reservations'
]);

export const match: ParamMatcher = (param) => validSlugs.has(param);
