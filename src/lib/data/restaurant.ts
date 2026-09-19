import type { Language } from '$lib/i18n/config';

export type LocalizedText = Record<Language, string>;

export type OpeningHours = {
  days: LocalizedText;
  opens: string;
  closes: string;
};

export type MenuItem = {
  id: string;
  name: LocalizedText;
  description?: LocalizedText;
  price: number;
  currency: 'CZK';
  allergens?: number[];
  tags?: string[];
};

export type MenuCategory = {
  id: string;
  name: LocalizedText;
  items: MenuItem[];
};

export type Restaurant = {
  name: string;
  legalName?: string;
  description: LocalizedText;
  email?: string;
  phone: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    countryCode: 'CZ';
  };
  coordinates?: { latitude: number; longitude: number };
  openingHours: OpeningHours[];
  priceRange: string;
  currenciesAccepted: 'CZK';
  socialLinks: string[];
  reservationUrl: string;
  voucherUrl: string;
  menuDocuments: {
    food: string;
    drinks: string;
  };
  menu: MenuCategory[];
};

// Jediný zdroj pravdy pro obsah webu a pozdější Restaurant JSON-LD.
// Kontaktní údaje a menu nahraďte potvrzenými daty restaurace.
export const restaurant: Restaurant = {
  name: 'ODA Restaurant',
  description: {
    cz: 'Místo pro dobré jídlo a společné chvíle.',
    en: 'A place for good food and time together.'
  },
  phone: '+420 727 890 014',
  address: {
    street: 'Chrudimská 5',
    city: 'Praha 3',
    postalCode: '130 00',
    countryCode: 'CZ'
  },
  openingHours: [
    {
      days: { cz: 'St-Pa', en: 'We-Fr' },
      opens: '16:00',
      closes: '23:00'
    },
    {
      days: { cz: 'So', en: 'Sa' },
      opens: '12:00',
      closes: '23:00'
    }
  ],
  priceRange: '$$',
  currenciesAccepted: 'CZK',
  socialLinks: ['https://www.instagram.com/oda.prague/'],
  reservationUrl: 'https://app.tableo.com/r/-lqbXCq',
  voucherUrl: 'https://www.smartvoucher.cz/podnik/oda',
  menuDocuments: {
    food: '/menu/jidlo.pdf',
    drinks: '/menu/napoje.pdf'
  },
  menu: []
};
