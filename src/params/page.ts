import type { ParamMatcher } from '@sveltejs/kit';

const validSlugs = new Set([
  'menu',
  'stala-nabidka',
  'food-menu',
  'napoje',
  'drinks',
  // Degustation subpage is not built -- see the note in
  // src/routes/[lang=lang]/[page=page]/+page.ts.
  // 'degustacni-menu',
  // 'degustation-menu',
  'navsteva',
  'visit',
  'o-nas',
  'about',
  'kontakt',
  'contact'
]);

export const match: ParamMatcher = (param) => validSlugs.has(param);
