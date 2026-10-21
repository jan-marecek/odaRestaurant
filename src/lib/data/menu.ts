import type { Language } from "$lib/i18n/config";

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
      title: "Jídlo",
      items: [
        { name: "Chleba", description: "Rajčatové máslo", price: 180 },
        { name: "Mrkvový salát s jablkem", price: 175 },
        {
          name: "Candát",
          description: "Česnekové výhonky, Ocet z Fernetu Citrus, Libeček",
          price: 380,
        },
        {
          name: "Houby a Kroupy",
          description: "Černý česnek, Majoránka",
          price: 275,
        },
        {
          name: "Kanec a Šípek",
          description: "Tatarák z kýty, Grilovaný bok",
          price: 345,
        },
        {
          name: "Misozuke",
          description: "Dýně, Ocet z Becherovky, Dýňové miso",
          price: 165,
        },
        {
          name: "Rybí palačinka",
          description: "Siven, Jikry, Mlíčí",
          price: 295,
        },
        {
          name: "Kachna",
          description: "Droby, Stehno, Červené zelí",
          price: 365,
        },
        {
          name: "Podzimní grilovaná zelenina",
          description: "Jablečné kosho",
          price: 195,
        },
        {
          name: "Hovězí",
          description: "Jazyk, Loupaná plec, Křen",
          price: 430,
        },
        {
          name: "Žlutá řepa",
          description: "Svařák, Zakysaná smetana",
          price: 185,
        },
        { name: "Buchty", description: "Vlašský ořech, Vaječňák", price: 285 },
      ],
      tastingMenus: [
        { name: "Menší Hostina", price: 1800 },
        {
          name: "Větší Hostina",
          description: "(informace o párování vám poskytne náš tým)",
          price: 2250,
        },
      ],
    },
    drinks: {
      title: "Nápoje",
      columns: [
        [
          {
            title: "Nealko",
            items: [
              { name: "Filtrovaná voda / soda", price: 39 },
              { name: "Kombucha JZT", price: 105, tight: true },
              { name: "Kaštanová Cream Soda", price: 115, tight: true },
              { name: "Šípkový ledový čaj", price: 95 },
            ],
          },
          { title: "Čepované Pivo", price: 89 },
        ],
        [
          {
            title: "Nealkoholické Koktejly",
            items: [
              {
                name: "KSN #2",
                description: "Ne - aperitivo, Rakytník",
                price: 205,
              },
              {
                name: "Non - Negroni",
                description: "Náš nealko Vermouth, Byliny",
                price: 215,
              },
              {
                name: "Sober Paloma",
                description: "Nealko Agave destilát, Grapefruit, Sůl, Pepř",
                price: 220,
              },
            ],
          },
        ],
      ],
      featured: {
        title: "Alkoholické Koktejly",
        columns: [
          [
            {
              name: "Forest Mezcal",
              description: "Mezcal, Vermouth bianco, Sherry fino, Celer, Smrk",
              price: 235,
            },
            {
              name: "Cosmopolitan ?",
              description: "Vodka, Citronový olej, Aronie",
              price: 245,
            },
            {
              name: "Vin VIn High",
              description:
                "Pisco, Vermouth, Champagne cordial, Máta, Hroznové víno, Rozinky",
              price: 250,
            },
            {
              name: "Goodbye Summer Negroni",
              description:
                "Vermouth blend, Gin blend, Rubby Pampelle, Grapefruit",
              price: 245,
            },
            {
              name: "Homemade Lemonade",
              description: "Aquavit, Gin, Grapefruit³, Kmín",
              price: 255,
            },
            {
              name: "London Fog a.k.a. Autumn Highball",
              description: "Cognac, Máslo, Kaštan, Černý čaj s mlékem",
              price: 260,
            },
          ],
          [
            {
              name: "InCidre Martini",
              description: "Calvados, Pommeau, Cidre oxymel",
              price: 235,
            },
            {
              name: "Autumn Paper Plane",
              description: "Bourbon, Aperol, Amaro Nonino, Rakytník",
              price: 245,
            },
            {
              name: "Something instead of Whiskey Sour",
              description:
                "Whisky, Umeshu likér, Švestka ume, Hojicha, Mléčná pěna",
              price: 255,
            },
            {
              name: "Hazelnut Cappuccino",
              description:
                "Rum blend, Káva, Kořeněná mandle, Lískový orgeat, Miso",
              price: 240,
            },
            {
              name: "Amaro Tonic",
              description: "Amaro, Vodní kefír tonic",
              price: 235,
            },
            {
              name: "Charlie Chaplin Long Version",
              description: "Sloe Gin, Meruňkové brandy, Mandle, Šípek",
              price: 245,
            },
          ],
        ],
      },
    },
    tasting: {
      title: "Degustační menu",
      courses: [
        [{ name: "Ryb - íz", description: "Siven, Rybíz, Letní byliny" }],
        [
          { name: "Palačinka", description: "Máslo, Popcorn miso" },
          { name: "Rajčatový salát" },
        ],
        [{ name: "Celý květák", description: "Žloutek, Falešný řízek" }],
        [
          {
            name: "Broskev bez kuřete",
            description: "Blaťácké zlato, Kuřecí kůže",
          },
        ],
        [
          { name: "Párek", description: "Fenykl, Hořčice" },
          { name: "Grilovaná cuketa", description: "Lískový ořech, koření" },
        ],
        [
          { name: "Chleba", description: "Hrášek, Škraloup" },
          { name: "Hovězí na dvakrát", description: "Morek, Garum" },
          { name: "Vietnamese spinach", description: "Maggi, šalotka, česnek" },
        ],
        [{ name: "Angrešt" }],
        [{ name: "Knedlíkové ovoce", description: "Tvaroh, hnědé máslo" }],
      ],
    },
  },
  en: {
    food: {
      title: "Food",
      items: [
        { name: "Onion Bread", description: "Tomato butter", price: 180 },
        { name: "Carrot salad with apples", price: 175 },
        {
          name: "Pike Perch",
          description: "Garlic shoots, Fernet Citrus vinegar, Lovage",
          price: 380,
        },
        {
          name: "Mushrooms & Barley",
          description: "Black garlic, Marjoram",
          price: 275,
        },
        {
          name: "Wild Boar & Rosehip",
          description: "Tartare, Grilled belly",
          price: 345,
        },
        {
          name: "Misozuke",
          description: "Pumpkin, Becherovka vinegar, Pumpkin miso",
          price: 165,
        },
        {
          name: "Fish Pancake",
          description: "Arctic char, Roe, Milt",
          price: 295,
        },
        { name: "Duck", description: "Offal, Thigh, Red cabbage", price: 365 },
        {
          name: "Grilled Autumn Veggies",
          description: "Apple kosho",
          price: 195,
        },
        {
          name: "Beef",
          description: "Tongue, Flat iron, Horseradish",
          price: 430,
        },
        {
          name: "Yellow Beetroot",
          description: "Mulled wine, Sour cream",
          price: 185,
        },
        { name: "Buns", description: "Wallnut, Egg liquer", price: 285 },
      ],
      tastingMenus: [
        { name: "Short tasting menu", price: 1800 },
        {
          name: "Tasting Menu",
          description: "(information on pairings will be provided by our team)",
          price: 2250,
        },
      ],
    },
    drinks: {
      title: "Drinks",
      columns: [
        [
          {
            title: "Soft drinks",
            items: [
              { name: "Filtered Water / Soda", price: 39 },
              { name: "Kombucha JZT", price: 105, tight: true },
              { name: "Chestnut Cream Soda", price: 115, tight: true },
              { name: "Rosehip Ice Tea", price: 95 },
            ],
          },
          { title: "Draft Beer", price: 89 },
        ],
        [
          {
            title: "Alcohol-free Cocktails",
            items: [
              {
                name: "KSN #2",
                description: "Non-aperitivo, Seabuckthorn",
                price: 205,
              },
              {
                name: "Non - Negroni",
                description: "Our Non-alco Vermouth, Herbs",
                price: 215,
              },
              {
                name: "Sober Paloma",
                description: "Non-alco Agave spirit, Grapefruit, Salt, Pepper",
                price: 220,
              },
            ],
          },
        ],
      ],
      featured: {
        title: "Alcoholic Cocktails",
        columns: [
          [
            {
              name: "Forest Mezcal",
              description:
                "Mezcal, Vermouth bianco, Sherry fino, Celery, Spruce",
              price: 235,
            },
            {
              name: "Cosmopolitan ?",
              description: "Vodka, Lemon oil, Aronia",
              price: 245,
            },
            {
              name: "Vin VIn High",
              description:
                "Pisco, Vermouth, Champagne cordial, Mint, Grapes, Raisins",
              price: 250,
            },
            {
              name: "Goodbye Summer Negroni",
              description:
                "Vermouth blend, Gin blend, Rubby Pampelle, Grapefruit",
              price: 245,
            },
            {
              name: "Homemade Lemonade",
              description: "Aquavit, Gin, Grapefruit³, Carraway",
              price: 255,
            },
            {
              name: "London Fog a.k.a. Autumn Highball",
              description: "Cognac, Butter, Chestnut, Black tea with milk",
              price: 260,
            },
          ],
          [
            {
              name: "InCidre Martini",
              description: "Calvados, Pommeau, Cidre oxymel",
              price: 235,
            },
            {
              name: "Autumn Paper Plane",
              description: "Bourbon, Aperol, Amaro Nonino, Seabuckthorn",
              price: 245,
            },
            {
              name: "Something instead of Whiskey Sour",
              description:
                "Whiskey, Umeshu liquer, Ume plum, Hojicha, Milky foam",
              price: 255,
            },
            {
              name: "Hazelnut Cappuccino",
              description:
                "Rum blend, Coffee, Spicy almond, Hazelnut orgeat, Miso",
              price: 240,
            },
            {
              name: "Amaro Tonic",
              description: "Amaro, Water kefir tonic",
              price: 235,
            },
            {
              name: "Charlie Chaplin Long Version",
              description: "Sloe Gin, Apricot brandy, Almonds, Rosehip",
              price: 245,
            },
          ],
        ],
      },
    },
    tasting: {
      title: "Degustation menu",
      courses: [
        [{ name: "Arctic char", description: "Res currant, Kaymak" }],
        [
          { name: "Corn pancake", description: "Butter, Popcorn miso" },
          { name: "Tomato Salad" },
        ],
        [
          {
            name: "Whole Cauliflower",
            description: "Egg yolk, Meatless schnitzel",
          },
        ],
        [
          {
            name: "Chicken peach",
            description: "Blaťácké zlato cheese, Chicken skin",
          },
        ],
        [
          { name: "Pork sausage", description: "Fennel, Mustard" },
          { name: "Grilled courgette", description: "Hazelnut, Spices" },
        ],
        [
          { name: "Bread", description: "Green peas, Kaymak" },
          { name: "Beef two ways", description: "Bone marrow, Garum" },
          {
            name: "Vietnamese spinach",
            description: "Maggi, Schallots, Garlic",
          },
        ],
        [{ name: "Goose berry" }],
        [{ name: "Summer fruits", description: "Tvaroh, Brown butter" }],
      ],
    },
  },
};
