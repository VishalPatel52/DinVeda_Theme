# Implementation Plan: Configurable Social Media Icons on PDP

## Overview
Add configurable social media platform selection with individual checkboxes and URL fields for each platform (Facebook, Twitter, Pinterest, Instagram, YouTube) in the Theme Editor, allowing merchants to link to company profile pages or use sharing URLs.

## Current State Analysis

### Files to Modify

1. **`sections/dv-main-product.liquid`**
   - Lines 403-419: Hardcoded social icons markup
   - Lines 1038-1047: Schema settings (only `show_social_share` checkbox exists)
   - CSS classes: `.dv-main-product__social-share`, `.dv-main-product__social-icon`

2. **`sections/dinveda-product-hero.liquid`**
   - Lines 413-429: Hardcoded social icons markup
   - Lines 796-801: Schema settings (only `show_social_share` checkbox exists)
   - CSS classes: `.dinveda-product-hero__share`, `.dinveda-product-hero__share-link`

### Current Behavior
- Three hardcoded icons: Facebook, Twitter, Pinterest
- Single checkbox: "Show social share" (controls all three)
- Sharing URLs only (no profile links)
- No Instagram/YouTube support

## Implementation Strategy

### 1. Backward Compatibility

**Default Settings:**
- `show_facebook`: `default: true` (matches current behavior)
- `show_twitter`: `default: true` (matches current behavior)
- `show_pinterest`: `default: true` (matches current behavior)
- `show_instagram`: `default: true` (user preference)
- `instagram_url`: `default: "https://instagram.com/dinveda.rituals"`
- `show_youtube`: `default: true` (user preference)
- `youtube_url`: `default: "https://www.youtube.com/@dinveda.rituals"`

**URL Handling Logic:**
- **Facebook, Twitter, Pinterest:** If profile URL provided → use profile link; If blank → fallback to sharing URL (preserves current behavior)
- **Instagram, YouTube:** Icon only shows if checkbox enabled AND URL provided

### 2. Settings Structure

For each platform, add:
1. Checkbox: `show_[platform]` - Enable/disable icon
2. URL field: `[platform]_url` - Profile page URL (optional for FB/Twitter/Pinterest, required for Instagram/YouTube)

## Implementation Details

### Phase 1: Update Schema Settings

#### For `sections/dv-main-product.liquid` (after line 1047)

Add settings in this order:
1. Header: "Social Media Platforms"
2. Facebook: checkbox + URL
3. Twitter: checkbox + URL
4. Pinterest: checkbox + URL
5. Instagram: checkbox + URL
6. YouTube: checkbox + URL

#### For `sections/dinveda-product-hero.liquid` (after line 801, before "Ritual auf einen Blick" header)

Same settings structure as above.

### Phase 2: Update Template Markup

#### For `sections/dv-main-product.liquid` (Lines 403-419)

Replace hardcoded icons with conditional logic:

```liquid
<div class="dv-main-product__social-icons">
  {%- comment -%} Facebook {%- endcomment -%}
  {% if section.settings.show_facebook %}
    {%- liquid
      if section.settings.facebook_url != blank
        assign facebook_link = section.settings.facebook_url
        assign facebook_aria = 'Visit Facebook'
      else
        assign facebook_link = 'https://www.facebook.com/sharer/sharer.php?u=' | append: shop.url | append: product.url | url_param_escape
        assign facebook_aria = 'Share on Facebook'
      endif
    -%}
    <a href="{{ facebook_link }}" target="_blank" rel="noopener" class="dv-main-product__social-icon" aria-label="{{ facebook_aria }}">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    </a>
  {% endif %}
  
  {%- comment -%} Twitter {%- endcomment -%}
  {% if section.settings.show_twitter %}
    {%- liquid
      if section.settings.twitter_url != blank
        assign twitter_link = section.settings.twitter_url
        assign twitter_aria = 'Visit Twitter'
      else
        assign twitter_link = 'https://twitter.com/intent/tweet?url=' | append: shop.url | append: product.url | url_param_escape | append: '&text=' | append: product.title | url_param_escape
        assign twitter_aria = 'Share on Twitter'
      endif
    -%}
    <a href="{{ twitter_link }}" target="_blank" rel="noopener" class="dv-main-product__social-icon" aria-label="{{ twitter_aria }}">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
      </svg>
    </a>
  {% endif %}
  
  {%- comment -%} Pinterest {%- endcomment -%}
  {% if section.settings.show_pinterest %}
    {%- liquid
      if section.settings.pinterest_url != blank
        assign pinterest_link = section.settings.pinterest_url
        assign pinterest_aria = 'Visit Pinterest'
      else
        assign pinterest_link = 'https://pinterest.com/pin/create/button/?url=' | append: shop.url | append: product.url | url_param_escape | append: '&media=' | append: product.featured_image | image_url: width: 1200 | url_param_escape | append: '&description=' | append: product.title | url_param_escape
        assign pinterest_aria = 'Share on Pinterest'
      endif
    -%}
    <a href="{{ pinterest_link }}" target="_blank" rel="noopener" class="dv-main-product__social-icon" aria-label="{{ pinterest_aria }}">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8-.11-.98-.2-2.48.04-3.54.22-.94 1.43-6.35 1.43-6.35s-.36-.72-.36-1.78c0-1.66.96-2.9 2.16-2.9 1.02 0 1.51.77 1.51 1.69 0 1.02-.65 2.55-.99 3.97-.28 1.2.6 2.18 1.78 2.18 2.14 0 3.78-2.26 3.78-5.52 0-2.88-2.07-4.9-5.03-4.9-3.43 0-5.44 2.57-5.44 5.23 0 1.02.39 2.12.88 2.72a.36.36 0 0 1 .08.4l-.33 1.33c-.05.2-.16.24-.37.15-1.38-.64-2.24-2.65-2.24-4.26 0-3.48 2.53-6.68 7.3-6.68 3.83 0 6.8 2.73 6.8 6.38 0 3.8-2.4 6.86-5.86 6.86-1.15 0-2.23-.6-2.6-1.3l-.71 2.7c-.26 1-.96 2.25-1.43 3.01 1.08.33 2.22.51 3.4.51 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </a>
  {% endif %}
  
  {%- comment -%} Instagram {%- endcomment -%}
  {% if section.settings.show_instagram and section.settings.instagram_url != blank %}
    <a href="{{ section.settings.instagram_url }}" target="_blank" rel="noopener" class="dv-main-product__social-icon" aria-label="Visit Instagram">
      <svg width="20" height="20" viewBox="0 0 19.9 20" fill="currentColor">
        <path d="M10,4.8c-2.8,0-5.1,2.3-5.1,5.1S7.2,15,10,15s5.1-2.3,5.1-5.1S12.8,4.8,10,4.8z M10,13.2c-1.8,0-3.3-1.5-3.3-3.3
        S8.2,6.6,10,6.6s3.3,1.5,3.3,3.3S11.8,13.2,10,13.2z M15.2,3.4c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.3,1.1,1.3s1.3-0.5,1.3-1.1
        c0-0.3-0.1-0.6-0.4-0.9S15.6,3.4,15.2,3.4z M19.9,9.9c0-1.4,0-2.7-0.1-4.1c-0.1-1.5-0.4-3-1.6-4.2C17,0.5,15.6,0.1,13.9,0
        c-1.2,0-2.6,0-3.9,0C8.6,0,7.2,0,5.8,0.1c-1.5,0-2.9,0.4-4.1,1.5S0.2,4.1,0.1,5.8C0,7.2,0,8.6,0,9.9c0,1.3,0,2.8,0.1,4.2
        c0.1,1.5,0.4,3,1.6,4.2c1.1,1.1,2.5,1.5,4.2,1.6C7.3,20,8.6,20,10,20s2.7,0,4.1-0.1c1.5-0.1,3-0.4,4.2-1.6c1.1-1.1,1.5-2.5,1.6-4.2
        C19.9,12.7,19.9,11.3,19.9,9.9z M17.6,15.7c-0.1,0.5-0.4,0.8-0.8,1.1c-0.4,0.4-0.6,0.5-1.1,0.8c-1.3,0.5-4.4,0.4-5.8,0.4
        s-4.6,0.1-5.8-0.4c-0.5-0.1-0.8-0.4-1.1-0.8c-0.4-0.4-0.5-0.6-0.8-1.1c-0.5-1.3-0.4-4.4-0.4-5.8S1.7,5.3,2.2,4.1
        C2.3,3.6,2.6,3.3,3,3s0.6-0.5,1.1-0.8c1.3-0.5,4.4-0.4,5.8-0.4s4.6-0.1,5.8,0.4c0.5,0.1,0.8,0.4,1.1,0.8c0.4,0.4,0.5,0.6,0.8,1.1
        C18.1,5.3,18,8.5,18,9.9S18.2,14.4,17.6,15.7z"/>
      </svg>
    </a>
  {% endif %}
  
  {%- comment -%} YouTube {%- endcomment -%}
  {% if section.settings.show_youtube and section.settings.youtube_url != blank %}
    <a href="{{ section.settings.youtube_url }}" target="_blank" rel="noopener" class="dv-main-product__social-icon" aria-label="Visit YouTube">
      <svg width="20" height="20" viewBox="0 0 28.5 20" fill="currentColor">
        <path d="M28,3.3c-0.3-1.3-1.3-2.1-2.4-2.4C23.3,0,14.3,0,14.3,0s-8.8,0-11,0.6C2,1,1,1.9,0.7,3.1C0,5.4,0,9.9,0,9.9s0,4.7,0.7,6.8
        C1,18,2,19,3.3,19.3c2.2,0.7,11,0.7,11,0.7s8.9,0,11.1-0.7c1.3-0.3,2.1-1.3,2.4-2.4c0.7-2.3,0.7-6.8,0.7-6.8S28.6,5.4,28,3.3z
        M11.5,14.3V5.9l7.3,4.2L11.5,14.3z"/>
      </svg>
    </a>
  {% endif %}
</div>
```

#### For `sections/dinveda-product-hero.liquid` (Lines 413-429)

Same pattern, but use classes:
- Container: `.dinveda-product-hero__share-buttons`
- Links: `.dinveda-product-hero__share-link`

### Phase 3: Schema Settings Format

For both sections, add this structure after `show_social_share`:

```json
{
  "type": "header",
  "content": "Social Media Platforms"
},
{
  "type": "paragraph",
  "content": "Enable platforms individually. For Facebook, Twitter, and Pinterest: Leave URL blank to use share links. Enter profile URL to link to your profile page."
},
{
  "type": "checkbox",
  "id": "show_facebook",
  "label": "Show Facebook icon",
  "default": true
},
{
  "type": "url",
  "id": "facebook_url",
  "label": "Facebook profile URL",
  "info": "Leave blank for share link. Enter profile URL (e.g., https://facebook.com/yourbrand) for profile link."
},
{
  "type": "checkbox",
  "id": "show_twitter",
  "label": "Show Twitter icon",
  "default": true
},
{
  "type": "url",
  "id": "twitter_url",
  "label": "Twitter profile URL",
  "info": "Leave blank for share link. Enter profile URL (e.g., https://twitter.com/yourbrand) for profile link."
},
{
  "type": "checkbox",
  "id": "show_pinterest",
  "label": "Show Pinterest icon",
  "default": true
},
{
  "type": "url",
  "id": "pinterest_url",
  "label": "Pinterest profile URL",
  "info": "Leave blank for share link. Enter profile URL (e.g., https://pinterest.com/yourbrand) for profile link."
},
{
  "type": "checkbox",
  "id": "show_instagram",
  "label": "Show Instagram icon",
  "default": true
},
{
  "type": "url",
  "id": "instagram_url",
  "label": "Instagram profile URL",
  "default": "https://instagram.com/dinveda.rituals",
  "info": "Enter your Instagram profile URL (e.g., https://instagram.com/yourbrand)"
},
{
  "type": "checkbox",
  "id": "show_youtube",
  "label": "Show YouTube icon",
  "default": true
},
{
  "type": "url",
  "id": "youtube_url",
  "label": "YouTube channel URL",
  "default": "https://www.youtube.com/@dinveda.rituals",
  "info": "Enter your YouTube channel URL (e.g., https://youtube.com/@yourbrand)"
}
```

## Safety & Isolation

### Backward Compatibility
- Default settings preserve current behavior (FB/Twitter/Pinterest enabled by default)
- URL fallback maintains sharing URLs when profile URL is blank
- Existing CSS classes unchanged
- No impact on other PDP components

### Isolation
- Changes limited to social media section only
- Settings are section-specific (won't affect other pages)
- No global theme settings affected
- No CSS changes required

### Validation
- Shopify URL type validation prevents invalid URLs
- Conditional rendering prevents broken states
- Empty state handled gracefully (all icons can be disabled)

## Testing Requirements

1. **Default Behavior:**
   - Verify all 5 icons appear with default settings
   - Verify Instagram icon links to https://instagram.com/dinveda.rituals
   - Verify YouTube icon links to https://www.youtube.com/@dinveda.rituals
   - Verify sharing links work when profile URLs are blank (for FB/Twitter/Pinterest)

2. **Individual Controls:**
   - Test enabling/disabling each platform independently
   - Test profile URLs vs sharing URLs
   - Test mixed configurations

3. **Edge Cases:**
   - All platforms disabled
   - Some platforms with URLs, some without
   - Invalid URLs (should be handled by Shopify)

4. **Both Sections:**
   - Test `dv-main-product.liquid` independently
   - Test `dinveda-product-hero.liquid` independently
   - Verify settings don't interfere with each other

## Risk Assessment

**Risk Level: LOW**
- Isolated changes to social media section only
- Backward compatible with sensible defaults
- No CSS modifications required
- Easy to revert if needed
- No breaking changes expected

## Future Extensibility

To add more platforms (e.g., TikTok, LinkedIn):
1. Add checkbox: `show_[platform]` (default: false)
2. Add URL field: `[platform]_url`
3. Add conditional block following same pattern
4. Add SVG icon (can reuse from `snippets/snip-icons.liquid` if available)