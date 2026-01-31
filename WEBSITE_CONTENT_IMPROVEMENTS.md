# Website Content Improvements

**Purpose:** Improved, on-brand copy for all user-facing content across the DinVeda theme. Aligned with the [Product Content Creation Guide](PRODUCT_CONTENT_CREATION_GUIDE.md): expert organic/Ayurvedic voice, persona-aware, SEO-conscious, no medical claims.

**Scope:** Locales (DE), homepage, collection, product PDP, cart, checkout, help & support, footer, header, newsletters, order confirmation.

**Output:** Markdown only. Use these strings in Theme Editor, section settings, or locale files as specified in **Where to update**.

---

## 1. Principles Applied

- **Tone:** Knowledgeable yet accessible; scientific yet warm. Tradition + modern life.
- **Personas:** Holistic Health Seekers, Stressed Professionals, Natural Moms & Dads, Green Beauty Enthusiasts, Traditionalists 50+.
- **Compliance:** No health claims. Use “traditionell geschätzt”, “unterstützt”, “begleitet”, “Wohlbefinden”.
- **Trust:** Transparency, purity, sustainability, “Hergestellt in Deutschland”, Bio.
- **Language:** German primary (DACH). English alternatives given where templates use EN.

---

## 2. Homepage (`templates/index.json`)

### 2.1 Hero (dinveda-hero)

| Setting | Current | Improved | Where to update |
|--------|---------|----------|------------------|
| `heading` | Alte Weisheit für moderne Tage | Alte Weisheit für deinen modernen Alltag | Hero section settings |
| `subheading` | Entdecke Bio-Rituale aus Deutschland – im Rhythmus deines Alltags. | Pflanzenbasierte Bio-Rituale, handwerklich in Deutschland komponiert – für Momente der Ruhe, Klarheit und Leichtigkeit. | Hero section settings |
| `button_label` | Jetzt starten | Finde dein Ritual | Hero section settings |
| `button_link` | #dein-tag-in-balance | (keep) | — |

**Per-slide overrides (hero_slide blocks):** Use the same `heading` / `subheading` / `button_label` as above for consistency, or keep slide-specific imagery and keep copy the same.

---

### 2.2 Trust Badges (dinveda-trust-badges)

| Block | `label` current | `label` improved | Where to update |
|-------|------------------|------------------|------------------|
| EU logo | REINE BIO-QUALITÄT | REINE BIO-QUALITÄT | (keep) |
| clock | RITUALE FÜR JEDEN TAG | RITUALE FÜR JEDEN TAG | (keep) |
| flower | AYURVEDISCHE WEISHEIT | AYURVEDISCHE WEISHEIT | (keep) |
| germany | BEWUSST HERGESTELLT | BEWUSST HERGESTELLT IN DEUTSCHLAND | Trust badge block |

---

### 2.3 Ritual Picker (dinveda-ritual-picker)

| Setting | Current | Improved | Where to update |
|--------|---------|----------|------------------|
| `middle_section_title` | Dein Tag in Balance - Bald Erhältlich | Dein Tag in Balance – demnächst erhältlich | Ritual picker section |
| `middle_section_text` | Unsere neuen rituellen Mischungen sind fast fertig. Jedes Produkt ist inspiriert von der Weisheit des Tierreichs und sorgfältig für deinen modernen Alltag formuliert. | Unsere neuen Rituale entstehen in unserer deutschen Manufaktur – inspiriert von der Weisheit des Tierreichs, formuliert für deinen Alltag. Bald kannst du sie entdecken. | Ritual picker section |
| `product_tag_text` | BALD ERHÄLTLICH | BALD ERHÄLTLICH | Ritual picker section |
| `notify_button_text` | BENACHRICHTIGE MICH | Benachrichtigen | Ritual picker section |
| `quick_add_button_label` | In den Warenkorb | In den Warenkorb | (keep) |

**Ritual cards (per block):**

| Blend | `descriptor` current | `descriptor` improved |
|-------|----------------------|------------------------|
| Golden Boost | Ein wärmendes Morgenritual für einen bewussten Start in den Tag. | Ein wärmendes Morgenritual für einen bewussten, klaren Start – mit Kurkuma, Ingwer und ayurvedisch inspirierten Gewürzen. |
| Flow & Glow | Ein pflanzenbasiertes Ritual für Leichtigkeit und Ausgleich im Alltag. | Ein pflanzenbasiertes Ritual für Leichtigkeit und Ausgleich – Fenchel, Koriander und wärmende Gewürze, traditionell geschätzt. |
| Ova Harmony | Ein sanftes Ritual für Momente des Innehaltens und Ausgleichs. | Ein sanftes Ritual für Momente des Innehaltens – Shatavari, Amla und Rosenblüten für Leichtigkeit & Harmonie. |
| Moon Rest | Ein wohltuendes Abendritual zum Ankommen und Abschalten. | Ein wohltuendes Abendritual zum Ankommen und Loslassen – Ashwagandha, Brahmi und sanfte Gewürze. |

**Quote lines:** Keep existing (“Ich starte clever …”, “Ich genieße Balance …”, etc.).  
**Button:** `Zu diesem Ritual` → (keep).

---

### 2.4 Split Story (dinveda-split-story)

| Setting | Current | Improved | Where to update |
|--------|---------|----------|------------------|
| `eyebrow` | Unsere Philosophie | Unsere Philosophie | (keep) |
| `title` | Alte Weisheit, neu gelebt | Alte Weisheit, neu gelebt | (keep) |
| `body` | (long HTML) | **Improved version below** | Split story section |
| `cta2_label` | CONTACT SUPPORT | (remove or use „Kontakt“) | Split story section |

**Improved `body` (replace existing):**

```html
<p>Wir glauben an den Rhythmus des Tages – an Momente der Aktivierung, der Zentrierung, des Ausgleichs und der Ruhe. An kleine Rituale, die den Alltag bewusster machen, ohne ihn zu verkomplizieren.</p>
<p>Unsere Mischungen sind inspiriert von ayurvedisch geprägten Pflanzen, Gewürzen und traditionellen Rezepturen – neu gedacht für ein modernes, europäisches Leben. Vielseitig einsetzbar: als Getränk, im Müsli, in Suppen oder zum Verfeinern von Speisen.</p>
<p>DinVeda Rituale sind keine Arzneimittel, sondern kleine tägliche Pausen für dein Wohlbefinden. Handwerklich komponiert in Deutschland, aus Zutaten in Bio-Qualität.</p>
```

**Changes:** Slightly tightened, “keine Arzneimittel” for compliance, “Bio-Qualität” for trust. Remove `cta2_label` / `cta2_link` if not used.

---

## 3. Collection (`templates/collection.dinveda_premium.json`)

### 3.1 Hero (dv-collection-hero)

| Setting | Current | Improved | Where to update |
|--------|---------|----------|------------------|
| `heading` | Choose Your Ritual | Wähle dein Ritual | Collection hero |
| `subtitle` | Find balance with our curated Ayurvedic blends, guarded by ancient wisdom and modern clarity. | Ayurvedisch inspirierte Bio-Mischungen – traditionelle Rezepte, klar formuliert für deinen Alltag. | Collection hero |

### 3.2 Ritual Cards (dinveda-collection-ritual-cards)

| Setting | Current | Improved | Where to update |
|--------|---------|----------|------------------|
| `section_title` | Ayurvedische Rituale für jeden Moment deines Tages | Ayurvedische Rituale für jeden Moment deines Tages | (keep) |
| `button_label` | Zu diesem Ritual | Zu diesem Ritual | (keep) |
| `quick_add_button_label` | In den Warenkorb | In den Warenkorb | (keep) |

### 3.3 Journal Promotion (dinveda-journal-promotion)

| Setting | Current | Improved | Where to update |
|--------|---------|----------|------------------|
| `title` | Deepen Your Ritual | Vertiefe dein Ritual |
| `description` | Our Journal explores the intersection of ancient Ayurveda and modern science. Learn how to craft a daily ritual that serves your mind, body, and spirit. | Unser Journal verbindet ayurvedische Tradition mit Alltagstauglichkeit. Entdecke, wie du kleine Rituale in deinen Tag integrierst – für mehr Bewusstheit und Wohlbefinden. | Journal promotion section |
| `cta_label` | Read the Journal → | Journal lesen → | Journal promotion section |

---

## 4. Product PDP (`templates/product.dinveda-premium.json`)

### 4.1 Main Product (dv-main-product)

| Setting | Current | Improved | Where to update |
|--------|---------|----------|------------------|
| `shipping_note` | KOSTENLOSER VERSAND AB 50€ | Kostenloser Versand ab 50 € (DE) | Main product section |
| `price_note` | inkl. MwSt. / 100g Dose | inkl. MwSt. · Angabe pro 100 g | Main product section |
| `coming_soon_text` | Demnächst verfügbar | Demnächst verfügbar | (keep) |
| `add_to_cart_label` | IN DEN WARENKORB | In den Warenkorb | Main product section |
| `review_text` | REZENSIONEN | Bewertungen | Main product section |

### 4.2 Story Card (dv-story-card)

| Setting | Current | Improved | Where to update |
|--------|---------|----------|------------------|
| `checklist_heading` | Traditionell geschätzt für … | Traditionell geschätzt für … | (keep) |
| `disclaimer_text` | AYURVEDISCH INSPIRIERTE GENUSS-TRADITION. KEIN HEILVERSPRECHEN. | Ayurvedisch inspirierte Genuss-Tradition. Kein Heilversprechen. | Story card section |

### 4.3 Nutrition & Compliance (dv-nutrition-table, dv-compliance-accordion)

| Section | Setting | Current | Improved | Where to update |
|---------|--------|---------|----------|------------------|
| Nutrition | `accordion_title` / `heading` | Nährwertangaben (pro 100 g) | Nährwertangaben (pro 100 g) | (keep) |
| Compliance | `accordion_title` | Wichtige Hinweise & Lagerung | Hinweise & Lagerung | Compliance accordion |
| Compliance | `heading` | Wichtige Hinweise | Wichtige Hinweise | (keep) |
| Compliance | `storage_label` | Lagerung | Lagerung | (keep) |
| Compliance | `legal_label` | Rechtlicher Hinweis | Rechtlicher Hinweis | (keep) |

### 4.4 Purity Promise (dv-purity-promise)

| Setting | Current | Improved | Where to update |
|--------|---------|----------|------------------|
| `title` | Unser Reinheitsversprechen | Unser Reinheitsversprechen | (keep) |
| `tagline` | Ohne Kompromisse. 100% Natur. | Ohne Kompromisse. 100 % Natur. | Purity promise section |

**Blocks:** Keep “Aromen” / “Keine Zusätze”, “100% Bio” / “Reine Naturkraft”, “Füllstoffe” / “Kein Zucker, Kein Salz”. Optionally use “100 %” (with space) for consistency.

### 4.5 Complete Ritual (dv-complete-ritual)

| Setting | Current | Improved | Where to update |
|--------|---------|----------|------------------|
| `heading` | Vervollständige dein Ritual | Vervollständige dein Ritual | (keep) |
| `empty_message` | No products available | Derzeit keine Empfehlungen. | Complete ritual section |

---

## 5. Cart (`templates/cart.dinveda_premium.json`)

### 5.1 Cart Hero (dinveda-cart-hero)

| Setting | Current | Improved | Where to update |
|--------|---------|----------|------------------|
| `heading` | Your Selections | Deine Auswahl | Cart hero |
| `subtitle` | Review the rituals you have chosen for your journey. | Überprüfe die Rituale, die du für deinen Alltag gewählt hast. | Cart hero |

### 5.2 Cart Items (dinveda-cart-items)

| Setting | Current | Improved | Where to update |
|--------|---------|----------|------------------|
| `cart_label` | YOUR RITUALS | Deine Rituale | Cart items section |
| `summary_title` | Order Summary | Bestellübersicht | Cart items section |
| `checkout_button_label` | ZUR KASSE | Zur Kasse | Cart items section |
| `security_text` | Secure Checkout with SSL Encryption | Sicheres Bezahlen mit SSL-Verschlüsselung | Cart items section |

### 5.3 Complete Your Ritual (dinveda-complete-your-day)

| Setting | Current | Improved | Where to update |
|--------|---------|----------|------------------|
| `heading` | Complete Your Ritual | Vervollständige dein Ritual | Complete your day section |
| `view_all_label` | ALLE RITUALE ANSEHEN | Alle Rituale ansehen | Complete your day section |

### 5.4 Brand Story (dinveda-split-story on cart)

| Setting | Current | Improved | Where to update |
|--------|---------|----------|------------------|
| `eyebrow` | OUR PHILOSOPHY | Unsere Philosophie | Split story on cart |
| `title` | Guided by Nature's Wisdom | Von der Weisheit der Natur geleitet | Split story on cart |
| `body` | (EN paragraph) | **Use German version below** | Split story on cart |
| `cta_label` | READ OUR STORY → | Unsere Geschichte lesen → | Split story on cart |

**German `body` for cart story:**

```html
<p>Für uns geht es nicht darum, etwas zu „reparieren“, sondern uns mit den Rhythmen der Natur zu verbinden. Unsere Mischungen sind von der Weisheit des Tierreichs inspiriert. Jedes Ritual ist eine Einladung, innezuhalten, zu atmen und dich mit deiner inneren Natur zu verbinden – keine Medizin, sondern eine Art zu leben.</p>
```

---

## 6. Checkout (`templates/page.checkout.json`, locales)

### 6.1 Checkout Form (dinveda-checkout-form)

| Setting | Current | Improved | Where to update |
|--------|---------|----------|------------------|
| `continue_button_label` | CONTINUE TO SHIPPING | Weiter zur Lieferadresse | Checkout form section |

**Locale `de.json` – checkout:** Use improved strings below. The form uses `checkout.contact.*`, `checkout.shipping.*`, etc.

### 6.2 Checkout Locales (de.json) – Key Strings

| Key | Current | Improved | Where to update |
|-----|---------|----------|------------------|
| `checkout.contact.newsletter` | E-Mail mit Neuigkeiten und Angeboten zu Ritualen erhalten | Updates zu Ritualen, Tipps & Angebote – seltener, nur das Wichtigste. | `locales/de.json` |
| `checkout.summary.discount_placeholder` | Rabattcode oder Geschenkkarte | Rabattcode oder Gutschein | `locales/de.json` |
| `checkout.security.secure_payment` | SICHERE ZAHLUNG | Sichere Zahlung | (optional) |
| `checkout.security.fast_shipping` | SCHNELLER VERSAND | Schneller Versand | (optional) |
| `checkout.security.carbon_neutral` | KLIMANEUTRAL | Klimaneutral | (optional) |

---

## 7. Help & Support (`templates/page.help.json`, `locales/de.json`)

**Note:** The help page section uses **English** in the template. Below: German alternatives for a DE-focused help experience. Switch the section settings to these when using German.

### 7.1 Page-Level (dinveda-help-support)

| Setting | Current (EN) | Improved (DE) | Where to update |
|--------|----------------|----------------|------------------|
| `category_label` | CUSTOMER CARE | KUNDENSERVICE | Help section |
| `page_title` | Help & Support | Hilfe & Support | Help section |
| `page_subtitle` | Find answers to common questions about our rituals, ingredients, and service. We're here to guide you on your journey. | Antworten auf häufige Fragen zu unseren Ritualen, Zutaten und unserem Service. Wir begleiten dich gerne auf deiner Reise. | Help section |
| `search_placeholder` | Search for answers... | Nach Antworten suchen … | Help section |
| `all_category_label` | ALL | Alle | Help section |
| `support_heading` | Still need help? | Noch Fragen? | Help section |
| `support_text` | Our support team is available Monday through Friday, 9am - 5pm CET. We are happy to assist you personally. | Unser Support ist Mo–Fr, 9–17 Uhr (MEZ) für dich da. Wir helfen dir gerne persönlich weiter. | Help section |
| `email_button_label` | EMAIL SUPPORT | E-Mail Support | Help section |
| `live_chat_button_label` | LIVE CHAT | Live-Chat | Help section |

### 7.2 FAQ Categories

| Setting | Current (EN) | Improved (DE) | Where to update |
|--------|----------------|----------------|------------------|
| Ordering | ORDERING & SHIPPING | BESTELLUNG & VERSAND | FAQ category block |
| Product | PRODUCT INFORMATION | PRODUKTINFORMATIONEN | FAQ category block |
| Returns | RETURNS & REFUNDS | RÜCKGABE & ERSTATTUNG | FAQ category block |
| Account | ACCOUNT MANAGEMENT | KONTOVERWALTUNG | FAQ category block |

### 7.3 FAQ Q&A – Improved German Versions

Use these as replacement copy for the corresponding FAQ items in the help section.

**Versand:**

- **Wo versendet ihr?**  
  Wir liefern aktuell in alle EU-Länder. Weitere Regionen sind in Planung. Die aktuellsten Infos findest du auf unserer Versandseite.

- **Wie lange dauert die Lieferung?**  
  In Deutschland in der Regel 2–3 Werktage. In andere EU-Länder 5–7 Werktage. Sobald deine Bestellung versandt wurde, erhältst du eine Versandbestätigung mit Tracking.

- **Gibt es kostenlosen Versand?**  
  Ja. Ab 50 € Bestellwert versenden wir innerhalb Deutschlands versandkostenfrei. International ab 75 €.

**Produkt:**

- **Sind eure Zutaten bio?**  
  Ja. Alle Zutaten stammen aus kontrolliert biologischem Anbau und sind von anerkannten Öko-Kontrollstellen zertifiziert.

- **Wie soll ich die Mischungen aufbewahren?**  
  Kühl und trocken, vor direkter Sonne geschützt. Behälter fest verschlossen halten. Nach dem Öffnen am besten innerhalb von 12 Monaten verbrauchen.

- **Sind die Produkte vegan?**  
  Ja. Alle Produkte sind vegan. Wir verwenden ausschließlich pflanzliche Zutaten.

**Rückgabe:**

- **Wie ist eure Rückgaberegelung?**  
  Ungenutzte, originalverschlossene Produkte können innerhalb von 30 Tagen nach Erhalt zurückgegeben werden. Du erhältst den vollen Kaufpreis erstattet.

- **Wie starte ich eine Rückgabe?**  
  Schreib uns eine E-Mail mit deiner Bestellnummer an support@dinveda.de (oder deine Support-Adresse). Wir schicken dir dann ein Rücksendeetikett und die genauen Schritte.

**Konto:**

- **Brauche ich ein Konto zum Bestellen?**  
  Nein. Du kannst auch als Gast bestellen. Mit Konto kannst du Bestellungen verfolgen, Adressen speichern und von exklusiven Angeboten profitieren.

- **Wie setze ich mein Passwort zurück?**  
  Auf der Login-Seite „Passwort vergessen?“ wählen und deine E-Mail eingeben. Du erhältst einen Link zum Zurücksetzen. Bitte auch den Spam-Ordner prüfen.

**Implementierung:** Update each FAQ block’s `question` and `answer` in `page.help.json` (or via Theme Editor) with the improved German text above. Adjust support e-mail if different.

---

## 8. Footer & Header

### 8.1 DV Footer (`sections/footer-group.json` → `dv_footer`)

| Setting | Current | Improved | Where to update |
|--------|---------|----------|------------------|
| `description` | <p>Alte Weisheit. Neu gelebt.</p> | <p>Alte Weisheit. Neu gelebt.</p> | (keep) |
| `nav_link_1_text` | Startseite | Startseite | (keep) |
| `nav_link_2_text` | Blogs | Blog | Footer section |
| `legal_link_3_text` | Contact | Kontakt | Footer section |
| `copyright_text` | © 2026 GreenPath Venture GmbH. Alle Rechte vorbehalten. | © 2026 GreenPath Venture GmbH. Alle Rechte vorbehalten. | (keep) |

### 8.2 Announcement Bar (header-group → announcement-bar)

**Current (disabled):**  
`Entdecke 100% Bio & Vegan Produkte - Hergestellt in Deutschland!`

**Improved (if re-enabled):**  
`100 % Bio & vegan · Hergestellt in Deutschland · Entdecke dein Ritual.`

---

## 9. Locales (`locales/de.json`) – Selected Strings

### 9.1 General

| Key | Current | Improved | Where to update |
|-----|---------|----------|------------------|
| `general.404.title` | Hoppla – das konnten wir nicht finden | Seite nicht gefunden | `locales/de.json` |
| `general.404.subtext` | Diese Seite existiert nicht. Versuchen Sie, nach dem zu suchen, was Sie gerne finden möchten: | Die angeforderte Seite existiert nicht. Suche nach deinem Ritual oder blättere in unseren Kollektionen: | `locales/de.json` |
| `general.404.button` | Wieder nach Hause gehen | Zur Startseite | `locales/de.json` |
| `general.newsletter_form.newsletter_email` | E-Mail-Adresse eingeben | Deine E-Mail-Adresse | `locales/de.json` |
| `general.newsletter_form.confirmation` | Danke, dass Sie unseren Newsletter abonniert haben. | Danke! Du erhältst von uns Rituale, Tipps und Angebote. | `locales/de.json` |
| `general.newsletter_form.submit` | Werden Sie Mitglied | Anmelden | `locales/de.json` |
| `general.header.cart` | Mein Einkaufswagen | Warenkorb | `locales/de.json` |

### 9.2 Cart

| Key | Current | Improved | Where to update |
|-----|---------|----------|------------------|
| `cart.general.title` | Mein Einkaufswagen | Warenkorb | `locales/de.json` |
| `cart.general.empty` | Dein Warenkorb ist leer | Dein Warenkorb ist noch leer | `locales/de.json` |
| `cart.general.shop_now` | Jetzt Einkaufen | Jetzt Rituale entdecken | `locales/de.json` |
| `cart.general.continue` | Weiter einkaufen | Weiter einkaufen | (keep) |
| `cart.general.checkout` | Kasse | Zur Kasse | `locales/de.json` |
| `cart.general.note` | Bitte geben Sie spezielle Anweisungen hierunter: | Optionale Anmerkung zur Bestellung: | `locales/de.json` |
| `cart.general.free_shipping_qualified` | Ihre Bestellung ist für kostenlosen Inlandsversand qualifiziert! | Deine Bestellung hat kostenlosen Versand (Inland). | `locales/de.json` |

### 9.3 Products

| Key | Current | Improved | Where to update |
|-----|---------|----------|------------------|
| `products.product.add_to_cart` | Zum Einkaufswagen hinzufügen | In den Warenkorb | `locales/de.json` |
| `products.product.added_success` | Zum Einkaufswagen hinzugefügt | In den Warenkorb gelegt | `locales/de.json` |
| `products.product.view_cart` | Einkaufswagen ansehen | Warenkorb ansehen | `locales/de.json` |
| `products.product.call_to_action` | Jetzt kaufen | Jetzt kaufen | (keep) |
| `products.product.product_description` | Produktbeschreibung | Produktbeschreibung | (keep) |

### 9.4 Customer / Order Confirmation

| Key | Current | Improved | Where to update |
|-----|---------|----------|------------------|
| `customer.order.confirmation.thank_you_message` | Vielen Dank, %name% | Danke, %name% | `locales/de.json` |
| `customer.order.confirmation.subtitle` | Deine Reise zum Gleichgewicht hat begonnen. Wir haben deine Bestellung erhalten und bereiten deine Rituale mit Sorgfalt vor. | Deine Reise hat begonnen. Wir haben deine Bestellung erhalten und bereiten deine Rituale mit Sorgfalt vor. | `locales/de.json` |
| `customer.order.confirmation.track_order_label` | BESTELLSTATUS VERFOLGEN | Bestellstatus verfolgen | `locales/de.json` |
| `customer.order.confirmation.items_heading` | Deine Ritualauswahl | Deine Ritualauswahl | (keep) |
| `customer.order.confirmation.items_subtitle` | IN DIESER BESTELLUNG ENTHALTEN | In dieser Bestellung | `locales/de.json` |
| `customer.order.confirmation.status_preparation_description` | Hergestellt in unserer deutschen Manufaktur. | Hergestellt in unserer Manufaktur in Deutschland. | `locales/de.json` |
| `customer.order.confirmation.status_shipping_description` | Erwartete Lieferung: 2-3 Werktage. | Erwartete Lieferung: 2–3 Werktage. | `locales/de.json` |

### 9.5 Coming Soon Modal

| Key | Current | Improved | Where to update |
|-----|---------|----------|------------------|
| `coming_soon.modal_title` | Benachrichtigung erhalten | Benachrichtigung erhalten | (keep) |
| `coming_soon.modal_description` | Trage dich ein und wir informieren dich, sobald dieses Ritual verfügbar ist. | Trag dich ein – wir informieren dich, sobald dieses Ritual verfügbar ist. | `locales/de.json` |
| `coming_soon.email_placeholder` | Deine E-Mail-Adresse | Deine E-Mail-Adresse | (keep) |
| `coming_soon.submit` | Benachrichtigen | Benachrichtigen | (keep) |
| `coming_soon.success` | Vielen Dank! Wir benachrichtigen dich, sobald das Ritual verfügbar ist. | Danke! Wir melden uns, sobald das Ritual verfügbar ist. | `locales/de.json` |
| `coming_soon.error` | Ein Fehler ist aufgetreten. Bitte versuche es erneut. | Ein Fehler ist aufgetreten. Bitte versuche es erneut. | (keep) |

### 9.6 Help (Locales)

`help.general.*` and `help.categories.*` in `de.json` already mirror the structure. Use the same improved strings as in **Section 7** for page subtitle, support text, etc., and align category names (e.g. `ordering_shipping` → „BESTELLUNG & VERSAND“) if you centralise help copy in locales.

---

## 10. Newsletter / Mailing Popup

**Source:** `config/settings_data.json` → `current.sections.mailing-popup` (and presets). Theme often uses default “Foodie”/“Grow” presets; the **current** theme uses `mailing-popup` from `current.sections`.

| Setting | Current | Improved | Where to update |
|--------|---------|----------|------------------|
| `mail_popup_title` | Keep In Touch | Bleib mit uns verbunden | Theme settings → Mailing popup |
| `mail_popup_text` | Signup for exclusive offers and promotions. | Erhalte Inspiration zu Ritualen, Angebote und Neuigkeiten – nur das Wichtigste, ohne Überflutung. | Theme settings → Mailing popup |
| `mail_button_text` | Signup | Anmelden | Theme settings → Mailing popup |
| `mail_gdpr_text` | *By completing this form you're signing up to receive our emails and can unsubscribe at any time. | *Mit dem Absenden meldest du dich für unseren Newsletter an. Du kannst dich jederzeit abmelden. | Theme settings → Mailing popup |

**Note:** If the store is DE-only, use the German strings above. If multi-language, keep EN and add translations via locale files or market-specific templates.

---

## 11. Order Confirmation

Order confirmation copy lives in **Customer account** templates and `customer.order.confirmation.*` in `locales/de.json`. All improved strings are in **Section 9.4**. Ensure the order confirmation page (and any e-mail templates that use these keys) use the updated locales.

---

## 12. Implementation Checklist

- [ ] **Homepage:** Update hero, trust badges, ritual picker (including card descriptors), split story body and CTAs in Theme Editor.
- [ ] **Collection:** Update collection hero, journal promotion; optionally ritual cards titles.
- [ ] **Product:** Update main product, story card, compliance, purity promise, complete ritual in product template sections.
- [ ] **Cart:** Update cart hero, cart items, complete-your-day, cart split story in cart template.
- [ ] **Checkout:** Update checkout form button label; optionally checkout locale strings in `de.json`.
- [ ] **Help:** Replace FAQ categories and Q&A, page-level strings in Help section (and align `de.json` help keys if used).
- [ ] **Footer:** Update nav/legal link labels (Blog, Kontakt) in footer-group.
- [ ] **Header:** If announcement bar is enabled, replace with improved copy.
- [ ] **Locales:** Apply all `locales/de.json` changes from Sections 9 and 6.
- [ ] **Newsletter:** Update mailing popup strings in Theme settings.
- [ ] **Sanity check:** Search for remaining “Sie”, “Ihre”, “Ihrem” etc. and replace with “du”/“dein” where the tone is informal.

---

## 13. References

- [PRODUCT_CONTENT_CREATION_GUIDE.md](PRODUCT_CONTENT_CREATION_GUIDE.md) – Voice, personas, SEO, barriers.
- [PRODUCT_CONTENT_ASHWAGANDHA_EXAMPLE.md](PRODUCT_CONTENT_ASHWAGANDHA_EXAMPLE.md) – Full product-copy example.
- Theme Editor: **Online Store → Themes → Customize** for section-level copy.
- Locales: **Settings → Languages** or `locales/de.json` in the theme.
