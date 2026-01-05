# DV EU Bio Compliance Metafields

**Namespace:** `custom`  
**Owner Resource:** Product  
**Compliance:** EU-Bio-Verordnung 848/2018

## Overview

These metafields are required for EU Bio compliance on product detail pages. All metafields use the `custom.dv_*` namespace to maintain consistency with existing DV metafields.

## Metafield Definitions

### 1. dv_eu_bio_logo
- **Key:** `custom.dv_eu_bio_logo`
- **Type:** File Reference (Image)
- **Description:** EU Bio logo image file
- **Requirements:**
  - Minimum size: 9mm height (34px) - 1:1.5 aspect ratio
  - Must be in same visual field as control code and origin
  - Color: Light Green (Pantone 376) preferred
  - File format: PNG or SVG with transparency
- **Usage:** Displayed in Product Hero and DV Detail Grid sections
- **Example:** EU Bio logo image file

### 2. dv_control_code
- **Key:** `custom.dv_control_code`
- **Type:** Single line text
- **Description:** Control body code number
- **Format:** DE-ÖKO-### (for Germany)
- **Requirements:** Must be in same visual field as EU Bio logo
- **Usage:** Displayed next to EU Bio logo
- **Example:** "DE-ÖKO-037"

### 3. dv_origin
- **Key:** `custom.dv_origin`
- **Type:** Single line text
- **Description:** Place of origin of agricultural raw materials
- **Requirements:** Must be in same visual field as EU Bio logo
- **Usage:** Displayed next to EU Bio logo
- **Examples:**
  - "EU-Landwirtschaft"
  - "Nicht-EU-Landwirtschaft"
  - "EU-/Nicht-EU-Landwirtschaft"
  - "Deutsche Landwirtschaft"
  - "Indien Landwirtschaft"

### 4. dv_first_ingredients
- **Key:** `custom.dv_first_ingredients`
- **Type:** Rich text
- **Description:** First ingredients list with organic marking
- **Format:** Ingredients with asterisk (*) after organic ingredients
- **Requirements:** 
  - Must include footnote: "* aus ökologischem Landbau"
  - Organic ingredients must be marked with *
- **Usage:** Displayed in DV Detail Grid right column (first section)
- **Example:**
  ```
  Kurkuma Pulver*, Ingwer Pulver*, Zimt Pulver*
  ```

### 5. dv_verkehrsbezeichnung
- **Key:** `custom.dv_verkehrsbezeichnung`
- **Type:** Single line text
- **Description:** Product designation (Verkehrsbezeichnung)
- **Requirements:** Mandatory for EU Bio products
- **Usage:** Displayed in DV EU Bio Legal section
- **Example:** "Bio-Nahrungsergänzungsmittel auf pflanzlicher Basis"

### 6. dv_mhd
- **Key:** `custom.dv_mhd`
- **Type:** Single line text
- **Description:** Best before date (Mindesthaltbarkeitsdatum)
- **Requirements:** Required for prepackaged products
- **Usage:** Displayed in DV EU Bio Legal section
- **Example:** "Mindestens haltbar bis: 12/2026"

### 7. dv_verzehrempfehlung
- **Key:** `custom.dv_verzehrempfehlung`
- **Type:** Rich text
- **Description:** Usage recommendation (separate from recipe)
- **Requirements:** Recommended for food supplements
- **Usage:** Displayed in DV EU Bio Legal section
- **Example:** "2× täglich 3 g mit warmem Wasser. Nicht überschreiten."

### 8. dv_netto_gewicht
- **Key:** `custom.dv_netto_gewicht`
- **Type:** Single line text
- **Description:** Net weight
- **Requirements:** Mandatory for prepackaged products
- **Usage:** Displayed in DV EU Bio Legal section
- **Example:** "100 g"

### 9. dv_verantwortlicher
- **Key:** `custom.dv_verantwortlicher`
- **Type:** Rich text
- **Description:** Responsible food business operator information
- **Requirements:** Mandatory for EU products
- **Usage:** Displayed in DV EU Bio Legal section
- **Example:** "Ayurveda GmbH, Musterstraße 12, 12345 Berlin"

## Access in Liquid

Once these metafields are created in Shopify Admin, access them in Liquid templates:

```liquid
{{ product.metafields.custom.dv_eu_bio_logo }}
{{ product.metafields.custom.dv_control_code }}
{{ product.metafields.custom.dv_origin }}
{{ product.metafields.custom.dv_first_ingredients | metafield_tag }}
{{ product.metafields.custom.dv_verkehrsbezeichnung }}
{{ product.metafields.custom.dv_mhd }}
{{ product.metafields.custom.dv_verzehrempfehlung | metafield_tag }}
{{ product.metafields.custom.dv_netto_gewicht }}
{{ product.metafields.custom.dv_verantwortlicher | metafield_tag }}
```

## Creating Metafields in Shopify Admin

1. Go to **Settings** → **Custom data** → **Products**
2. Click **Add definition**
3. For each metafield:
   - **Name and description:** Use the name and description from above
   - **Namespace and key:** Use `custom` as namespace, and the key (e.g., `dv_eu_bio_logo`)
   - **Type:** Select the appropriate type:
     - File Reference for `dv_eu_bio_logo`
     - Single line text for text fields
     - Rich text for richtext fields
   - **Validation:** Leave empty (no specific validations required)

## EU Compliance Requirements

### EU-Bio-Verordnung 848/2018 Requirements

1. **EU Bio Logo:**
   - Must be displayed on prepackaged products
   - Minimum size: 9mm height (34px)
   - Aspect ratio: 1:1.5 (height:width)
   - Must be in same visual field as control code and origin

2. **Control Code:**
   - Format: Country code-ÖKO-### (e.g., DE-ÖKO-037)
   - Must be in same visual field as EU Bio logo

3. **Origin:**
   - Must indicate where agricultural raw materials were produced
   - Must be in same visual field as EU Bio logo

4. **Ingredients List:**
   - Organic ingredients must be marked with asterisk (*)
   - Footnote required: "* aus ökologischem Landbau"

5. **Legal Information:**
   - Verkehrsbezeichnung (product designation)
   - MHD (best before date) - for prepackaged products
   - Net weight - for prepackaged products
   - Verantwortlicher (responsible operator) - mandatory

## Notes

- All metafields are optional but recommended for EU Bio compliance
- Content must comply with EU/Germany regulations
- Metafields follow the same priority pattern as existing DV metafields:
  1. Product metafield (custom.dv_*)
  2. Section setting fallback
  3. Hide section if both empty (unless show_when_empty is enabled)

## Related Sections

- `dinveda-product-hero` - Uses: `dv_eu_bio_logo`, `dv_control_code`, `dv_origin`
- `dv-detail-grid` - Uses: `dv_eu_bio_logo`, `dv_control_code`, `dv_origin`, `dv_first_ingredients`
- `dv-eu-bio-legal` - Uses: `dv_verkehrsbezeichnung`, `dv_mhd`, `dv_netto_gewicht`, `dv_verantwortlicher`, `dv_verzehrempfehlung`

