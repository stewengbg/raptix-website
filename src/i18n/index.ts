import { sv } from './sv';
import { en } from './en';

export type Locale = 'sv' | 'en';

export const translations = { sv, en } as const;

export const SIGNUP_URL = 'https://reveal.raptix.se/?signup=1';
export const SIGNIN_URL = 'https://reveal.raptix.se';
export const PARTNERS_MAILTO = 'mailto:partners@raptix.se';

export function t(locale: Locale) {
  return translations[locale];
}

export function pathFor(locale: Locale, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'sv') return clean;
  return `/en${clean === '/' ? '' : clean}`;
}

export function localeFromUrl(pathname: string): Locale {
  return pathname.startsWith('/en') ? 'en' : 'sv';
}
