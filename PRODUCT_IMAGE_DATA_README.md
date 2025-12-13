# Product Image Data Structure

This directory contains structured data extracted from the DÍNVEDA Golden Boost product image. The data is organized into multiple formats for different use cases.

## Files

1. **product-image-data.json** - Pure JSON format, easy to parse and modify
2. **product-image-data.js** - JavaScript object with helper functions
3. **product-image-data.ts** - TypeScript version with type definitions and individual exports

## Structure Overview

The data is organized into the following main sections:

### 1. Product
- Brand information (DÍNVEDA)
- Product name (Golden Boost)
- Container details (stand-up pouch)
- Mascot (orange fox)
- Description (German text with translation)
- Certifications (organic logos)
- Weight (100g)

### 2. Ingredients
- **Displayed**: Physical ingredients shown in the image
  - Fresh ginger root
  - Fresh turmeric root
  - Turmeric powder (in spoon and on counter)
  - Black peppercorns
- **Mentioned**: Ingredients listed in product description
  - Turmeric (Kurkuma)
  - Maca
  - Ginger (Ingwer)

### 3. Background
- Surface (light wood countertop)
- Lighting (natural window light)
- Left side elements (ceramic jar, potted plant)
- Right side elements (window, blurred plant)
- Blur effects

### 4. Composition
- Camera angle (eye-level)
- Shot type (product shot)
- Arrangement style

### 5. Color Palette
- Primary colors (beige, warm brown, orange)
- Secondary colors (wood, turmeric yellow, pepper black, etc.)
- Background colors

### 6. Mood
- Overall atmosphere
- Emphasis
- Visual style

### 7. Props
- Wooden spoons with their contents

## Usage Examples

### JSON (product-image-data.json)
```javascript
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('product-image-data.json', 'utf8'));

// Replace product name
data.product.name = "New Product Name";

// Replace an ingredient
data.ingredients.displayed[0].name = "new_ingredient";
```

### JavaScript (product-image-data.js)
```javascript
const { productImageData, updateProduct, updateIngredient } = require('./product-image-data.js');

// Update product
updateProduct({ name: "New Product Name" });

// Update specific ingredient
updateIngredient("ginger_fresh_1", { name: "ginger_root", quantity: "5 pieces" });
```

### TypeScript (product-image-data.ts)
```typescript
import { 
  productImageData, 
  brandData, 
  replaceIngredient,
  updateProductImageData 
} from './product-image-data';

// Replace brand data
const newBrand = { ...brandData, name: "NEW_BRAND" };

// Update specific section
updateProductImageData('product', { name: "New Product" });

// Replace ingredient
replaceIngredient("ginger_fresh_1", { 
  name: "ginger_root",
  quantity: "5 pieces" 
});
```

## Replacing Individual Objects

### Replace Product Name
```javascript
// JSON
data.product.name = "New Name";

// JavaScript
updateProduct({ name: "New Name" });

// TypeScript
updateProductImageData('product', { name: "New Name" });
```

### Replace Brand
```javascript
// JSON
data.product.brand.name = "NEW_BRAND";
data.product.brand.fontColor = "#000000";

// JavaScript
updateProduct({ 
  brand: { 
    name: "NEW_BRAND", 
    fontColor: "#000000",
    position: "top"
  } 
});

// TypeScript
import { brandData } from './product-image-data';
const newBrand = { ...brandData, name: "NEW_BRAND" };
```

### Replace Ingredient
```javascript
// JSON - Find by index
data.ingredients.displayed[0].name = "new_ingredient";

// JavaScript - Find by ID
updateIngredient("ginger_fresh_1", { 
  name: "ginger_root",
  description: "fresh organic ginger root"
});

// TypeScript
replaceIngredient("ginger_fresh_1", {
  name: "ginger_root",
  description: "fresh organic ginger root"
});
```

### Replace Background Color
```javascript
// JSON
data.colorPalette.primary.beige = "#F0E0D0";

// JavaScript
updateColorPalette('primary', { beige: "#F0E0D0" });

// TypeScript
updateProductImageData('colorPalette', {
  primary: { ...productImageData.colorPalette.primary, beige: "#F0E0D0" }
});
```

### Add New Ingredient
```javascript
// JSON
data.ingredients.displayed.push({
  id: "new_ingredient_1",
  name: "cinnamon",
  form: "powder",
  description: "ground cinnamon powder",
  position: "right_of_pouch",
  quantity: "small_pile"
});

// JavaScript/TypeScript
productImageData.ingredients.displayed.push({
  id: "cinnamon_powder_1",
  name: "cinnamon",
  form: "powder",
  description: "ground cinnamon powder",
  position: "right_of_pouch",
  quantity: "small_pile"
});
```

## Data Structure Reference

### Product Object
```typescript
{
  brand: { name, fontColor, position },
  name: string,
  type: string,
  container: { material, features[], color },
  mascot: { type, description, color, position },
  description: { text, translation, language, fontColor },
  certifications: [{ type, logoCount, color, position }],
  weight: { value, unit, display }
}
```

### Ingredient Object
```typescript
{
  id: string,
  name: string,
  form: string,
  description: string,
  position: string,
  quantity: string,
  container?: string
}
```

### Background Object
```typescript
{
  surface: { type, material, color },
  lighting: { source, quality, direction },
  leftSide: BackgroundItem[],
  rightSide: BackgroundItem[],
  blurEffect: { appliedTo[], focus }
}
```

## Notes

- All color values are in hex format (#RRGGBB)
- Ingredient IDs are unique identifiers for easy replacement
- The TypeScript version provides full type safety and IntelliSense support
- Individual objects are exported separately in the TypeScript version for maximum flexibility

