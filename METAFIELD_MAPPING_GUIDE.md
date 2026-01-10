# Metafield & MetaObject Mapping Guide for DinVeda Premium Template

## Overview
This guide maps the current Golden Boost product page sections to the metafields and metaobjects that should be connected via Shopify Theme Editor dynamic sources.

## Section-by-Section Mapping

### 1. DV Main Product (`sections/dv-main-product.liquid`)

**Settings → Metafields Mapping:**
- `subtitle` → Connect to: `product.metafields.custom.dv_product_subtitle` (DV Product Subtitle - Single line text)
- `quote` → Connect to: `product.metafields.custom.dv_product_quote` (DV Product Quote - Multi-line text) OR `product.metafields.custom.dv_animal_quote` (DV Animal Quote - Multi-line text)
- `animal_name` → Connect to: `product.metafields.custom.dv_animal_name` (DV Animal Name - Single line text)
- `ritual_timing` → Connect to: `product.metafields.custom.dv_ritual_timing` (DV Ritual Timing - Single line text)
- `preparation_mode` → Connect to: `product.metafields.custom.dv_preparation_mode` (DV Preparation Mode - Single line text)
- `ritual_duration` → Connect to: `product.metafields.custom.dv_ritual_duration` (DV Ritual Duration - Single line text)
- `trust_badges` (list.metaobject_reference) → Connect to: `product.metafields.custom.dv_trust_badges` (DV Trust Badges - List of DV Trust Badge metaobject)

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
- `ingredient_highlights` (list.metaobject_reference) → Connect to: `product.metafields.custom.dv_ingredient_highlights` (DV Ingredient Highlights - List of DV Ingredient Highlight metaobject)

### 4. DV Daily Ritual (`sections/dv-daily-ritual.liquid`)

**Settings → Metafields Mapping:**
- `ritual_steps` (list.metaobject_reference) → Connect to: `product.metafields.custom.dv_ritual_steps` (DV Ritual Steps - List of DV Ritual Step metaobject)

### 5. Recipe Preparation (`sections/dinveda-recipe-preparation.liquid`)

**Settings → Metafields Mapping:**
- `animal_name` → Connect to: `product.metafields.custom.dv_animal_name` (DV Animal Name - Single line text) - Used for intro text auto-generation
- `taste_character` (textarea) → Connect to: `product.metafields.custom.dv_taste_character` (DV Taste Character - Multi-line text)
- `pairing_ideas` (textarea) → Connect to: `product.metafields.custom.dv_pairing_ideas` (DV Pairing Ideas - Multi-line text)
- `serving_suggestion` (textarea) → Connect to: `product.metafields.custom.dv_serving_suggestion` (DV Serving Suggestion - Multi-line text)
- `frequency` → Connect to: `product.metafields.custom.dv_frequency` (DV Frequency - Single line text)
- `recipe_cards` (list.metaobject_reference) → Connect to: `product.metafields.custom.dv_recipe_cards` (DV Recipe Cards - List of DV Recipe Card metaobject)

### 6. DV Complete Ritual (`sections/dv-complete-ritual.liquid`)

**Settings → Metafields Mapping:**
- `subheading` → Connect to: `product.metafields.custom.dv_related_products_subheading` (DV Related Products Subheading - Single line text)

## Current Golden Boost Content Reference

Based on the cleaned template, here's what content should be populated from metafields:

**Hero Section:**
- Subtitle: "MORGEN | AKTIVIEREN" → `dv_product_subtitle`
- Quote: "Ich starte clever und klar in den Tag. Für Energie, Fokus & innere Wärme." → `dv_product_quote` or `dv_animal_quote`
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

