import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const documentLanguage = /\/en(?:\/|$)/.test(event.url.pathname) ? 'en' : 'cs-CZ';

  return resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace('<html lang="cs">', `<html lang="${documentLanguage}">`)
  });
};
