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

## MetaObject List Metafields (List of MetaObject References)

| Metafield Name | Namespace & Key | MetaObject Type | Quantity Needed | Used In Section |
|---------------|----------------|-----------------|-----------------|----------------|
| **DV Trust Badges** | `custom.dv_trust_badges` | DV Trust Badge | 3 instances | DV Main Product |
| **DV Ingredient Highlights** | `custom.dv_ingredient_highlights` | DV Ingredient Highlight | As needed (e.g., 8) | DV Detail Grid |
| **DV Ritual Steps** | `custom.dv_ritual_steps` | DV Ritual Step | 3 instances | DV Daily Ritual |
| **DV Recipe Cards** | `custom.dv_recipe_cards` | DV Recipe Card | As needed | Recipe Preparation |

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

### DV Recipe Card Instances (as needed)
- Example Recipe (and others as needed)

---

## Total Count Summary

- **Single Line Text Metafields**: 11 fields
- **Multi-line Text Metafields**: 5 fields
- **Rich Text Metafields**: 6 fields
- **HTML/Multi-line Text Metafields**: 1 field
- **MetaObject List Metafields**: 4 lists
- **Product Reference List Metafields**: 1 list

**Total Metafields to Populate**: 28 fields/lists

**Total MetaObject Instances to Create**: 
- Trust Badges: 3
- Ingredient Highlights: Variable (as needed)
- Ritual Steps: 3
- Recipe Cards: Variable (as needed)

