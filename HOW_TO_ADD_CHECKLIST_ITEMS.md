# How to Add Checklist Items to DV Story Card Section

## Overview

The checklist items in the DV Story Card section (shown in the right column under "Traditionell geschätzt für …") can be added in **two ways**:

1. **Priority Method: Blocks** (Recommended) - Add via theme editor blocks
2. **Fallback Method: Metafield** - Use `dv_traditional_benefits` metafield (only used if no blocks exist)

**Important**: Blocks take priority. If you add blocks, the metafield will be ignored.

---

## Method 1: Add Checklist Items via Blocks (Priority - Recommended)

### Step-by-Step Instructions

1. **Go to Theme Editor**:
   - Shopify Admin → Online Store → Themes → Customize
   - Navigate to a Golden Boost product page

2. **Find DV Story Card Section**:
   - Click on the **"DV Story Card"** section in the left sidebar

3. **Scroll Down to Find Blocks**:
   - In the section settings, scroll down past the content fields
   - You'll see a section heading: **"Right Column - Checklist Section"**
   - Below that, you'll see: **"Checklist items are added via blocks below. Click 'Add block' and select 'Checklist Item' to add individual bullet points."**

4. **Add Checklist Item Blocks**:
   - Click the **"Add block"** button (usually at the bottom of the section or in the blocks area)
   - From the dropdown/list, select **"Checklist Item"**
   - A new checklist item block will appear with a text field
   - Enter your checklist item text (e.g., `Erdende Wärme an kalten Tagen`)

5. **Add More Checklist Items**:
   - Click **"Add block"** again
   - Select **"Checklist Item"** again
   - Enter the next item (e.g., `Einen klaren, fokussierten Start`)
   - Repeat for each item (up to 5 total)

6. **Reorder Items** (Optional):
   - Click and drag checklist item blocks to reorder them

7. **Save**:
   - Click **"Save"** in the top-right corner of the theme editor

### Example Checklist Items for Golden Boost

Based on the image/content you shared, here are suggested checklist items:

1. **Erdende Wärme an kalten Tagen** (Grounding warmth on cold days)
2. **Einen klaren, fokussierten Start** (A clear, focused start)
3. **Innere Balance und Wohlbefinden** (Inner balance and well-being)
4. **Wärme und Tiefe im Alltag** (Warmth and depth in everyday life)
5. **Bewusste Rituale am Morgen** (Conscious rituals in the morning)

---

## Method 2: Use Traditional Benefits Metafield (Fallback)

### When to Use This Method

- Only use this if you **don't want to add blocks** in the theme editor
- Only works if **no checklist blocks exist** (blocks take priority)

### Step-by-Step Instructions

1. **Populate the Metafield in Product Settings**:
   - Shopify Admin → Products → Golden Boost → Scroll to Metafields
   - Find **"DV Traditional Benefits"** metafield
   - **Type**: Multi-line text
   - **Value**: Enter one benefit per line (plain text, no bullets needed)
   - **Example**:
     ```
     Erdende Wärme an kalten Tagen
     Einen klaren, fokussierten Start
     Innere Balance und Wohlbefinden
     Wärme und Tiefe im Alltag
     ```

2. **Connect via Dynamic Source in Theme Editor**:
   - Theme Editor → DV Story Card section
   - Find **"Traditional Benefits (Fallback)"** field
   - Click **"Connect dynamic source"** (database icon)
   - Select: `product.metafields.custom.dv_traditional_benefits`

3. **Save**:
   - Click **"Save"** in the theme editor

### Important Notes

- ⚠️ **If checklist blocks exist, this metafield will be ignored**
- The metafield should contain plain text, one item per line
- Bullets, dashes, or other formatting will be automatically stripped
- Maximum 5 items will be displayed

---

## Visual Guide: Where to Find Blocks in Theme Editor

```
Theme Editor → DV Story Card Section
│
├── Content Settings
│   ├── Story Title
│   ├── Animal Name
│   ├── Story Content
│   └── Traditional Benefits (Fallback)
│
├── Icon Settings
│   └── ...
│
├── Right Column - Checklist Section
│   ├── Checklist Title: "Traditionell geschätzt für …"
│   └── ⚠️ "Checklist items are added via blocks below..."
│
├── Blocks Area
│   └── [Add block] button ← CLICK HERE!
│       └── Select "Checklist Item"
│
└── Right Column - Disclaimer
    └── ...
```

---

## Troubleshooting

### Checklist items not showing?

1. **Check if blocks exist**: 
   - If you added blocks, make sure each block has text entered
   - Blocks take priority over metafield

2. **Check if metafield is connected**:
   - If using metafield fallback, verify `dv_traditional_benefits` is populated
   - Verify it's connected via dynamic source in theme editor

3. **Check section visibility**:
   - Make sure "Show section even if all markers are empty" is enabled if needed
   - Or ensure at least one content field is populated

4. **Check block limits**:
   - Maximum 5 checklist items are supported
   - If you have more than 5 blocks, only the first 5 will show

5. **Check formatting**:
   - If using metafield, ensure one item per line
   - Don't add bullets or dashes manually (they'll be stripped)

### Blocks vs Metafield Priority

```
IF checklist blocks exist:
    → Display blocks (metafield ignored)
ELSE IF dv_traditional_benefits metafield is connected and has content:
    → Display metafield (parsed line by line)
ELSE:
    → No checklist shown
```

---

## Recommendation

**Use Method 1 (Blocks)** for better control:
- ✅ Easy to edit individual items
- ✅ Easy to reorder items
- ✅ Works independently of metafields
- ✅ Can be configured per product template instance
- ✅ More flexible for future changes

**Use Method 2 (Metafield)** only if:
- You want the checklist to be product-specific (via metafields)
- You prefer managing content in product metafields
- You're okay with blocks taking priority if added later

---

## Summary

**To add checklist items to DV Story Card:**

1. ✅ **Go to Theme Editor** → DV Story Card section
2. ✅ **Scroll down** to find the blocks area
3. ✅ **Click "Add block"** → Select "Checklist Item"
4. ✅ **Enter text** for each checklist item
5. ✅ **Repeat** for up to 5 items
6. ✅ **Save**

**That's it!** Checklist items will appear in the right column with checkmark icons.

