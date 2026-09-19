import type { Language } from '$lib/i18n/config';
import type { RouteKey } from '$lib/i18n/routes';

type PageContent = {
  title: string;
  intro: string;
};

type Translation = {
  navigation: Record<RouteKey, string>;
  pages: Record<RouteKey, PageContent>;
  common: {
    language: string;
    address: string;
    openingHours: string;
    menuComingSoon: string;
    foodMenu: string;
    drinks: string;
    reservation: string;
    vouchers: string;
    menuOpen: string;
    menuClose: string;
  };
};

export const content: Record<Language, Translation> = {
  cz: {
    navigation: {
      home: 'Domů',
      menu: 'Menu',
      about: 'O nás',
      contact: 'Kontakt',
      reservations: 'Rezervace'
    },
    pages: {
      home: { title: 'ODA Restaurant', intro: 'Místo pro dobré jídlo a společné chvíle.' },
      menu: { title: 'Menu', intro: 'Na aktuálním menu právě pracujeme.' },
      about: { title: 'O nás', intro: 'Příběh restaurace a týmu doplníme v další fázi.' },
      contact: { title: 'Kontakt', intro: 'Najdete nás na adrese níže.' },
      reservations: { title: 'Rezervace', intro: 'Rezervační formulář připravujeme.' }
    },
    common: {
      language: 'Jazyk',
      address: 'Adresa',
      openingHours: 'Otevírací doba',
      menuComingSoon: 'Položky menu budou doplněny.',
      foodMenu: 'Stálá nabídka',
      drinks: 'Nápoje',
      reservation: 'Rezervace',
      vouchers: 'Dárkové vouchery',
      menuOpen: 'Menu',
      menuClose: 'Zavřít'
    }
  },
  en: {
    navigation: {
      home: 'Home',
      menu: 'Menu',
      about: 'About us',
      contact: 'Contact',
      reservations: 'Reservations'
    },
    pages: {
      home: { title: 'ODA Restaurant', intro: 'A place for good food and time together.' },
      menu: { title: 'Menu', intro: 'We are currently preparing our menu.' },
      about: { title: 'About us', intro: 'The story of our restaurant and team will follow.' },
      contact: { title: 'Contact', intro: 'You can find us at the address below.' },
      reservations: { title: 'Reservations', intro: 'Our booking form is coming soon.' }
    },
    common: {
      language: 'Language',
      address: 'Address',
      openingHours: 'Opening hours',
      menuComingSoon: 'Menu items will be added soon.',
      foodMenu: 'Food menu',
      drinks: 'Drinks',
      reservation: 'Reservation',
      vouchers: 'Gift vouchers',
      menuOpen: 'Menu',
      menuClose: 'Close'
    }
  }
};
