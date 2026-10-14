import type { Language } from "$lib/i18n/config";
import type { RouteKey } from "$lib/i18n/routes";

type PageContent = {
  title: string;
  intro: string;
  metaDescription?: string;
  body?: string[];
  reservationInfo?: {
    sections: {
      title?: string;
      link?: RouteKey;
      reservationLink?: boolean;
      text?: string;
      paragraphs?: string[];
      email?: string;
      suffix?: string;
    }[];
    closing?: string;
  };
};

type Translation = {
  navigation: Record<RouteKey, string>;
  pages: Record<RouteKey, PageContent>;
  common: {
    language: string;
    address: string;
    openingHours: string;
    closedDays: string;
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
      home: "Domů",
      menu: "Menu",
      food: "Stálá nabídka",
      drinks: "Nápoje",
      tasting: "Degustační menu",
      visit: "Návštěva",
      about: "O nás",
      contact: "Kontakt",
    },
    pages: {
      home: {
        title: "ODA Restaurant",
        intro: "Místo pro dobré jídlo a společné chvíle.",
      },
      menu: {
        title: "Menu",
        intro: "Prohlédněte si naši stálou nabídku jídel a nápojů.",
      },
      food: {
        title: "Stálá nabídka",
        intro: "Aktuální nabídka jídel ODA Restaurant.",
      },
      drinks: {
        title: "Nápoje",
        intro: "Aktuální nabídka nápojů ODA Restaurant.",
      },
      tasting: {
        title: "Degustační menu",
        intro: "Ukázka degustačního menu v Ōdě.",
      },
      visit: {
        title: "Návštěva",
        intro:
          "Ōda je moderní restaurace a gastrobar v Praze 3 na Floře. Najdete nás na adrese Chrudimská 5, v pěší vzdálenosti od stanice metra a tramvaje Flora.",
        metaDescription:
          "Ōda – modern Czech restaurant & gastrobar in Prague. Czech ingredients, tasting menus and great drinks.",
        reservationInfo: {
          sections: [
            {
              paragraphs: [
                "Ōda je moderní restaurace a gastrobar v Praze 3 na Floře. Najdete nás na adrese Chrudimská 5, v pěší vzdálenosti od stanice metra a tramvaje Flora.",
                "Přijít můžete na naše krátké nebo dlouhé degustační menu, na jednotlivá jídla à la carte nebo jen na drink a několik menších jídel. Nabízíme také vinné, koktejlové a nealkoholické párování.",
              ],
            },
            {
              title: "Rezervace",
              reservationLink: true,
              paragraphs: [
                "Doporučujeme rezervovat stůl předem, zejména pokud máte zájem o degustační menu.",
                "Degustační menu trvá přibližně 2,5 hodiny. Při návštěvě à la carte počítejte přibližně se 2 hodinami.",
                "Pro skupiny 7 a více osob nás prosím kontaktujte předem e-mailem nebo telefonicky.",
                "Konkrétní stůl není možné vždy garantovat. Podle aktuální obsazenosti můžete sedět u klasického stolu, u baru nebo u společného stolu. Pokud máte preferenci, napište nám ji při rezervaci a pokusíme se jí vyhovět.",
              ],
            },
            {
              title: "Degustační menu",
              link: "tasting",
              paragraphs: [
                "V Ōdě nabízíme krátké a dlouhé tasting menu, postavené na českých a sezónních surovinách a moderních kulinářských technikách.",
                "Menu doplňujeme o několik možností párování: vinné párování, koktejlové párování, nealkoholické párování.",
                "Jednotlivé druhy párování je možné také kombinovat podle vašich preferencí.",
              ],
            },
            {
              title: "Děti",
              text: "Pro rodiny s dětmi doporučujeme především návštěvu v odpoledních a dřívějších večerních hodinách.",
            },
            {
              title: "Alergie a dietní omezení",
              text: "Máte-li alergii, intoleranci nebo jiné dietní omezení, informujte nás prosím už při rezervaci. U některých omezení můžeme menu upravit, jiné nemusí být vzhledem k jeho charakteru možné.",
            },
            {
              title: "Dress code",
              text: "Nemáme žádný formální dress code. Ōda je uvolněná restaurace a chceme, abyste se u nás cítili dobře.",
            },
          ],
          closing: "Těšíme se na vás.",
        },
      },
      about: {
        title: "O nás",
        intro:
          "Ōda je moderní restaurace a gastrobar v Praze 3 na Floře, kde se potkává česká kuchyně, světové kulinářské techniky a skvělé pití. Vaříme z českých surovin, pracujeme s jejich sezónností a známé ingredience používáme způsobem, který možná nečekáte.",
        body: [
          "Ōda je moderní restaurace a gastrobar v Praze 3 na Floře, kde se potkává česká kuchyně, světové kulinářské techniky a skvělé pití. Vaříme z českých surovin, pracujeme s jejich sezónností a známé ingredience používáme způsobem, který možná nečekáte.",
          "Naše kuchyně je postavená na českých surovinách a současných technikách. Fermentujeme, nakládáme, udíme, sušíme, zrajeme a hledáme nové způsoby, jak z lokálních surovin dostat maximum chuti. Pracujeme také s koji, vyrábíme vlastní miso, shio-koji a garumy z českých surovin a fermentaci využíváme jako jeden z hlavních nástrojů pro budování chuti. Inspiraci čerpáme z kuchyní a restaurací z celého světa, ale výsledkem je jídlo, které má svůj vlastní český charakter.",
          "Ōda není klasická fine dining restaurace ani tradiční česká hospoda. Je to uvolněné místo, kde si můžete dát několik menších jídel a drink, stejně jako si užít delší degustační menu. Nabízíme krátké i dlouhé tasting menu a à la carte jídla, která můžete kombinovat s vínem, koktejly, pivem nebo nealkoholickým párováním.",
          "Ōdu vlastní a provozuje manželský pár Ondřej Pavlovský a Tereza Žižková. Ondřej prošel kuchyněmi v Londýně, Torontu, Tokiu a Skandinávii, včetně restaurací oceněných michelinskými hvězdami. Studoval Le Cordon Bleu London a působil také v pražském Fieldu. Tereza vystudovala hotelovou školu v Luzernu, pracovala v londýnských barech, restauraci Field a švédském Ängu a absolvovala stáže například v Gaggan v Bangkoku a Hiša Franko ve Slovinsku.",
          "Po zkušenostech z Česka i zahraničí jsme vytvořili Ōdu jako místo, kde chceme dělat kuchyni, která nás samotné baví – bez zbytečného pozlátka, přehnané formálnosti a pevně daných pravidel.",
          "Skvělé jídlo, skvělé pití a české suroviny v moderním pojetí. To je Ōda.",
        ],
      },
      contact: { title: "Kontakt", intro: "Najdete nás na adrese níže." },
    },
    common: {
      language: "Jazyk",
      address: "Adresa",
      openingHours: "Otevírací doba",
      closedDays: "Ne–Po zavřeno",
      menuComingSoon: "Položky menu budou doplněny.",
      foodMenu: "Stálá nabídka",
      drinks: "Nápoje",
      reservation: "rezervace",
      vouchers: "Dárkové vouchery",
      menuOpen: "menu",
      menuClose: "zavřít",
    },
  },
  en: {
    navigation: {
      home: "Home",
      menu: "Menu",
      food: "Food menu",
      drinks: "Drinks",
      tasting: "Degustation menu",
      visit: "Visit",
      about: "About us",
      contact: "Contact",
    },
    pages: {
      home: {
        title: "ODA Restaurant",
        intro: "A place for good food and time together.",
      },
      menu: {
        title: "Menu",
        intro: "Explore our current food and drinks menus.",
      },
      food: {
        title: "Food menu",
        intro: "The current food menu at ODA Restaurant.",
      },
      drinks: {
        title: "Drinks",
        intro: "The current drinks menu at ODA Restaurant.",
      },
      tasting: {
        title: "Degustation menu",
        intro: "A sample of Ōda's tasting menu.",
      },
      visit: {
        title: "Visit",
        intro:
          "Ōda is a modern restaurant and gastrobar in Prague 3, near Flora. You can find us at Chrudimská 5, within walking distance of the Flora metro and tram stop.",
        metaDescription:
          "Ōda – modern Czech restaurant & gastrobar in Prague. Czech ingredients, tasting menus and great drinks.",
        reservationInfo: {
          sections: [
            {
              paragraphs: [
                "Ōda is a modern restaurant and gastrobar in Prague 3, near Flora. You can find us at Chrudimská 5, within walking distance of the Flora metro and tram stop.",
                "You can come for our short or long tasting menu, choose individual à la carte dishes, or simply stop by for a drink and a few smaller plates. We also offer wine, cocktail and non-alcoholic pairings.",
              ],
            },
            {
              title: "Reservations",
              reservationLink: true,
              paragraphs: [
                "We recommend booking a table in advance, especially if you are interested in the tasting menu.",
                "The tasting menu takes approximately 2.5 hours. For an à la carte visit, please allow around 2 hours.",
                "For groups of 7 or more, please contact us in advance by email or phone.",
                "We cannot always guarantee a specific table. Depending on current availability, you may be seated at a regular table, at the bar, or at a communal table. If you have a preference, please mention it when making your reservation and we will do our best to accommodate it.",
              ],
            },
            {
              title: "Tasting menu",
              link: "tasting",
              paragraphs: [
                "At Ōda, we offer short and long tasting menus, built around Czech and seasonal ingredients and modern culinary techniques.",
                "The menu can be complemented by several pairing options: wine pairing, cocktail pairing, non-alcoholic pairing.",
                "The different types of pairings can also be combined according to your preferences.",
              ],
            },
            {
              title: "Children",
              text: "For families with children, we recommend visiting mainly in the afternoon or earlier in the evening.",
            },
            {
              title: "Allergies and dietary restrictions",
              text: "If you have an allergy, intolerance or any other dietary restriction, please let us know when making your reservation. We may be able to adapt the menu for some restrictions, while others may not be possible due to the nature of the menu.",
            },
            {
              title: "Dress code",
              text: "We do not have a formal dress code. Ōda is a relaxed restaurant and we want you to feel comfortable here.",
            },
          ],
          closing: "We look forward to welcoming you.",
        },
      },
      about: {
        title: "About us",
        intro:
          "Ōda is a modern restaurant and gastrobar in Prague 3, near Flora, where Czech cuisine meets global culinary techniques and great drinks. We cook with Czech ingredients, follow their seasonality, and use familiar ingredients in ways you may not expect.",
        body: [
          "Ōda is a modern restaurant and gastrobar in Prague 3, near Flora, where Czech cuisine meets global culinary techniques and great drinks. We cook with Czech ingredients, follow their seasonality, and use familiar ingredients in ways you may not expect.",
          "Our kitchen is built around Czech ingredients and contemporary techniques. We ferment, pickle, smoke, dry, age and look for new ways to get the most flavour out of local produce. We also work with koji, make our own miso, shio-koji and garums from Czech ingredients, and use fermentation as one of our main tools for building flavour. We draw inspiration from cuisines and restaurants around the world, but the result is food with its own distinctly Czech character.",
          "Ōda is neither a classic fine dining restaurant nor a traditional Czech pub. It is a relaxed place where you can enjoy a few smaller dishes and a drink, or settle in for a longer tasting menu. We offer short and long tasting menus as well as à la carte dishes, which you can pair with wine, cocktails, beer or non-alcoholic pairings.",
          "Ōda is owned and run by married couple Ondřej Pavlovský and Tereza Žižková. Ondřej has worked in kitchens in London, Toronto, Tokyo and Scandinavia, including Michelin-starred restaurants. He studied at Le Cordon Bleu London and also worked at Field in Prague. Tereza graduated from a hospitality school in Lucerne, worked in London bars, at Field in Prague and at Äng in Sweden, and completed stages at restaurants including Gaggan in Bangkok and Hiša Franko in Slovenia.",
          "After gaining experience in the Czech Republic and abroad, we created Ōda as a place where we can make the kind of food we genuinely enjoy — without unnecessary pretension, excessive formality or rigid rules.",
          "Great food, great drinks and Czech ingredients in a modern interpretation. That is Ōda.",
        ],
      },
      contact: {
        title: "Contact",
        intro: "You can find us at the address below.",
      },
    },
    common: {
      language: "Language",
      address: "Address",
      openingHours: "Opening hours",
      closedDays: "Sunday–Monday: closed",
      menuComingSoon: "Menu items will be added soon.",
      foodMenu: "Food menu",
      drinks: "Drinks",
      reservation: "reservation",
      vouchers: "Gift vouchers",
      menuOpen: "menu",
      menuClose: "close",
    },
  },
};
