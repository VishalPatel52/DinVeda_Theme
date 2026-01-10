# Metafield & MetaObject Mapping Guide for DinVeda Premium Template

## Overview
This guide maps the current Golden Boost product page sections to the metafields and metaobjects that should be connected via Shopify Theme Editor dynamic sources.

## Section-by-Section Mapping

### 1. DV Main Product (`sections/dv-main-product.liquid`)

**Settings → Metafields Mapping:**
- `subtitle` → Connect to: `product.metafields.custom.dv_product_subtitle` (DV Product Subtitle - Single line text)
- `quote` → Connect to: `product.metafields.custom.dv_product_quote` (DV Product Quote - Multi-line text)
- `animal_name` → Connect to: `product.metafields.custom.dv_animal_name` (DV Animal Name - Single line text)
- `ritual_timing` → Connect to: `product.metafields.custom.dv_ritual_timing` (DV Ritual Timing - Single line text)
- `preparation_mode` → Connect to: `product.metafields.custom.dv_preparation_mode` (DV Preparation Mode - Single line text)
- `ritual_duration` → Connect to: `product.metafields.custom.dv_ritual_duration` (DV Ritual Duration - Single line text)
- `trust_badges` (MetaObject List) → ⚠️ Configure in product metafields: Products → [Product] → Metafields → "DV Trust Badges" → Select instances. Cannot use "Connect dynamic source" in theme editor. Sections automatically read from `product.metafields.custom.dv_trust_badges`. Blocks available as fallback.

### 2. DV Story Card (`sections/dv-story-card.liquid`)

**Settings → Metafields Mapping:**
- `title` → Connect to: `product.metafields.custom.dv_story_title` (DV Story Title - Multi-line text)
- `animal_name` → Connect to: `product.metafields.custom.dv_animal_name` (DV Animal Name - Single line text) - Used for auto-generating "Warum der {animal}?" title
- `content` (richtext) → Connect to: `product.metafields.custom.dv_story_content` (DV Story Content - Rich text)
- `traditional_benefits` (textarea) → Connect to: `product.metafields.custom.dv_traditional_benefits` (DV Traditional Benefits - Multi-line text) - Used if checklist blocks are empty

### 3. DV Detail Grid (`sections/dv-detail-grid.liquid`)

**Settings → Metafields Mapping:**
- `tradition_title` → Connect to: `product.metafields.custom.dv_detail_left_title` (DV Detail Left Title - Single line text)
- `tradition_body` (richtext) → Connect to: `product.metafields.custom.dv_detail_left_body` (DV Detail Left Body - Rich text)
- `facts_title` → Connect to: `product.metafields.custom.dv_facts_title` (DV Facts Title - Single line text)
- `first_ingredients` (richtext) → Connect to: `product.metafields.custom.dv_first_ingredients` (DV First Ingredients - Rich text)
- `allergens_notes` (richtext) → Connect to: `product.metafields.custom.dv_allergens_notes` (DV Allergens & Notes - Rich text)
- `ingredient_highlights` (MetaObject List) → ⚠️ Configure in product metafields: Products → [Product] → Metafields → "DV Ingredient Highlights" → Select instances. Cannot use "Connect dynamic source" in theme editor. Sections automatically read from `product.metafields.custom.dv_ingredient_highlights`. Blocks available as fallback.

### 4. DV Daily Ritual (`sections/dv-daily-ritual.liquid`)

**Settings → Metafields Mapping:**
- `ritual_steps` (MetaObject List) → ⚠️ Configure in product metafields: Products → [Product] → Metafields → "DV Ritual Steps" → Select instances. Cannot use "Connect dynamic source" in theme editor. Sections automatically read from `product.metafields.custom.dv_ritual_steps`. Blocks available as fallback.

### 5. Recipe Preparation (`sections/dinveda-recipe-preparation.liquid`)

**Settings → Metafields Mapping:**
- `animal_name` → Connect to: `product.metafields.custom.dv_animal_name` (DV Animal Name - Single line text) - Used for intro text auto-generation
- `taste_character` (textarea) → Connect to: `product.metafields.custom.dv_taste_character` (DV Taste Character - Multi-line text)
- `pairing_ideas` (textarea) → Connect to: `product.metafields.custom.dv_pairing_ideas` (DV Pairing Ideas - Multi-line text)
- `serving_suggestion` (textarea) → Connect to: `product.metafields.custom.dv_serving_suggestion` (DV Serving Suggestion - Multi-line text)
- `frequency` → Connect to: `product.metafields.custom.dv_frequency` (DV Frequency - Single line text)
- `recipe_cards` (MetaObject List) → ⚠️ Configure in product metafields: Products → [Product] → Metafields → "DV Recipe Cards" → Select instances. Cannot use "Connect dynamic source" in theme editor. Sections automatically read from `product.metafields.custom.dv_recipe_cards`. Blocks available as fallback.

### 5.5 DV Recipe Cards (`sections/dv-recipe-cards.liquid`) - NEW

**Settings → Metafields Mapping:**
- `title` → Optional: Connect to metafield or leave blank to auto-generate from Animal Name (e.g., "So genießt der {animal} sein Ritual")
- `subtitle` → Optional: Connect to metafield or enter manually (e.g., "VIELSEITIGE ANWENDUNG")
- `animal_name` → Connect to: `product.metafields.custom.dv_animal_name` (DV Animal Name - Single line text) - Used for auto-generating title if Title is blank
- `recipe_cards` (MetaObject List) → ⚠️ Configure in product metafields: Products → [Product] → Metafields → "DV Recipe Cards" → Select instances. Cannot use "Connect dynamic source" in theme editor. Sections automatically read from `product.metafields.custom.dv_recipe_cards`. **Each DV Recipe Card metaobject must have: `title`, `description` (or `body`), and `icon` fields.**

### 6. DV Complete Ritual (`sections/dv-complete-ritual.liquid`)

**Settings → Metafields Mapping:**
- `subheading` → Connect to: `product.metafields.custom.dv_related_products_subheading` (DV Related Products Subheading - Single line text)
- `related_products` (List of Product References) → ⚠️ Configure in product metafields: Products → [Product] → Metafields → "DV Related Products" → Select product instances. Cannot use "Connect dynamic source" in theme editor. Sections automatically read from `product.metafields.custom.dv_related_products`. Each product in the list automatically links to its own product detail page. Blocks available as fallback.
- `product_category_label` (on each related product) → Configure on each related product (e.g., Moon Milk, Inner Peace, Geschenkset): Products → [Related Product] → Metafields → "DV Product Category Label" → Enter label text (e.g., "FÜR DIE NACHT", "FÜR RUHE", "ALLE RITUALE"). This label appears below the product title when shown as a related product.

## Current Golden Boost Content Reference

Based on the cleaned template, here's what content should be populated from metafields:

**Hero Section:**
- Subtitle: "MORGEN | AKTIVIEREN" → `dv_product_subtitle`
- Quote: "Ich starte clever und klar in den Tag. Für Energie, Fokus & innere Wärme." → `dv_product_quote`
- Animal: "Fuchs" → `dv_animal_name`
- Trust Badges: 4 badges → `dv_trust_badges` (metaobject list)

**Story Section:**
- Title: "Warum der Fuchs?" → Auto-generated from `dv_animal_name` or use `dv_story_title`
- Content: Story content → `dv_story_content` (richtext)
- Checklist: 4 items → `dv_traditional_benefits` (multi-line) or blocks

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
- Intro: Auto-generated from animal name + product name
- Taste, Pairing, Serving, Frequency → Respective metafields
- Recipe Cards: Multiple cards → `dv_recipe_cards` (metaobject list)

**Complete Ritual:**
- Subheading: "Sanfte Ergänzungen für den Tag." → `dv_related_products_subheading`
- Related Products: List of related products → `dv_related_products` (List of product references). Configure per product - Golden Boost shows Flow and Glow, Moon Rest, Ova Harmony; Flow and Glow shows different products, etc.

