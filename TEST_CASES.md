# DinVeda Theme - Test Cases

**Date:** {{ current_date }}  
**Scope:** All changes made to DinVeda theme, including new hero carousel section  
**Testing Environment:** Shopify Theme Editor + Live Preview

---

## 1. Hero Carousel Section (`dv-hero-animal-carousel`)

### 1.1 Section Creation & Basic Functionality

**Test Case TC-001: Section Appears in Theme Editor**
- **Precondition:** Theme editor is open, homepage template is selected
- **Steps:**
  1. Click "Add section"
  2. Look for "DinVeda Hero Carousel" in the section list
- **Expected Result:** Section appears in the list and can be added to the page
- **Priority:** High

**Test Case TC-002: Section Can Be Added to Homepage**
- **Precondition:** Theme editor open, homepage template selected
- **Steps:**
  1. Click "Add section"
  2. Select "DinVeda Hero Carousel"
  3. Drag it to the top of the page (first position)
- **Expected Result:** Section is added and visible in the editor preview
- **Priority:** High

**Test Case TC-003: Section Has Correct Default Settings**
- **Precondition:** Section "DinVeda Hero Carousel" is added to homepage
- **Steps:**
  1. Select the section in theme editor
  2. Verify section settings panel appears
  3. Check default values:
     - Full width: checked
     - Image height: Natural
     - Image position: Left
     - Image width: 50%
     - Text align: Left
     - Vertical align: Middle
- **Expected Result:** All default settings match expected values
- **Priority:** Medium

---

### 1.2 Carousel Image Functionality

**Test Case TC-004: Add Image Blocks to Carousel**
- **Precondition:** Section "DinVeda Hero Carousel" is added
- **Steps:**
  1. In section settings, click "Add block"
  2. Select "Image" block type
  3. Add 3-4 image blocks
  4. Upload images (bee, koala, fox, etc.) to each block
  5. Add optional link to each image
- **Expected Result:** 
  - Blocks are created successfully
  - Images upload and display in preview
  - Links are saved correctly
- **Priority:** High

**Test Case TC-005: Carousel Displays Multiple Images**
- **Precondition:** Section has 3+ image blocks with uploaded images
- **Steps:**
  1. View live preview or published page
  2. Observe the carousel
- **Expected Result:**
  - All images are visible in the carousel
  - Carousel shows first image by default
  - Images render correctly (no broken images)
- **Priority:** High

**Test Case TC-006: Carousel Navigation Arrows Work**
- **Precondition:** Carousel has 2+ images
- **Steps:**
  1. View the carousel on the page
  2. Click the right arrow button
  3. Click the left arrow button
  4. Test multiple times in both directions
- **Expected Result:**
  - Arrows are visible and clickable
  - Clicking right arrow moves to next slide
  - Clicking left arrow moves to previous slide
  - Slides transition smoothly
  - Carousel wraps around (last slide → first slide, first slide → last slide)
- **Priority:** High

**Test Case TC-007: Carousel Touch/Swipe Gestures Work (Mobile)**
- **Precondition:** Carousel has 2+ images, test on mobile device or browser dev tools mobile view
- **Steps:**
  1. Open page on mobile device or mobile view (max-width: 767px)
  2. Swipe left on carousel
  3. Swipe right on carousel
- **Expected Result:**
  - Swipe left advances to next slide
  - Swipe right goes to previous slide
  - Gestures feel responsive and natural
- **Priority:** High

**Test Case TC-008: Image Links Work Correctly**
- **Precondition:** At least one image block has a link set
- **Steps:**
  1. Click on an image in the carousel that has a link
  2. Verify navigation
- **Expected Result:**
  - Clicking image navigates to the specified URL
  - Links open in same tab (unless configured otherwise)
- **Priority:** Medium

---

### 1.3 Text Content Functionality

**Test Case TC-009: Default Text Content Displays**
- **Precondition:** Section is added with default settings
- **Steps:**
  1. View section in preview/editor
  2. Check text column
- **Expected Result:**
  - Heading shows: "DinVeda – Bio-ayurvedische Ritualmischungen"
  - Text shows: "Bio-ayurvedische Pflanzenmischungen für deine täglichen Rituale"
  - Text is left-aligned
- **Priority:** High

**Test Case TC-010: Edit Heading Text**
- **Precondition:** Section is selected in editor
- **Steps:**
  1. In section settings, find "Heading" field
  2. Change text to: "Test Heading"
  3. Save and preview
- **Expected Result:**
  - Text updates in preview immediately
  - Saved value persists after page reload
- **Priority:** High

**Test Case TC-011: Edit Description Text (Rich Text)**
- **Precondition:** Section is selected in editor
- **Steps:**
  1. In section settings, find "Text" field (rich text editor)
  2. Change content, add formatting (bold, italic)
  3. Save and preview
- **Expected Result:**
  - Rich text formatting applies correctly
  - Text updates in preview
  - HTML is rendered properly
- **Priority:** High

**Test Case TC-012: Add/Edit Button**
- **Precondition:** Section is selected in editor
- **Steps:**
  1. In section settings, enter button label: "Shop Now"
  2. Enter button link: "/collections/all"
  3. Save and preview
- **Expected Result:**
  - Button appears with correct label
  - Button link works correctly
  - Button styling matches theme
- **Priority:** High

---

### 1.4 Layout & Responsive Design

**Test Case TC-013: Two-Column Layout Displays Correctly (Desktop)**
- **Precondition:** Section has images and text, view on desktop (min-width: 768px)
- **Steps:**
  1. View section on desktop viewport
  2. Verify layout
- **Expected Result:**
  - Images appear in left column (or right if configured)
  - Text appears in opposite column
  - Both columns are properly sized (50/50 by default)
  - Content is vertically centered
- **Priority:** High

**Test Case TC-014: Mobile Layout (Stacked)**
- **Precondition:** Section has images and text, view on mobile (max-width: 767px)
- **Steps:**
  1. View section on mobile device or mobile viewport
  2. Check layout
- **Expected Result:**
  - If image position is "right", images stack above text
  - Layout adapts to single column
  - Text and images are readable
  - Spacing is appropriate
- **Priority:** High

**Test Case TC-015: Full Width Setting Works**
- **Precondition:** Section is selected in editor
- **Steps:**
  1. Check "Enable full width" setting
  2. Save and preview
  3. Uncheck "Enable full width"
  4. Save and preview
- **Expected Result:**
  - When enabled: section spans full viewport width
  - When disabled: section respects theme container width
- **Priority:** Medium

**Test Case TC-016: Image Position Setting (Left/Right)**
- **Precondition:** Section is selected in editor
- **Steps:**
  1. Change "Choose image position" to "Right"
  2. Save and preview
  3. Change back to "Left"
  4. Save and preview
- **Expected Result:**
  - When "Right": images appear on right, text on left
  - When "Left": images appear on left, text on right
  - Mobile stacking order updates accordingly
- **Priority:** Medium

**Test Case TC-017: Image Width Settings**
- **Precondition:** Section is selected in editor
- **Steps:**
  1. Change "Choose image width" through options: 33%, 50%, 66%, 75%, 100%
  2. Verify each setting in preview
- **Expected Result:**
  - Each width setting applies correctly
  - Text column adjusts proportionally
  - Layout remains balanced
- **Priority:** Medium

**Test Case TC-018: Text Alignment Settings**
- **Precondition:** Section is selected in editor
- **Steps:**
  1. Change "Text horizontal align" to: Left, Center, Right
  2. Verify each in preview
- **Expected Result:**
  - Text aligns according to selected option
  - Button aligns with text
- **Priority:** Low

**Test Case TC-019: Vertical Alignment Settings**
- **Precondition:** Section is selected in editor
- **Steps:**
  1. Change "Text vertical align" to: Top, Middle, Bottom
  2. Verify each in preview
- **Expected Result:**
  - Text positions vertically according to selection
  - Content remains readable
- **Priority:** Low

**Test Case TC-020: Fixed Height Setting**
- **Precondition:** Section is selected in editor
- **Steps:**
  1. Change "Image height" to "Fixed height"
  2. Adjust "Desktop fixed height" slider (200-1000px)
  3. Adjust "Mobile fixed height" slider (200-800px)
  4. Verify on desktop and mobile views
- **Expected Result:**
  - Images respect fixed height on desktop
  - Images respect fixed height on mobile
  - Images crop/scale appropriately
- **Priority:** Medium

---

### 1.5 Flickity Carousel Integration

**Test Case TC-021: Carousel Initializes Correctly**
- **Precondition:** Section has 2+ image blocks, page loads
- **Steps:**
  1. Open page with carousel section
  2. Check browser console for errors
  3. Verify carousel is interactive
- **Expected Result:**
  - No JavaScript errors in console
  - Flickity library loads successfully
  - Carousel is initialized and functional
  - First slide is visible and active
- **Priority:** High

**Test Case TC-022: Carousel Wraps Around**
- **Precondition:** Carousel has 3+ images
- **Steps:**
  1. Navigate to last slide using arrows
  2. Click right arrow again
  3. Navigate to first slide
  4. Click left arrow
- **Expected Result:**
  - Last slide → first slide wraps seamlessly
  - First slide → last slide wraps seamlessly
  - No broken transitions
- **Priority:** Medium

**Test Case TC-023: Carousel Works in Theme Editor**
- **Precondition:** Section added to homepage in theme editor
- **Steps:**
  1. Add section with 2+ images
  2. Click "Preview" in theme editor
  3. Test carousel navigation
  4. Edit section, add another image block
  5. Preview again
- **Expected Result:**
  - Carousel works in theme editor preview
  - Changes to blocks reflect immediately
  - No conflicts with editor functionality
- **Priority:** High

**Test Case TC-024: Section Load Event Works**
- **Precondition:** Section is dynamically added via theme editor
- **Steps:**
  1. In theme editor, add new "DinVeda Hero Carousel" section
  2. Add 2+ image blocks
  3. Observe carousel behavior
- **Expected Result:**
  - Carousel initializes correctly when section is added
  - No manual page refresh needed
  - All carousel features work immediately
- **Priority:** High

**Test Case TC-025: Block Selection in Editor Works**
- **Precondition:** Section has multiple image blocks in theme editor
- **Steps:**
  1. Click on an image block in the editor
  2. Select a different image block
  3. Verify carousel navigation in preview
- **Expected Result:**
  - Selecting a block highlights it
  - Carousel shows the selected slide
  - Block settings can be edited
- **Priority:** Medium

---

### 1.6 Styling & Visual Appearance

**Test Case TC-026: Section Uses Correct CSS Classes**
- **Precondition:** Section is added to page
- **Steps:**
  1. Inspect section HTML in browser dev tools
  2. Verify classes on root element
- **Expected Result:**
  - Root div has class: `dv-hero-animal-carousel`
  - Root div has class: `section-image-carousel-text`
  - All theme classes are present
- **Priority:** Medium

**Test Case TC-027: Section Spacing/Padding Settings**
- **Precondition:** Section is selected in editor
- **Steps:**
  1. Change "Section spacing" to: Top, Bottom, Both, None
  2. Verify spacing in preview
- **Expected Result:**
  - Spacing applies correctly above/below section
  - No overlapping with adjacent sections
- **Priority:** Low

**Test Case TC-028: Images Render with Correct Quality**
- **Precondition:** Section has images uploaded
- **Steps:**
  1. View section on desktop (high-DPI display if available)
  2. Check image sharpness and quality
- **Expected Result:**
  - Images are crisp and clear
  - No pixelation or blurriness
  - Responsive images load appropriate sizes
- **Priority:** Medium

**Test Case TC-029: Button Styling Matches Theme**
- **Precondition:** Section has button configured
- **Steps:**
  1. Verify button appearance
  2. Check hover states
  3. Compare with other theme buttons
- **Expected Result:**
  - Button uses theme's button styles
  - Hover effects work correctly
  - Button is visually consistent with theme
- **Priority:** Low

---

## 2. JavaScript Initialization (`assets/carousel.js`)

### 2.1 Generic Carousel Initialization

**Test Case TC-030: Generic Initialization Works for All Carousel Sections**
- **Precondition:** Page has multiple carousel sections (image-carousel-with-text, dv-hero-animal-carousel, etc.)
- **Steps:**
  1. Load page with multiple carousel sections
  2. Verify all carousels initialize
  3. Test each carousel independently
- **Expected Result:**
  - All carousel sections initialize correctly
  - No conflicts between multiple carousels
  - Each carousel works independently
- **Priority:** High

**Test Case TC-031: Flickity Library Loads Correctly**
- **Precondition:** Page with carousel section loads
- **Steps:**
  1. Check browser network tab
  2. Verify flickity.js loads
  3. Check console for errors
- **Expected Result:**
  - flickity.js loads successfully
  - No 404 errors
  - No JavaScript errors related to Flickity
- **Priority:** High

**Test Case TC-032: Carousel Initialization on Dynamic Load**
- **Precondition:** Section added via theme editor or AJAX
- **Steps:**
  1. Dynamically add carousel section
  2. Observe initialization
- **Expected Result:**
  - `shopify:section:load` event triggers
  - Carousel initializes within 200ms delay
  - All functionality works immediately
- **Priority:** High

**Test Case TC-033: Multiple Carousels on Same Page**
- **Precondition:** Homepage has 2+ carousel sections
- **Steps:**
  1. Add "DinVeda Hero Carousel" section
  2. Add "Image carousel with text" section below it
  3. Test both carousels
- **Expected Result:**
  - Both carousels work independently
  - Navigating one doesn't affect the other
  - No JavaScript conflicts
- **Priority:** High

---

## 3. Integration & Compatibility

### 3.1 Theme Compatibility

**Test Case TC-034: Section Works with Theme Color Schemes**
- **Precondition:** Theme has color scheme settings
- **Steps:**
  1. Change theme color scheme
  2. Verify section appearance
- **Expected Result:**
  - Section text/colors adapt to theme scheme
  - No contrast issues
  - Maintains readability
- **Priority:** Medium

**Test Case TC-035: Section Works with Theme Fonts**
- **Precondition:** Theme has custom fonts configured
- **Steps:**
  1. Verify text in section uses theme fonts
  2. Check font loading
- **Expected Result:**
  - Section text uses theme's heading font for titles
  - Section text uses theme's body font for descriptions
  - Fonts load correctly
- **Priority:** Low

**Test Case TC-036: Section Doesn't Break Existing Sections**
- **Precondition:** Homepage has existing sections
- **Steps:**
  1. Add "DinVeda Hero Carousel" section
  2. Verify existing sections still work
  3. Check for layout breaks
- **Expected Result:**
  - Existing sections render correctly
  - No layout shifts or breaks
  - All functionality preserved
- **Priority:** High

---

### 3.2 Browser Compatibility

**Test Case TC-037: Works in Chrome**
- **Precondition:** Chrome browser (latest)
- **Steps:**
  1. Test all carousel functionality in Chrome
  2. Check console for errors
- **Expected Result:**
  - All features work correctly
  - No console errors
  - Smooth animations
- **Priority:** High

**Test Case TC-038: Works in Firefox**
- **Precondition:** Firefox browser (latest)
- **Steps:**
  1. Test all carousel functionality in Firefox
  2. Check console for errors
- **Expected Result:**
  - All features work correctly
  - No console errors
  - Smooth animations
- **Priority:** High

**Test Case TC-039: Works in Safari**
- **Precondition:** Safari browser (latest)
- **Steps:**
  1. Test all carousel functionality in Safari
  2. Check console for errors
  3. Test on macOS Safari and iOS Safari
- **Expected Result:**
  - All features work correctly
  - Touch gestures work on iOS
  - No console errors
- **Priority:** High

**Test Case TC-040: Works in Edge**
- **Precondition:** Edge browser (latest)
- **Steps:**
  1. Test all carousel functionality in Edge
  2. Check console for errors
- **Expected Result:**
  - All features work correctly
  - No console errors
- **Priority:** Medium

---

### 3.3 Device Compatibility

**Test Case TC-041: Works on Desktop (1920x1080)**
- **Precondition:** Desktop viewport 1920x1080
- **Steps:**
  1. Test all functionality
  2. Verify layout
- **Expected Result:**
  - Full two-column layout displays
  - All interactive elements work
  - No layout issues
- **Priority:** High

**Test Case TC-042: Works on Tablet (768px - 1024px)**
- **Precondition:** Tablet viewport
- **Steps:**
  1. Test carousel on tablet-sized viewport
  2. Test touch gestures
- **Expected Result:**
  - Layout adapts appropriately
  - Touch gestures work
  - Text and images readable
- **Priority:** High

**Test Case TC-043: Works on Mobile (320px - 767px)**
- **Precondition:** Mobile viewport
- **Steps:**
  1. Test carousel on mobile-sized viewport
  2. Test swipe gestures
  3. Verify text readability
- **Expected Result:**
  - Layout stacks correctly
  - Swipe gestures work smoothly
  - Text is readable without zooming
  - Images scale appropriately
- **Priority:** High

**Test Case TC-044: Works on Small Mobile (320px)**
- **Precondition:** Very small mobile viewport (320px width)
- **Steps:**
  1. Test carousel on smallest common mobile size
  2. Verify all elements visible
- **Expected Result:**
  - No horizontal scrolling
  - All content fits on screen
  - Text is readable
- **Priority:** Medium

---

## 4. Performance & Loading

**Test Case TC-045: Section Loads Without Performance Issues**
- **Precondition:** Page with carousel section
- **Steps:**
  1. Check page load time
  2. Verify no layout shifts
  3. Check Core Web Vitals
- **Expected Result:**
  - Page loads within acceptable time
  - No significant layout shifts (CLS)
  - Images lazy load correctly
- **Priority:** Medium

**Test Case TC-046: Images Lazy Load Correctly**
- **Precondition:** Section has multiple images
- **Steps:**
  1. Check image loading attributes
  2. Scroll to section
  3. Verify images load on demand
- **Expected Result:**
  - First image loads eagerly (if first section)
  - Subsequent images lazy load
  - Images load before becoming visible
- **Priority:** Medium

**Test Case TC-047: JavaScript Doesn't Block Rendering**
- **Precondition:** Page with carousel section
- **Steps:**
  1. Check page load sequence
  2. Verify carousel initializes without blocking
- **Expected Result:**
  - Page content renders first
  - Carousel initializes asynchronously
  - No render-blocking JavaScript
- **Priority:** Low

---

## 5. Accessibility

**Test Case TC-048: Keyboard Navigation Works**
- **Precondition:** Section with carousel
- **Steps:**
  1. Tab to carousel arrows
  2. Press Enter/Space on arrows
  3. Navigate through slides
- **Expected Result:**
  - Arrows are keyboard accessible
  - Focus indicators visible
  - Navigation works via keyboard
- **Priority:** Medium

**Test Case TC-049: Screen Reader Compatibility**
- **Precondition:** Screen reader enabled (NVDA/JAWS/VoiceOver)
- **Steps:**
  1. Navigate section with screen reader
  2. Verify content is announced
- **Expected Result:**
  - Heading is announced
  - Text content is readable
  - Images have alt text (if provided)
  - Carousel state is communicated
- **Priority:** Medium

**Test Case TC-050: ARIA Attributes Present**
- **Precondition:** Section on page
- **Steps:**
  1. Inspect HTML with dev tools
  2. Check for ARIA attributes
- **Expected Result:**
  - Carousel has appropriate ARIA roles
  - Navigation buttons have aria-labels
  - Slide indicators have proper labels
- **Priority:** Low

---

## Test Execution Checklist

### Pre-Deployment Testing
- [ ] Run all High priority test cases (TC-001 through TC-025, TC-030 through TC-043)
- [ ] Run Medium priority test cases (TC-026 through TC-029, TC-044 through TC-049)
- [ ] Test on at least 2 browsers (Chrome, Safari recommended)
- [ ] Test on mobile device (iOS and Android if possible)
- [ ] Verify no console errors
- [ ] Check performance metrics

### Smoke Test (Quick Check Before Deployment)
- [ ] TC-001: Section appears in editor
- [ ] TC-004: Can add image blocks
- [ ] TC-006: Navigation arrows work
- [ ] TC-021: Carousel initializes
- [ ] TC-043: Works on mobile

### Regression Testing
- [ ] Verify existing "Image carousel with text" section still works
- [ ] Verify no other sections were broken
- [ ] Verify theme settings still work

---

## Known Issues & Limitations

(To be filled during testing)

---

## Notes

- All carousel sections use the same `carousel.js` initialization code
- Section uses existing Flickity library already in theme
- CSS styling inherits from `section-image-carousel-with-text.css`
- Section is fully compatible with theme editor drag-and-drop

---

**Last Updated:** {{ current_date }}  
**Test Cases Created By:** AI Assistant  
**Review Status:** Pending

