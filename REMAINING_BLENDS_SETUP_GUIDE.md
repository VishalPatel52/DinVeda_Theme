# Complete Setup Guide for Remaining Blends: Flow & Glow, Moon Rest, Ova Harmony

## Overview

This guide provides step-by-step instructions to populate all metafields and metaobjects for the remaining 3 blends in your DinVeda portfolio. Follow the same structure as the Golden Boost setup, but with blend-specific content.

**Blends covered:**
1. **Flow & Glow** (Panda) - TAG | ZENTRIEREN
2. **Moon Rest** (Koala) - ABEND | LOSLASSEN
3. **Ova Harmony** (Butterfly) - BALANCE | AUSGLEICHEN

---

## Quick Reference: Product Details

| Blend | Animal | Category Label | Quote |
|-------|--------|---------------|-------|
| **Flow & Glow** | Panda 🐼 | `TAG | ZENTRIEREN` | "Ich genieße Balance und Ruhe." – sagt der Panda |
| **Moon Rest** | Koala 🐨 | `ABEND | LOSLASSEN` | "Ich schlafe tief und ruhig." – sagt der Koala |
| **Ova Harmony** | Butterfly 🦋 | `BALANCE | AUSGLEICHEN` | "Ich blühe in Leichtigkeit & Harmonie." – sagt der Schmetterling |

---

# 1. FLOW & GLOW (Panda) - Complete Setup Guide

## Prerequisites Checklist

- [x] All product metafields are created in Shopify Admin
- [x] All metaobject definitions are created (DV Trust Badge, DV Ingredient Highlight, DV Ritual Step, DV Recipe Card)
- [ ] Flow & Glow product exists in Shopify
- [ ] Flow & Glow is assigned to `dinveda-premium` template
- [ ] You have access to Shopify Admin

---

## Step 1: Create MetaObject Instances for Flow & Glow

### 1.1 Create DV Trust Badge Instances (3 badges needed)

**Location**: Shopify Admin → Content → Metaobjects → DV Trust Badge

Create 3 instances:

#### Trust Badge 1: "100% Bio & Vegan"
- **Icon Emoji**: `🌿`
- **Badge Text**: `100 % Bio & vegan`

#### Trust Badge 2: "Ohne Zusätze"
- **Icon Emoji**: `🌸`
- **Badge Text**: `Ohne Zusätze`

#### Trust Badge 3: "Ayurvedisch inspiriert"
- **Icon Emoji**: `🥛`
- **Badge Text**: `Ayurvedisch inspiriert`

**Note**: Save and note the metaobject IDs/names for later assignment.

### 1.2 Create DV Ingredient Highlight Instances

**Location**: Shopify Admin → Content → Metaobjects → DV Ingredient Highlight

Create instances for key Flow & Glow ingredients:

#### Ingredient Highlight 1: Fenchel
- **Icon Image**: Upload or use emoji 🌿
- **Name**: `Fenchel`
- **Description**: `Sanft und ausgleichend – traditionell für Balance und Leichtigkeit geschätzt.`

#### Ingredient Highlight 2: Kreuzkümmel
- **Icon Image**: Upload or use emoji 🌾
- **Name**: `Kreuzkümmel`
- **Description**: `Warm und aromatisch – klassisch in ayurvedischen Gewürzmischungen für Ausgleich.`

#### Ingredient Highlight 3: Koriander
- **Icon Image**: Upload or use emoji 🍃
- **Name**: `Koriander`
- **Description**: `Frisch und harmonisierend – traditionell für sanfte Unterstützung verwendet.`

#### Ingredient Highlight 4: Ceylon-Zimt
- **Icon Image**: Upload or use emoji 🟤
- **Name**: `Ceylon-Zimt`
- **Description**: `Feiner, warmer Zimt – klassisch in Kapha-orientierten Rezepturen genutzt.`

#### Ingredient Highlight 5: Ingwer
- **Icon Image**: Upload or use emoji 🟡
- **Name**: `Ingwer`
- **Description**: `Die Feuerwurzel – im Ayurveda als Begleiter des Agni geschätzt.`

#### Ingredient Highlight 6: Bockshornklee
- **Icon Image**: Upload or use emoji 🟢
- **Name**: `Bockshornklee`
- **Description**: `Mild und ausgleichend – traditionell für sanfte Balance verwendet.`

**Note**: Create as many as needed. Adjust descriptions based on your product knowledge.

### 1.3 Create DV Ritual Step Instances (3 steps needed)

**Location**: Shopify Admin → Content → Metaobjects → DV Ritual Step

Create 3 instances for the daily ritual:

#### Ritual Step 1: Zubereitung
- **Heading**: `Zubereitung`
- **Text**: `1 TL (= 3 g) in 200 ml warmes Wasser, Pflanzenmilch, Kräutertee oder einen Smoothie einrühren – oder als wohltuendes Gewürz in Suppen, Currys & Gemüsegerichten verwenden.`

#### Ritual Step 2: Mein Morgenritual
- **Heading**: `Mein Morgenritual`
- **Text**: `1 TL in warmem Wasser eingerührt – ein harmonischer Start in den Tag für Körper & Geist.`

#### Ritual Step 3: Meine Wohlfühl-Suppe
- **Heading**: `Meine Wohlfühl-Suppe`
- **Text**: `1 TL pro Portion verleiht Suppen eine wärmende, ayurvedische Note – ideal in der Vata-Zeit.`

### 1.4 Create DV Recipe Card Instances

**Location**: Shopify Admin → Content → Metaobjects → DV Recipe Card

**⚠️ IMPORTANT: DV Recipe Card Metaobject must have these fields:**
- `title` (Single line text)
- `description` or `body` (Rich text or Multi-line text)
- `icon` (File/Image reference OR Single line text for SVG URL)

Create recipe card instances for Flow & Glow:

#### Recipe Card 1: Mein Morgenritual
- **Title**: `Mein Morgenritual`
- **Description/Instructions**: `1 TL in warmem Wasser eingerührt – ein harmonischer Start in den Tag für Körper & Geist.`
- **Icon**: Upload SVG/image file (e.g., teacup icon)

#### Recipe Card 2: Meine Wohlfühl-Suppe
- **Title**: `Meine Wohlfühl-Suppe`
- **Description/Instructions**: `1 TL pro Portion verleiht Suppen eine wärmende, ayurvedische Note – ideal in der Vata-Zeit.`
- **Icon**: Upload SVG/image file (e.g., pot/cooking icon)

**Note**: Create as many recipe cards as needed.

---

## Step 2: Populate Product Metafields for Flow & Glow

**Location**: Shopify Admin → Products → Flow & Glow → Scroll to Metafields section

### 2.1 DV Main Product Section Metafields

#### DV Product Subtitle
- **Type**: Single line text
- **Value**: `TAG | ZENTRIEREN`
- **Used in**: Hero section subtitle

#### DV Product Quote
- **Type**: Multi-line text
- **Value**: `Ich genieße Balance und Ruhe.`
- **Note**: Alternative longer quote from label: "Ich schenke dir wohltuende Wärme und ayurvedische Leichtigkeit. Meine Gewürze werden traditionell genutzt, wenn der Bauch entspannen darf und sanfte Balance entsteht – ideal für bewusste, leichte Genussmomente." – dein Panda
- **Used in**: Hero section quote

#### DV Animal Name
- **Type**: Single line text
- **Value**: `Panda`
- **Used in**: Hero section, Story section (auto-generates "Warum der Panda?")

#### DV Ritual Timing
- **Type**: Single line text
- **Value**: `TAG | NACH DEM ESSEN`
- **Used in**: Ritual glance row

#### DV Preparation Mode
- **Type**: Single line text
- **Value**: `Warm`
- **Used in**: Ritual glance row

#### DV Ritual Duration
- **Type**: Single line text
- **Value**: `1-2 Min`
- **Used in**: Ritual glance row

#### DV Trust Badges (List of MetaObject References)
- **Type**: List of metaobject references
- **Metaobject Type**: DV Trust Badge
- **Action**: Click to select
- **Select**: The 3 Trust Badge instances you created in Step 1.1
- **Used in**: Trust badges section below buy box

### 2.2 DV Story Card Section Metafields

#### DV Story Title
- **Type**: Multi-line text
- **Value**: `Warum der Panda?`
- **Note**: Can be left blank if you want auto-generation from animal name
- **Used in**: Story section heading

#### DV Story Content
- **Type**: Rich text
- **Value**: Enter your story content about the panda and Flow & Glow in the rich text editor
- **Example from label**: `"Ich schenke dir wohltuende Wärme und ayurvedische Leichtigkeit. Meine Gewürze werden traditionell genutzt, wenn der Bauch entspannen darf und sanfte Balance entsteht – ideal für bewusste, leichte Genussmomente." – dein Panda`
- **Used in**: Story section main content

#### DV Traditional Benefits
- **Type**: Multi-line text
- **Value**: Enter one benefit per line (used as fallback if checklist blocks are empty)
- **Example**:
  ```
  Traditionell geschätzt für Balance & Leichtigkeit
  Ausgleichend nach dem Essen
  Unterstützt sanfte Zentrierung im Alltag
  ```
- **Used in**: Story section checklist (fallback)

#### DV Animal Image
- **Type**: File reference (Image)
- **Value**: Upload the panda icon/image
- **Note**: This image is displayed in the DV Story Card section above the story title.
- **Used in**: DV Story Card section (animal icon above title)

### 2.3 DV Detail Grid Section Metafields

#### DV Detail Left Title
- **Type**: Single line text
- **Value**: `Tradition der ayurvedischen Gewürzmischungen`
- **Used in**: Left column tradition section

#### DV Detail Left Body
- **Type**: Rich text
- **Value**: Enter tradition/background content in rich text editor
- **Example**: `Flow & Glow verbindet die Weisheit traditioneller ayurvedischer Gewürzmischungen mit moderner Alltagstauglichkeit. Die Kombination aus Fenchel, Kreuzkümmel und Koriander wurde seit Jahrhunderten für ihre ausgleichenden Eigenschaften geschätzt – perfekt für Momente der Balance und Zentrierung.` (Expand with your content)
- **Used in**: Left column tradition section

#### DV Facts Title
- **Type**: Single line text
- **Value**: `Zutaten & Fakten`
- **Used in**: Right column facts section

#### DV First Ingredients
- **Type**: Rich text
- **Value**: Enter ingredients list with formatting in rich text editor
- **Example**: 
  ```
  • Fenchel* (35%)
  • Kreuzkümmel* (25%)
  • Koriander* (20%)
  • Ceylon-Zimt* (10%)
  • Ingwer* (5%)
  • Bockshornklee* (5%)
  ```
- **Used in**: Right column ingredients list

#### DV Allergens & Notes
- **Type**: Rich text
- **Value**: Enter allergens and important notes in rich text editor
- **Example**: 
  ```
  *aus kontrolliert biologischem Anbau
  
  Enthält: Kann Spuren von Nüssen enthalten.
  ```
- **Used in**: Right column allergens section

#### DV Ingredient Highlights (List of MetaObject References)
- **Type**: List of metaobject references
- **Metaobject Type**: DV Ingredient Highlight
- **Action**: Click to select
- **Select**: The Ingredient Highlight instances you created in Step 1.2
- **Used in**: Left column ingredient highlights grid

### 2.4 DV Daily Ritual Section Metafields

#### DV Ritual Steps (List of MetaObject References)
- **Type**: List of metaobject references
- **Metaobject Type**: DV Ritual Step
- **Action**: Click to select
- **Select**: The 3 Ritual Step instances you created in Step 1.3
- **Used in**: Daily ritual section (3-step cards)

### 2.5 Recipe Preparation Section Metafields

#### DV Taste Character
- **Type**: Multi-line text
- **Value**: Enter taste description
- **Example**: 
  ```
  Sanft und ausgleichend mit warmen Aromen. 
  Fenchel gibt eine milde Süße, Kreuzkümmel sorgt für Tiefe, Koriander für Frische.
  ```
- **Used in**: Recipe preparation section

#### DV Pairing Ideas
- **Type**: Multi-line text
- **Value**: Enter pairing suggestions
- **Example**: 
  ```
  Passt zu: Warmes Wasser, Hafermilch, Mandelmilch
  Verfeinern mit: Honig, Kokosöl
  ```
- **Used in**: Recipe preparation section

#### DV Serving Suggestion
- **Type**: Multi-line text
- **Value**: Enter serving suggestions
- **Example from label**: 
  ```
  1 TL (= 3 g) in 200 ml warmes Wasser, Pflanzenmilch, Kräutertee oder einen Smoothie einrühren – oder als wohltuendes Gewürz in Suppen, Currys & Gemüsegerichten verwenden
  ```
- **Used in**: Recipe preparation section

#### DV Frequency
- **Type**: Single line text
- **Value**: `Nach dem Essen oder zwischendurch`
- **Used in**: Recipe preparation section

#### DV Recipe Cards (List of MetaObject References)
- **Type**: List of metaobject references
- **Metaobject Type**: DV Recipe Card
- **Action**: Click to select
- **Select**: The Recipe Card instances you created in Step 1.4
- **Used in**: Recipe cards section

### 2.6 DV Nutrition Table Section Metafields

#### DV Nutrition Table
- **Type**: Multi-line text (for HTML table)
- **Value**: Paste HTML table code directly (nutrition facts table)
- **HTML from label**: 
  ```html
  <table>
    <tr>
      <th>Nährwertangaben</th>
      <th>pro 100g</th>
    </tr>
    <tr>
      <td>Brennwert</td>
      <td>≈ 1372 kJ / 328 kcal</td>
    </tr>
    <tr>
      <td>Fett</td>
      <td>≈ 13 g</td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;- davon gesättigte Fettsäuren</td>
      <td>≈ 0,9 g</td>
    </tr>
    <tr>
      <td>Kohlenhydrate</td>
      <td>≈ 58 g</td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;- davon Zucker</td>
      <td>≈ 1,3 g</td>
    </tr>
    <tr>
      <td>Ballaststoffe</td>
      <td>≈ 32 g</td>
    </tr>
    <tr>
      <td>Eiweiß</td>
      <td>≈ 14 g</td>
    </tr>
    <tr>
      <td>Salz</td>
      <td>≈ 0,11 g</td>
    </tr>
  </table>
  ```
- **Note**: Enter raw HTML code directly - metafield uses `raw` filter to render HTML
- **Used in**: Nutrition table accordion section

### 2.7 DV Compliance Accordion Section Metafields

#### DV Compliance Storage
- **Type**: Rich text
- **Value**: Enter storage instructions in rich text editor
- **Value from label**: 
  ```
  Außerhalb der Reichweite von Kindern, kühl, trocken und lichtgeschützt aufbewahren. Nach dem Öffnen gut verschließen.
  ```
- **Used in**: Compliance accordion storage section

#### DV Compliance Legal
- **Type**: Rich text
- **Value**: Enter legal/compliance information in rich text editor
- **Value from label**: 
  ```
  Allergenhinweis: Kann Spuren von Nüssen, Soja, Senf, Sesam und auch anderen Saaten enthalten.
  ```
- **Used in**: Compliance accordion legal section

### 2.8 DV Complete Ritual Section Metafields

#### DV Related Products Subheading
- **Type**: Single line text
- **Value**: `Sanfte Ergänzungen für den Tag.`
- **Used in**: Complete Ritual section subheading

#### DV Related Products (List of Product References)
- **Type**: List of product references
- **Action**: Click to select products
- **Select**: 
  - **Golden Boost**
  - **Moon Rest**
  - **Ova Harmony**
- **Note**: These are the other 3 products in your portfolio
- **Used in**: Complete Ritual section related products

#### DV Product Category Label
- **Type**: Single line text
- **Value**: `TAG | ZENTRIEREN`
- **Note**: This appears when Flow & Glow is shown as a related product on other PDPs
- **Used in**: Related products cards (on other product pages)

---

## Step 3: Connect Metafields in Theme Editor for Flow & Glow

Follow the same steps as in Golden Boost setup guide (Step 4), but navigate to Flow & Glow product page in theme editor.

**Key Connections:**
- Connect all text/richtext metafields via "Connect dynamic source"
- Skip metaobject lists and file references (configured in metafields directly)
- Add checklist items via blocks in DV Story Card section if needed

---

---

# 2. MOON REST (Koala) - Complete Setup Guide

## Step 1: Create MetaObject Instances for Moon Rest

### 1.1 Create DV Trust Badge Instances (3 badges needed)

**Location**: Shopify Admin → Content → Metaobjects → DV Trust Badge

Create 3 instances (can reuse the same badges or create blend-specific ones):

#### Trust Badge 1: "100% Bio & Vegan"
- **Icon Emoji**: `🌿`
- **Badge Text**: `100 % Bio & vegan`

#### Trust Badge 2: "Ohne Zusätze"
- **Icon Emoji**: `🌸`
- **Badge Text**: `Ohne Zusätze`

#### Trust Badge 3: "Ayurvedisch inspiriert"
- **Icon Emoji**: `🥛`
- **Badge Text**: `Ayurvedisch inspiriert`

### 1.2 Create DV Ingredient Highlight Instances

**Location**: Shopify Admin → Content → Metaobjects → DV Ingredient Highlight

Create instances for key Moon Rest ingredients:

#### Ingredient Highlight 1: Ashwagandha
- **Icon Image**: Upload or use emoji 🌿
- **Name**: `Ashwagandha`
- **Description**: `Sanft und erdend – traditionell für Ruhe und Entspannung geschätzt.`

#### Ingredient Highlight 2: Brahmi
- **Icon Image**: Upload or use emoji 🍃
- **Name**: `Brahmi`
- **Description**: `Beruhigend und ausgleichend – klassisch in ayurvedischen Abendritualen verwendet.`

#### Ingredient Highlight 3: Shatavari
- **Icon Image**: Upload or use emoji 🌸
- **Name**: `Shatavari`
- **Description**: `Harmonisierend und sanft – traditionell für Balance und Wohlbefinden geschätzt.`

#### Ingredient Highlight 4: Ceylon-Zimt
- **Icon Image**: Upload or use emoji 🟤
- **Name**: `Ceylon-Zimt`
- **Description**: `Feiner, warmer Zimt – klassisch in ruhigen Abendritualen genutzt.`

#### Ingredient Highlight 5: Kardamom
- **Icon Image**: Upload or use emoji 🟢
- **Name**: `Kardamom`
- **Description**: `Warm und aromatisch – traditionell für sanfte Wärme verwendet.`

#### Ingredient Highlight 6: Muskatnuss
- **Icon Image**: Upload or use emoji 🟠
- **Name**: `Muskatnuss`
- **Description**: `Mild und wärmend – klassisch in abendlichen Gewürzmischungen geschätzt.`

#### Ingredient Highlight 7: Rosenblüten
- **Icon Image**: Upload or use emoji 🌹
- **Name**: `Rosenblüten`
- **Description**: `Sanft und blumig – traditionell für Harmonie und Ruhe verwendet.`

### 1.3 Create DV Ritual Step Instances (3 steps needed)

#### Ritual Step 1: Zubereitung
- **Heading**: `Zubereitung`
- **Text**: `1 TL (≈ 3 g) in 200 ml warme Pflanzenmilch, Wasser oder Smoothie einrühren. Abends genießen – pur, als Moon Milch oder sanftes Abendritual.`

#### Ritual Step 2: Meine Moon Milk
- **Heading**: `Meine Moon Milk`
- **Text**: `1–2 TL in warme Mandelmilch oder Pflanzenmilch, mit Honig verfeinern.`

#### Ritual Step 3: Mein Abendritual
- **Heading**: `Mein Abendritual`
- **Text**: `1 TL in warmem Wasser als wohltuenden Kräuterdrink genießen.`

### 1.4 Create DV Recipe Card Instances

#### Recipe Card 1: Meine Moon Milk
- **Title**: `Meine Moon Milk`
- **Description/Instructions**: `1–2 TL in warme Mandelmilch oder Pflanzenmilch, mit Honig verfeinern.`
- **Icon**: Upload SVG/image file (e.g., moon/milk icon)

#### Recipe Card 2: Mein Abendritual
- **Title**: `Mein Abendritual`
- **Description/Instructions**: `1 TL in warmem Wasser als wohltuenden Kräuterdrink genießen.`
- **Icon**: Upload SVG/image file (e.g., teacup icon)

#### Recipe Card 3: Mein süßer Traum
- **Title**: `Mein süßer Traum`
- **Description/Instructions**: `Eine Prise über Joghurt oder in einen milden Smoothie geben.`
- **Icon**: Upload SVG/image file (e.g., dessert icon)

---

## Step 2: Populate Product Metafields for Moon Rest

### 2.1 DV Main Product Section Metafields

#### DV Product Subtitle
- **Type**: Single line text
- **Value**: `ABEND | LOSLASSEN`

#### DV Product Quote
- **Type**: Multi-line text
- **Value**: `Ich schlafe tief und ruhig.`
- **Note**: Alternative longer quote from label: "Ich begleite dich sanft in die Abendruhe. Meine Kräuter werden traditionell genutzt, wenn Entspannung, Geborgenheit und innere Harmonie entstehen dürfen – ein warmes, beruhigendes Ritual für deine Nachtmomente." – dein Koala

#### DV Animal Name
- **Type**: Single line text
- **Value**: `Koala`

#### DV Ritual Timing
- **Type**: Single line text
- **Value**: `ABEND | VOR DEM SCHLAFEN`

#### DV Preparation Mode
- **Type**: Single line text
- **Value**: `Warm`

#### DV Ritual Duration
- **Type**: Single line text
- **Value**: `1-2 Min`

#### DV Trust Badges (List of MetaObject References)
- **Type**: List of metaobject references
- **Select**: The 3 Trust Badge instances

### 2.2 DV Story Card Section Metafields

#### DV Story Title
- **Type**: Multi-line text
- **Value**: `Warum der Koala?`

#### DV Story Content
- **Type**: Rich text
- **Value**: Enter your story content about the koala and Moon Rest in the rich text editor
- **Example from label**: `"Ich begleite dich sanft in die Abendruhe. Meine Kräuter werden traditionell genutzt, wenn Entspannung, Geborgenheit und innere Harmonie entstehen dürfen – ein warmes, beruhigendes Ritual für deine Nachtmomente." – dein Koala`

#### DV Traditional Benefits
- **Type**: Multi-line text
- **Value**:
  ```
  Traditionell geschätzt für Ruhe & Entspannung
  Beruhigend am Abend
  Unterstützt sanftes Loslassen
  ```

#### DV Animal Image
- **Type**: File reference (Image)
- **Value**: Upload the koala icon/image

### 2.3 DV Detail Grid Section Metafields

#### DV Detail Left Title
- **Type**: Single line text
- **Value**: `Tradition der Abendrituale`

#### DV Detail Left Body
- **Type**: Rich text
- **Value**: Enter tradition/background content in rich text editor
- **Example**: `Moon Rest verbindet die Weisheit traditioneller ayurvedischer Abendrituale mit moderner Alltagstauglichkeit. Die Kombination aus Ashwagandha, Brahmi und Shatavari wurde seit Jahrhunderten für ihre beruhigenden Eigenschaften geschätzt – perfekt für ruhige Abendmomente und sanftes Loslassen.` (Expand with your content)

#### DV Facts Title
- **Type**: Single line text
- **Value**: `Zutaten & Fakten`

#### DV First Ingredients
- **Type**: Rich text
- **Value**:
  ```
  • Ashwagandha* (30%)
  • Brahmi* (20%)
  • Shatavari* (15%)
  • Ceylon-Zimt* (15%)
  • Kardamom* (10%)
  • Muskatnuss* (5%)
  • Rosenblüten* (5%)
  ```

#### DV Allergens & Notes
- **Type**: Rich text
- **Value**:
  ```
  *aus kontrolliert biologischem Anbau
  
  Enthält: Kann Spuren von Nüssen enthalten.
  Nicht empfohlen für Schwangere oder Stillende.
  ```

#### DV Ingredient Highlights (List of MetaObject References)
- **Type**: List of metaobject references
- **Select**: The Ingredient Highlight instances created in Step 1.2

### 2.4 DV Daily Ritual Section Metafields

#### DV Ritual Steps (List of MetaObject References)
- **Type**: List of metaobject references
- **Select**: The 3 Ritual Step instances created in Step 1.3

### 2.5 Recipe Preparation Section Metafields

#### DV Taste Character
- **Type**: Multi-line text
- **Value**:
  ```
  Warm, mild und blumig mit aromatischen Noten. 
  Ashwagandha und Brahmi geben Tiefe, Rosenblüten sorgen für Sanftheit.
  ```

#### DV Pairing Ideas
- **Type**: Multi-line text
- **Value**:
  ```
  Passt zu: Hafermilch, Mandelmilch, Kokosmilch
  Verfeinern mit: Honig, Kokosöl, Vanille
  ```

#### DV Serving Suggestion
- **Type**: Multi-line text
- **Value from label**:
  ```
  1 TL (≈ 3 g) in 200 ml warme Pflanzenmilch, Wasser oder Smoothie einrühren. Abends genießen – pur, als Moon Milch oder sanftes Abendritual.
  ```

#### DV Frequency
- **Type**: Single line text
- **Value**: `Abends, 1-2 Stunden vor dem Schlafengehen`

#### DV Recipe Cards (List of MetaObject References)
- **Type**: List of metaobject references
- **Select**: The Recipe Card instances created in Step 1.4

### 2.6 DV Nutrition Table Section Metafields

#### DV Nutrition Table
- **Type**: Multi-line text (for HTML table)
- **Value**: Paste HTML table code for Moon Rest nutrition facts
- **HTML from label**: 
  ```html
  <table>
    <tr>
      <th>Nährwertangaben</th>
      <th>pro 100g</th>
    </tr>
    <tr>
      <td>Brennwert</td>
      <td>≈ 1315 kJ / 315 kcal</td>
    </tr>
    <tr>
      <td>Fett</td>
      <td>≈ 3,2 g</td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;- davon gesättigte Fettsäuren</td>
      <td>≈ 1,1 g</td>
    </tr>
    <tr>
      <td>Kohlenhydrate</td>
      <td>≈ 53 g</td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;- davon Zucker</td>
      <td>≈ 6 g</td>
    </tr>
    <tr>
      <td>Ballaststoffe</td>
      <td>≈ 26 g</td>
    </tr>
    <tr>
      <td>Eiweiß</td>
      <td>≈ 9 g</td>
    </tr>
    <tr>
      <td>Salz</td>
      <td>≈ 0,12 g</td>
    </tr>
  </table>
  ```

### 2.7 DV Compliance Accordion Section Metafields

#### DV Compliance Storage
- **Type**: Rich text
- **Value from label**: 
  ```
  Außerhalb der Reichweite von Kindern, kühl, trocken und lichtgeschützt aufbewahren. Nach dem Öffnen gut verschließen.
  ```

#### DV Compliance Legal
- **Type**: Rich text
- **Value from label**: 
  ```
  Allergenhinweis: Kann Spuren von Nüssen, Soja, Senf, Sesam und auch anderen Saaten enthalten.
  
  Hinweis: Aufgrund der intensiven Würze ist das Produkt für Kinder weniger geeignet. Es wird nicht für Schwangere oder Stillende empfohlen. Bei bekannten Unverträglichkeiten sollte vor dem Verzehr ärztlicher Rat eingeholt werden.
  ```

### 2.8 DV Complete Ritual Section Metafields

#### DV Related Products Subheading
- **Type**: Single line text
- **Value**: `Sanfte Ergänzungen für den Tag.`

#### DV Related Products (List of Product References)
- **Type**: List of product references
- **Select**: 
  - **Golden Boost**
  - **Flow & Glow**
  - **Ova Harmony**

#### DV Product Category Label
- **Type**: Single line text
- **Value**: `ABEND | LOSLASSEN`

---

## Step 3: Connect Metafields in Theme Editor for Moon Rest

Follow the same steps as in Golden Boost setup guide (Step 4), but navigate to Moon Rest product page in theme editor.

---

---

# 3. OVA HARMONY (Butterfly) - Complete Setup Guide

## Step 1: Create MetaObject Instances for Ova Harmony

### 1.1 Create DV Trust Badge Instances (3 badges needed)

**Location**: Shopify Admin → Content → Metaobjects → DV Trust Badge

Create 3 instances (can reuse or create blend-specific ones):

#### Trust Badge 1: "100% Bio & Vegan"
- **Icon Emoji**: `🌿`
- **Badge Text**: `100 % Bio & vegan`

#### Trust Badge 2: "Ohne Zusätze"
- **Icon Emoji**: `🌸`
- **Badge Text**: `Ohne Zusätze`

#### Trust Badge 3: "Ayurvedisch inspiriert"
- **Icon Emoji**: `🥛`
- **Badge Text**: `Ayurvedisch inspiriert`

### 1.2 Create DV Ingredient Highlight Instances

**Location**: Shopify Admin → Content → Metaobjects → DV Ingredient Highlight

Create instances for key Ova Harmony ingredients:

#### Ingredient Highlight 1: Shatavari
- **Icon Image**: Upload or use emoji 🌸
- **Name**: `Shatavari`
- **Description**: `Harmonisierend und ausgleichend – traditionell für Balance und Wohlbefinden geschätzt.`

#### Ingredient Highlight 2: Amla
- **Icon Image**: Upload or use emoji 🟢
- **Name**: `Amla`
- **Description**: `Vitalisierend und harmonisierend – klassisch in ayurvedischen Rezepturen verwendet.`

#### Ingredient Highlight 3: Fenchel
- **Icon Image**: Upload or use emoji 🌿
- **Name**: `Fenchel`
- **Description**: `Sanft und ausgleichend – traditionell für sanfte Unterstützung geschätzt.`

#### Ingredient Highlight 4: Rosenblüten
- **Icon Image**: Upload or use emoji 🌹
- **Name**: `Rosenblüten`
- **Description**: `Sanft und blumig – traditionell für Harmonie und Leichtigkeit verwendet.`

### 1.3 Create DV Ritual Step Instances (3 steps needed)

#### Ritual Step 1: Zubereitung
- **Heading**: `Zubereitung`
- **Text**: `1 TL (≈ 3 g) in 200 ml warme Pflanzenmilch, Kräutertee oder Wasser einrühren – nach Wunsch mit Honig verfeinern.`

#### Ritual Step 2: Mein Abendritual
- **Heading**: `Mein Abendritual`
- **Text**: `1 TL Pulver mit warmem Wasser, etwas Zitrone & Honig.`

#### Ritual Step 3: Mein Beauty-Mix
- **Heading**: `Mein Beauty-Mix`
- **Text**: `½ TL in Smoothies oder Joghurt einrühren – für einen Hauch von Rose & Balance.`

### 1.4 Create DV Recipe Card Instances

#### Recipe Card 1: Zubereitung
- **Title**: `Zubereitung`
- **Description/Instructions**: `1 TL (≈ 3 g) in 200 ml warme Pflanzenmilch, Kräutertee oder Wasser einrühren – nach Wunsch mit Honig verfeinern.`
- **Icon**: Upload SVG/image file (e.g., butterfly or teacup icon)

#### Recipe Card 2: Mein Abendritual
- **Title**: `Mein Abendritual`
- **Description/Instructions**: `1 TL Pulver mit warmem Wasser, etwas Zitrone & Honig.`
- **Icon**: Upload SVG/image file (e.g., teacup icon)

#### Recipe Card 3: Mein Beauty-Mix
- **Title**: `Mein Beauty-Mix`
- **Description/Instructions**: `½ TL in Smoothies oder Joghurt einrühren – für einen Hauch von Rose & Balance.`
- **Icon**: Upload SVG/image file (e.g., smoothie icon)

#### Recipe Card 4: Mein Dessert-Moment
- **Title**: `Mein Dessert-Moment`
- **Description/Instructions**: `Eine Prise über warmen Milchreis, Porridge oder Obst – zarter Rosenduft & feine Balance.`
- **Icon**: Upload SVG/image file (e.g., dessert icon)

---

## Step 2: Populate Product Metafields for Ova Harmony

### 2.1 DV Main Product Section Metafields

#### DV Product Subtitle
- **Type**: Single line text
- **Value**: `BALANCE | AUSGLEICHEN`

#### DV Product Quote
- **Type**: Multi-line text
- **Value**: `Ich blühe in Leichtigkeit & Harmonie.`
- **Note**: Alternative longer quote from label: "Ich schenke dir Leichtigkeit und warme Harmonie. Meine Pflanzen werden im Ayurveda geschätzt, wenn innere Balance, sanfte Stabilität und ein wohliges Gefühl willkommen sind – ideal für Tee und Selfcare-Rituale." – dein Schmetterling

#### DV Animal Name
- **Type**: Single line text
- **Value**: `Schmetterling`

#### DV Ritual Timing
- **Type**: Single line text
- **Value**: `BALANCE | MOMENTE DES INNEHALTENS`

#### DV Preparation Mode
- **Type**: Single line text
- **Value**: `Warm`

#### DV Ritual Duration
- **Type**: Single line text
- **Value**: `1-2 Min`

#### DV Trust Badges (List of MetaObject References)
- **Type**: List of metaobject references
- **Select**: The 3 Trust Badge instances

### 2.2 DV Story Card Section Metafields

#### DV Story Title
- **Type**: Multi-line text
- **Value**: `Warum der Schmetterling?`

#### DV Story Content
- **Type**: Rich text
- **Value**: Enter your story content about the butterfly and Ova Harmony in the rich text editor
- **Example from label**: `"Ich schenke dir Leichtigkeit und warme Harmonie. Meine Pflanzen werden im Ayurveda geschätzt, wenn innere Balance, sanfte Stabilität und ein wohliges Gefühl willkommen sind – ideal für Tee und Selfcare-Rituale." – dein Schmetterling`

#### DV Traditional Benefits
- **Type**: Multi-line text
- **Value**:
  ```
  Traditionell geschätzt für Balance & Harmonie
  Ausgleichend in Zeiten des Wandels
  Unterstützt sanfte Transformation
  ```

#### DV Animal Image
- **Type**: File reference (Image)
- **Value**: Upload the butterfly icon/image

### 2.3 DV Detail Grid Section Metafields

#### DV Detail Left Title
- **Type**: Single line text
- **Value**: `Tradition der harmonisierenden Kräuter`

#### DV Detail Left Body
- **Type**: Rich text
- **Value**: Enter tradition/background content in rich text editor
- **Example**: `Ova Harmony verbindet die Weisheit traditioneller ayurvedischer Kräutermischungen mit moderner Alltagstauglichkeit. Die Kombination aus Shatavari, Amla, Fenchel und Rosenblüten wurde seit Generationen für ihre harmonisierenden Eigenschaften geschätzt – perfekt für Momente des Innehaltens und Ausgleichs.` (Expand with your content)

#### DV Facts Title
- **Type**: Single line text
- **Value**: `Zutaten & Fakten`

#### DV First Ingredients
- **Type**: Rich text
- **Value**:
  ```
  • Shatavari* (40%)
  • Amla* (30%)
  • Fenchel* (20%)
  • Rosenblüten* (10%)
  ```

#### DV Allergens & Notes
- **Type**: Rich text
- **Value**:
  ```
  *aus kontrolliert biologischem Anbau
  
  Enthält: Kann Spuren von Nüssen enthalten.
  Für Frauen in besonderen Lebensphasen.
  ```

#### DV Ingredient Highlights (List of MetaObject References)
- **Type**: List of metaobject references
- **Select**: The Ingredient Highlight instances created in Step 1.2

### 2.4 DV Daily Ritual Section Metafields

#### DV Ritual Steps (List of MetaObject References)
- **Type**: List of metaobject references
- **Select**: The 3 Ritual Step instances created in Step 1.3

### 2.5 Recipe Preparation Section Metafields

#### DV Taste Character
- **Type**: Multi-line text
- **Value**:
  ```
  Sanft, harmonisch und leicht blumig. 
  Shatavari gibt Tiefe, Amla sorgt für Frische, Rosenblüten für Sanftheit.
  ```

#### DV Pairing Ideas
- **Type**: Multi-line text
- **Value**:
  ```
  Passt zu: Hafermilch, Mandelmilch, Kokosmilch
  Verfeinern mit: Honig, Kokosöl
  ```

#### DV Serving Suggestion
- **Type**: Multi-line text
- **Value from label**:
  ```
  1 TL (≈ 3 g) in 200 ml warme Pflanzenmilch, Kräutertee oder Wasser einrühren – nach Wunsch mit Honig verfeinern
  ```

#### DV Frequency
- **Type**: Single line text
- **Value**: `Täglich, morgens oder nachmittags`

#### DV Recipe Cards (List of MetaObject References)
- **Type**: List of metaobject references
- **Select**: The Recipe Card instances created in Step 1.4

### 2.6 DV Nutrition Table Section Metafields

#### DV Nutrition Table
- **Type**: Multi-line text (for HTML table)
- **Value**: Paste HTML table code for Ova Harmony nutrition facts
- **HTML from label**: 
  ```html
  <table>
    <tr>
      <th>Nährwertangaben</th>
      <th>pro 100g</th>
    </tr>
    <tr>
      <td>Brennwert</td>
      <td>≈ 1360 kJ / 323 kcal</td>
    </tr>
    <tr>
      <td>Fett</td>
      <td>≈ 2,7 g</td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;- davon gesättigte Fettsäuren</td>
      <td>≈ 0,1 g</td>
    </tr>
    <tr>
      <td>Kohlenhydrate</td>
      <td>≈ 54 g</td>
    </tr>
    <tr>
      <td>&nbsp;&nbsp;- davon Zucker</td>
      <td>≈ 9,6 g</td>
    </tr>
    <tr>
      <td>Ballaststoffe</td>
      <td>≈ 28,3 g</td>
    </tr>
    <tr>
      <td>Eiweiß</td>
      <td>≈ 5,9 g</td>
    </tr>
    <tr>
      <td>Salz</td>
      <td>≈ 1,6 g</td>
    </tr>
  </table>
  ```

### 2.7 DV Compliance Accordion Section Metafields

#### DV Compliance Storage
- **Type**: Rich text
- **Value from label**: 
  ```
  Kühl, trocken und lichtgeschützt lagern. Nach dem Öffnen gut verschließen.
  ```

#### DV Compliance Legal
- **Type**: Rich text
- **Value from label**: 
  ```
  Allergenhinweis: Kann Spuren von Nüssen, Soja, Senf, Sesam und auch anderen Saaten enthalten.
  
  Hinweis: Aufgrund der intensiven Würze ist das Produkt für Kinder weniger geeignet. Es wird nicht für Schwangere oder Stillende empfohlen. Bei bekannten Unverträglichkeiten sollte vor dem Verzehr ärztlicher Rat eingeholt werden.
  ```

### 2.8 DV Complete Ritual Section Metafields

#### DV Related Products Subheading
- **Type**: Single line text
- **Value**: `Sanfte Ergänzungen für den Tag.`

#### DV Related Products (List of Product References)
- **Type**: List of product references
- **Select**: 
  - **Golden Boost**
  - **Flow & Glow**
  - **Moon Rest**

#### DV Product Category Label
- **Type**: Single line text
- **Value**: `BALANCE | AUSGLEICHEN`

---

## Step 3: Connect Metafields in Theme Editor for Ova Harmony

Follow the same steps as in Golden Boost setup guide (Step 4), but navigate to Ova Harmony product page in theme editor.

---

# Final Steps: Verification and Testing

## Step 4: Connect Dynamic Sources in Theme Editor

For each blend (Flow & Glow, Moon Rest, Ova Harmony):

1. Navigate to Theme Editor → Customize → [Product Page]
2. Follow the same dynamic source connection steps as Golden Boost (refer to GOLDEN_BOOST_SETUP_GUIDE.md Step 4)
3. Connect all text/richtext metafields via "Connect dynamic source"
4. Add checklist items via blocks in DV Story Card section if needed
5. Save and publish

## Step 5: Pull Template Configuration

```bash
cd C:\Projects\Shopify\DinVeda_Theme
shopify theme pull --only templates/product.dinveda-premium.json
```

## Step 6: Verification Checklist

For each blend, verify:

- [ ] Hero section shows subtitle, quote, animal name, trust badges
- [ ] Story section shows title, content, and animal image
- [ ] Detail grid shows tradition title, body, facts, ingredients, allergens, ingredient highlights
- [ ] Daily ritual shows 3 ritual steps
- [ ] Recipe preparation shows taste, pairing, serving, frequency, recipe cards
- [ ] Complete ritual shows subheading and related products (other 3 products)
- [ ] Category labels are set correctly on all products
- [ ] Related products are configured correctly on all products

## Complete Portfolio Matrix

| Product | Animal | Category Label | Related Products |
|---------|--------|---------------|------------------|
| **Golden Boost** | Fuchs | `MORGEN \| AKTIVIEREN` | Flow & Glow, Moon Rest, Ova Harmony |
| **Flow & Glow** | Panda | `TAG \| ZENTRIEREN` | Golden Boost, Moon Rest, Ova Harmony |
| **Moon Rest** | Koala | `ABEND \| LOSLASSEN` | Golden Boost, Flow & Glow, Ova Harmony |
| **Ova Harmony** | Schmetterling | `BALANCE \| AUSGLEICHEN` | Golden Boost, Flow & Glow, Moon Rest |

---

## Notes

- All metaobject instances are blend-specific - create separate instances for each blend
- Animal images should be uploaded separately for each product in the DV Animal Image metafield
- Related products configuration ensures cross-selling across the portfolio
- Category labels help customers understand each product's moment and purpose
- Refer to GOLDEN_BOOST_SETUP_GUIDE.md for detailed instructions on dynamic source connections

---

Good luck with your setup! 🚀
