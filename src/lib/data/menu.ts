import type { Language } from '$lib/i18n/config';

export type MenuItem = {
  name: string;
  description?: string;
  price?: number;
};

export type DrinkSection = {
  title: string;
  price?: number;
  note?: string;
  items?: MenuItem[];
};

type MenuContent = {
  food: {
    title: string;
    items: MenuItem[];
    tastingMenu: MenuItem;
  };
  drinks: {
    title: string;
    columns: [DrinkSection[], DrinkSection[]];
  };
};

export const menuContent: Record<Language, MenuContent> = {
  cz: {
    food: {
      title: 'Jídlo',
      items: [
        { name: 'Chleba s Máslem', description: 'Mladé chlebové miso, Česnek', price: 140 },
        { name: 'Nakládaná zelenina', description: 'Kořenovka, Hořčice, Křen', price: 125 },
        { name: 'Salát z Řepy', description: 'Řepa, Celer, Smetana, Kopr', price: 190 },
        { name: '“Rybí Pomazánka”', description: 'Marinovaný pstruh, Chlebový krekr', price: 280 },
        { name: 'Brambora', description: 'Farmářský sýr, Blaťácké zlato', price: 215 },
        { name: 'Vepřové na Mrkvi', description: 'Vepřový lalok, Mrkvový salát, Pesto', price: 285 },
        { name: 'Zelná Palačinka', description: 'Zakysaná smetana, Zelná omáčka, Topinambur', price: 220 },
        { name: 'Kuřecí jablko', description: 'Holandská omáčka, Kuřecí škvarky', price: 275 },
        { name: 'Kachní Kaldoun', description: 'Maso, Droby, Bramborové nudle, Bylinky', price: 390 },
        { name: 'Jeseter', description: 'Čočka, Miso, Kvašák', price: 430 },
        { name: 'Hovězí steak', description: 'Křen, Špenát', price: 440 },
        { name: 'Hruška', price: 190 },
        { name: 'Vlašský ořech, Mléko, Med', price: 215 }
      ],
      tastingMenu: {
        name: 'Hostina/Tasting Menu',
        description: '(informace o párování vám poskytne náš tým)',
        price: 2000
      }
    },
    drinks: {
      title: 'Nápoje',
      columns: [
        [
          {
            title: 'Nealko',
            items: [
              { name: 'Filtrovaná voda / soda', price: 39 },
              { name: 'Šípková kombucha JZT', price: 95 },
              { name: 'Čepovaný ledový čaj', price: 95 },
              { name: 'Oda Tonic', price: 85 }
            ]
          },
          { title: 'Čepované Pivo', price: 89 },
          {
            title: 'Víno po skle',
            note: 'S aktuální nabídkou rozlévaných vín vám poradí náš tým'
          },
          {
            title: 'Nealkoholické Koktejly',
            items: [
              { name: 'KSN', description: 'Martini Vibrante, Mandarinka, Limeta, Foamer', price: 195 },
              { name: 'Just Friends on the Beach', description: 'Rooibos, Ibišek, Chilli, Citrusová soda', price: 199 }
            ]
          },
          {
            title: 'Alkoholické Koktejly',
            items: [
              { name: 'Aperitiv' },
              { name: 'Teoreticky Americano', description: 'Sweet vermouth, Bitter, Káva, Šípková kombucha', price: 215 },
              { name: 'Fake Olive Dirty Martini', description: 'Gin, Vermouth, “České olivy”', price: 230 },
              { name: '321 Negroni', description: 'Vermouth blend, Gin, Campari', price: 235 }
            ]
          }
        ],
        [
          {
            title: 'Highball / Lowball',
            items: [
              { name: 'Oda GTA', description: 'Gin, Tonic, Amaro', price: 195 },
              { name: 'MMA', description: 'Mezcal, Mandarinka, Aperol, Soda', price: 235 },
              { name: 'Zázvorová Věc a.k.a. Zbytečně Drahý Penicilin', description: 'Whisky, Oloroso Sherry, Medový likér, Zázvor, Uzený – fermentovaný med', price: 245 },
              { name: 'Mrk Mrk Smrk Mrk', description: 'Aquavit, Sherry fino, Mrkvový cordial, Kmín, Smrkový olej', price: 235 },
              { name: 'Orange is the New Black', description: 'Tequila blanco, Fernet Branca, Dýňový ocet, Dýňové miso, Chilli', price: 255 },
              { name: 'Fat Bitch', description: 'Vodka, Milky Oolong, Super lime, Soda', price: 225 },
              { name: 'Marjánka Daiquiri', description: 'Rum, Majoránkový cukr, Limeta', price: 240 },
              { name: 'Jakoby Whiskey Sour', description: 'Burbon, Meruňka, Citron, Heřmánek, Bílek', price: 255 },
              { name: 'Taylor “SWIFT” Precedens', description: 'Apple Jack, Vermouth, Skořice, Tiki bitters, Crémant de Jura', price: 245 }
            ]
          },
          {
            title: 'Na konec',
            items: [
              { name: 'Oda Latte', description: 'Reposado, Kávový likér, mandlová Horchata', price: 220 }
            ]
          }
        ]
      ]
    }
  },
  en: {
    food: {
      title: 'Food',
      items: [
        { name: 'Bread and Butter', description: 'Young bread miso, Garlic', price: 140 },
        { name: 'Pickles', description: 'Root vegetable, Mustard, Horseradish', price: 125 },
        { name: 'Beet salad', description: 'Celery, Cream', price: 190 },
        { name: '“Trout spread”', description: 'Marinated trout, Bread cracker', price: 280 },
        { name: 'Potato', description: 'Farmer’s cheese, Blaťácké zlato', price: 215 },
        { name: 'Pork and carrots', description: 'Pork jowl, Carrot salad, Pesto', price: 285 },
        { name: 'Cabbage Pancake', description: 'Sour cream, Cabbage sauce, Jerusalem artichoke', price: 220 },
        { name: 'Chicken Apple', description: 'Hollandaise sauce, Chicken cracklings', price: 275 },
        { name: 'Duck stew', description: 'Meat, Offal, Potato Noodles, Herbs', price: 390 },
        { name: 'Sturgeon', description: 'Lentils, Miso, Fermented cucumber', price: 430 },
        { name: 'Beef steak', description: 'Horseradish, Spinach', price: 440 },
        { name: 'Pear', price: 190 },
        { name: 'Walnut, Milk, Honey', price: 215 }
      ],
      tastingMenu: {
        name: 'Tasting Menu',
        description: '(information on pairings will be provided by our team)',
        price: 2000
      }
    },
    drinks: {
      title: 'Drinks',
      columns: [
        [
          {
            title: 'Soft Drinks',
            items: [
              { name: 'Filtered Water / Soda', price: 39 },
              { name: 'Rosehip Kombucha JZT', price: 95 },
              { name: 'Draft iced tea', price: 95 },
              { name: 'Oda Tonic', price: 85 }
            ]
          },
          { title: 'Draft Beer', price: 89 },
          {
            title: 'Wine by the Glass',
            note: 'Information about today’s wines by the glass is provided by our team'
          },
          {
            title: 'Alcohol-free Cocktails',
            items: [
              { name: 'KSN', description: 'Martini Vibrante, Mandarin, Lime, Foamer', price: 195 },
              { name: 'Just Friends on the Beach', description: 'Rooibos, Hibiscus, Chili, Citrus soda', price: 199 }
            ]
          },
          {
            title: 'Alcoholic Cocktails',
            items: [
              { name: 'Aperitif' },
              { name: 'Theoretically Americano', description: 'Sweet vermouth, Bitter, Coffee, Rosehip kombucha', price: 215 },
              { name: 'Fake Olive Dirty Martiny', description: 'Gin, Vermouth, “Czech olives”', price: 230 },
              { name: '321 Negroni', description: 'Vermouth blend, Gin, Campari', price: 235 }
            ]
          }
        ],
        [
          {
            title: 'Highball / Lowball',
            items: [
              { name: 'Oda GTA', description: 'Gin, Tonic, Amaro', price: 195 },
              { name: 'MMA', description: 'Mezcal, Mandarin, Aperol, Soda', price: 235 },
              { name: 'Ginger Thing a.k.a. the Unnecessary Expensive Penicillin', description: 'Whiskey, Honey liqueur, Ginger, Smoked – fermented honey', price: 245 },
              { name: 'Mrk Mrk Smrk Mrk', description: 'Aquavit, Martini Ambrato, Sherry fino, Carrot, Pepper, Spruce oil', price: 235 },
              { name: 'Orange is the New Black', description: 'Pisco, Black mandarin, Lillet blanc, Pumpkin vinegar, Sea buckthorn, Pumpkin miso', price: 255 },
              { name: 'Fat Bitch', description: 'Vodka, Milky Oolong, Super lime, Soda', price: 225 },
              { name: 'Marjoram Daiquiri', description: 'Rum, Marjoram sugar, Lime', price: 240 },
              { name: 'Like Whiskey Sour', description: 'Bourbon, Apricot, Lemon, Chamomile, Egg white', price: 255 },
              { name: 'Taylor “SWIFT” Precedens', description: 'Applejack, Vermouth, Cinnamon, Tiki bitters, Crémant de Jura', price: 245 }
            ]
          },
          {
            title: 'To Finish',
            items: [
              { name: 'Oda Latte', description: 'Reposado, Coffee liqueur, Almond Horchata', price: 220 }
            ]
          }
        ]
      ]
    }
  }
};
