/**
 * Product Image Data Structure
 * Based on DÍNVEDA Golden Boost product image
 * Each object can be individually replaced or modified
 */

const productImageData = {
  product: {
    brand: {
      name: "DÍNVEDA",
      fontColor: "#8B5A2B",
      position: "top"
    },
    name: "Golden Boost",
    type: "stand_up_pouch",
    container: {
      material: "beige matte stand-up pouch",
      features: ["resealable zipper"],
      color: "#F5E6D3"
    },
    mascot: {
      type: "fox",
      description: "playful, winking orange fox with bushy tail",
      color: "#FF8C42",
      position: "below_brand"
    },
    description: {
      text: "Ayurvedische Bio-Gewürzmischung mit Kurkuma, Maca & Ingwer",
      translation: "Ayurvedic Organic Spice Blend with Turmeric, Maca & Ginger",
      language: "de",
      fontColor: "#8B5A2B"
    },
    certifications: [
      {
        type: "organic",
        logoCount: 2,
        color: "green",
        position: "below_description"
      }
    ],
    weight: {
      value: 100,
      unit: "g",
      display: "100g e"
    }
  },
  ingredients: {
    displayed: [
      {
        id: "ginger_fresh_1",
        name: "ginger",
        form: "fresh_root",
        description: "gnarled pieces of fresh ginger root",
        position: "left_of_pouch",
        quantity: "several pieces"
      },
      {
        id: "turmeric_fresh_1",
        name: "turmeric",
        form: "fresh_root",
        description: "slices of bright yellow turmeric root",
        position: "left_of_pouch",
        quantity: "some slices"
      },
      {
        id: "turmeric_powder_spoon_1",
        name: "turmeric",
        form: "powder",
        description: "vibrant yellow turmeric powder",
        position: "left_spoon",
        container: "wooden_spoon",
        quantity: "pile"
      },
      {
        id: "turmeric_powder_counter_1",
        name: "turmeric",
        form: "powder",
        description: "vibrant yellow turmeric powder",
        position: "countertop_between_pouch_and_right_spoon",
        container: "directly_on_counter",
        quantity: "pile"
      },
      {
        id: "black_pepper_spoon_1",
        name: "black_pepper",
        form: "whole_peppercorns",
        description: "dark, whole black peppercorns",
        position: "right_spoon",
        container: "wooden_spoon",
        quantity: "pile"
      }
    ],
    mentionedInDescription: [
      {
        name: "turmeric",
        german: "Kurkuma"
      },
      {
        name: "maca",
        german: "Maca"
      },
      {
        name: "ginger",
        german: "Ingwer"
      }
    ]
  },
  background: {
    surface: {
      type: "kitchen_countertop",
      material: "light_wood",
      color: "#E8DCC6"
    },
    lighting: {
      source: "natural_window_light",
      quality: "bright_and_airy",
      direction: "from_right"
    },
    leftSide: [
      {
        item: "ceramic_jar",
        description: "light-colored ceramic jar with wooden lid",
        position: "shelf_left",
        color: "#F5F5F0"
      },
      {
        item: "potted_plant",
        description: "potted green plant in white pot",
        position: "shelf_above_jar",
        potColor: "#FFFFFF",
        plantColor: "green"
      }
    ],
    rightSide: [
      {
        item: "window",
        description: "large window with white frames",
        framesColor: "#FFFFFF",
        lightSource: true
      },
      {
        item: "potted_plant",
        description: "green plant in white pot",
        position: "visible_through_window",
        potColor: "#FFFFFF",
        plantColor: "green",
        blur: true
      }
    ],
    blurEffect: {
      appliedTo: ["background_elements"],
      focus: "product_and_ingredients"
    }
  },
  composition: {
    mainSubject: "product_pouch",
    arrangement: "ingredients_around_base",
    cameraAngle: "eye_level",
    shotType: "product_shot",
    style: "natural_kitchen_setting"
  },
  colorPalette: {
    primary: {
      beige: "#F5E6D3",
      warmBrown: "#8B5A2B",
      orange: "#FF8C42"
    },
    secondary: {
      lightWood: "#E8DCC6",
      yellowTurmeric: "#FFD700",
      darkPepper: "#2C2C2C",
      greenOrganic: "#4CAF50",
      white: "#FFFFFF"
    },
    background: {
      lightWood: "#E8DCC6",
      ceramic: "#F5F5F0",
      naturalLight: "bright_white"
    }
  },
  mood: {
    overall: "clean_natural_inviting",
    emphasis: "organic_wholesome",
    atmosphere: "bright_airy_warm"
  },
  props: {
    woodenSpoons: [
      {
        position: "left",
        contains: "turmeric_powder"
      },
      {
        position: "right",
        contains: "black_peppercorns"
      }
    ]
  }
};

// Helper functions to update specific objects
const updateProduct = (newProductData) => {
  productImageData.product = { ...productImageData.product, ...newProductData };
};

const updateIngredient = (ingredientId, newIngredientData) => {
  const index = productImageData.ingredients.displayed.findIndex(
    ing => ing.id === ingredientId
  );
  if (index !== -1) {
    productImageData.ingredients.displayed[index] = {
      ...productImageData.ingredients.displayed[index],
      ...newIngredientData
    };
  }
};

const updateBackground = (section, newBackgroundData) => {
  productImageData.background[section] = {
    ...productImageData.background[section],
    ...newBackgroundData
  };
};

const updateColorPalette = (paletteType, newColors) => {
  productImageData.colorPalette[paletteType] = {
    ...productImageData.colorPalette[paletteType],
    ...newColors
  };
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    productImageData,
    updateProduct,
    updateIngredient,
    updateBackground,
    updateColorPalette
  };
}

