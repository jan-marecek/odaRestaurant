import type { Language } from '$lib/i18n/config';

export type MenuItem = {
  name: string;
  description?: string;
  price?: number;
  tight?: boolean;
};

export type DrinkSection = {
  title?: string;
  price?: number;
  note?: string;
  items?: MenuItem[];
};

type MenuContent = {
  food: {
    title: string;
    items: MenuItem[];
    tastingMenus: MenuItem[];
  };
  drinks: {
    title: string;
    columns: [DrinkSection[], DrinkSection[]];
    featured: {
      title: string;
      columns: [MenuItem[], MenuItem[]];
    };
  };
  tasting: {
    title: string;
    courses: MenuItem[][];
  };
};

export const menuContent: Record<Language, MenuContent> = {
  cz: {
    food: {
      title: 'Jídlo',
      items: [
        { name: 'Chleba', description: 'Hrášek, Škraloup', price: 165 },
        { name: 'Rajčatový salát', price: 235 },
        { name: 'Ryb - íz', description: 'Siven, Rybíz, Letní byliny', price: 380 },
        { name: 'Celý květák', description: 'Žloutek, Falešný řízek', price: 240 },
        { name: 'Grilovaná cuketa', description: 'Lískový ořech, Koření', price: 215 },
        { name: 'Broskev bez kuřete', description: 'Blaťácké zlato, Kuřecí kůže', price: 285 },
        { name: 'Palačinka s kukuřicí', description: 'Máslo, Popcorn miso', price: 240 },
        { name: 'Úhoř', description: 'Švestka, Jikry', price: 395 },
        { name: 'Vepřový párek', description: 'Fenykl, Hořčice', price: 295 },
        { name: 'Vietnamský špenát', description: 'Maggi, Šalotka, Česnek', price: 165 },
        { name: 'Hovězí na dvakrát', description: 'Morek, Garum', price: 450 },
        { name: 'Angrešt', price: 185 },
        { name: 'Knedlíkové ovoce', description: 'Tvaroh, Hnědé máslo', price: 285 }
      ],
      tastingMenus: [
        { name: 'Menší Hostina', price: 1800 },
        { name: 'Větší Hostina', description: '(informace o párování vám poskytne náš tým)', price: 2250 }
      ]
    },
    drinks: {
      title: 'Nápoje',
      columns: [
        [
          {
            title: 'Nealko',
            items: [
              { name: 'Filtrovaná voda / soda', price: 39 },
              { name: 'Kombucha JZT', price: 95, tight: true },
              { name: 'Jahodová Cream Soda', price: 105, tight: true },
              { name: 'Vinea z červených hroznů', price: 85 }
            ]
          },
          { title: 'Čepované Pivo', price: 89 }
        ],
        [
          {
            title: 'Nealkoholické Koktejly',
            items: [
              { name: 'Straight Edge X', description: 'Ne - aperitivo, Decaf, Višně', price: 205 },
              {
                name: 'The Worst Cocktail Ever a.k.a. Malý Slaný Drahý',
                description: 'Nealko Agave destilát, Lakto-ferment jahody, Calpico',
                price: 215
              },
              { name: 'Zdrženlivý nestřik', description: 'Ibiškový nealko spirit, Vinea, Soda', price: 195 }
            ]
          }
        ]
      ],
      featured: {
        title: 'Alkoholické Koktejly',
        columns: [
          [
            { name: 'InCidre Martini', description: 'Calvados, Pommeau, Cidre oxymel', price: 235 },
            {
              name: 'Teoreticky Americano #3',
              description: 'Bitter, Sweet Vermouth, Amaro, Kombucha',
              price: 225
            },
            { name: 'Letní Negroni', description: 'Vermouth blend, Gin blend, Rubby Pampelle', price: 235 },
            {
              name: 'Cherry Sherry Sangria',
              description: 'Sherry blend, Cherry hiring, Višňový shrub, Bobkový list',
              price: 235
            },
            { name: 'N - Zoni', description: 'Gin, Campari, Hroznové víno, Šalvěj', price: 245 },
            {
              name: 'Tea Punch Malina',
              description: 'Agricole, Aperol, Amontillado, Malina, Růžový pepř, Čaj z malinových listů',
              price: 240
            }
          ],
          [
            {
              name: 'Strawberry Cream Paloma',
              description: 'Tequila blanco & cristalino, Champagne cordial, Jahody, Calpico',
              price: 255
            },
            {
              name: 'Vini Bitch',
              description: 'Vodka, Lillet rosé, Vinea z hroznového vína, vinný ocet',
              price: 235
            },
            {
              name: 'Jakoby Whiskey Sour',
              description: 'Burbon, Meruňka, Citron, Heřmánek, Bílek',
              price: 255
            },
            { name: 'OrDinAry Maid', description: 'Whisky, Bezinka, Okurka, Máta', price: 245 },
            {
              name: 'ASAP',
              description: 'Pisco, Vermouth dry, Gran Moravia, Angrešt, Sherry fino, Verjus, Sýrový Garum',
              price: 245
            },
            {
              name: 'Téměř bezkofeinové Martini',
              description: 'Reposado Tequila, Cognac V.S., Kávový likér, Decaf, Ostružinová grenadina, Kakao',
              price: 245
            }
          ]
        ]
      }
    },
    tasting: {
      title: 'Degustační menu',
      courses: [
        [{ name: 'Ryb - íz', description: 'Siven, Rybíz, Letní byliny' }],
        [
          { name: 'Palačinka', description: 'Máslo, Popcorn miso' },
          { name: 'Rajčatový salát' }
        ],
        [{ name: 'Celý květák', description: 'Žloutek, Falešný řízek' }],
        [{ name: 'Broskev bez kuřete', description: 'Blaťácké zlato, Kuřecí kůže' }],
        [
          { name: 'Párek', description: 'Fenykl, Hořčice' },
          { name: 'Grilovaná cuketa', description: 'Lískový ořech, koření' }
        ],
        [
          { name: 'Chleba', description: 'Hrášek, Škraloup' },
          { name: 'Hovězí na dvakrát', description: 'Morek, Garum' },
          { name: 'Vietnamese spinach', description: 'Maggi, šalotka, česnek' }
        ],
        [{ name: 'Angrešt' }],
        [{ name: 'Knedlíkové ovoce', description: 'Tvaroh, hnědé máslo' }]
      ]
    }
  },
  en: {
    food: {
      title: 'Food',
      items: [
        { name: 'Bread', description: 'Green peas, Kaymak', price: 165 },
        { name: 'Tomato salad', price: 235 },
        { name: 'Arctic char', description: 'Red currant, Summer herbs', price: 380 },
        { name: 'Whole cauliflower', description: 'Egg yolk, Meatless schnitzel', price: 240 },
        { name: 'Grilled courgette', description: 'Hazelnut, Spices', price: 215 },
        { name: 'Chicken peach', description: 'Blaťácké zlato cheese, Chicken skin', price: 285 },
        { name: 'Corn pancake', description: 'Butter, Popcorn miso', price: 240 },
        { name: 'Eel', description: 'Plum, Fish roe', price: 395 },
        { name: 'Pork sausage', description: 'Fennel, Mustard', price: 295 },
        { name: 'Vietnamese spinach', description: 'Maggi, Shallots, Garlic', price: 165 },
        { name: 'Beef two ways', description: 'Bone marrow, Garum', price: 450 },
        { name: 'Gooseberry', price: 185 },
        { name: 'Summer fruits', description: 'Tvaroh, Brown butter', price: 285 }
      ],
      tastingMenus: [
        { name: 'Short tasting menu', price: 1800 },
        { name: 'Tasting Menu', description: '(information on pairings will be provided by our team)', price: 2250 }
      ]
    },
    drinks: {
      title: 'Drinks',
      columns: [
        [
          {
            title: 'Soft Drinks',
            items: [
              { name: 'Filtered Water / Soda', price: 39 },
              { name: 'Kombucha JZT', price: 95, tight: true },
              { name: 'Strawberry Cream Soda', price: 105, tight: true },
              { name: 'Red Grape Vinea', price: 85 }
            ]
          },
          { title: 'Draft Beer', price: 89 }
        ],
        [
          {
            title: 'Alcohol-free Cocktails',
            items: [
              { name: 'Straight Edge X', description: 'Non-aperitivo, Decaf, Cherries', price: 205 },
              {
                name: 'The Worst Cocktail Ever a.k.a. Small Salty Expensive',
                description: 'Non-alco Agave, Lacto-ferment Strawberries, Calpico',
                price: 215
              },
              { name: 'Sober Spritz', description: 'Ibischus non-alco spirit, Vinea, Soda', price: 195 }
            ]
          }
        ]
      ],
      featured: {
        title: 'Alcoholic Cocktails',
        columns: [
          [
            { name: 'InCidre Martini', description: 'Calvados, Pommeau, Cidre oxymel', price: 235 },
            {
              name: 'Theoretically Americano #3',
              description: 'Bitter, Sweet Vermouth, Amaro, Kombucha',
              price: 225
            },
            { name: 'Summer Negroni', description: 'Vermouth blend, Gin blend, Rubby Pampelle', price: 235 },
            {
              name: 'Cherry Sherry Sangria',
              description: 'Sherry blend, Cherry Heering, Cherry shrub, Bay leaves',
              price: 235
            },
            { name: 'N - Zoni', description: 'Gin, Campari, Grapes, Sage', price: 245 },
            {
              name: 'Tea Punch Raspberry',
              description: 'Agricole, Aperol, Amontillado, Raspberry, Pink peppercorn, Raspberry leaf tea',
              price: 240
            }
          ],
          [
            {
              name: 'Strawberry Cream Paloma',
              description: 'Tequila blanco & cristalino, Champagne cordial, Strawberries, Calpico',
              price: 255
            },
            {
              name: 'Vini Bitch',
              description: 'Vodka, Lillet rosé, Red grape Vinea, Wine vinegar',
              price: 235
            },
            {
              name: 'Like Whiskey Sour',
              description: 'Bourbon, Apricot, Lemon, Chamomile, Egg white',
              price: 255
            },
            { name: 'OrDinAry Maid', description: 'Whisky, Elderflower liqueur, Cucumber', price: 245 },
            {
              name: 'ASAP',
              description: 'Pisco, Vermouth dry, Gran Moravia, Goose berry, Sherry Fino, Verjus, Cheese Garum',
              price: 245
            },
            {
              name: 'Almost Decaf Martini',
              description: 'Reposado Tequila, Cognac V.S., Coffee Liqueur, Decaf, Blackberry grenadine, Cocoa',
              price: 245
            }
          ]
        ]
      }
    },
    tasting: {
      title: 'Degustation menu',
      courses: [
        [{ name: 'Arctic char', description: 'Res currant, Kaymak' }],
        [
          { name: 'Corn pancake', description: 'Butter, Popcorn miso' },
          { name: 'Tomato Salad' }
        ],
        [{ name: 'Whole Cauliflower', description: 'Egg yolk, Meatless schnitzel' }],
        [{ name: 'Chicken peach', description: 'Blaťácké zlato cheese, Chicken skin' }],
        [
          { name: 'Pork sausage', description: 'Fennel, Mustard' },
          { name: 'Grilled courgette', description: 'Hazelnut, Spices' }
        ],
        [
          { name: 'Bread', description: 'Green peas, Kaymak' },
          { name: 'Beef two ways', description: 'Bone marrow, Garum' },
          { name: 'Vietnamese spinach', description: 'Maggi, Schallots, Garlic' }
        ],
        [{ name: 'Goose berry' }],
        [{ name: 'Summer fruits', description: 'Tvaroh, Brown butter' }]
      ]
    }
  }
};
