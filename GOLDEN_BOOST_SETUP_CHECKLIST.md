# Golden Boost Setup Checklist

Use this checklist to track your progress. Check off items as you complete them.

## Pre-Setup

- [ ] Pull current state: `shopify theme pull --only templates/product.dinveda-premium.json`
- [ ] Verify Golden Boost product exists and is assigned to `dinveda-premium` template

---

## Step 1: Create MetaObject Instances

### DV Trust Badge Instances (3 needed)

- [ ] **Trust Badge 1**: "100% Bio & Vegan" (🌿)
  - Icon Emoji: `🌿`
  - Badge Text: `100 % Bio & vegan`
  
- [ ] **Trust Badge 2**: "Ohne Zusätze" (🌸)
  - Icon Emoji: `🌸`
  - Badge Text: `Ohne Zusätze`
  
- [ ] **Trust Badge 3**: "Ayurvedisch inspiriert" (🥛)
  - Icon Emoji: `🥛`
  - Badge Text: `Ayurvedisch inspiriert`

### DV Ingredient Highlight Instances (create as needed)

- [ ] **Ingredient Highlight 1**: Kurkuma
  - Icon: (upload or emoji)
  - Name: `Kurkuma`
  - Description: `Das "Gold des Ayurveda". Wärmend und erdend.`
  
- [ ] **Ingredient Highlight 2**: (add more as needed)
- [ ] **Ingredient Highlight 3**: (add more as needed)
- [ ] Continue adding ingredient highlights as needed...

### DV Ritual Step Instances (3 needed)

- [ ] **Ritual Step 1**: Morning Start
  - Heading: `Am Morgen`
  - Text: `1 TL Golden Boost in warme Pflanzenmilch oder warmes Wasser einrühren. Langsam trinken und den Tag bewusst beginnen.`
  
- [ ] **Ritual Step 2**: (add heading and text)
  - Heading: `_________`
  - Text: `_________`
  
- [ ] **Ritual Step 3**: (add heading and text)
  - Heading: `_________`
  - Text: `_________`

### DV Recipe Card Instances (create as needed)

- [ ] **Recipe Card 1**: Example Recipe
  - Title: `Sanfter Tee- oder Drink-Moment`
  - Instructions: `1 TL (~3 g) in 200 ml warme Pflanzenmilch oder warmes Wasser einrühren. Optional mit etwas Honig oder Kokosöl verfeinern.`
  
- [ ] **Recipe Card 2**: (add more as needed)
- [ ] Continue adding recipe cards as needed...

---

## Step 2: Populate Product Metafields for Golden Boost

**Location**: Products → Golden Boost → Metafields section

### DV Main Product Section

- [ ] **DV Product Subtitle**: `MORGEN | AKTIVIEREN`
- [ ] **DV Product Quote**: `Ich starte clever und klar in den Tag. Für Energie, Fokus & innere Wärme.`
- [ ] **DV Animal Name**: `Fuchs`
- [ ] **DV Ritual Timing**: `MORGEN | AKTIVIEREN`
- [ ] **DV Preparation Mode**: `Warm`
- [ ] **DV Ritual Duration**: `1-2 Min`
- [ ] **DV Trust Badges** (List): Select 3 Trust Badge instances created in Step 1

### DV Story Card Section

- [ ] **DV Story Title**: `Warum der Fuchs?` (optional - can auto-generate if empty)
- [ ] **DV Story Content** (Rich text): Enter story content about the fox and Golden Boost
- [ ] **DV Traditional Benefits** (Multi-line): Enter benefits (one per line)

### DV Detail Grid Section

- [ ] **DV Detail Left Title**: `Tradition in der Ayurveda-Küche`
- [ ] **DV Detail Left Body** (Rich text): Enter tradition/background content
- [ ] **DV Facts Title**: `Zutaten & Fakten`
- [ ] **DV First Ingredients** (Rich text): Enter ingredients list with formatting
- [ ] **DV Allergens & Notes** (Rich text): Enter allergens and important notes
- [ ] **DV Ingredient Highlights** (List): Select Ingredient Highlight instances created in Step 1

### DV Daily Ritual Section

- [ ] **DV Ritual Steps** (List): Select 3 Ritual Step instances created in Step 1

### Recipe Preparation Section (if section exists in template)

**Note**: Recipe Preparation section may not be in the template yet. Skip if section doesn't exist in theme editor.

- [ ] **DV Taste Character** (Multi-line): Enter taste description
- [ ] **DV Pairing Ideas** (Multi-line): Enter pairing suggestions
- [ ] **DV Serving Suggestion** (Multi-line): Enter serving suggestions
- [ ] **DV Frequency**: `Täglich morgens`
- [ ] **DV Recipe Cards** (List): Select Recipe Card instances created in Step 1

### DV Nutrition Table Section

- [ ] **DV Nutrition Table** (Multi-line text/HTML): Paste HTML table code directly
  - Note: Enter raw HTML code - metafield uses `raw` filter to render HTML
  - Example: `<table><tr><th>Nährwertangaben</th><th>pro 100g</th></tr>...</table>`

### DV Compliance Accordion Section

- [ ] **DV Compliance Storage** (Rich text): Enter storage instructions
  - Example: `Kühl, trocken und lichtgeschützt lagern. Nach dem Öffnen gut verschließen.`
- [ ] **DV Compliance Legal** (Rich text): Enter legal/compliance information
  - Example: `• Kann Spuren von Nüssen enthalten. • Für Kinder weniger geeignet.`

### DV Complete Ritual Section

- [ ] **DV Related Products Subheading**: `Sanfte Ergänzungen für den Tag.`
- [ ] **DV Related Products** (List): Select Flow & Glow, Moon Rest, Ova Harmony
- [ ] **DV Product Category Label**: `MORGEN | AKTIVIEREN`

---

## Step 3: Set Category Labels on Related Products

**Note**: These are set on the OTHER products (not Golden Boost)

- [ ] **Flow & Glow** → "DV Product Category Label": `TAG | ZENTRIEREN`
- [ ] **Moon Rest** → "DV Product Category Label": `ABEND | LOSLASSEN`
- [ ] **Ova Harmony** → "DV Product Category Label": `BALANCE | AUSGLEICHEN`

---

## Step 4: Connect Metafields in Theme Editor (Dynamic Sources)

**Location**: Online Store → Themes → Customize → Golden Boost product page

### DV Main Product Section

- [ ] **Subtitle** → Connect to: `product.metafields.custom.dv_product_subtitle`
- [ ] **Quote** → Connect to: `product.metafields.custom.dv_product_quote`
- [ ] **Animal Name** → Connect to: `product.metafields.custom.dv_animal_name`
- [ ] **Ritual Timing (Tageszeit)** → Connect to: `product.metafields.custom.dv_ritual_timing`
- [ ] **Preparation Mode (Zubereitung)** → Connect to: `product.metafields.custom.dv_preparation_mode`
- [ ] **Ritual Duration (Dauer)** → Connect to: `product.metafields.custom.dv_ritual_duration`
- [ ] **Trust Badges**: ⚠️ Skip (already configured in product metafields - cannot use dynamic source)

### DV Story Card Section

- [ ] **Story Title** → Connect to: `product.metafields.custom.dv_story_title` (optional)
- [ ] **Animal Name** → Connect to: `product.metafields.custom.dv_animal_name`
- [ ] **Story Content** (Rich text) → Connect to: `product.metafields.custom.dv_story_content`
- [ ] **Traditional Benefits (Fallback)** → Connect to: `product.metafields.custom.dv_traditional_benefits`
  - **Note**: This is only used if no checklist blocks are added (see below)

#### Checklist Items (Priority Method - Add via Blocks)

**⚠️ IMPORTANT**: Checklist items should be added via **blocks** in the theme editor, NOT via metafields. Blocks take priority over the Traditional Benefits metafield.

**How to Add Checklist Items:**

1. In the DV Story Card section, scroll down to find the **"Add block"** button
2. Click **"Add block"** → Select **"Checklist Item"** from the list
3. Enter text for the first checklist item (e.g., `Erdende Wärme an kalten Tagen`)
4. Click **"Add block"** again to add more items (up to 5 total)
5. Add additional items:
   - [ ] **Checklist Item 1**: `Erdende Wärme an kalten Tagen`
   - [ ] **Checklist Item 2**: `Einen klaren, fokussierten Start`
   - [ ] **Checklist Item 3**: `Innere Balance und Wohlbefinden`
   - [ ] **Checklist Item 4**: (Add more as needed)
   - [ ] **Checklist Item 5**: (Add more as needed)

**Note**: If you add checklist blocks, the Traditional Benefits metafield will be ignored. Blocks are the preferred method.

### DV Detail Grid Section

- [ ] **Tradition Title** → Connect to: `product.metafields.custom.dv_detail_left_title`
- [ ] **Tradition Intro Text** (Rich text) → Connect to: `product.metafields.custom.dv_detail_left_body`
- [ ] **Facts Title** → Connect to: `product.metafields.custom.dv_facts_title`
- [ ] **Ingredients List** (Rich text) → Connect to: `product.metafields.custom.dv_first_ingredients`
- [ ] **Allergens & Notes** (Rich text) → Connect to: `product.metafields.custom.dv_allergens_notes`
- [ ] **Ingredient Highlights**: ⚠️ Skip (already configured in product metafields - cannot use dynamic source)

### DV Daily Ritual Section

- [ ] **Ritual Steps**: ⚠️ Skip (already configured in product metafields - cannot use dynamic source)

### Recipe Preparation Section

- [ ] **Animal Name** → Connect to: `product.metafields.custom.dv_animal_name`
- [ ] **Taste Character (Geschmack)** → Connect to: `product.metafields.custom.dv_taste_character`
- [ ] **Pairing Ideas (Passt zu)** → Connect to: `product.metafields.custom.dv_pairing_ideas`
- [ ] **Serving Suggestion (Portion)** → Connect to: `product.metafields.custom.dv_serving_suggestion`
- [ ] **Frequency (Häufigkeit)** → Connect to: `product.metafields.custom.dv_frequency`
- [ ] **Recipe Cards**: ⚠️ Skip (already configured in product metafields - cannot use dynamic source)

### DV Nutrition Table Section

- [ ] **Nutrition Table Content**: ⚠️ Note - Reads directly from product metafield (cannot use dynamic source for HTML content)
  - Metafield: `product.metafields.custom.dv_nutrition_table` (Multi-line text with HTML)
  - Fallback: Can paste HTML directly in section setting if metafield is empty

### DV Compliance Accordion Section

- [ ] **Storage Content** (Rich text) → Connect to: `product.metafields.custom.dv_compliance_storage`
- [ ] **Legal Content** (Rich text) → Connect to: `product.metafields.custom.dv_compliance_legal`

### DV Complete Ritual Section

- [ ] **Subheading** → Connect to: `product.metafields.custom.dv_related_products_subheading`
- [ ] **Related Products**: ⚠️ Skip (already configured in product metafields - cannot use dynamic source)

### Final Theme Editor Steps

- [ ] Click **"Save"** in theme editor (top-right)
- [ ] Optionally click **"Publish"** if ready to go live

---

## Step 5: Pull Template Configuration from Shopify

- [ ] Run: `shopify theme pull --only templates/product.dinveda-premium.json`
- [ ] Verify template file is updated locally

---

## Step 6: Verification & Testing

### Frontend Verification

- [ ] Hero section: Subtitle, Quote, Animal Name, Trust Badges all display
- [ ] Story section: Title and content display
- [ ] Detail Grid: Tradition title, body, facts, ingredients, allergens, ingredient highlights all display
- [ ] Daily Ritual: 3 ritual steps display correctly
- [ ] Recipe Preparation: Taste, pairing, serving, frequency, recipe cards all display
- [ ] Complete Ritual: Subheading and related products (Flow & Glow, Moon Rest, Ova Harmony) display
- [ ] Related products show category labels below titles
- [ ] All links work (related products link to their PDPs)

### Troubleshooting (if needed)

- [ ] Check metafield types match (text vs richtext vs multi-line text)
- [ ] Verify metaobject instances are created and selected
- [ ] Check template is assigned correctly
- [ ] Verify dynamic sources are connected
- [ ] Check products are published and available

---

## Step 7: Final Pull

- [ ] Run: `shopify theme pull` (pull all changes)
- [ ] Review changes in local codebase
- [ ] Commit changes if needed

---

## Completion Status

- [ ] **All metaobject instances created** (Step 1)
- [ ] **All metafields populated** (Step 2)
- [ ] **Category labels set on related products** (Step 3)
- [ ] **All dynamic sources connected** (Step 4)
- [ ] **Template configuration pulled** (Step 5)
- [ ] **Frontend verified and working** (Step 6)
- [ ] **Final pull completed** (Step 7)

**Status**: ☐ Not Started | ☐ In Progress | ☐ Complete

**Notes**: 
_________________________________________________
_________________________________________________
_________________________________________________

---

## Quick Reference: CLI Commands

```bash
# Navigate to theme
cd C:\Projects\Shopify\DinVeda_Theme

# Pull template only (after Step 4 - Theme Editor changes)
shopify theme pull --only templates/product.dinveda-premium.json

# Pull all changes (final step)
shopify theme pull

# Dry run (check what will be pulled)
shopify theme pull --dry-run
```

---

## Issues Found? Create New Chat Session

If you encounter any issues that require code changes:
1. Note the specific error/problem
2. Create a new chat session
3. Provide the error details and what you were trying to do
4. I'll help fix the code

