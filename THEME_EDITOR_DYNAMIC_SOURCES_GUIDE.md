# Theme Editor Dynamic Sources Guide - DinVeda Premium Template

## Overview
All product-specific content in the `dinveda-premium` template can now be connected to metafields and metaobjects via Shopify Theme Editor dynamic sources. This allows theme editors to select which metafields to use for each product without hardcoding.

## How to Connect Metafields & MetaObjects in Theme Editor

### Step-by-Step Process

1. **Open Theme Editor:**
   - Go to Shopify Admin → Online Store → Themes
   - Click "Customize" on your active theme
   - Navigate to a product page using the `dinveda-premium` template

2. **Select a Section:**
   - Click on any section (e.g., "DV Main Product", "DV Story Card", etc.)

3. **Connect Dynamic Source:**
   - Find the setting field you want to connect (e.g., "Subtitle", "Quote", etc.)
   - Click the **"Connect dynamic source"** button (database icon) next to the field
   - Select the appropriate metafield from the list (e.g., `product.metafields.custom.dv_product_subtitle`)
   - Save

4. **For MetaObject Lists (Trust Badges, Ingredient Highlights, Ritual Steps, Recipe Cards):**
   - ⚠️ **Important**: Metaobject list metafields cannot be connected via "Connect dynamic source" in theme editor
   - These must be configured per product in the product's metafields section:
     1. Go to **Products** → Select your product
     2. Scroll to the **Metafields** section
     3. Find the metaobject list metafield (e.g., "DV Trust Badges")
     4. Select the metaobject instances you want to use
   - The section code automatically reads from the product metafield once configured
   - Alternatively, use blocks as a fallback option (available in theme editor)

5. **For Product Reference Lists (Related Products):**
   - ⚠️ **Important**: Product reference list metafields cannot be connected via "Connect dynamic source" in theme editor
   - These must be configured per product in the product's metafields section:
     1. Go to **Products** → Select your product (e.g., "Golden Boost")
     2. Scroll to the **Metafields** section
     3. Find the product reference list metafield (e.g., "DV Related Products")
     4. Select the products you want to show as related products (e.g., Flow and Glow, Moon Rest, Ova Harmony)
     5. Save
   - Each product in the list automatically links to its own product detail page
   - The section code automatically reads from the product metafield once configured
   - Each product (Golden Boost, Flow and Glow, etc.) can have its own set of related products
   - Alternatively, use blocks as a fallback option (available in theme editor)

## Section-by-Section Connection Guide

### 1. DV Main Product Section

**Settings to Connect:**
- **Subtitle** → Connect to: `product.metafields.custom.dv_product_subtitle` (DV Product Subtitle)
- **Quote** → Connect to: `product.metafields.custom.dv_product_quote` (DV Product Quote)
- **Animal Name** → Connect to: `product.metafields.custom.dv_animal_name` (DV Animal Name)
- **Ritual Timing (Tageszeit)** → Connect to: `product.metafields.custom.dv_ritual_timing` (DV Ritual Timing)
- **Preparation Mode (Zubereitung)** → Connect to: `product.metafields.custom.dv_preparation_mode` (DV Preparation Mode)
- **Ritual Duration (Dauer)** → Connect to: `product.metafields.custom.dv_ritual_duration` (DV Ritual Duration)
- **Trust Badges** (MetaObject List) → ⚠️ Configure in product metafields: Products → [Product] → Metafields → "DV Trust Badges" → Select instances. Cannot use "Connect dynamic source" for metaobject lists.

**Fallback:**
- If metaobject list is not configured, you can use blocks as fallback (click "Add block" → "Product Badge (Fallback)")

### 2. DV Story Card Section

**Settings to Connect:**
- **Story Title** → Connect to: `product.metafields.custom.dv_story_title` (DV Story Title)
- **Animal Name** → Connect to: `product.metafields.custom.dv_animal_name` (DV Animal Name) - Used for auto-generating "Warum der {Animal}?" title
- **Story Content** (Rich text) → Connect to: `product.metafields.custom.dv_story_content` (DV Story Content - Rich text)
- **Traditional Benefits** (Fallback) → Connect to: `product.metafields.custom.dv_traditional_benefits` (DV Traditional Benefits - Multi-line text) - Used if checklist blocks are empty

**Note:** If Story Title is empty but Animal Name is set, title auto-generates as "Warum der {Animal}?"

### 3. DV Detail Grid Section

**Left Column Settings:**
- **Tradition Title** → Connect to: `product.metafields.custom.dv_detail_left_title` (DV Detail Left Title)
- **Tradition Intro Text** (Rich text) → Connect to: `product.metafields.custom.dv_detail_left_body` (DV Detail Left Body - Rich text)
- **Ingredient Highlights** (MetaObject List) → ⚠️ Configure in product metafields: Products → [Product] → Metafields → "DV Ingredient Highlights" → Select instances. Cannot use "Connect dynamic source" for metaobject lists.

**Right Column Settings:**
- **Facts Title** → Connect to: `product.metafields.custom.dv_facts_title` (DV Facts Title)
- **Ingredients List** (Rich text) → Connect to: `product.metafields.custom.dv_first_ingredients` (DV First Ingredients - Rich text)
- **Allergens & Notes** (Rich text) → Connect to: `product.metafields.custom.dv_allergens_notes` (DV Allergens & Notes - Rich text)

**Fallback:** Ingredient highlights also support blocks as fallback

### 4. DV Daily Ritual Section

**Settings to Connect:**
- **Ritual Steps** (MetaObject List) → ⚠️ Configure in product metafields: Products → [Product] → Metafields → "DV Ritual Steps" → Select instances. Cannot use "Connect dynamic source" for metaobject lists.

**Fallback:** Blocks or description markers (DV:RITUAL_STEPS) in product description

### 5. Recipe Preparation Section

**Settings to Connect:**
- **Animal Name** → Connect to: `product.metafields.custom.dv_animal_name` (DV Animal Name) - Used for intro text auto-generation
- **Taste Character (Geschmack)** → Connect to: `product.metafields.custom.dv_taste_character` (DV Taste Character - Multi-line text)
- **Pairing Ideas (Passt zu)** → Connect to: `product.metafields.custom.dv_pairing_ideas` (DV Pairing Ideas - Multi-line text)
- **Serving Suggestion (Portion)** → Connect to: `product.metafields.custom.dv_serving_suggestion` (DV Serving Suggestion - Multi-line text)
- **Frequency (Häufigkeit)** → Connect to: `product.metafields.custom.dv_frequency` (DV Frequency - Single line text)
- **Recipe Cards** (MetaObject List) → ⚠️ Configure in product metafields: Products → [Product] → Metafields → "DV Recipe Cards" → Select instances. Cannot use "Connect dynamic source" for metaobject lists.

**Fallback:** Recipe cards also support blocks as fallback

### 6. DV Complete Ritual Section

**Settings to Connect:**
- **Subheading** → Connect to: `product.metafields.custom.dv_related_products_subheading` (DV Related Products Subheading)
- **Related Products** (List of Product References) → ⚠️ Configure in product metafields: Products → [Product] → Metafields → "DV Related Products" → Select product instances. Cannot use "Connect dynamic source" for product reference lists. Each product in the list automatically links to its own product detail page.
- **Category Labels** (e.g., "FÜR DIE NACHT", "FÜR RUHE") → Configure on each related product: Products → [Related Product, e.g., "Moon Milk"] → Metafields → "DV Product Category Label" → Enter label text. This label appears below the product title when displayed as a related product. Each related product can have its own label.

**Fallback:** Blocks can be used as fallback (click "Add block" → "Product Card (Fallback)") if metafield is not configured

## Golden Boost Content Reference

When setting up Golden Boost product, connect these metafields:

**Hero:**
- Subtitle: "MORGEN | AKTIVIEREN" → `dv_product_subtitle`
- Quote: "Ich starte clever und klar in den Tag. Für Energie, Fokus & innere Wärme." → `dv_product_quote`
- Animal: "Fuchs" → `dv_animal_name`
- Trust Badges: Configure `dv_trust_badges` metaobject list in product metafields (4 badges)

**Story:**
- Title: Auto-generated from animal name OR connect `dv_story_title`
- Content: Story content → `dv_story_content` (richtext)
- Checklist: Connect `dv_traditional_benefits` OR use blocks

**Detail Grid:**
- Tradition Title: "Tradition in der Ayurveda-Küche" → `dv_detail_left_title`
- Tradition Body: Intro text → `dv_detail_left_body` (richtext)
- Facts Title: "Zutaten & Fakten" → `dv_facts_title`
- Ingredients: Ingredients list → `dv_first_ingredients` (richtext)
- Allergens: Allergens content → `dv_allergens_notes` (richtext)
- Ingredient Highlights: 8 items → `dv_ingredient_highlights` (metaobject list)

**Daily Ritual:**
- Ritual Steps: 3 steps → `dv_ritual_steps` (metaobject list)

**Recipe Preparation:**
- Taste, Pairing, Serving, Frequency → Respective metafields
- Recipe Cards: Multiple cards → `dv_recipe_cards` (metaobject list)

**Complete Ritual:**
- Subheading: "Sanfte Ergänzungen für den Tag." → `dv_related_products_subheading`
- Related Products: Configure `dv_related_products` (List of product references) in product metafields. For Golden Boost, select: Flow and Glow, Moon Rest, Ova Harmony (or your desired products). Each product can have its own set of related products.

## Benefits of This Approach

1. **Flexibility:** Theme editors can choose which metafields to use per product
2. **No Hardcoding:** No metafield keys are hardcoded in Liquid files
3. **Easy Updates:** Change metafield connections via theme editor without code changes
4. **Fallbacks:** Manual text entry still works if metafields aren't connected
5. **Consistency:** All products use the same template structure but with individual content

## Important Notes

- **Rich Text Fields:** When connecting richtext metafields, make sure the metafield type in Shopify is "Rich text", not "Multi-line text"
- **MetaObject Lists:** Metaobject list settings require the metafield to be of type "List of metaobject references"
- **Fallback Priority:** MetaObjects → Blocks → Section Settings (manual text)
- **Empty States:** Sections gracefully handle empty metafields and show fallbacks or hide sections

## Troubleshooting

**Issue: Metafield not showing in dynamic source list**
- Ensure the metafield is created in Settings → Custom data → Products
- Check that the metafield namespace is `custom` and key matches (e.g., `dv_product_subtitle`)
- Verify the metafield type matches the setting type (text, richtext, etc.)

**Issue: MetaObject list not working**
- Ensure the metaobject definition exists in Settings → Custom data → Metaobjects
- Check that the product metafield is of type "List of metaobject references"
- Verify the metaobject type name matches (e.g., `dv_trust_badge`, `dv_ingredient_highlight`)

**Issue: Related Products not showing**
- Ensure the metafield is created as "List of product references" type in Settings → Custom data → Products
- Check that products are selected in the product's metafields section (Products → [Product] → Metafields)
- Verify that the metafield namespace is `custom` and key is `dv_related_products`
- Ensure products are published and available (not draft or archived)
- Check that the section is reading from `product.metafields.custom.dv_related_products.value`

**Issue: Rich text not rendering correctly**
- Ensure the metafield type in Shopify is "Rich text" (not "Multi-line text")
- Check that content was entered using the richtext editor in Shopify Admin
- Verify the setting type in schema is `richtext`

