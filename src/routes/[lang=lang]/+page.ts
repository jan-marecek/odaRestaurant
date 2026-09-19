import { languages } from '$lib/i18n/config';
import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => languages.map((lang) => ({ lang }));
