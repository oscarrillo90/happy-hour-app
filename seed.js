// take data FROM YELP API
var db = require('./models');
// PUT IT IN your happy hour DB
// it would remove all OLD yelp api data before putting in new data
var happyHours = [
  {
    id: "royal-jelly-austin",
    name: "Royal Jelly",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/FpfSC8HnBGexVZ4plaINFg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/royal-jelly-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 136,
    categories: [
      {
        alias: "newamerican",
        title: "American (New)"
      },
      {
        alias: "cocktailbars",
        title: "Cocktail Bars"
      },
      {
        alias: "pubs",
        title: "Pubs"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 30.3391,
      longitude: -97.71703
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "704 W St Johns Ave",
      address2: null,
      address3: "",
      city: "Austin",
      zip_code: "78752",
      country: "US",
      state: "TX",
      display_address: [
        "704 W St Johns Ave",
        "Austin, TX 78752"
      ]
    },
    phone: "+15127654816",
    display_phone: "(512) 765-4816",
    distance: 5438.765173735999
  },
  {
    id: "salty-sow-austin",
    name: "Salty Sow",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/euk2NFgfi50lcbV89-ktIA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/salty-sow-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 1713,
    categories: [
      {
        alias: "tradamerican",
        title: "American (Traditional)"
      },
      {
        alias: "gastropubs",
        title: "Gastropubs"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 30.2836497259461,
      longitude: -97.7213180065155
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "1917 Manor Rd",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78722",
      country: "US",
      state: "TX",
      display_address: [
        "1917 Manor Rd",
        "Austin, TX 78722"
      ]
    },
    phone: "+15123912337",
    display_phone: "(512) 391-2337",
    distance: 4234.69818484
  },
  {
    id: "apothecary-cafe-and-wine-bar-austin-2",
    name: "Apothecary Cafe & Wine Bar",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/8jjzhzEyqquLRVlmslIJZw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/apothecary-cafe-and-wine-bar-austin-2?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 420,
    categories: [
      {
        alias: "wine_bars",
        title: "Wine Bars"
      },
      {
        alias: "newamerican",
        title: "American (New)"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.31885,
      longitude: -97.739702
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "4800 Burnet Rd",
      address2: "Ste 450",
      address3: "",
      city: "Austin",
      zip_code: "78756",
      country: "US",
      state: "TX",
      display_address: [
        "4800 Burnet Rd",
        "Ste 450",
        "Austin, TX 78756"
      ]
    },
    phone: "+15123711600",
    display_phone: "(512) 371-1600",
    distance: 2304.48475696
  },
  {
    id: "irenes-austin",
    name: "Irene's",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/9BuesX7OWO7r5pS6mCFDiA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/irenes-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 206,
    categories: [
      {
        alias: "bars",
        title: "Bars"
      },
      {
        alias: "tradamerican",
        title: "American (Traditional)"
      },
      {
        alias: "coffee",
        title: "Coffee & Tea"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.269838,
      longitude: -97.751213
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "506 W Ave",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78701",
      country: "US",
      state: "TX",
      display_address: [
        "506 W Ave",
        "Austin, TX 78701"
      ]
    },
    phone: "+15122980853",
    display_phone: "(512) 298-0853",
    distance: 3976.62120376
  },
  {
    id: "contigo-austin",
    name: "Contigo",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/XzbM0t6g2cXvREmmWbQ-mw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/contigo-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 639,
    categories: [
      {
        alias: "bars",
        title: "Bars"
      },
      {
        alias: "tradamerican",
        title: "American (Traditional)"
      },
      {
        alias: "chicken_wings",
        title: "Chicken Wings"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.28804,
      longitude: -97.70335
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "2027 Anchor Ln",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78723",
      country: "US",
      state: "TX",
      display_address: [
        "2027 Anchor Ln",
        "Austin, TX 78723"
      ]
    },
    phone: "+15126142260",
    display_phone: "(512) 614-2260",
    distance: 5555.98241824
  },
  {
    id: "firehouse-lounge-austin-3",
    name: "Firehouse Lounge",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/E0rB3iV9hEfWduU62Q2Plw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/firehouse-lounge-austin-3?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 304,
    categories: [
      {
        alias: "lounges",
        title: "Lounges"
      },
      {
        alias: "cocktailbars",
        title: "Cocktail Bars"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 30.268173,
      longitude: -97.741043
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "605 Brazos St",
      address2: null,
      address3: "",
      city: "Austin",
      zip_code: "78701",
      country: "US",
      state: "TX",
      display_address: [
        "605 Brazos St",
        "Austin, TX 78701"
      ]
    },
    phone: "+15122012522",
    display_phone: "(512) 201-2522",
    distance: 4413.1633691960005
  },
  {
    id: "revelry-kitchen-bar-austin",
    name: "Revelry Kitchen + Bar",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/WGoP5JxjQXSGLJORb6Mn0g/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/revelry-kitchen-bar-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 62,
    categories: [
      {
        alias: "bars",
        title: "Bars"
      },
      {
        alias: "tradamerican",
        title: "American (Traditional)"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 30.2637500762939,
      longitude: -97.7276992797852
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "1410 E 6th St",
      address2: null,
      address3: "",
      city: "Austin",
      zip_code: "78702",
      country: "US",
      state: "TX",
      display_address: [
        "1410 E 6th St",
        "Austin, TX 78702"
      ]
    },
    phone: "+15123225223",
    display_phone: "(512) 322-5223",
    distance: 5431.101174787999
  },
  {
    id: "the-roosevelt-room-austin",
    name: "The Roosevelt Room",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/BY9qbwPsmUf5PAo20IU9sQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/the-roosevelt-room-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 159,
    categories: [
      {
        alias: "cocktailbars",
        title: "Cocktail Bars"
      },
      {
        alias: "venues",
        title: "Venues & Event Spaces"
      },
      {
        alias: "musicvenues",
        title: "Music Venues"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 30.267707824707,
      longitude: -97.7462692260742
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "307 W 5th St",
      address2: "Unit B",
      address3: "",
      city: "Austin",
      zip_code: "78701",
      country: "US",
      state: "TX",
      display_address: [
        "307 W 5th St",
        "Unit B",
        "Austin, TX 78701"
      ]
    },
    phone: "+15124944094",
    display_phone: "(512) 494-4094",
    distance: 4306.851817201999
  },
  {
    id: "the-hightower-austin",
    name: "The Hightower",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/uouF8_slkUUemndoe4xIvw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/the-hightower-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 393,
    categories: [
      {
        alias: "newamerican",
        title: "American (New)"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.264821,
      longitude: -97.729488
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "1209 E 7th St",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78702",
      country: "US",
      state: "TX",
      display_address: [
        "1209 E 7th St",
        "Austin, TX 78702"
      ]
    },
    phone: "+15125241448",
    display_phone: "(512) 524-1448",
    distance: 5241.001749704
  },
  {
    id: "winebelly-austin",
    name: "Winebelly",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/yJcHVNdadPih5_dsBMovGw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/winebelly-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 279,
    categories: [
      {
        alias: "tapas",
        title: "Tapas Bars"
      },
      {
        alias: "wine_bars",
        title: "Wine Bars"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.24141,
      longitude: -97.75892
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "519 W Oltorf St",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78704",
      country: "US",
      state: "TX",
      display_address: [
        "519 W Oltorf St",
        "Austin, TX 78704"
      ]
    },
    phone: "+15124871569",
    display_phone: "(512) 487-1569",
    distance: 7065.61093052
  },
  {
    id: "culinary-dropout-austin",
    name: "Culinary Dropout",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/be_be9Ndm9434W0IYdfWbQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/culinary-dropout-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 256,
    categories: [
      {
        alias: "bars",
        title: "Bars"
      },
      {
        alias: "newamerican",
        title: "American (New)"
      },
      {
        alias: "musicvenues",
        title: "Music Venues"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.403653,
      longitude: -97.721503
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "11721 Rock Rose",
      address2: "Ste 100",
      address3: null,
      city: "Austin",
      zip_code: "78758",
      country: "US",
      state: "TX",
      display_address: [
        "11721 Rock Rose",
        "Ste 100",
        "Austin, TX 78758"
      ]
    },
    phone: "+15127773394",
    display_phone: "(512) 777-3394",
    distance: 11490.274482421999
  },
  {
    id: "backbeat-austin",
    name: "Backbeat",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/chQNDJAB3PpSUWW_q1NXKg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/backbeat-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 52,
    categories: [
      {
        alias: "cocktailbars",
        title: "Cocktail Bars"
      },
      {
        alias: "venues",
        title: "Venues & Event Spaces"
      },
      {
        alias: "beerbar",
        title: "Beer Bar"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.25382,
      longitude: -97.76331
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "1300 S Lamar Blvd",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78704",
      country: "US",
      state: "TX",
      display_address: [
        "1300 S Lamar Blvd",
        "Austin, TX 78704"
      ]
    },
    phone: "+15125519980",
    display_phone: "(512) 551-9980",
    distance: 5733.53204907
  },
  {
    id: "lichas-cantina-austin",
    name: "Licha's Cantina",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/BAUsv-cxzzTSte01G3UL2g/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/lichas-cantina-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 319,
    categories: [
      {
        alias: "bars",
        title: "Bars"
      },
      {
        alias: "mexican",
        title: "Mexican"
      },
      {
        alias: "gluten_free",
        title: "Gluten-Free"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.264108,
      longitude: -97.728966
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "1306 E 6th St",
      address2: null,
      address3: "",
      city: "Austin",
      zip_code: "78702",
      country: "US",
      state: "TX",
      display_address: [
        "1306 E 6th St",
        "Austin, TX 78702"
      ]
    },
    phone: "+15124805960",
    display_phone: "(512) 480-5960",
    distance: 5334.478010528
  },
  {
    id: "péché-austin-3",
    name: "Péché",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/h0Bvus1xO84tTHLTeEuI3g/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/p%C3%A9ch%C3%A9-austin-3?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 848,
    categories: [
      {
        alias: "lounges",
        title: "Lounges"
      },
      {
        alias: "french",
        title: "French"
      },
      {
        alias: "cocktailbars",
        title: "Cocktail Bars"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.266988,
      longitude: -97.745231
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "208 W 4th St",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78701",
      country: "US",
      state: "TX",
      display_address: [
        "208 W 4th St",
        "Austin, TX 78701"
      ]
    },
    phone: "+15124944011",
    display_phone: "(512) 494-4011",
    distance: 4414.911112436
  },
  {
    id: "vino-vino-austin",
    name: "Vino Vino",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/zvQrobR7Ch75MdwF28ykrQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/vino-vino-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 445,
    categories: [
      {
        alias: "wine_bars",
        title: "Wine Bars"
      },
      {
        alias: "newamerican",
        title: "American (New)"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.3069966,
      longitude: -97.7352997
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "4119 Guadalupe St",
      address2: null,
      address3: "",
      city: "Austin",
      zip_code: "78751",
      country: "US",
      state: "TX",
      display_address: [
        "4119 Guadalupe St",
        "Austin, TX 78751"
      ]
    },
    phone: "+15124659282",
    display_phone: "(512) 465-9282",
    distance: 2162.2763934639997
  },
  {
    id: "baretto-austin",
    name: "Baretto",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/_sTgllcdAXDw97FBTsKidg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/baretto-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 42,
    categories: [
      {
        alias: "cocktailbars",
        title: "Cocktail Bars"
      },
      {
        alias: "tradamerican",
        title: "American (Traditional)"
      },
      {
        alias: "wine_bars",
        title: "Wine Bars"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 30.39915,
      longitude: -97.7481
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "10710 Research Blvd",
      address2: "Ste 314",
      address3: null,
      city: "Austin",
      zip_code: "78759",
      country: "US",
      state: "TX",
      display_address: [
        "10710 Research Blvd",
        "Ste 314",
        "Austin, TX 78759"
      ]
    },
    phone: "+15123457994",
    display_phone: "(512) 345-7994",
    distance: 10424.11199906
  },
  {
    id: "sala-and-betty-austin",
    name: "Sala & Betty",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/QOqFs19rc2tQmHTNrsvSDQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/sala-and-betty-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 266,
    categories: [
      {
        alias: "newamerican",
        title: "American (New)"
      },
      {
        alias: "diners",
        title: "Diners"
      },
      {
        alias: "sandwiches",
        title: "Sandwiches"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 30.31318,
      longitude: -97.71476
    },
    transactions: [
      "pickup"
    ],
    price: "$$",
    location: {
      address1: "5201 Airport Blvd",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78751",
      country: "US",
      state: "TX",
      display_address: [
        "5201 Airport Blvd",
        "Austin, TX 78751"
      ]
    },
    phone: "+15126450214",
    display_phone: "(512) 645-0214",
    distance: 4214.19599791
  },
  {
    id: "grizzeldas-austin",
    name: "Grizzelda's",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/3jafzClxuBJz4G6GNffLzw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/grizzeldas-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 63,
    categories: [
      {
        alias: "mexican",
        title: "Mexican"
      },
      {
        alias: "bars",
        title: "Bars"
      },
      {
        alias: "tex-mex",
        title: "Tex-Mex"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.252196981289,
      longitude: -97.7082111244723
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "105 Tillery St",
      address2: "",
      address3: null,
      city: "Austin",
      zip_code: "78702",
      country: "US",
      state: "TX",
      display_address: [
        "105 Tillery St",
        "Austin, TX 78702"
      ]
    },
    phone: "+15123665908",
    display_phone: "(512) 366-5908",
    distance: 7568.248046019999
  },
  {
    id: "the-local-post-pub-austin",
    name: "The Local Post Pub",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/6NJlW3zuj7XMRx1-VSZ30Q/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/the-local-post-pub-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 45,
    categories: [
      {
        alias: "pubs",
        title: "Pubs"
      },
      {
        alias: "sportsbars",
        title: "Sports Bars"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.347164,
      longitude: -97.734428
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "7113 Burnet Rd",
      address2: null,
      address3: "",
      city: "Austin",
      zip_code: "78757",
      country: "US",
      state: "TX",
      display_address: [
        "7113 Burnet Rd",
        "Austin, TX 78757"
      ]
    },
    phone: "+15123755599",
    display_phone: "(512) 375-5599",
    distance: 5164.9271213659995
  },
  {
    id: "parkside-austin",
    name: "Parkside",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/NShTQgU1Vom8UG2GUu8LQQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/parkside-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 834,
    categories: [
      {
        alias: "seafood",
        title: "Seafood"
      },
      {
        alias: "newamerican",
        title: "American (New)"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.2670631408691,
      longitude: -97.7403259277344
    },
    transactions: [ ],
    price: "$$$",
    location: {
      address1: "301 E 6th St",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78701",
      country: "US",
      state: "TX",
      display_address: [
        "301 E 6th St",
        "Austin, TX 78701"
      ]
    },
    phone: "+15124749898",
    display_phone: "(512) 474-9898",
    distance: 4553.216987366
  },
  {
    id: "barley-swine-austin",
    name: "Barley Swine",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/lqsxZ_kD9TrsVJzmck7Uzw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/barley-swine-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 801,
    categories: [
      {
        alias: "newamerican",
        title: "American (New)"
      },
      {
        alias: "bars",
        title: "Bars"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 30.3412737661652,
      longitude: -97.7383886364151
    },
    transactions: [ ],
    price: "$$$",
    location: {
      address1: "6555 Burnet Rd",
      address2: "Ste 400",
      address3: "",
      city: "Austin",
      zip_code: "78757",
      country: "US",
      state: "TX",
      display_address: [
        "6555 Burnet Rd",
        "Ste 400",
        "Austin, TX 78757"
      ]
    },
    phone: "+15123948150",
    display_phone: "(512) 394-8150",
    distance: 4424.052807372
  },
  {
    id: "eureka-austin",
    name: "Eureka!",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/UUuCvBNdGN8A8r_dbnvjpg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/eureka-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 380,
    categories: [
      {
        alias: "bars",
        title: "Bars"
      },
      {
        alias: "newamerican",
        title: "American (New)"
      },
      {
        alias: "burgers",
        title: "Burgers"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.26786,
      longitude: -97.74104
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "200 E 6th St",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78701",
      country: "US",
      state: "TX",
      display_address: [
        "200 E 6th St",
        "Austin, TX 78701"
      ]
    },
    phone: "+15127351144",
    display_phone: "(512) 735-1144",
    distance: 4438.67317847
  },
  {
    id: "drink-well-austin",
    name: "Drink Well",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/yuOp9HJ9tTYOQE1_XaqFaw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/drink-well-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 271,
    categories: [
      {
        alias: "gastropubs",
        title: "Gastropubs"
      },
      {
        alias: "bars",
        title: "Bars"
      },
      {
        alias: "tradamerican",
        title: "American (Traditional)"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.3172798,
      longitude: -97.7206192
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "207 E 53rd St",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78751",
      country: "US",
      state: "TX",
      display_address: [
        "207 E 53rd St",
        "Austin, TX 78751"
      ]
    },
    phone: "+15126146683",
    display_phone: "(512) 614-6683",
    distance: 3808.958714154
  },
  {
    id: "jack-allens-kitchen-360-austin",
    name: "Jack Allen's Kitchen 360",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/plamz1HXqASJTP4PMIcMZA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/jack-allens-kitchen-360-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 255,
    categories: [
      {
        alias: "newamerican",
        title: "American (New)"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 30.3352434572574,
      longitude: -97.8075081023773
    },
    transactions: [
      "pickup"
    ],
    price: "$$",
    location: {
      address1: "3600 North Capital Of Texas Hwy",
      address2: "Bldg D",
      address3: "",
      city: "Austin",
      zip_code: "78746",
      country: "US",
      state: "TX",
      display_address: [
        "3600 North Capital Of Texas Hwy",
        "Bldg D",
        "Austin, TX 78746"
      ]
    },
    phone: "+15123519399",
    display_phone: "(512) 351-9399",
    distance: 5833.651021678
  },
  {
    id: "coast-bar-and-kitchen-austin",
    name: "Coast Bar & Kitchen",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/JjMIeJDsvzqKPyAX1esx0w/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/coast-bar-and-kitchen-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 44,
    categories: [
      {
        alias: "cocktailbars",
        title: "Cocktail Bars"
      },
      {
        alias: "seafood",
        title: "Seafood"
      },
      {
        alias: "breakfast_brunch",
        title: "Breakfast & Brunch"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 30.26744,
      longitude: -97.74941
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "360 Nueces St",
      address2: "Ste 20",
      address3: "",
      city: "Austin",
      zip_code: "78701",
      country: "US",
      state: "TX",
      display_address: [
        "360 Nueces St",
        "Ste 20",
        "Austin, TX 78701"
      ]
    },
    phone: "+15124674621",
    display_phone: "(512) 467-4621",
    distance: 4263.79022402
  },
  {
    id: "whislers-austin-2",
    name: "Whisler's",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/rBnNmwbekO2bDnnjcYqi2g/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/whislers-austin-2?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 255,
    categories: [
      {
        alias: "cocktailbars",
        title: "Cocktail Bars"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 30.2619673762692,
      longitude: -97.7226847531614
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "1816 E 6th St",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78702",
      country: "US",
      state: "TX",
      display_address: [
        "1816 E 6th St",
        "Austin, TX 78702"
      ]
    },
    phone: "+15124800781",
    display_phone: "(512) 480-0781",
    distance: 5863.505405215999
  },
  {
    id: "yard-house-austin",
    name: "Yard House",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/2_LKwLtkmHSEiNfEFhw3Eg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/yard-house-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 229,
    categories: [
      {
        alias: "newamerican",
        title: "American (New)"
      },
      {
        alias: "bars",
        title: "Bars"
      },
      {
        alias: "vegetarian",
        title: "Vegetarian"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.4053,
      longitude: -97.72308
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "11800 Domain Blvd",
      address2: null,
      address3: null,
      city: "Austin",
      zip_code: "78758",
      country: "US",
      state: "TX",
      display_address: [
        "11800 Domain Blvd",
        "Austin, TX 78758"
      ]
    },
    phone: "+15128360174",
    display_phone: "(512) 836-0174",
    distance: 11597.633071019998
  },
  {
    id: "stella-san-jac-austin-2",
    name: "Stella San Jac",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/H2LOkbUhtKaueP_MvtoMmQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/stella-san-jac-austin-2?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 285,
    categories: [
      {
        alias: "newamerican",
        title: "American (New)"
      },
      {
        alias: "sandwiches",
        title: "Sandwiches"
      },
      {
        alias: "southern",
        title: "Southern"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.2665762751589,
      longitude: -97.740525726058
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "310 E 5th St",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78701",
      country: "US",
      state: "TX",
      display_address: [
        "310 E 5th St",
        "Austin, TX 78701"
      ]
    },
    phone: "+15127925648",
    display_phone: "(512) 792-5648",
    distance: 4596.697008948
  },
  {
    id: "vox-table-austin",
    name: "VOX Table",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/6iCiLSMFnApkpGtyOtcsew/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/vox-table-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 355,
    categories: [
      {
        alias: "cocktailbars",
        title: "Cocktail Bars"
      },
      {
        alias: "newamerican",
        title: "American (New)"
      },
      {
        alias: "french",
        title: "French"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 30.2560234398626,
      longitude: -97.7630079080734
    },
    transactions: [ ],
    price: "$$$",
    location: {
      address1: "1100 S Lamar Blvd",
      address2: "Ste 2140",
      address3: "",
      city: "Austin",
      zip_code: "78704",
      country: "US",
      state: "TX",
      display_address: [
        "1100 S Lamar Blvd",
        "Ste 2140",
        "Austin, TX 78704"
      ]
    },
    phone: "+15123754869",
    display_phone: "(512) 375-4869",
    distance: 5486.9063267599995
  },
  {
    id: "little-barrel-and-brown-austin",
    name: "Little Barrel and Brown",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/bZzc_CSNAHwFhXEVum32-Q/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/little-barrel-and-brown-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 328,
    categories: [
      {
        alias: "newamerican",
        title: "American (New)"
      },
      {
        alias: "salad",
        title: "Salad"
      },
      {
        alias: "soup",
        title: "Soup"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.2465137,
      longitude: -97.7511023
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "1716 S Congress Ave",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78704",
      country: "US",
      state: "TX",
      display_address: [
        "1716 S Congress Ave",
        "Austin, TX 78704"
      ]
    },
    phone: "+15125821229",
    display_phone: "(512) 582-1229",
    distance: 6551.770716478
  },
  {
    id: "chicon-austin",
    name: "Chicon",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/QIWr3wHl2wdxdAB9ceg6-Q/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/chicon-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 74,
    categories: [
      {
        alias: "newamerican",
        title: "American (New)"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.2616841569345,
      longitude: -97.7214703911418
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "1914 E 6th St",
      address2: "Ste C",
      address3: "",
      city: "Austin",
      zip_code: "78702",
      country: "US",
      state: "TX",
      display_address: [
        "1914 E 6th St",
        "Ste C",
        "Austin, TX 78702"
      ]
    },
    phone: "+15123541480",
    display_phone: "(512) 354-1480",
    distance: 5956.54794891
  },
  {
    id: "juliet-austin",
    name: "Juliet",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/RqOGIy9xyJwa4eOifv1fIw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/juliet-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 229,
    categories: [
      {
        alias: "italian",
        title: "Italian"
      },
      {
        alias: "cocktailbars",
        title: "Cocktail Bars"
      }
    ],
    rating: 3.5,
    coordinates: {
      latitude: 30.26184,
      longitude: -97.76006
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "1500 Barton Springs Rd",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78704",
      country: "US",
      state: "TX",
      display_address: [
        "1500 Barton Springs Rd",
        "Austin, TX 78704"
      ]
    },
    phone: "+15124791800",
    display_phone: "(512) 479-1800",
    distance: 4820.936168122
  },
  {
    id: "the-rotten-bunch-austin",
    name: "The Rotten Bunch",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/Ljb6DMRflVBl5jUTIjD-_g/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/the-rotten-bunch-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 128,
    categories: [
      {
        alias: "newamerican",
        title: "American (New)"
      },
      {
        alias: "wine_bars",
        title: "Wine Bars"
      },
      {
        alias: "tapas",
        title: "Tapas Bars"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 30.4984434463754,
      longitude: -97.777564941803
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "14900 Avery Ranch Blvd",
      address2: "",
      address3: "Ste B 100",
      city: "Austin",
      zip_code: "78717",
      country: "US",
      state: "TX",
      display_address: [
        "14900 Avery Ranch Blvd",
        "Ste B 100",
        "Austin, TX 78717"
      ]
    },
    phone: "+15122762537",
    display_phone: "(512) 276-2537",
    distance: 21576.59518872
  },
  {
    id: "swifts-attic-austin",
    name: "Swift's Attic",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/AqSf8EOw5_zml0olkH_FLw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/swifts-attic-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 778,
    categories: [
      {
        alias: "newamerican",
        title: "American (New)"
      },
      {
        alias: "gastropubs",
        title: "Gastropubs"
      },
      {
        alias: "tapas",
        title: "Tapas Bars"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.26563,
      longitude: -97.74337
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "315 Congress Ave",
      address2: "Ste 200",
      address3: "",
      city: "Austin",
      zip_code: "78701",
      country: "US",
      state: "TX",
      display_address: [
        "315 Congress Ave",
        "Ste 200",
        "Austin, TX 78701"
      ]
    },
    phone: "+15124828842",
    display_phone: "(512) 482-8842",
    distance: 4612.992220184
  },
  {
    id: "lucille-austin-2",
    name: "Lucille",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/kegmfkkL6yO0Mk4uPriOsw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/lucille-austin-2?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 163,
    categories: [
      {
        alias: "bars",
        title: "Bars"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.25872,
      longitude: -97.73848
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "77 Rainey St",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78701",
      country: "US",
      state: "TX",
      display_address: [
        "77 Rainey St",
        "Austin, TX 78701"
      ]
    },
    phone: "+15123229270",
    display_phone: "(512) 322-9270",
    distance: 5480.125694538
  },
  {
    id: "odd-duck-austin-2",
    name: "Odd Duck",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/s2j1twRuJXEpROiUzzhWeQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/odd-duck-austin-2?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 1053,
    categories: [
      {
        alias: "tradamerican",
        title: "American (Traditional)"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 30.25452,
      longitude: -97.762064
    },
    transactions: [ ],
    price: "$$$",
    location: {
      address1: "1201 S Lamar Blvd",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78704",
      country: "US",
      state: "TX",
      display_address: [
        "1201 S Lamar Blvd",
        "Austin, TX 78704"
      ]
    },
    phone: "+15124336514",
    display_phone: "(512) 433-6514",
    distance: 5645.9026814
  },
  {
    id: "bullfight-austin",
    name: "Bullfight",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/48CV39FAh58OO4aEI6JWww/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/bullfight-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 196,
    categories: [
      {
        alias: "spanish",
        title: "Spanish"
      },
      {
        alias: "tapasmallplates",
        title: "Tapas/Small Plates"
      },
      {
        alias: "breakfast_brunch",
        title: "Breakfast & Brunch"
      }
    ],
    rating: 3.5,
    coordinates: {
      latitude: 30.3087488271478,
      longitude: -97.7154053607132
    },
    transactions: [ ],
    price: "$$$",
    location: {
      address1: "4807 Airport Blvd",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78751",
      country: "US",
      state: "TX",
      display_address: [
        "4807 Airport Blvd",
        "Austin, TX 78751"
      ]
    },
    phone: "+15124742029",
    display_phone: "(512) 474-2029",
    distance: 4081.524100452
  },
  {
    id: "parlor-and-yard-austin",
    name: "Parlor and Yard",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/Tsh6lTSe3LtnuRE1dKjTcQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/parlor-and-yard-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 29,
    categories: [
      {
        alias: "bars",
        title: "Bars"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.26946,
      longitude: -97.74875
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "601 W 6th St",
      address2: null,
      address3: "",
      city: "Austin",
      zip_code: "78701",
      country: "US",
      state: "TX",
      display_address: [
        "601 W 6th St",
        "Austin, TX 78701"
      ]
    },
    phone: "+15125240466",
    display_phone: "(512) 524-0466",
    distance: 4061.5227401299994
  },
  {
    id: "second-bar-kitchen-austin-2",
    name: "Second Bar + Kitchen",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/yTaK-NELiiTqAmo56_FIfA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/second-bar-kitchen-austin-2?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 930,
    categories: [
      {
        alias: "newamerican",
        title: "American (New)"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.2645939290629,
      longitude: -97.7444895054345
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "200 Congress Ave",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78701",
      country: "US",
      state: "TX",
      display_address: [
        "200 Congress Ave",
        "Austin, TX 78701"
      ]
    },
    phone: "+15128272750",
    display_phone: "(512) 827-2750",
    distance: 4685.921715359999
  },
  {
    id: "oasthouse-kitchen-bar-austin",
    name: "Oasthouse Kitchen + Bar",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/AHZCX6cyGeW7beqakkUDTg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/oasthouse-kitchen-bar-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 194,
    categories: [
      {
        alias: "gastropubs",
        title: "Gastropubs"
      },
      {
        alias: "newamerican",
        title: "American (New)"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.4224100300212,
      longitude: -97.8465196011887
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "8300 N Fm 620",
      address2: "Ste E",
      address3: "",
      city: "Austin",
      zip_code: "78726",
      country: "US",
      state: "TX",
      display_address: [
        "8300 N Fm 620",
        "Ste E",
        "Austin, TX 78726"
      ]
    },
    phone: "+17372225779",
    display_phone: "(737) 222-5779",
    distance: 15574.786966319998
  },
  {
    id: "italic-austin",
    name: "Italic",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/JElni0I4Eelop4E57HRLqw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/italic-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 314,
    categories: [
      {
        alias: "italian",
        title: "Italian"
      },
      {
        alias: "coffee",
        title: "Coffee & Tea"
      },
      {
        alias: "bars",
        title: "Bars"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.2682,
      longitude: -97.74402
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "123 W 6th St",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78701",
      country: "US",
      state: "TX",
      display_address: [
        "123 W 6th St",
        "Austin, TX 78701"
      ]
    },
    phone: "+15126605390",
    display_phone: "(512) 660-5390",
    distance: 4308.216054719999
  },
  {
    id: "ginos-vino-osteria-austin",
    name: "Gino's Vino Osteria",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/Jezv3XSflfDidnSEcjmqMQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/ginos-vino-osteria-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 139,
    categories: [
      {
        alias: "italian",
        title: "Italian"
      },
      {
        alias: "wine_bars",
        title: "Wine Bars"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 30.3074041,
      longitude: -97.7072917
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "1239 E 51st St",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78723",
      country: "US",
      state: "TX",
      display_address: [
        "1239 E 51st St",
        "Austin, TX 78723"
      ]
    },
    phone: "+15123518426",
    display_phone: "(512) 351-8426",
    distance: 4847.697882982
  },
  {
    id: "dive-bar-and-lounge-austin",
    name: "Dive Bar and Lounge",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/rbS3CzpPMkKwgmxDM02nVA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/dive-bar-and-lounge-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 118,
    categories: [
      {
        alias: "divebars",
        title: "Dive Bars"
      },
      {
        alias: "lounges",
        title: "Lounges"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 30.2798841,
      longitude: -97.7421312
    },
    transactions: [ ],
    price: "$",
    location: {
      address1: "1703 Guadalupe St",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78701",
      country: "US",
      state: "TX",
      display_address: [
        "1703 Guadalupe St",
        "Austin, TX 78701"
      ]
    },
    phone: "+15124823483",
    display_phone: "(512) 482-3483",
    distance: 3183.8002913779997
  },
  {
    id: "freedmens-austin",
    name: "Freedmen's",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/CZixIC5fHRZjFhI0x3f8sA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/freedmens-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 522,
    categories: [
      {
        alias: "bbq",
        title: "Barbeque"
      },
      {
        alias: "bars",
        title: "Bars"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.288439,
      longitude: -97.747897
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "2402 San Gabriel St",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78705",
      country: "US",
      state: "TX",
      display_address: [
        "2402 San Gabriel St",
        "Austin, TX 78705"
      ]
    },
    phone: "+15122200953",
    display_phone: "(512) 220-0953",
    distance: 2084.647625488
  },
  {
    id: "corner-austin-2",
    name: "Corner",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/0vEA1wf3ozX5dM75o9ip2Q/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/corner-austin-2?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 231,
    categories: [
      {
        alias: "tradamerican",
        title: "American (Traditional)"
      },
      {
        alias: "bars",
        title: "Bars"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.2642695605755,
      longitude: -97.7439377456903
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "110 E 2nd St",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78701",
      country: "US",
      state: "TX",
      display_address: [
        "110 E 2nd St",
        "Austin, TX 78701"
      ]
    },
    phone: "+15126084488",
    display_phone: "(512) 608-4488",
    distance: 4729.802462602
  },
  {
    id: "launderette-austin",
    name: "Launderette",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/YXj0geEH-YX1Qup75NLGEA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/launderette-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 536,
    categories: [
      {
        alias: "newamerican",
        title: "American (New)"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.2519302,
      longitude: -97.7227325
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "2115 Holly St",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78702",
      country: "US",
      state: "TX",
      display_address: [
        "2115 Holly St",
        "Austin, TX 78702"
      ]
    },
    phone: "+15123821599",
    display_phone: "(512) 382-1599",
    distance: 6808.110575962
  },
  {
    id: "workhorse-bar-austin",
    name: "Workhorse Bar",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/WG23G3Lr6WdpLJCICyLVJA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/workhorse-bar-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 251,
    categories: [
      {
        alias: "divebars",
        title: "Dive Bars"
      },
      {
        alias: "tradamerican",
        title: "American (Traditional)"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.31771,
      longitude: -97.721675
    },
    transactions: [ ],
    price: "$",
    location: {
      address1: "100 N Loop Blvd E",
      address2: "Ste B",
      address3: "",
      city: "Austin",
      zip_code: "78751",
      country: "US",
      state: "TX",
      display_address: [
        "100 N Loop Blvd E",
        "Ste B",
        "Austin, TX 78751"
      ]
    },
    phone: "+15123235700",
    display_phone: "(512) 323-5700",
    distance: 3731.43101273
  },
  {
    id: "district-kitchen-and-cocktails-austin",
    name: "District Kitchen & Cocktails",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/3m54IApHrFyJTFtco0Phrg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/district-kitchen-and-cocktails-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 308,
    categories: [
      {
        alias: "newamerican",
        title: "American (New)"
      },
      {
        alias: "breakfast_brunch",
        title: "Breakfast & Brunch"
      },
      {
        alias: "cocktailbars",
        title: "Cocktail Bars"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.2014264170508,
      longitude: -97.8796087791679
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "5900 W Slaughter Ln",
      address2: "Ste D500",
      address3: "",
      city: "Austin",
      zip_code: "78749",
      country: "US",
      state: "TX",
      display_address: [
        "5900 W Slaughter Ln",
        "Ste D500",
        "Austin, TX 78749"
      ]
    },
    phone: "+15123518436",
    display_phone: "(512) 351-8436",
    distance: 16434.83596506
  },
  {
    id: "draught-house-pub-and-brewery-austin",
    name: "Draught House Pub & Brewery",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/T_1YD6r7iGUn3rsBd_9hUQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/draught-house-pub-and-brewery-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 530,
    categories: [
      {
        alias: "pubs",
        title: "Pubs"
      },
      {
        alias: "breweries",
        title: "Breweries"
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 30.31098,
      longitude: -97.74283
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "4112 Medical Pkwy",
      address2: "",
      address3: "",
      city: "Austin",
      zip_code: "78756",
      country: "US",
      state: "TX",
      display_address: [
        "4112 Medical Pkwy",
        "Austin, TX 78756"
      ]
    },
    phone: "+15124526258",
    display_phone: "(512) 452-6258",
    distance: 1565.1085131983998
  },
  {
    id: "driskill-bar-austin",
    name: "Driskill Bar",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/pIgeT4rUoVgSgzqfABPMcg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/driskill-bar-austin?adjust_creative=V2QqY10c5zFZE84_xaQwYQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=V2QqY10c5zFZE84_xaQwYQ",
    review_count: 279,
    categories: [
      {
        alias: "lounges",
        title: "Lounges"
      },
      {
        alias: "newamerican",
        title: "American (New)"
      },
      {
        alias: "cocktailbars",
        title: "Cocktail Bars"
      }
    ],
    rating: 4,
    coordinates: {
      latitude: 30.26807,
      longitude: -97.74168
    },
    transactions: [ ],
    price: "$$",
    location: {
      address1: "604 Brazos St",
      address2: null,
      address3: "",
      city: "Austin",
      zip_code: "78701",
      country: "US",
      state: "TX",
      display_address: [
        "604 Brazos St",
        "Austin, TX 78701"
      ]
    },
    phone: "+15123917162",
    display_phone: "(512) 391-7162",
    distance: 4381.301655876
  }
];



db.happyhour.remove({}, function(err, succ){
  if(err){return console.log(err)}

  happyHours.forEach(function(happyEvent){

    happyEvent.location = happyEvent.location.display_address.join(' ');
    happyEvent.categories = happyEvent.categories[0].title;

    db.happyhour.create( happyEvent, function(err, succ){

      if(err){return console.log(err)}
      console.log(succ.name);
    });

  });

});

//yelp API route
// app.get('/search', function(req, res){
//
//
//
// var searchRequest = {
//   term: req.params.term,
//   location: 'austin, tx'
// }
//
//   var yelp = require('yelp-fusion');
//
//   // Place holders for Yelp Fusion's OAuth 2.0 credentials. Grab them
//   // from https://www.yelp.com/developers/v3/manage_app
//   var clientId = 'V2QqY10c5zFZE84_xaQwYQ';
//   var clientSecret = 'QjWl5JQMnwhIYhFwlrpvbOZ99HsaJTYbufGKLt5CBRO9KxVTfcaZFmXb4xxQEepL';
//
//   var searchRequest = {
//     term:'happy hour',
//     location: 'austin, tx',
//     limit: 20
//   };
//
//
//   yelp.accessToken(clientId, clientSecret).then(response => {
//     const client = yelp.client(response.jsonBody.access_token);
//
//     client.search(searchRequest).then(response => {
//       var results = response.jsonBody.businesses;
//       //var prettyJson = JSON.stringify(firstResult, null, 4);
//       console.log(results);
//       res.render('layout.ejs', {results: results});
//     });
//   }).catch(e => {
//     console.log(e);
//   });
// });
