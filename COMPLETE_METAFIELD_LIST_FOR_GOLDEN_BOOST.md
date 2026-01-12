# Complete Metafield List for Golden Boost

## Quick Reference: All Metafields Needed for Golden Boost

This document lists ALL metafields that need to be populated for Golden Boost product page. Use this as a quick reference while working through the setup guide.

---

## Single Line Text Metafields

| Metafield Name | Namespace & Key | Value (Example) | Used In Section |
|---------------|----------------|-----------------|----------------|
| **DV Product Subtitle** | `custom.dv_product_subtitle` | `MORGEN \| AKTIVIEREN` | DV Main Product |
| **DV Animal Name** | `custom.dv_animal_name` | `Fuchs` | DV Main Product, Story, Recipe |
| **DV Ritual Timing** | `custom.dv_ritual_timing` | `MORGEN \| AKTIVIEREN` | DV Main Product |
| **DV Preparation Mode** | `custom.dv_preparation_mode` | `Warm` | DV Main Product |
| **DV Ritual Duration** | `custom.dv_ritual_duration` | `1-2 Min` | DV Main Product |
| **DV Story Title** | `custom.dv_story_title` | `Warum der Fuchs?` | DV Story Card (optional) |
| **DV Detail Left Title** | `custom.dv_detail_left_title` | `Tradition in der Ayurveda-Küche` | DV Detail Grid |
| **DV Facts Title** | `custom.dv_facts_title` | `Zutaten & Fakten` | DV Detail Grid |
| **DV Frequency** | `custom.dv_frequency` | `Täglich morgens` | Recipe Preparation |
| **DV Related Products Subheading** | `custom.dv_related_products_subheading` | `Sanfte Ergänzungen für den Tag.` | DV Complete Ritual |
| **DV Product Category Label** | `custom.dv_product_category_label` | `MORGEN \| AKTIVIEREN` | DV Complete Ritual (shown on other products) |

---

## Multi-line Text Metafields

| Metafield Name | Namespace & Key | Value (Example) | Used In Section |
|---------------|----------------|-----------------|----------------|
| **DV Product Quote** | `custom.dv_product_quote` | `Ich starte clever und klar in den Tag. Für Energie, Fokus & innere Wärme.` | DV Main Product |
| **DV Traditional Benefits** | `custom.dv_traditional_benefits` | `Traditionell geschätzt für Energie & Fokus\nWärmend und aktivierend\nUnterstützt morgendliche Klarheit` | DV Story Card (fallback) |
| **DV Taste Character** | `custom.dv_taste_character` | `Warm und würzig mit einer leicht scharfen Note. Die Kurkuma gibt eine goldene Farbe, Ingwer sorgt für Frische.` | Recipe Preparation |
| **DV Pairing Ideas** | `custom.dv_pairing_ideas` | `Passt zu: Hafermilch, Mandelmilch, Kokosmilch\nVerfeinern mit: Kokosöl, Honig, Zimt` | Recipe Preparation |
| **DV Serving Suggestion** | `custom.dv_serving_suggestion` | `Portion: 1 TL (~3g) pro Tasse\nOptimal: Morgens als Start-Ritual\nAuch: Als warme Gewürzmischung für Gerichte` | Recipe Preparation |

---

## Rich Text Metafields

| Metafield Name | Namespace & Key | Value (Example) | Used In Section |
|---------------|----------------|-----------------|----------------|
| **DV Story Content** | `custom.dv_story_content` | Rich text content about the fox and Golden Boost | DV Story Card |
| **DV Detail Left Body** | `custom.dv_detail_left_body` | Rich text tradition/background content | DV Detail Grid |
| **DV First Ingredients** | `custom.dv_first_ingredients` | Rich text ingredients list with formatting | DV Detail Grid |
| **DV Allergens & Notes** | `custom.dv_allergens_notes` | Rich text allergens and important notes | DV Detail Grid |
| **DV Compliance Storage** | `custom.dv_compliance_storage` | Rich text storage instructions | DV Compliance Accordion |
| **DV Compliance Legal** | `custom.dv_compliance_legal` | Rich text legal/compliance information | DV Compliance Accordion |

---

## HTML/Multi-line Text (Raw HTML) Metafields

| Metafield Name | Namespace & Key | Value Type | Used In Section |
|---------------|----------------|------------|----------------|
| **DV Nutrition Table** | `custom.dv_nutrition_table` | Multi-line text (paste raw HTML table code) | DV Nutrition Table |

**Example HTML for Nutrition Table**:
```html
<table>
  <tr>
    <th>Nährwertangaben</th>
    <th>pro 100g</th>
  </tr>
  <tr>
    <td>Energie</td>
    <td>1500 kJ / 360 kcal</td>
  </tr>
  <tr>
    <td>Fett</td>
    <td>12 g</td>
  </tr>
  <!-- Add more rows -->
</table>
```

---

## File/Image Metafields (File Reference)

| Metafield Name | Namespace & Key | Value (Example) | Used In Section |
|---------------|----------------|-----------------|----------------|
| **DV Animal Image** | `custom.dv_animal_image` | Upload animal icon/image (fox, panda, koala, butterfly, etc.) | DV Story Card |

---

## MetaObject List Metafields (List of MetaObject References)

| Metafield Name | Namespace & Key | MetaObject Type | Quantity Needed | Used In Section |
|---------------|----------------|-----------------|-----------------|----------------|
| **DV Trust Badges** | `custom.dv_trust_badges` | DV Trust Badge | 3 instances | DV Main Product |
| **DV Ingredient Highlights** | `custom.dv_ingredient_highlights` | DV Ingredient Highlight | As needed (e.g., 8) | DV Detail Grid |
| **DV Ritual Steps** | `custom.dv_ritual_steps` | DV Ritual Step | 3 instances | DV Daily Ritual |
| **DV Recipe Cards** | `custom.dv_recipe_cards` | DV Recipe Card | As needed (e.g., 4) | DV Recipe Cards (Usage Rituals) |
| **DV Product Benefits** | `custom.dv_product_benefits` | DV Product Benefit | 3 instances | DV Product Benefits (Warum Golden Boost?) |
| **DV Purity Promise** | `custom.dv_purity_promise` | DV Purity Promise | 3 instances | DV Purity Promise (Reinheitsversprechen) |

---

## Product Reference List Metafields (List of Product References)

| Metafield Name | Namespace & Key | Products to Select | Used In Section |
|---------------|----------------|-------------------|-----------------|
| **DV Related Products** | `custom.dv_related_products` | Flow & Glow, Moon Rest, Ova Harmony | DV Complete Ritual |

---

## Summary by Section

### DV Main Product Section
- ✅ `dv_product_subtitle` (Single line text)
- ✅ `dv_product_quote` (Multi-line text)
- ✅ `dv_animal_name` (Single line text)
- ✅ `dv_ritual_timing` (Single line text)
- ✅ `dv_preparation_mode` (Single line text)
- ✅ `dv_ritual_duration` (Single line text)
- ✅ `dv_trust_badges` (List of MetaObject References - 3 instances)

### DV Story Card Section
- ✅ `dv_story_title` (Multi-line text - optional)
- ✅ `dv_animal_name` (Single line text - also used here)
- ✅ `dv_animal_image` (File reference - Image)
- ✅ `dv_story_content` (Rich text)
- ✅ `dv_traditional_benefits` (Multi-line text - fallback)

### DV Detail Grid Section
- ✅ `dv_detail_left_title` (Single line text)
- ✅ `dv_detail_left_body` (Rich text)
- ✅ `dv_facts_title` (Single line text)
- ✅ `dv_first_ingredients` (Rich text)
- ✅ `dv_allergens_notes` (Rich text)
- ✅ `dv_ingredient_highlights` (List of MetaObject References)

### DV Daily Ritual Section
- ✅ `dv_ritual_steps` (List of MetaObject References - 3 instances)

### Recipe Preparation Section (if section exists)
- ✅ `dv_animal_name` (Single line text - also used here)
- ✅ `dv_taste_character` (Multi-line text)
- ✅ `dv_pairing_ideas` (Multi-line text)
- ✅ `dv_serving_suggestion` (Multi-line text)
- ✅ `dv_frequency` (Single line text)
- ✅ `dv_recipe_cards` (List of MetaObject References)

### DV Product Benefits Section (NEW - Warum Golden Boost?)
- ✅ `dv_product_benefits` (List of MetaObject References - 3 instances)
- **Note**: DV Product Benefit metaobject must include: `icon` (Single line text - Material Symbols name), `title` (Single line text), `description` (Multi-line text)

### DV Recipe Cards Section (NEW - Usage Rituals)
- ✅ `dv_recipe_cards` (List of MetaObject References - e.g., 4 instances)
- **Note**: DV Recipe Card metaobject must include: `title` (Single line text), `description` (or `body` - Multi-line text or Rich text), and optionally `usage_instruction` (Single line text - for bottom label)

### DV Purity Promise Section (NEW - Reinheitsversprechen)
- ✅ `dv_purity_promise` (List of MetaObject References - 3 instances)
- **Note**: DV Purity Promise metaobject must include: `label` (Single line text - e.g., "Aromen", "Füllstoffe", "100% Bio"), `description` (Single line text - e.g., "Keine Zusätze", "Keine Streckmittel", "Reine Naturkraft"), `show_crossed_out` (Boolean - apply crossed-out styling for Aromen and Füllstoffe)

### DV Nutrition Table Section
- ✅ `dv_nutrition_table` (Multi-line text - raw HTML)

### DV Compliance Accordion Section
- ✅ `dv_compliance_storage` (Rich text)
- ✅ `dv_compliance_legal` (Rich text)

### DV Complete Ritual Section
- ✅ `dv_related_products_subheading` (Single line text)
- ✅ `dv_related_products` (List of Product References)
- ✅ `dv_product_category_label` (Single line text - on related products, not Golden Boost)

---

## MetaObject Instances to Create

### DV Trust Badge Instances (3 needed)
1. "100% Bio & Vegan" (🌿)
2. "Ohne Zusätze" (🌸)
3. "Ayurvedisch inspiriert" (🥛)

### DV Ingredient Highlight Instances (as needed)
- Kurkuma (and others as needed)

### DV Ritual Step Instances (3 needed)
1. Morning Start
2. (Add as needed)
3. (Add as needed)

### DV Recipe Card Instances (as needed, e.g., 4)
- Golden Milk
- Morning Mix
- Winter Baking
- Kitchen Ritual
- **Required Fields**: Each instance must have `title` (Single line text), `description` (or `body` - Multi-line text or Rich text), and optionally `usage_instruction` (Single line text - e.g., "WARM TRINKEN", "ZUM BACKEN")

### DV Product Benefit Instances (3 needed)
1. "Dein Morgenritual" - icon: `wb_sunny` - description: "Starte deinen Tag mit wärmender Energie und fokussierter Klarheit."
2. "Energie für den Tag" - icon: `breakfast_dining` - description: "Natürliche Kraft für deine täglichen Herausforderungen."
3. "Wohlbefinden" - icon: `restaurant` - description: "Erdende Wärme für Körper und Geist."
- **Required Fields**: Each instance must have `icon` (Single line text - Material Symbols name like "wb_sunny", "breakfast_dining", "restaurant"), `title` (Single line text), `description` (Multi-line text)

### DV Purity Promise Instances (3 needed)
1. "Aromen" - description: "Keine Zusätze" - `show_crossed_out`: true
2. "Füllstoffe" - description: "Keine Streckmittel" - `show_crossed_out`: true
3. "100% Bio" - description: "Reine Naturkraft" - `show_crossed_out`: false
- **Required Fields**: Each instance must have `label` (Single line text), `description` (Single line text), `show_crossed_out` (Boolean)

---

## Total Count Summary

- **Single Line Text Metafields**: 11 fields
- **Multi-line Text Metafields**: 5 fields
- **Rich Text Metafields**: 6 fields
- **HTML/Multi-line Text Metafields**: 1 field
- **MetaObject List Metafields**: 6 lists (updated - added DV Product Benefits and DV Purity Promise)
- **Product Reference List Metafields**: 1 list

**Total Metafields to Populate**: 30 fields/lists (updated)

**Total MetaObject Instances to Create**: 
- Trust Badges: 3
- Ingredient Highlights: Variable (as needed, e.g., 8 for 2x2 grid)
- Ritual Steps: 3
- Recipe Cards: Variable (as needed, e.g., 4 for recipe cards grid)
- **Product Benefits: 3** (NEW)
- **Purity Promise: 3** (NEW)

---

## NEW MetaObject Definitions to Create in Shopify Admin

### DV Product Benefit MetaObject
**Type**: MetaObject  
**Namespace**: `custom`  
**Key**: `dv_product_benefit`  
**Fields Required**:
- `icon` (Single line text) - Material Symbols icon name (e.g., "wb_sunny", "breakfast_dining", "restaurant")
- `title` (Single line text) - Benefit title (e.g., "Dein Morgenritual", "Energie für den Tag", "Wohlbefinden")
- `description` (Multi-line text) - Benefit description text

**Product Metafield**: `custom.dv_product_benefits` (List of MetaObject References - DV Product Benefit)

### DV Purity Promise MetaObject
**Type**: MetaObject  
**Namespace**: `custom`  
**Key**: `dv_purity_promise`  
**Fields Required**:
- `label` (Single line text) - Promise label (e.g., "Aromen", "Füllstoffe", "100% Bio")
- `description` (Single line text) - Promise description (e.g., "Keine Zusätze", "Keine Streckmittel", "Reine Naturkraft")
- `show_crossed_out` (Boolean) - Whether to apply crossed-out styling to the label (true for "Aromen" and "Füllstoffe", false for "100% Bio")

**Product Metafield**: `custom.dv_purity_promise` (List of MetaObject References - DV Purity Promise)

---

