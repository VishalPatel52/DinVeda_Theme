# DinVeda Theme Development Workflow

## Overview
This document outlines the development workflow for the DinVeda Shopify theme to prevent content loss during theme pushes.

## File Ownership & Control

### Cursor / Local Development Controls:
- **Section code** (`sections/*.liquid`)
- **Template structure** (`templates/*.json`)
- **CSS/JS assets** (`assets/*.css`, `assets/*.js`)
- **Snippets** (`snippets/*.liquid`)
- **Layout files** (`layout/*.liquid`)
- **Schema definitions** (`config/settings_schema.json`)

### Shopify Theme Editor Controls:
- **Section block content** (text, images, links in blocks)
- **Section settings** (headings, colors, spacing)
- **Template section order** (which sections appear and in what order)
- **Theme settings** (colors, fonts, general theme configuration)

## Critical: settings_data.json

**⚠️ IMPORTANT: `config/settings_data.json` is NEVER pushed to Shopify.**

This file contains:
- Store-specific theme settings
- Section block content (text, images, links)
- Template section configurations
- All content managed via Shopify Theme Editor

### Why It's Ignored:
- Prevents overwriting live store content with local development data
- Protects homepage section blocks from being wiped
- Maintains separation between code (version controlled) and content (managed in Shopify)

### How It Works:
- `.shopifyignore` file excludes `config/settings_data.json` from theme pushes
- Local changes to this file remain local only
- Content is managed directly in Shopify Theme Editor
- Code changes (sections, templates, CSS) are pushed normally

## Development Workflow

1. **Code Changes** (Cursor):
   - Edit section files, templates, CSS, JS
   - Test locally if possible
   - Push to Shopify using `shopify theme push`

2. **Content Changes** (Shopify Theme Editor):
   - Edit section blocks, images, text, links
   - Reorder sections in templates
   - Adjust theme settings
   - Changes are saved directly to Shopify

3. **Never Push**:
   - `config/settings_data.json` (automatically ignored)
   - Local content changes (always edit in Theme Editor)

## Best Practices

- ✅ Always edit section block content in Shopify Theme Editor
- ✅ Use Cursor for code/structure changes only
- ✅ Test template structure changes before pushing
- ✅ Verify `.shopifyignore` includes `config/settings_data.json`
- ❌ Never manually edit `config/settings_data.json` and push
- ❌ Never force-push `config/settings_data.json`

## Verification

To verify `config/settings_data.json` is ignored:
```bash
# Check .shopifyignore file
cat .shopifyignore

# Should contain:
# config/settings_data.json
```

---

**Last Updated:** 2024  
**Theme:** Slice (Foodie)  
**Brand:** DinVeda

