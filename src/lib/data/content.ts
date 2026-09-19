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
      food: 'Stálá nabídka',
      drinks: 'Nápoje',
      about: 'O nás',
      contact: 'Kontakt',
      reservations: 'Rezervace'
    },
    pages: {
      home: { title: 'ODA Restaurant', intro: 'Místo pro dobré jídlo a společné chvíle.' },
      menu: { title: 'Menu', intro: 'Prohlédněte si naši stálou nabídku jídel a nápojů.' },
      food: { title: 'Stálá nabídka', intro: 'Aktuální nabídka jídel ODA Restaurant.' },
      drinks: { title: 'Nápoje', intro: 'Aktuální nabídka nápojů ODA Restaurant.' },
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
      food: 'Food menu',
      drinks: 'Drinks',
      about: 'About us',
      contact: 'Contact',
      reservations: 'Reservations'
    },
    pages: {
      home: { title: 'ODA Restaurant', intro: 'A place for good food and time together.' },
      menu: { title: 'Menu', intro: 'Explore our current food and drinks menus.' },
      food: { title: 'Food menu', intro: 'The current food menu at ODA Restaurant.' },
      drinks: { title: 'Drinks', intro: 'The current drinks menu at ODA Restaurant.' },
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
