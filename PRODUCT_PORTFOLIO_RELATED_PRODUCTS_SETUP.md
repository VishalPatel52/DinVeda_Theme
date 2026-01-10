# Product Portfolio - Related Products Configuration Guide

## Product Overview

Your 4-product portfolio with positioning:

1. **Golden Boost (Fox)** - Morning start ritual + upgrade from coffee/sugar
   - Moment: Morning
   - Emotional job: "Start with intention"
   - Customer problem: Chaotic mornings, want consistent start, alternative to coffee/sugar

2. **Flow & Glow (Panda)** - Daily digestive rhythm + lightness ritual
   - Moment: After meals / daytime
   - Emotional job: "Feel lighter, stay in rhythm"
   - Customer problem: Feel heavy after eating, want warm comforting routine

3. **Moon Rest (Koala)** - Evening reset + mental unwind ritual
   - Moment: Evening
   - Emotional job: "Reset, soften the day"
   - Customer problem: Brain doesn't switch off, want gentle evening routine

4. **Ova Harmony (Butterfly)** - Ritual support for women in peri-/menopause
   - Moment: Life transition (women)
   - Emotional job: "Re-center during change"
   - Customer problem: Body changing, want support without feeling medicalized

## Related Products Strategy

### Recommended Configuration

Each product should show the **other 3 products** as related products, creating a complete ritual portfolio view.

### Suggested Category Labels

Based on the portfolio logic, here are suggested category labels for each product:

#### Golden Boost (Fox)
- **Category Label**: `FÜR DEN MORGEN` or `MORGEN | AKTIVIEREN`
- **Related Products to Show**: Flow & Glow, Moon Rest, Ova Harmony

#### Flow & Glow (Panda)
- **Category Label**: `FÜR DEN TAG` or `TAG | ZENTRIEREN`
- **Related Products to Show**: Golden Boost, Moon Rest, Ova Harmony

#### Moon Rest (Koala)
- **Category Label**: `FÜR DIE NACHT` or `ABEND | LOSLASSEN`
- **Related Products to Show**: Golden Boost, Flow & Glow, Ova Harmony

#### Ova Harmony (Butterfly)
- **Category Label**: `FÜR BALANCE` or `BALANCE | AUSGLEICHEN`
- **Related Products to Show**: Golden Boost, Flow & Glow, Moon Rest

## Step-by-Step Configuration

### Step 1: Create Required Metafields

#### A. DV Related Products (List of Product References)
1. Go to **Settings** → **Custom data** → **Products**
2. Click **"Add definition"**
3. Configure:
   - **Name**: `DV Related Products`
   - **Namespace and key**: `custom.dv_related_products`
   - **Type**: **List of product references**
   - **Description**: `List of related products to display in Complete Ritual section`
4. Click **"Save"**

#### B. DV Product Category Label (Single line text)
1. Go to **Settings** → **Custom data** → **Products**
2. Click **"Add definition"**
3. Configure:
   - **Name**: `DV Product Category Label`
   - **Namespace and key**: `custom.dv_product_category_label`
   - **Type**: **Single line text**
   - **Description**: `Category label shown below product title in related products cards`
4. Click **"Save"**

### Step 2: Set Category Labels on Each Product

#### Golden Boost (Fox)
1. Go to **Products** → **Golden Boost**
2. Scroll to **Metafields** section
3. Find **"DV Product Category Label"**
4. Enter: `MORGEN | AKTIVIEREN`
5. Save

#### Flow & Glow (Panda)
1. Go to **Products** → **Flow & Glow**
2. Scroll to **Metafields** section
3. Find **"DV Product Category Label"**
4. Enter: `TAG | ZENTRIEREN`
5. Save

#### Moon Rest (Koala)
1. Go to **Products** → **Moon Rest**
2. Scroll to **Metafields** section
3. Find **"DV Product Category Label"**
4. Enter: `ABEND | LOSLASSEN`
5. Save

#### Ova Harmony (Butterfly)
1. Go to **Products** → **Ova Harmony**
2. Scroll to **Metafields** section
3. Find **"DV Product Category Label"**
4. Enter: `BALANCE | AUSGLEICHEN`
5. Save

### Step 3: Configure Related Products on Each Product

#### Golden Boost - Related Products Configuration
1. Go to **Products** → **Golden Boost**
2. Scroll to **Metafields** section
3. Find **"DV Related Products"**
4. Select the following products:
   - **Flow & Glow**
   - **Urban Calm** (or "Moon Rest")
   - **Ova Harmony**
5. Save

**Result**: On Golden Boost's PDP, the Complete Ritual section will show:
- Flow & Glow (with label "TAG | ZENTRIEREN")
- Moon Rest (with label "ABEND | LOSLASSEN")
- Ova Harmony (with label "BALANCE | AUSGLEICHEN")

#### Flow & Glow - Related Products Configuration
1. Go to **Products** → **Flow & Glow**
2. Scroll to **Metafields** section
3. Find **"DV Related Products"**
4. Select the following products:
   - **Golden Boost**
   - **Urban Calm** (or "Moon Rest")
   - **Ova Harmony**
5. Save

**Result**: On Flow & Glow's PDP, the Complete Ritual section will show:
- Golden Boost (with label "MORGEN | AKTIVIEREN")
- Moon Rest (with label "ABEND | LOSLASSEN")
- Ova Harmony (with label "BALANCE | AUSGLEICHEN")

#### Moon Rest - Related Products Configuration
1. Go to **Products** → **Moon Rest**
2. Scroll to **Metafields** section
3. Find **"DV Related Products"**
4. Select the following products:
   - **Golden Boost**
   - **Flow & Glow**
   - **Ova Harmony**
5. Save

**Result**: On Moon Rest's PDP, the Complete Ritual section will show:
- Golden Boost (with label "MORGEN | AKTIVIEREN")
- Flow & Glow (with label "TAG | ZENTRIEREN")
- Ova Harmony (with label "BALANCE | AUSGLEICHEN")

#### Ova Harmony - Related Products Configuration
1. Go to **Products** → **Ova Harmony**
2. Scroll to **Metafields** section
3. Find **"DV Related Products"**
4. Select the following products:
   - **Golden Boost**
   - **Flow & Glow**
   - **Moon Rest**
5. Save

**Result**: On Ova Harmony's PDP, the Complete Ritual section will show:
- Golden Boost (with label "MORGEN | AKTIVIEREN")
- Flow & Glow (with label "TAG | ZENTRIEREN")
- Moon Rest (with label "ABEND | LOSLASSEN")

## Complete Configuration Matrix

| Product | Category Label | Related Products (Show These 3) |
|---------|---------------|--------------------------------|
| **Golden Boost** (Fox) | `MORGEN \| AKTIVIEREN` | Flow & Glow, Moon Rest, Ova Harmony |
| **Flow & Glow** (Panda) | `TAG \| ZENTRIEREN` | Golden Boost, Moon Rest, Ova Harmony |
| **Moon Rest** (Koala) | `ABEND \| LOSLASSEN` | Golden Boost, Flow & Glow, Ova Harmony |
| **Ova Harmony** (Butterfly) | `BALANCE \| AUSGLEICHEN` | Golden Boost, Flow & Glow, Moon Rest |

## Alternative Label Options

If you prefer different label formats, here are alternatives:

### Option 1: Shorter Labels
- Golden Boost: `FÜR DEN MORGEN`
- Flow & Glow: `FÜR DEN TAG`
- Urban Calm: `FÜR DIE NACHT`
- Ova Harmony: `FÜR BALANCE`

### Option 2: Descriptive Labels
- Golden Boost: `MORGENRITUAL`
- Flow & Glow: `TAGESRITUAL`
- Urban Calm: `ABENDRITUAL`
- Ova Harmony: `BALANCERITUAL`

### Option 3: Problem-Focused Labels
- Golden Boost: `FÜR ENERGIE & FOKUS`
- Flow & Glow: `FÜR LEICHTIGKEIT`
- Moon Rest: `FÜR RUHE`
- Ova Harmony: `FÜR AUSGLEICH`

## Portfolio Logic Visualization

```
MORNING → Golden Boost (Fox)
    ↓
    Shows: Flow & Glow, Urban Calm, Ova Harmony

DAYTIME → Flow & Glow (Panda)
    ↓
    Shows: Golden Boost, Urban Calm, Ova Harmony

EVENING → Moon Rest (Koala)
    ↓
    Shows: Golden Boost, Flow & Glow, Ova Harmony

LIFE TRANSITION → Ova Harmony (Butterfly)
    ↓
    Shows: Golden Boost, Flow & Glow, Urban Calm
```

## Benefits of This Configuration

1. **Complete Portfolio View**: Each product page shows the full ritual ecosystem
2. **Cross-Selling**: Customers see how products work together throughout the day
3. **Ritual Journey**: Shows the progression from morning → day → evening → life transition
4. **Clear Positioning**: Category labels reinforce each product's moment and purpose
5. **Flexible**: Easy to update related products or labels without code changes

## Testing Checklist

After configuration, verify:

- [ ] Golden Boost PDP shows 3 related products with correct labels
- [ ] Flow & Glow PDP shows 3 related products with correct labels
- [ ] Moon Rest PDP shows 3 related products with correct labels
- [ ] Ova Harmony PDP shows 3 related products with correct labels
- [ ] Each product card links to its own product detail page
- [ ] Category labels appear below product titles
- [ ] Labels use consistent formatting (uppercase, consistent style)
- [ ] All 4 products have their category labels set
- [ ] All 4 products have their related products configured

## Troubleshooting

### Issue: Product name mismatch
- **Note**: Use the actual Shopify product name "Moon Rest" when selecting in "DV Related Products"
- The category label will still show correctly regardless of product name

### Issue: Missing products in related products list
- Ensure all 4 products are published (not draft)
- Check that products are available (not archived)
- Verify product names match exactly when selecting

### Issue: Labels not showing
- Check that "DV Product Category Label" metafield is set on each product
- Verify labels are not blank
- Ensure labels use consistent case (uppercase recommended)

## Next Steps

1. Create both metafields (DV Related Products + DV Product Category Label)
2. Set category labels on all 4 products
3. Configure related products on all 4 products (each showing the other 3)
4. Test each product page to verify related products appear correctly
5. Adjust labels if needed based on your brand voice

