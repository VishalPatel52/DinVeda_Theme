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

4. **For MetaObject Lists:**
   - Find settings like "Trust Badges", "Ingredient Highlights", "Ritual Steps", "Recipe Cards"
   - Click "Connect dynamic source"
   - Select the metaobject list metafield (e.g., `product.metafields.custom.dv_trust_badges`)

## Section-by-Section Connection Guide

### 1. DV Main Product Section

**Settings to Connect:**
- **Subtitle** → Connect to: `product.metafields.custom.dv_product_subtitle` (DV Product Subtitle)
- **Quote** → Connect to: `product.metafields.custom.dv_product_quote` (DV Product Quote) OR `product.metafields.custom.dv_animal_quote` (DV Animal Quote)
- **Animal Name** → Connect to: `product.metafields.custom.dv_animal_name` (DV Animal Name)
- **Ritual Timing (Tageszeit)** → Connect to: `product.metafields.custom.dv_ritual_timing` (DV Ritual Timing)
- **Preparation Mode (Zubereitung)** → Connect to: `product.metafields.custom.dv_preparation_mode` (DV Preparation Mode)
- **Ritual Duration (Dauer)** → Connect to: `product.metafields.custom.dv_ritual_duration` (DV Ritual Duration)
- **Trust Badges** (MetaObject List) → Connect to: `product.metafields.custom.dv_trust_badges` (DV Trust Badges - list of DV Trust Badge)

**Fallback:**
- If settings are not connected, you can enter text manually
- Trust badges also support blocks as fallback

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
- **Ingredient Highlights** (MetaObject List) → Connect to: `product.metafields.custom.dv_ingredient_highlights` (DV Ingredient Highlights - list of DV Ingredient Highlight)

**Right Column Settings:**
- **Facts Title** → Connect to: `product.metafields.custom.dv_facts_title` (DV Facts Title)
- **Ingredients List** (Rich text) → Connect to: `product.metafields.custom.dv_first_ingredients` (DV First Ingredients - Rich text)
- **Allergens & Notes** (Rich text) → Connect to: `product.metafields.custom.dv_allergens_notes` (DV Allergens & Notes - Rich text)

**Fallback:** Ingredient highlights also support blocks as fallback

### 4. DV Daily Ritual Section

**Settings to Connect:**
- **Ritual Steps** (MetaObject List) → Connect to: `product.metafields.custom.dv_ritual_steps` (DV Ritual Steps - list of DV Ritual Step)

**Fallback:** Blocks or description markers (DV:RITUAL_STEPS) in product description

### 5. Recipe Preparation Section

**Settings to Connect:**
- **Animal Name** → Connect to: `product.metafields.custom.dv_animal_name` (DV Animal Name) - Used for intro text auto-generation
- **Taste Character (Geschmack)** → Connect to: `product.metafields.custom.dv_taste_character` (DV Taste Character - Multi-line text)
- **Pairing Ideas (Passt zu)** → Connect to: `product.metafields.custom.dv_pairing_ideas` (DV Pairing Ideas - Multi-line text)
- **Serving Suggestion (Portion)** → Connect to: `product.metafields.custom.dv_serving_suggestion` (DV Serving Suggestion - Multi-line text)
- **Frequency (Häufigkeit)** → Connect to: `product.metafields.custom.dv_frequency` (DV Frequency - Single line text)
- **Recipe Cards** (MetaObject List) → Connect to: `product.metafields.custom.dv_recipe_cards` (DV Recipe Cards - list of DV Recipe Card)

**Fallback:** Recipe cards also support blocks as fallback

### 6. DV Complete Ritual Section

**Settings to Connect:**
- **Subheading** → Connect to: `product.metafields.custom.dv_related_products_subheading` (DV Related Products Subheading)

## Golden Boost Content Reference

When setting up Golden Boost product, connect these metafields:

**Hero:**
- Subtitle: "MORGEN | AKTIVIEREN" → `dv_product_subtitle`
- Quote: "Ich starte clever und klar in den Tag. Für Energie, Fokus & innere Wärme." → `dv_product_quote`
- Animal: "Fuchs" → `dv_animal_name`
- Trust Badges: Connect to `dv_trust_badges` metaobject list (4 badges)

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

**Issue: Rich text not rendering correctly**
- Ensure the metafield type in Shopify is "Rich text" (not "Multi-line text")
- Check that content was entered using the richtext editor in Shopify Admin
- Verify the setting type in schema is `richtext`

