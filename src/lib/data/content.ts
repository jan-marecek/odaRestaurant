import type { Language } from '$lib/i18n/config';
import type { RouteKey } from '$lib/i18n/routes';

type PageContent = {
  title: string;
  intro: string;
  body?: string[];
  reservationInfo?: {
    title: string;
    sections: {
      title: string;
      text: string;
      email?: string;
      suffix?: string;
    }[];
  };
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
      visit: 'Návštěva',
      about: 'O nás',
      contact: 'Kontakt',
      reservations: 'Rezervace'
    },
    pages: {
      home: { title: 'ODA Restaurant', intro: 'Místo pro dobré jídlo a společné chvíle.' },
      menu: { title: 'Menu', intro: 'Prohlédněte si naši stálou nabídku jídel a nápojů.' },
      food: { title: 'Stálá nabídka', intro: 'Aktuální nabídka jídel ODA Restaurant.' },
      drinks: { title: 'Nápoje', intro: 'Aktuální nabídka nápojů ODA Restaurant.' },
      visit: {
        title: 'Návštěva',
        intro: 'Kde nás najdete, kdy máme otevřeno a důležité informace k rezervaci.',
        reservationInfo: {
          title: 'Děkujeme za Vaši rezervaci!',
          sections: [
            {
              title: 'Délka rezervace',
              text: 'Vaše rezervace je standardně nastavena na 2,5 hodiny v případě degustačního menu, v ostatních případech na 2 hodiny. Pokud si přejete strávit u nás více či méně času, prosím uveďte to do poznámky.'
            },
            {
              title: 'Výběr stolů',
              text: 'V rámci online rezervace není možné vybrat konkrétní stůl. Může se stát, že budete usazeni také u baru nebo u sdíleného stolu. Obě sezení splňují standard našeho servisu a jsou plně vhodná pro oběd či večeři.'
            },
            {
              title: 'Skupiny 7 a více osob',
              text: 'Rezervace pro 7 a více osob je možná pouze po telefonu či přes e-mail ',
              email: 'info@odarestaurant.cz',
              suffix: '.'
            },
            {
              title: 'Děti',
              text: 'S ohledem na charakter našeho večerního servisu doporučujeme návštěvu naší restaurace s dětmi během oběda.'
            },
            {
              title: 'Domácí mazlíčci',
              text: 'Prosíme, nechte své zvířecí mazlíčky doma.'
            }
          ]
        }
      },
      about: {
        title: 'O nás',
        intro: 'Óda je moderní český gastrobar na Vinohradech v Praze.',
        body: [
          'Óda je nezávislý moderní český gastrobar na Vinohradech v Praze 3. Stavíme na sezónních lokálních surovinách, vlastní fermentaci a vaření na otevřeném ohni. Tradiční české chutě zpracováváme současnými technikami a propojujeme je se zkušenostmi, které jsme získali v kuchyních po celém světě. Nabízíme malé talíře ke sdílení i degustační menu Hostina.',
          'Za Ódou stojí Ondřej Pavlovský a Tereza Žižková. Společně vytvořili osobní a nezávislé místo, kde se kvalitní gastronomie potkává s uvolněnou atmosférou gastrobaru. K jídlu nabízíme česká i evropská vína, autorské koktejly a nealkoholické párování, protože jídlo a pití pro nás tvoří jeden společný zážitek.'
        ]
      },
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
      reservation: 'rezervace',
      vouchers: 'Dárkové vouchery',
      menuOpen: 'menu',
      menuClose: 'zavřít'
    }
  },
  en: {
    navigation: {
      home: 'Home',
      menu: 'Menu',
      food: 'Food menu',
      drinks: 'Drinks',
      visit: 'Visit',
      about: 'About us',
      contact: 'Contact',
      reservations: 'Reservations'
    },
    pages: {
      home: { title: 'ODA Restaurant', intro: 'A place for good food and time together.' },
      menu: { title: 'Menu', intro: 'Explore our current food and drinks menus.' },
      food: { title: 'Food menu', intro: 'The current food menu at ODA Restaurant.' },
      drinks: { title: 'Drinks', intro: 'The current drinks menu at ODA Restaurant.' },
      visit: {
        title: 'Visit',
        intro: 'Where to find us, when we are open and important information about reservations.',
        reservationInfo: {
          title: 'Thank you for your reservation!',
          sections: [
            {
              title: 'Reservation Duration',
              text: 'Your reservation is set for 2.5 hours when booking the tasting menu, and 2 hours for all other reservations. If you wish to spend more or less time with us, please note this in your reservation.'
            },
            {
              title: 'Table Selection',
              text: 'It is not possible to select a specific table when booking online. Please note that you may be seated at the bar or at a shared table. Both options meet our service standards and are fully suitable for lunch or dinner.'
            },
            {
              title: 'Groups of 7 or More Guests',
              text: 'Reservations for groups of 7 or more can only be made by phone or via email ',
              email: 'info@odarestaurant.cz',
              suffix: '.'
            },
            {
              title: 'Children',
              text: 'Due to the nature of our evening service, we recommend visiting our restaurant with children during lunchtime.'
            },
            {
              title: 'Pets',
              text: 'We kindly ask that you leave your pets at home.'
            }
          ]
        }
      },
      about: {
        title: 'About us',
        intro: 'Óda is a modern Czech gastrobar in Prague’s Vinohrady district.',
        body: [
          'Óda is an independent modern Czech gastrobar in Vinohrady, Prague 3. Our cooking is rooted in seasonal local ingredients, house fermentation and an open fire. We approach traditional Czech flavours with contemporary techniques and combine them with experience gathered in kitchens around the world. Guests can share individual plates or choose our Hostina tasting menu.',
          'Óda was founded by Ondřej Pavlovský and Tereza Žižková as a personal and independent place where ambitious cooking meets the relaxed atmosphere of a gastrobar. Alongside the food, we serve Czech and European wines, original cocktails and non-alcoholic pairings, treating food and drink as one complete experience.'
        ]
      },
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
      reservation: 'reservation',
      vouchers: 'Gift vouchers',
      menuOpen: 'menu',
      menuClose: 'close'
    }
  }
};
