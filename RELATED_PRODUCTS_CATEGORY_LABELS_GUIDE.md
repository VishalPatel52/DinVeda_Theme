# Related Products Category Labels Guide

## Overview

Category labels (like "FÜR DIE NACHT", "FÜR RUHE", "ALLE RITUALE") appear below the product title in the DV Complete Ritual section when products are displayed as related products. These labels are configured via a product metafield on each individual product.

## How Category Labels Work

- Each product that appears as a related product can have its own category label
- Labels are read from the **related product's** metafield, not from the current product page
- Example: When "Moon Milk" is shown as a related product on Golden Boost's page, the label "FÜR DIE NACHT" comes from Moon Milk's metafield, not Golden Boost's metafield

## Step-by-Step: Enable Category Labels

### Step 1: Create the Metafield

1. Go to **Shopify Admin** → **Settings** → **Custom data** → **Products**
2. Click **"Add definition"**
3. Fill in the metafield details:
   - **Name**: `DV Product Category Label`
   - **Namespace and key**: `custom.dv_product_category_label`
   - **Type**: **Single line text**
   - **Description**: `Category label shown below product title in related products cards (e.g., "FÜR DIE NACHT", "FÜR RUHE", "ALLE RITUALE")`
   - **Validation**: Optional - set max length if needed (e.g., 50 characters)
4. Click **"Save"**

### Step 2: Set Category Label on Each Related Product

For each product that will appear as a related product (e.g., Moon Milk, Inner Peace, Geschenkset):

1. Go to **Products** → Select the product (e.g., **"Moon Milk"**)
2. Scroll down to the **Metafields** section
3. Find **"DV Product Category Label"**
4. Enter the label text (e.g., `FÜR DIE NACHT`, `FÜR RUHE`, `ALLE RITUALE`)
   - Note: Use uppercase for consistency (e.g., "FÜR DIE NACHT" not "Für die Nacht")
5. Click **"Save"**

### Step 3: Verify Labels Appear

1. Go to a product page that has related products configured (e.g., Golden Boost)
2. Scroll to the **"Vervollständige dein Ritual"** section
3. Check that each related product card shows:
   - Product title (e.g., "Moon Milk")
   - Category label below the title (e.g., "FÜR DIE NACHT")

## Example Configuration

### Product: Moon Milk
- **Metafield**: `DV Product Category Label`
- **Value**: `FÜR DIE NACHT`
- **Result**: When Moon Milk appears as a related product, it shows "FÜR DIE NACHT" below its title

### Product: Inner Peace
- **Metafield**: `DV Product Category Label`
- **Value**: `FÜR RUHE`
- **Result**: When Inner Peace appears as a related product, it shows "FÜR RUHE" below its title

### Product: Geschenkset (Gift Set)
- **Metafield**: `DV Product Category Label`
- **Value**: `ALLE RITUALE`
- **Result**: When Geschenkset appears as a related product, it shows "ALLE RITUALE" below its title

## Complete Setup Workflow

### For Golden Boost Product Page:

1. **Configure Related Products on Golden Boost:**
   - Go to Products → **Golden Boost** → Metafields
   - Find **"DV Related Products"** (List of product references)
   - Select: Moon Milk, Inner Peace, Geschenkset
   - Save

2. **Set Category Labels on Related Products:**
   - Go to Products → **Moon Milk** → Metafields
   - Set **"DV Product Category Label"** = `FÜR DIE NACHT`
   - Save
   
   - Go to Products → **Inner Peace** → Metafields
   - Set **"DV Product Category Label"** = `FÜR RUHE`
   - Save
   
   - Go to Products → **Geschenkset** → Metafields
   - Set **"DV Product Category Label"** = `ALLE RITUALE`
   - Save

3. **Result:**
   - On Golden Boost's PDP, the Complete Ritual section shows:
     - **Moon Milk** with label "FÜR DIE NACHT"
     - **Inner Peace** with label "FÜR RUHE"
     - **Geschenkset** with label "ALLE RITUALE"

## Troubleshooting

### Issue: Category labels not showing

**Check 1: Metafield exists**
- Go to Settings → Custom data → Products
- Verify "DV Product Category Label" metafield exists
- Check that namespace is `custom` and key is `dv_product_category_label`

**Check 2: Metafield is set on related products**
- Go to each related product (e.g., Moon Milk, Inner Peace)
- Check Products → [Product] → Metafields section
- Verify "DV Product Category Label" has a value
- Ensure value is not blank

**Check 3: Related products are configured**
- Go to the product page where related products should appear (e.g., Golden Boost)
- Check Products → [Product] → Metafields → "DV Related Products"
- Verify products are selected in the list

**Check 4: Code is reading from correct metafield**
- The section reads from: `related_product.metafields.custom.dv_product_category_label`
- This means it reads from each related product's metafield, not the current product

### Issue: Label appears but wrong case

- Ensure labels use uppercase consistently (e.g., "FÜR DIE NACHT" not "Für die Nacht")
- This is a styling preference - labels are displayed exactly as entered in the metafield

### Issue: Label shows for some products but not others

- Check that each related product has the "DV Product Category Label" metafield set
- Some products may have labels, others may not (labels are optional)
- Products without labels will show only the title, no subtitle

## Important Notes

- **Labels are per product**: Each product that appears as a related product has its own label metafield
- **Labels are optional**: Products can appear without labels - they'll show only the title
- **Labels are read from related products**: When configuring Golden Boost's related products, the labels come from Moon Milk, Inner Peace, etc., not from Golden Boost
- **Case-sensitive**: Labels are displayed exactly as entered in the metafield (use uppercase for consistency)
- **Reusable**: Once a product has its category label set (e.g., Moon Milk = "FÜR DIE NACHT"), it will show that label whenever it appears as a related product on any product page

## Fallback Behavior

- If a related product doesn't have the "DV Product Category Label" metafield set, no label will appear (only the product title)
- If blocks are used instead of metafields, labels can be set directly in the block settings (theme editor)
