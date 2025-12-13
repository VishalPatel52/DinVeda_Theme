/**
 * Product Image Data Structure - TypeScript Version
 * Based on DÍNVEDA Golden Boost product image
 * Each object can be individually replaced or modified
 */

// Type Definitions
interface Brand {
  name: string;
  fontColor: string;
  position: string;
}

interface Container {
  material: string;
  features: string[];
  color: string;
}

interface Mascot {
  type: string;
  description: string;
  color: string;
  position: string;
}

interface Description {
  text: string;
  translation: string;
  language: string;
  fontColor: string;
}

interface Certification {
  type: string;
  logoCount: number;
  color: string;
  position: string;
}

interface Weight {
  value: number;
  unit: string;
  display: string;
}

interface Product {
  brand: Brand;
  name: string;
  type: string;
  container: Container;
  mascot: Mascot;
  description: Description;
  certifications: Certification[];
  weight: Weight;
}

interface DisplayedIngredient {
  id: string;
  name: string;
  form: string;
  description: string;
  position: string;
  quantity: string;
  container?: string;
}

interface MentionedIngredient {
  name: string;
  german: string;
}

interface Ingredients {
  displayed: DisplayedIngredient[];
  mentionedInDescription: MentionedIngredient[];
}

interface Surface {
  type: string;
  material: string;
  color: string;
}

interface Lighting {
  source: string;
  quality: string;
  direction: string;
}

interface BackgroundItem {
  item: string;
  description: string;
  position: string;
  color?: string;
  potColor?: string;
  plantColor?: string;
  framesColor?: string;
  lightSource?: boolean;
  blur?: boolean;
}

interface BlurEffect {
  appliedTo: string[];
  focus: string;
}

interface Background {
  surface: Surface;
  lighting: Lighting;
  leftSide: BackgroundItem[];
  rightSide: BackgroundItem[];
  blurEffect: BlurEffect;
}

interface Composition {
  mainSubject: string;
  arrangement: string;
  cameraAngle: string;
  shotType: string;
  style: string;
}

interface ColorPalette {
  primary: {
    beige: string;
    warmBrown: string;
    orange: string;
  };
  secondary: {
    lightWood: string;
    yellowTurmeric: string;
    darkPepper: string;
    greenOrganic: string;
    white: string;
  };
  background: {
    lightWood: string;
    ceramic: string;
    naturalLight: string;
  };
}

interface Mood {
  overall: string;
  emphasis: string;
  atmosphere: string;
}

interface WoodenSpoon {
  position: string;
  contains: string;
}

interface Props {
  woodenSpoons: WoodenSpoon[];
}

export interface ProductImageData {
  product: Product;
  ingredients: Ingredients;
  background: Background;
  composition: Composition;
  colorPalette: ColorPalette;
  mood: Mood;
  props: Props;
}

// Individual object exports for easy replacement
export const brandData: Brand = {
  name: "DÍNVEDA",
  fontColor: "#8B5A2B",
  position: "top"
};

export const containerData: Container = {
  material: "beige matte stand-up pouch",
  features: ["resealable zipper"],
  color: "#F5E6D3"
};

export const mascotData: Mascot = {
  type: "fox",
  description: "playful, winking orange fox with bushy tail",
  color: "#FF8C42",
  position: "below_brand"
};

export const descriptionData: Description = {
  text: "Ayurvedische Bio-Gewürzmischung mit Kurkuma, Maca & Ingwer",
  translation: "Ayurvedic Organic Spice Blend with Turmeric, Maca & Ginger",
  language: "de",
  fontColor: "#8B5A2B"
};

export const certificationsData: Certification[] = [
  {
    type: "organic",
    logoCount: 2,
    color: "green",
    position: "below_description"
  }
];

export const weightData: Weight = {
  value: 100,
  unit: "g",
  display: "100g e"
};

export const productData: Product = {
  brand: brandData,
  name: "Golden Boost",
  type: "stand_up_pouch",
  container: containerData,
  mascot: mascotData,
  description: descriptionData,
  certifications: certificationsData,
  weight: weightData
};

export const displayedIngredients: DisplayedIngredient[] = [
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
];

export const mentionedIngredients: MentionedIngredient[] = [
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
];

export const ingredientsData: Ingredients = {
  displayed: displayedIngredients,
  mentionedInDescription: mentionedIngredients
};

export const surfaceData: Surface = {
  type: "kitchen_countertop",
  material: "light_wood",
  color: "#E8DCC6"
};

export const lightingData: Lighting = {
  source: "natural_window_light",
  quality: "bright_and_airy",
  direction: "from_right"
};

export const leftSideItems: BackgroundItem[] = [
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
];

export const rightSideItems: BackgroundItem[] = [
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
];

export const blurEffectData: BlurEffect = {
  appliedTo: ["background_elements"],
  focus: "product_and_ingredients"
};

export const backgroundData: Background = {
  surface: surfaceData,
  lighting: lightingData,
  leftSide: leftSideItems,
  rightSide: rightSideItems,
  blurEffect: blurEffectData
};

export const compositionData: Composition = {
  mainSubject: "product_pouch",
  arrangement: "ingredients_around_base",
  cameraAngle: "eye_level",
  shotType: "product_shot",
  style: "natural_kitchen_setting"
};

export const colorPaletteData: ColorPalette = {
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
};

export const moodData: Mood = {
  overall: "clean_natural_inviting",
  emphasis: "organic_wholesome",
  atmosphere: "bright_airy_warm"
};

export const propsData: Props = {
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
};

// Complete data structure
export const productImageData: ProductImageData = {
  product: productData,
  ingredients: ingredientsData,
  background: backgroundData,
  composition: compositionData,
  colorPalette: colorPaletteData,
  mood: moodData,
  props: propsData
};

// Helper function to update any part of the data
export function updateProductImageData<T extends keyof ProductImageData>(
  section: T,
  data: Partial<ProductImageData[T]>
): void {
  productImageData[section] = { ...productImageData[section], ...data } as ProductImageData[T];
}

// Helper function to replace a specific ingredient
export function replaceIngredient(
  ingredientId: string,
  newIngredient: Partial<DisplayedIngredient>
): void {
  const index = productImageData.ingredients.displayed.findIndex(
    ing => ing.id === ingredientId
  );
  if (index !== -1) {
    productImageData.ingredients.displayed[index] = {
      ...productImageData.ingredients.displayed[index],
      ...newIngredient
    } as DisplayedIngredient;
  }
}

