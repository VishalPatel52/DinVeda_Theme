# Golden Boost - Complete Metafield & MetaObject Setup Guide

## Overview

This guide will walk you through populating all metafields and metaobjects for **Golden Boost** product. Follow each step carefully. Use `shopify theme pull` when indicated to sync changes back to your local codebase.

## Prerequisites Checklist

- [x] All product metafields are created in Shopify Admin
- [x] All metaobject definitions are created (DV Trust Badge, DV Ingredient Highlight, DV Ritual Step, DV Recipe Card)
- [ ] Golden Boost product exists in Shopify
- [ ] Golden Boost is assigned to `dinveda-premium` template
- [ ] You have access to Shopify Admin
- [ ] Shopify CLI is set up and authenticated

## Step 1: Pull Current State from Shopify

**⚠️ IMPORTANT: Always pull first to sync any existing data**

```bash
cd C:\Projects\Shopify\DinVeda_Theme
shopify theme pull --only templates/product.dinveda-premium.json
```

This ensures your local template matches what's in Shopify before making changes.

---

## Step 2: Create MetaObject Instances for Golden Boost

### 2.1 Create DV Trust Badge Instances (3 badges needed)

**Location**: Shopify Admin → Content → Metaobjects → DV Trust Badge

Create 3 instances with this example content:

#### Trust Badge 1: "100% Bio & Vegan"
- **Icon Emoji**: `🌿`
- **Badge Text**: `100 % Bio & vegan`
- **Note**: Save and note the metaobject ID/name for later

#### Trust Badge 2: "Ohne Zusätze"
- **Icon Emoji**: `🌸`
- **Badge Text**: `Ohne Zusätze`
- **Note**: Save and note the metaobject ID/name

#### Trust Badge 3: "Ayurvedisch inspiriert"
- **Icon Emoji**: `🥛`
- **Badge Text**: `Ayurvedisch inspiriert`
- **Note**: Save and note the metaobject ID/name

**Result**: You should have 3 DV Trust Badge instances ready to assign to Golden Boost

### 2.2 Create DV Ingredient Highlight Instances (as needed)

**Location**: Shopify Admin → Content → Metaobjects → DV Ingredient Highlight

For Golden Boost, create ingredient highlight instances for key ingredients. Here are example ingredients you might include:

#### Ingredient Highlight 1: Kurkuma (Turmeric)
- **Icon Image**: Upload or use emoji 🟡
- **Name**: `Kurkuma`
- **Description**: `Das "Gold des Ayurveda". Wärmend und erdend.`

#### Ingredient Highlight 2: (Add more as needed based on your product)
- **Icon Image**: (as needed)
- **Name**: (Ingredient name)
- **Description**: (Short description)

**Note**: Create as many ingredient highlights as needed for Golden Boost. You can add more later.

### 2.3 Create DV Ritual Step Instances (3 steps needed)

**Location**: Shopify Admin → Content → Metaobjects → DV Ritual Step

Create 3 instances for the daily ritual:

#### Ritual Step 1: Morning Start
- **Heading**: `Am Morgen`
- **Text**: `1 TL Golden Boost in warme Pflanzenmilch oder warmes Wasser einrühren. Langsam trinken und den Tag bewusst beginnen.`

#### Ritual Step 2: (Add as needed)
- **Heading**: (Step heading)
- **Text**: (Step description)

#### Ritual Step 3: (Add as needed)
- **Heading**: (Step heading)
- **Text**: (Step description)

### 2.4 Create DV Recipe Card Instances (as needed)

**Location**: Shopify Admin → Content → Metaobjects → DV Recipe Card

Create recipe card instances for Golden Boost:

#### Recipe Card 1: Example Recipe
- **Title**: `Sanfter Tee- oder Drink-Moment`
- **Instructions**: `1 TL (~3 g) in 200 ml warme Pflanzenmilch oder warmes Wasser einrühren. Optional mit etwas Honig oder Kokosöl verfeinern.`

**Note**: Create as many recipe cards as needed for Golden Boost.

---

## Step 3: Populate Product Metafields for Golden Boost

**Location**: Shopify Admin → Products → Golden Boost → Scroll to Metafields section

### 3.1 DV Main Product Section Metafields

#### DV Product Subtitle
- **Type**: Single line text
- **Value**: `MORGEN | AKTIVIEREN`
- **Used in**: Hero section subtitle

#### DV Product Quote
- **Type**: Multi-line text
- **Value**: `Ich starte clever und klar in den Tag. Für Energie, Fokus & innere Wärme.`
- **Used in**: Hero section quote

#### DV Animal Name
- **Type**: Single line text
- **Value**: `Fuchs`
- **Used in**: Hero section, Story section (auto-generates "Warum der Fuchs?")

#### DV Ritual Timing
- **Type**: Single line text
- **Value**: `MORGEN | AKTIVIEREN`
- **Used in**: Ritual glance row

#### DV Preparation Mode
- **Type**: Single line text
- **Value**: `Warm`
- **Used in**: Ritual glance row

#### DV Ritual Duration
- **Type**: Single line text
- **Value**: `1-2 Min`
- **Used in**: Ritual glance row

#### DV Trust Badges (List of MetaObject References)
- **Type**: List of metaobject references
- **Metaobject Type**: DV Trust Badge
- **Action**: Click to select
- **Select**: The 3 Trust Badge instances you created in Step 2.1
- **Used in**: Trust badges section below buy box

### 3.2 DV Story Card Section Metafields

#### DV Story Title
- **Type**: Multi-line text
- **Value**: `Warum der Fuchs?`
- **Note**: Can be left blank if you want auto-generation from animal name
- **Used in**: Story section heading

#### DV Story Content
- **Type**: Rich text
- **Value**: Enter your story content about the fox and Golden Boost in the rich text editor
- **Example**: `Der Fuchs steht für Klugheit und Wachheit. Genau wie Golden Boost...` (Expand with your full story)
- **Used in**: Story section main content

#### DV Traditional Benefits
- **Type**: Multi-line text
- **Value**: Enter one benefit per line (used as fallback if checklist blocks are empty)
- **Example**:
  ```
  Traditionell geschätzt für Energie & Fokus
  Wärmend und aktivierend
  Unterstützt morgendliche Klarheit
  ```
- **Used in**: Story section checklist (fallback)

### 3.3 DV Detail Grid Section Metafields

#### DV Detail Left Title
- **Type**: Single line text
- **Value**: `Tradition in der Ayurveda-Küche`
- **Used in**: Left column tradition section

#### DV Detail Left Body
- **Type**: Rich text
- **Value**: Enter tradition/background content in rich text editor
- **Example**: `Golden Boost verbindet die Weisheit des Ayurveda mit...` (Expand with your content)
- **Used in**: Left column tradition section

#### DV Facts Title
- **Type**: Single line text
- **Value**: `Zutaten & Fakten`
- **Used in**: Right column facts section

#### DV First Ingredients
- **Type**: Rich text
- **Value**: Enter ingredients list with formatting in rich text editor
- **Example**: 
  ```
  • Kurkuma* (55%)
  • Ingwer* (25%)
  • Schwarzer Pfeffer* (10%)
  • Weitere Gewürze* (10%)
  ```
- **Used in**: Right column ingredients list

#### DV Allergens & Notes
- **Type**: Rich text
- **Value**: Enter allergens and important notes in rich text editor
- **Example**: 
  ```
  *aus kontrolliert biologischem Anbau
  
  Enthält: Kann Spuren von Nüssen enthalten.
  ```
- **Used in**: Right column allergens section

#### DV Ingredient Highlights (List of MetaObject References)
- **Type**: List of metaobject references
- **Metaobject Type**: DV Ingredient Highlight
- **Action**: Click to select
- **Select**: The Ingredient Highlight instances you created in Step 2.2
- **Used in**: Left column ingredient highlights grid

### 3.4 DV Daily Ritual Section Metafields

#### DV Ritual Steps (List of MetaObject References)
- **Type**: List of metaobject references
- **Metaobject Type**: DV Ritual Step
- **Action**: Click to select
- **Select**: The 3 Ritual Step instances you created in Step 2.3
- **Used in**: Daily ritual section (3-step cards)

### 3.5 Recipe Preparation Section Metafields (if section is added to template)

**Note**: Recipe Preparation section (`dinveda-recipe-preparation`) may need to be added to the template. If it's not showing in theme editor, we'll add it later.

#### DV Taste Character
- **Type**: Multi-line text
- **Value**: Enter taste description
- **Example**: 
  ```
  Warm und würzig mit einer leicht scharfen Note. 
  Die Kurkuma gibt eine goldene Farbe, Ingwer sorgt für Frische.
  ```
- **Used in**: Recipe preparation section

#### DV Pairing Ideas
- **Type**: Multi-line text
- **Value**: Enter pairing suggestions
- **Example**: 
  ```
  Passt zu: Hafermilch, Mandelmilch, Kokosmilch
  Verfeinern mit: Kokosöl, Honig, Zimt
  ```
- **Used in**: Recipe preparation section

#### DV Serving Suggestion
- **Type**: Multi-line text
- **Value**: Enter serving suggestions
- **Example**: 
  ```
  Portion: 1 TL (~3g) pro Tasse
  Optimal: Morgens als Start-Ritual
  Auch: Als warme Gewürzmischung für Gerichte
  ```
- **Used in**: Recipe preparation section

#### DV Frequency
- **Type**: Single line text
- **Value**: `Täglich morgens`
- **Used in**: Recipe preparation section

#### DV Recipe Cards (List of MetaObject References)
- **Type**: List of metaobject references
- **Metaobject Type**: DV Recipe Card
- **Action**: Click to select
- **Select**: The Recipe Card instances you created in Step 2.4
- **Used in**: Recipe cards section

### 3.6 DV Nutrition Table Section Metafields

#### DV Nutrition Table
- **Type**: Multi-line text (for HTML table)
- **Value**: Paste HTML table code directly (nutrition facts table)
- **Example HTML**: 
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
    <!-- Add more rows as needed -->
  </table>
  ```
- **Note**: Enter raw HTML code directly - metafield uses `raw` filter to render HTML
- **Used in**: Nutrition table accordion section

### 3.7 DV Compliance Accordion Section Metafields

#### DV Compliance Storage
- **Type**: Rich text
- **Value**: Enter storage instructions in rich text editor
- **Example**: 
  ```
  Kühl, trocken und lichtgeschützt lagern. Nach dem Öffnen gut verschließen.
  ```
- **Used in**: Compliance accordion storage section

#### DV Compliance Legal
- **Type**: Rich text
- **Value**: Enter legal/compliance information in rich text editor
- **Example**: 
  ```
  • Kann Spuren von Nüssen, Soja, Senf, Sesam enthalten.
  • Für Kinder weniger geeignet.
  • Nicht empfohlen für Schwangere oder Stillende.
  ```
- **Used in**: Compliance accordion legal section

### 3.8 DV Complete Ritual Section Metafields

#### DV Related Products Subheading
- **Type**: Single line text
- **Value**: `Sanfte Ergänzungen für den Tag.`
- **Used in**: Complete Ritual section subheading

#### DV Related Products (List of Product References)
- **Type**: List of product references
- **Action**: Click to select products
- **Select**: 
  - **Flow & Glow**
  - **Moon Rest**
  - **Ova Harmony**
- **Note**: These are the other 3 products in your portfolio
- **Used in**: Complete Ritual section related products

#### DV Product Category Label
- **Type**: Single line text
- **Value**: `MORGEN | AKTIVIEREN`
- **Note**: This appears when Golden Boost is shown as a related product on other PDPs
- **Used in**: Related products cards (on other product pages)

---

## Step 4: Connect Metafields in Theme Editor (Dynamic Sources)

**⚠️ IMPORTANT**: Metaobject lists cannot be connected via "Connect dynamic source" - they must be configured in product metafields (Step 3). Only regular metafields can use dynamic source.

**Location**: Shopify Admin → Online Store → Themes → Customize → Navigate to a Golden Boost product page

### 4.1 Connect DV Main Product Section

1. Click on **"DV Main Product"** section in the theme editor
2. For each field with "Connect dynamic source" option:
   - **Subtitle**: Click "Connect dynamic source" (database icon) → Select `product.metafields.custom.dv_product_subtitle`
   - **Quote**: Click "Connect dynamic source" → Select `product.metafields.custom.dv_product_quote`
   - **Animal Name**: Click "Connect dynamic source" → Select `product.metafields.custom.dv_animal_name`
   - **Ritual Timing (Tageszeit)**: Click "Connect dynamic source" → Select `product.metafields.custom.dv_ritual_timing`
   - **Preparation Mode (Zubereitung)**: Click "Connect dynamic source" → Select `product.metafields.custom.dv_preparation_mode`
   - **Ritual Duration (Dauer)**: Click "Connect dynamic source" → Select `product.metafields.custom.dv_ritual_duration`

3. **Trust Badges**: 
   - ⚠️ **Skip this** - Already configured in Step 3.1 (cannot use dynamic source for metaobject lists)
   - The section automatically reads from `product.metafields.custom.dv_trust_badges`

4. Click **"Save"**

### 4.2 Connect DV Story Card Section

1. Click on **"DV Story Card"** section
2. Connect dynamic sources:
   - **Story Title**: Click "Connect dynamic source" → Select `product.metafields.custom.dv_story_title` (optional - can auto-generate if empty)
   - **Animal Name**: Click "Connect dynamic source" → Select `product.metafields.custom.dv_animal_name`
   - **Story Content** (Rich text field): Click "Connect dynamic source" → Select `product.metafields.custom.dv_story_content`
   - **Traditional Benefits** (fallback): Click "Connect dynamic source" → Select `product.metafields.custom.dv_traditional_benefits`

3. Click **"Save"**

### 4.3 Connect DV Detail Grid Section

1. Click on **"DV Detail Grid"** section
2. Connect dynamic sources:
   - **Tradition Title**: Click "Connect dynamic source" → Select `product.metafields.custom.dv_detail_left_title`
   - **Tradition Intro Text** (Rich text): Click "Connect dynamic source" → Select `product.metafields.custom.dv_detail_left_body`
   - **Facts Title**: Click "Connect dynamic source" → Select `product.metafields.custom.dv_facts_title`
   - **Ingredients List** (Rich text): Click "Connect dynamic source" → Select `product.metafields.custom.dv_first_ingredients`
   - **Allergens & Notes** (Rich text): Click "Connect dynamic source" → Select `product.metafields.custom.dv_allergens_notes`

3. **Ingredient Highlights**: 
   - ⚠️ **Skip this** - Already configured in Step 3.3 (cannot use dynamic source for metaobject lists)
   - The section automatically reads from `product.metafields.custom.dv_ingredient_highlights`

4. Click **"Save"**

### 4.4 Connect DV Daily Ritual Section

1. Click on **"DV Daily Ritual"** section
2. **Ritual Steps**: 
   - ⚠️ **Skip this** - Already configured in Step 3.4 (cannot use dynamic source for metaobject lists)
   - The section automatically reads from `product.metafields.custom.dv_ritual_steps`

3. Click **"Save"**

### 4.5 Connect Recipe Preparation Section (if section exists in template)

**Note**: If Recipe Preparation section is not visible in theme editor, skip this step for now. We may need to add the section to the template first.

1. Click on **"Recipe Preparation"** section (or "DV Recipe Preparation")
2. Connect dynamic sources:
   - **Animal Name**: Click "Connect dynamic source" → Select `product.metafields.custom.dv_animal_name`
   - **Taste Character (Geschmack)**: Click "Connect dynamic source" → Select `product.metafields.custom.dv_taste_character`
   - **Pairing Ideas (Passt zu)**: Click "Connect dynamic source" → Select `product.metafields.custom.dv_pairing_ideas`
   - **Serving Suggestion (Portion)**: Click "Connect dynamic source" → Select `product.metafields.custom.dv_serving_suggestion`
   - **Frequency (Häufigkeit)**: Click "Connect dynamic source" → Select `product.metafields.custom.dv_frequency`

3. **Recipe Cards**: 
   - ⚠️ **Skip this** - Already configured in Step 3.5 (cannot use dynamic source for metaobject lists)
   - The section automatically reads from `product.metafields.custom.dv_recipe_cards`

4. Click **"Save"**

### 4.6 Connect DV Nutrition Table Section

1. Click on **"DV Nutrition Table"** section
2. **Nutrition Table Content**: 
   - ⚠️ **Note**: This section reads from product metafield `product.metafields.custom.dv_nutrition_table` (Multi-line text with HTML)
   - Cannot use "Connect dynamic source" - must be configured directly in product metafields
   - The section automatically reads from the metafield if it exists
   - Fallback: Can paste HTML directly in section setting (if metafield is empty)

3. Click **"Save"**

### 4.7 Connect DV Compliance Accordion Section

1. Click on **"DV Compliance Accordion"** section
2. Connect dynamic sources:
   - **Storage Content** (Rich text): Click "Connect dynamic source" → Select `product.metafields.custom.dv_compliance_storage`
   - **Legal Content** (Rich text): Click "Connect dynamic source" → Select `product.metafields.custom.dv_compliance_legal`

3. Click **"Save"**

### 4.8 Connect DV Complete Ritual Section

1. Click on **"DV Complete Ritual"** section
2. Connect dynamic sources:
   - **Subheading**: Click "Connect dynamic source" → Select `product.metafields.custom.dv_related_products_subheading`

3. **Related Products**: 
   - ⚠️ **Skip this** - Already configured in Step 3.6 (cannot use dynamic source for product reference lists)
   - The section automatically reads from `product.metafields.custom.dv_related_products`

4. Click **"Save"**

### 4.9 Publish Theme Changes

1. Click **"Save"** in the top-right corner of the theme editor
2. Optionally click **"Publish"** if you're ready to go live

---

## Step 5: Pull Template Configuration from Shopify

**⚠️ IMPORTANT: Pull after completing Step 4 to sync template configuration**

```bash
cd C:\Projects\Shopify\DinVeda_Theme
shopify theme pull --only templates/product.dinveda-premium.json
```

This syncs the dynamic source connections you made in the theme editor back to your local template file.

---

## Step 6: Verify Everything Works

### 6.1 Check on Frontend

1. Go to your Golden Boost product page on the live/preview store
2. Verify each section displays content:
   - ✅ Hero section shows subtitle, quote, animal name, trust badges
   - ✅ Story section shows title and content
   - ✅ Detail grid shows tradition title, body, facts, ingredients, allergens, ingredient highlights
   - ✅ Daily ritual shows 3 ritual steps
   - ✅ Recipe preparation shows taste, pairing, serving, frequency, recipe cards
   - ✅ Complete ritual shows subheading and related products (Flow & Glow, Moon Rest, Ova Harmony)

### 6.2 Troubleshooting Checklist

**Issue: Metafield not showing in dynamic source list**
- Check: Metafield exists in Settings → Custom data → Products
- Check: Namespace is `custom` and key matches (e.g., `dv_product_subtitle`)
- Check: Metafield type matches (text, richtext, etc.)

**Issue: Metaobject list not appearing**
- Check: Metaobject instances are created and selected in product metafields (Step 3)
- Check: Metaobject definition exists in Settings → Custom data → Metaobjects
- Check: Product metafield is of type "List of metaobject references"
- **Action**: Re-check Step 3.1, 3.3, 3.4, 3.5 where metaobject lists are configured

**Issue: Rich text not rendering correctly**
- Check: Metafield type in Shopify is "Rich text" (not "Multi-line text")
- Check: Content was entered using the richtext editor in Shopify Admin
- Check: Section setting type is `richtext` in schema

**Issue: Related products not showing**
- Check: DV Related Products metafield is configured in Step 3.6
- Check: Products are selected (Flow & Glow, Moon Rest, Ova Harmony)
- Check: Selected products are published and available
- Check: Category labels are set on related products themselves (see Step 7)

---

## Step 7: Set Category Labels on Related Products

**Note**: This step is for the OTHER products (Flow & Glow, Moon Rest, Ova Harmony) so they display correctly when shown as related products on Golden Boost's page.

### 7.1 Flow & Glow Category Label

1. Go to **Products** → **Flow & Glow** → Metafields
2. Find **"DV Product Category Label"**
3. Enter: `TAG | ZENTRIEREN`
4. Save

### 7.2 Moon Rest Category Label

1. Go to **Products** → **Moon Rest** → Metafields
2. Find **"DV Product Category Label"**
3. Enter: `ABEND | LOSLASSEN`
4. Save

### 7.3 Ova Harmony Category Label

1. Go to **Products** → **Ova Harmony** → Metafields
2. Find **"DV Product Category Label"**
3. Enter: `BALANCE | AUSGLEICHEN`
4. Save

**Result**: When these products appear as related products on Golden Boost's page, they'll show their category labels below the title.

---

## Step 8: Final Pull and Verification

### 8.1 Pull All Changes

```bash
cd C:\Projects\Shopify\DinVeda_Theme
shopify theme pull
```

This pulls:
- Template configurations (dynamic source connections)
- Any metafield values (if synced)
- Theme settings

### 8.2 Final Checklist

- [ ] All metafields populated for Golden Boost
- [ ] All metaobject instances created and assigned to Golden Boost
- [ ] All dynamic sources connected in theme editor
- [ ] Template pulled from Shopify to local
- [ ] Related products configured (Flow & Glow, Moon Rest, Ova Harmony)
- [ ] Category labels set on related products
- [ ] Frontend verified - all sections display correctly
- [ ] No errors or missing content

---

## Summary: What We Configured

### Metafields Populated (Step 3):
✅ DV Product Subtitle  
✅ DV Product Quote  
✅ DV Animal Name  
✅ DV Ritual Timing  
✅ DV Preparation Mode  
✅ DV Ritual Duration  
✅ DV Story Title  
✅ DV Story Content  
✅ DV Traditional Benefits  
✅ DV Detail Left Title  
✅ DV Detail Left Body  
✅ DV Facts Title  
✅ DV First Ingredients  
✅ DV Allergens & Notes  
✅ DV Taste Character  
✅ DV Pairing Ideas  
✅ DV Serving Suggestion  
✅ DV Frequency  
✅ DV Related Products Subheading  

### Metaobject Lists Configured (Step 3):
✅ DV Trust Badges (3 instances)  
✅ DV Ingredient Highlights (as needed)  
✅ DV Ritual Steps (3 instances)  
✅ DV Recipe Cards (as needed)  

### Product Reference Lists Configured (Step 3):
✅ DV Related Products (Flow & Glow, Moon Rest, Ova Harmony)  

### Dynamic Sources Connected (Step 4):
✅ All text/richtext metafields connected via theme editor  

### Category Labels Set (Step 7):
✅ Flow & Glow: `TAG | ZENTRIEREN`  
✅ Moon Rest: `ABEND | LOSLASSEN`  
✅ Ova Harmony: `BALANCE | AUSGLEICHEN`  

---

## Next Steps After Golden Boost is Complete

Once Golden Boost is fully configured and tested:

1. **Repeat this process** for the other 3 products:
   - Flow & Glow (Panda)
   - Moon Rest (Koala)
   - Ova Harmony (Butterfly)

2. **Update Related Products** on each product:
   - Each product should show the other 3 products as related products

3. **Set Category Labels** on each product:
   - Golden Boost: `MORGEN | AKTIVIEREN`
   - Flow & Glow: `TAG | ZENTRIEREN`
   - Moon Rest: `ABEND | LOSLASSEN`
   - Ova Harmony: `BALANCE | AUSGLEICHEN`

---

## CLI Commands Quick Reference

```bash
# Navigate to theme directory
cd C:\Projects\Shopify\DinVeda_Theme

# Pull only template configuration
shopify theme pull --only templates/product.dinveda-premium.json

# Pull all changes (recommended after completing all steps)
shopify theme pull

# Check what will be pulled (dry run)
shopify theme pull --dry-run
```

---

## Notes

- **Metaobject lists** must be configured in product metafields (cannot use "Connect dynamic source" in theme editor)
- **Regular metafields** can be connected via "Connect dynamic source" in theme editor
- **Rich text** metafields require content to be entered using Shopify's richtext editor
- **Product reference lists** (Related Products) must be configured in product metafields
- **Category labels** are set on each product individually, not on the product showing related products
- Always pull from Shopify after making changes in theme editor to sync template configuration

---

## If Something Doesn't Work

If you encounter issues:
1. Check the troubleshooting section above (Step 6.2)
2. Verify metafield types match (text vs richtext vs multi-line text)
3. Check that metaobject instances are created and selected
4. Verify template is assigned correctly
5. **If code changes are needed**, create a new chat session and I'll help fix it

Good luck! 🚀

