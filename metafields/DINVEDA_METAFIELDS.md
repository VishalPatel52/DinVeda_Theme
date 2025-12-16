# DinVeda Product Metafields

**Namespace:** `dinveda`  
**Owner Resource:** Product  
**Compliance:** EU / Germany compliant content architecture

## Metafield Definitions

### 1. ritual_tagline
- **Key:** `dinveda.ritual_tagline`
- **Type:** Single line text
- **Description:** Short poetic ritual tagline
- **Usage:** Display on product pages, ritual cards

### 2. animal_quote
- **Key:** `dinveda.animal_quote`
- **Type:** Multi-line text
- **Description:** Symbolic quote spoken by the animal (no health claims)
- **Usage:** Animal storytelling, ritual context

### 3. animal_name
- **Key:** `dinveda.animal_name`
- **Type:** Single line text
- **Description:** Animal attribution for the quote
- **Usage:** Quote attribution, ritual cards

### 4. ritual_timing
- **Key:** `dinveda.ritual_timing`
- **Type:** Multi-line text
- **Description:** When the ritual fits into the day (context only)
- **Usage:** Product descriptions, ritual guidance

### 5. ritual_usage
- **Key:** `dinveda.ritual_usage`
- **Type:** Multi-line text
- **Description:** How to enjoy the ritual (no effects)
- **Usage:** Usage instructions, product pages

### 6. taste_character
- **Key:** `dinveda.taste_character`
- **Type:** Multi-line text
- **Description:** Sensory and taste description only
- **Usage:** Product descriptions, sensory information

### 7. blend_story
- **Key:** `dinveda.blend_story`
- **Type:** Multi-line text
- **Description:** Brand story and symbolism
- **Usage:** Brand storytelling, product pages

### 8. quality_note
- **Key:** `dinveda.quality_note`
- **Type:** Multi-line text
- **Description:** Factual quality and production note
- **Usage:** Quality information, production details

### 9. legal_note
- **Key:** `dinveda.legal_note`
- **Type:** Multi-line text
- **Description:** Optional legal disclaimer
- **Usage:** Legal compliance, disclaimers

## Access in Liquid

Once these metafields are created in Shopify Admin, access them in Liquid templates:

```liquid
{{ product.metafields.dinveda.ritual_tagline }}
{{ product.metafields.dinveda.animal_quote }}
{{ product.metafields.dinveda.animal_name }}
{{ product.metafields.dinveda.ritual_timing }}
{{ product.metafields.dinveda.ritual_usage }}
{{ product.metafields.dinveda.taste_character }}
{{ product.metafields.dinveda.blend_story }}
{{ product.metafields.dinveda.quality_note }}
{{ product.metafields.dinveda.legal_note }}
```

## Creating Metafields in Shopify Admin

1. Go to **Settings** → **Custom data** → **Products**
2. Click **Add definition**
3. For each metafield:
   - **Name and description:** Use the name and description from above
   - **Namespace and key:** Use `dinveda` as namespace, and the key (e.g., `ritual_tagline`)
   - **Type:** Select the appropriate type (Single line text or Multi-line text)
   - **Validation:** Leave empty (no specific validations required)

## Notes

- All metafields are optional
- Content must comply with EU/Germany regulations (no health claims)
- Metafields are for content architecture only - theme integration comes later

