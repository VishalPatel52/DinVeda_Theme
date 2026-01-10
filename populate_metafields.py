#!/usr/bin/env python3
"""
Script to populate product metafields from CSV Body HTML content.
Extracts structured content and maps to metafield columns.
"""

import csv
import re
import html
from html.parser import HTMLParser
from typing import Dict, List, Optional, Tuple
from bs4 import BeautifulSoup

class HTMLContentExtractor:
    """Extract structured content from HTML."""
    
    def __init__(self, html_content: str):
        self.html = html_content
        self.soup = BeautifulSoup(html_content, 'html.parser')
    
    def extract_blockquote_content(self) -> Tuple[Optional[str], Optional[str]]:
        """Extract animal quote and name from blockquote."""
        blockquote = self.soup.find('blockquote')
        if not blockquote:
            return None, None
        
        text = blockquote.get_text(strip=True)
        # Pattern: emoji quote "text" – sagt der Animal
        match = re.search(r'„([^"]+)"?\s*–\s*sagt\s+der\s+(\w+)', text, re.IGNORECASE)
        if match:
            quote = match.group(1).strip()
            animal = match.group(2).strip()
            # Clean up quote - remove em tags
            quote = re.sub(r'<em>|</em>', '', quote).strip()
            return quote, animal
        
        # Alternative pattern: just extract quote and animal name
        quote_match = re.search(r'„([^"]+)"?', text)
        animal_match = re.search(r'der\s+(\w+)', text, re.IGNORECASE)
        if quote_match and animal_match:
            quote = quote_match.group(1).strip()
            animal = animal_match.group(1).strip()
            quote = re.sub(r'<em>|</em>', '', quote).strip()
            return quote, animal
        
        return None, None
    
    def extract_section_by_heading(self, heading_pattern: str) -> Optional[str]:
        """Extract content from a section starting with a specific heading."""
        headings = self.soup.find_all(['h2', 'h3', 'h4'])
        for heading in headings:
            heading_text = heading.get_text(strip=True)
            if re.search(heading_pattern, heading_text, re.IGNORECASE):
                # Get all content until next heading
                content_parts = []
                current = heading.next_sibling
                while current:
                    if isinstance(current, str):
                        text = current.strip()
                        if text:
                            content_parts.append(text)
                    elif hasattr(current, 'name'):
                        if current.name in ['h2', 'h3', 'h4']:
                            break
                        if current.name == 'p':
                            content_parts.append(current.get_text(separator=' ', strip=True))
                        elif current.name in ['ul', 'ol']:
                            items = [li.get_text(strip=True) for li in current.find_all('li')]
                            content_parts.append('\n'.join(items))
                    current = current.next_sibling
                
                return '\n\n'.join(content_parts) if content_parts else None
        
        return None
    
    def extract_table_html(self, heading_pattern: str) -> Optional[str]:
        """Extract HTML table after a specific heading."""
        headings = self.soup.find_all(['h2', 'h3', 'h4'])
        for heading in headings:
            heading_text = heading.get_text(strip=True)
            if re.search(heading_pattern, heading_text, re.IGNORECASE):
                # Find next table
                current = heading
                while current:
                    current = current.next_sibling
                    if hasattr(current, 'name') and current.name == 'table':
                        return str(current)
        
        return None
    
    def extract_list_items(self, heading_pattern: str) -> List[str]:
        """Extract list items from a section starting with a specific heading."""
        headings = self.soup.find_all(['h2', 'h3', 'h4'])
        for heading in headings:
            heading_text = heading.get_text(strip=True)
            if re.search(heading_pattern, heading_text, re.IGNORECASE):
                # Find next ul or ol
                current = heading
                while current:
                    current = current.next_sibling
                    if hasattr(current, 'name') and current.name in ['ul', 'ol']:
                        return [li.get_text(strip=True) for li in current.find_all('li')]
        
        return []
    
    def extract_paragraph_after_heading(self, heading_pattern: str) -> Optional[str]:
        """Extract first paragraph after a heading."""
        headings = self.soup.find_all(['h2', 'h3', 'h4'])
        for heading in headings:
            heading_text = heading.get_text(strip=True)
            if re.search(heading_pattern, heading_text, re.IGNORECASE):
                current = heading.next_sibling
                while current:
                    if hasattr(current, 'name') and current.name == 'p':
                        return current.get_text(separator=' ', strip=True)
                    elif isinstance(current, str) and current.strip():
                        return current.strip()
                    current = current.next_sibling
        
        return None
    
    def extract_first_paragraph(self) -> Optional[str]:
        """Extract first meaningful paragraph after blockquote."""
        paragraphs = self.soup.find_all('p')
        for p in paragraphs:
            text = p.get_text(strip=True)
            if text and 'Willkommen' in text or len(text) > 50:
                return text
        return None
    
    def extract_story_title(self) -> Optional[str]:
        """Extract 'Warum [Product]?' heading."""
        headings = self.soup.find_all(['h2', 'h3', 'h4'])
        for heading in headings:
            text = heading.get_text(strip=True)
            if re.search(r'Warum\s+', text, re.IGNORECASE):
                # Clean up - remove strong tags but keep text
                return re.sub(r'<[^>]+>', '', str(heading)).strip()
        return None
    
    def extract_ingredients_text(self) -> Optional[str]:
        """Extract ingredients section content."""
        return self.extract_section_by_heading(r'Zutaten\s+&amp;\s+Traditioneller|Zutaten\s+&amp;\s+Fakten')
    
    def extract_usage_instructions(self) -> Optional[str]:
        """Extract usage instructions from 'Anwendung & Zubereitung' section."""
        return self.extract_section_by_heading(r'Anwendung\s+&amp;\s+Zubereitung')
    
    def extract_animal_story(self) -> Optional[str]:
        """Extract animal story section."""
        return self.extract_section_by_heading(r'Eine kleine Geschichte|Geschichte vom')
    
    def extract_quality_info(self) -> Optional[str]:
        """Extract quality information from 'Ohne Zusätze' section."""
        return self.extract_section_by_heading(r'Ohne\s+Zusätze|Rein\s+&amp;\s+Natürlich')
    
    def extract_legal_hinweise(self) -> Optional[str]:
        """Extract legal notes from 'Hinweise' section."""
        return self.extract_section_by_heading(r'Hinweise')
    
    def clean_html_tags(self, text: str, keep_structure: bool = False) -> str:
        """Remove HTML tags, optionally keeping structure."""
        if not text:
            return ''
        if keep_structure:
            # Keep basic structure like <strong>, <em>, <br>
            soup = BeautifulSoup(text, 'html.parser')
            return str(soup)
        else:
            return BeautifulSoup(text, 'html.parser').get_text(separator=' ', strip=True)


def map_product_metafields(row: Dict, html_content: str) -> Dict:
    """Map extracted content to metafield columns."""
    extractor = HTMLContentExtractor(html_content)
    updated_row = row.copy()
    
    # 1. Animal/Quote Metafields
    animal_quote, animal_name = extractor.extract_blockquote_content()
    
    if animal_quote and not updated_row.get('DV Animal Quote (product.metafields.custom.dv_animal_quote)'):
        updated_row['DV Animal Quote (product.metafields.custom.dv_animal_quote)'] = animal_quote
    
    if animal_name and not updated_row.get('DV Animal Name (product.metafields.custom.dv_animal_name)'):
        updated_row['DV Animal Name (product.metafields.custom.dv_animal_name)'] = animal_name
    
    if animal_name and not updated_row.get('Tier-Name (product.metafields.custom.animal_name)'):
        updated_row['Tier-Name (product.metafields.custom.animal_name)'] = animal_name
    
    if animal_quote and not updated_row.get('Tier-Zitat (product.metafields.custom.animal_quote)'):
        updated_row['Tier-Zitat (product.metafields.custom.animal_quote)'] = animal_quote
    
    # 2. Product Identity
    first_para = extractor.extract_first_paragraph()
    if first_para and not updated_row.get('DV Product Subtitle (product.metafields.custom.dinveda_dv_subtitle)'):
        # Extract subtitle from first paragraph
        subtitle_match = re.search(r'Willkommen zu\s+(.+?)\s*–', first_para, re.IGNORECASE)
        if subtitle_match:
            updated_row['DV Product Subtitle (product.metafields.custom.dinveda_dv_subtitle)'] = subtitle_match.group(1).strip()
    
    if animal_quote and not updated_row.get('DV Product Quote (product.metafields.custom.dinveda_dv_quote)'):
        updated_row['DV Product Quote (product.metafields.custom.dinveda_dv_quote)'] = animal_quote
    
    # 3. Story Content
    story_title = extractor.extract_story_title()
    if story_title and not updated_row.get('DV Story Title (product.metafields.custom.dv_story_title)'):
        updated_row['DV Story Title (product.metafields.custom.dv_story_title)'] = story_title
    
    blend_story = extractor.extract_section_by_heading(r'Warum\s+')
    if blend_story and not updated_row.get('Blend story (product.metafields.custom.blend_story)'):
        # Clean up the story content
        cleaned_story = extractor.clean_html_tags(blend_story, keep_structure=False)
        updated_row['Blend story (product.metafields.custom.blend_story)'] = cleaned_story
    
    # 4. Ingredients & Facts
    facts_title = extractor.extract_section_by_heading(r'Zutaten\s+&amp;\s+Fakten|Zutaten\s+&amp;\s+Traditioneller')
    if facts_title:
        # Extract the heading itself
        headings = extractor.soup.find_all(['h2', 'h3', 'h4'])
        for heading in headings:
            heading_text = heading.get_text(strip=True)
            if 'Zutaten' in heading_text and 'Fakten' in heading_text:
                if not updated_row.get('DV Facts Title (product.metafields.custom.dv_facts_title)'):
                    updated_row['DV Facts Title (product.metafields.custom.dv_facts_title)'] = heading_text
            if 'Zutaten' in heading_text and 'Traditioneller' in heading_text:
                if not updated_row.get('DV Detail Left Title (product.metafields.custom.dv_detail_left_title)'):
                    updated_row['DV Detail Left Title (product.metafields.custom.dv_detail_left_title)'] = heading_text
    
    # 5. Nutrition Table
    nutrition_table = extractor.extract_table_html(r'Nährwertangaben')
    if nutrition_table and not updated_row.get('DV Nutrition Table (product.metafields.custom.dv_nutrition_table)'):
        updated_row['DV Nutrition Table (product.metafields.custom.dv_nutrition_table)'] = nutrition_table
    
    if nutrition_table and not updated_row.get('Nährwertangaben (pro 100 g) (product.metafields.custom.nahrwertangaben_pro_100_g)'):
        updated_row['Nährwertangaben (pro 100 g) (product.metafields.custom.nahrwertangaben_pro_100_g)'] = nutrition_table
    
    # 6. Usage & Preparation
    usage_instructions = extractor.extract_usage_instructions()
    if usage_instructions and not updated_row.get('Dosage Instructions (product.metafields.custom.dosage_instructions)'):
        cleaned_usage = extractor.clean_html_tags(usage_instructions, keep_structure=False)
        updated_row['Dosage Instructions (product.metafields.custom.dosage_instructions)'] = cleaned_usage
    
    if usage_instructions and not updated_row.get('DV Ritual Usage (product.metafields.custom.dv_ritual_usage)'):
        cleaned_usage = extractor.clean_html_tags(usage_instructions, keep_structure=False)
        updated_row['DV Ritual Usage (product.metafields.custom.dv_ritual_usage)'] = cleaned_usage
    
    if usage_instructions and not updated_row.get('Anwendung (product.metafields.custom.ritual_usage)'):
        cleaned_usage = extractor.clean_html_tags(usage_instructions, keep_structure=False)
        updated_row['Anwendung (product.metafields.custom.ritual_usage)'] = cleaned_usage
    
    # Extract ritual timing from content
    if html_content:
        timing_match = re.search(r'(Morgen|Abend|Tageszeit)', html_content, re.IGNORECASE)
        if timing_match and not updated_row.get('DV Ritual Timing (product.metafields.custom.dv_ritual_timing)'):
            timing = timing_match.group(1)
            if timing.lower() == 'morgen':
                updated_row['DV Ritual Timing (product.metafields.custom.dv_ritual_timing)'] = 'Morgen'
            elif timing.lower() == 'abend':
                updated_row['DV Ritual Timing (product.metafields.custom.dv_ritual_timing)'] = 'Abend'
    
    # Extract preparation mode
    prep_match = re.search(r'(Warm|Kalt|warme|kalte)', html_content, re.IGNORECASE)
    if prep_match and not updated_row.get('DV Preparation Mode (product.metafields.custom.dv_preparation_mode)'):
        prep = prep_match.group(1)
        if 'warm' in prep.lower():
            updated_row['DV Preparation Mode (product.metafields.custom.dv_preparation_mode)'] = 'Warm'
        elif 'kalt' in prep.lower():
            updated_row['DV Preparation Mode (product.metafields.custom.dv_preparation_mode)'] = 'Kalt'
    
    # Extract duration
    duration_match = re.search(r'(\d+\s*[-–]\s*\d+\s*Min)', html_content, re.IGNORECASE)
    if duration_match and not updated_row.get('DV Ritual Duration (product.metafields.custom.dv_ritual_duration)'):
        updated_row['DV Ritual Duration (product.metafields.custom.dv_ritual_duration)'] = duration_match.group(1)
    
    # 7. Traditional Benefits
    benefits_list = extractor.extract_list_items(r'perfekt für|Sanfte|Würzige|Zarte')
    if benefits_list and not updated_row.get('DV Traditional Benefits (product.metafields.custom.dv_traditional_benefits)'):
        updated_row['DV Traditional Benefits (product.metafields.custom.dv_traditional_benefits)'] = '\n'.join(benefits_list)
    
    # 8. Quality & Legal
    quality_info = extractor.extract_quality_info()
    if quality_info and not updated_row.get('Quality note (product.metafields.custom.quality_note)'):
        cleaned_quality = extractor.clean_html_tags(quality_info, keep_structure=False)
        updated_row['Quality note (product.metafields.custom.quality_note)'] = cleaned_quality
    
    legal_hinweise = extractor.extract_legal_hinweise()
    if legal_hinweise and not updated_row.get('Rechtlicher Hinweis (product.metafields.custom.legal_note)'):
        cleaned_legal = extractor.clean_html_tags(legal_hinweise, keep_structure=False)
        updated_row['Rechtlicher Hinweis (product.metafields.custom.legal_note)'] = cleaned_legal
    
    if legal_hinweise and not updated_row.get('Legal Disclaimer (product.metafields.custom.legal_disclaimer)'):
        cleaned_legal = extractor.clean_html_tags(legal_hinweise, keep_structure=False)
        updated_row['Legal Disclaimer (product.metafields.custom.legal_disclaimer)'] = cleaned_legal
    
    # 9. Extract net weight from title or content
    if not updated_row.get('DV Netto Gewicht (product.metafields.custom.dv_netto_gewicht)'):
        weight_match = re.search(r'(\d+)\s*g', html_content, re.IGNORECASE)
        if weight_match:
            updated_row['DV Netto Gewicht (product.metafields.custom.dv_netto_gewicht)'] = f"{weight_match.group(1)}g"
    
    # Extract verkehrsbezeichnung from title or content
    if not updated_row.get('DV Verkehrsbezeichnung (product.metafields.custom.dv_verkehrsbezeichnung)'):
        title = updated_row.get('Title', '')
        if 'Gewürzmischung' in title:
            updated_row['DV Verkehrsbezeichnung (product.metafields.custom.dv_verkehrsbezeichnung)'] = 'Bio Gewürzmischung'
        elif 'Kräutermischung' in title or 'Kräutermix' in title:
            updated_row['DV Verkehrsbezeichnung (product.metafields.custom.dv_verkehrsbezeichnung)'] = 'Bio Kräutermischung'
    
    # Extract serving suggestions from usage section
    if usage_instructions:
        serving_match = re.search(r'(1\s*TL|Teelöffel)', usage_instructions, re.IGNORECASE)
        if serving_match and not updated_row.get('DV Serving Suggestion (product.metafields.custom.dv_serving_suggestion)'):
            # Extract more context
            serving_text = extractor.extract_paragraph_after_heading(r'Anwendung')
            if serving_text:
                updated_row['DV Serving Suggestion (product.metafields.custom.dv_serving_suggestion)'] = serving_text[:200]
    
    # Extract ritual tagline from SEO description or content
    if not updated_row.get('Ritual-Headline (product.metafields.custom.ritual_tagline)'):
        seo_desc = updated_row.get('SEO Description', '')
        if seo_desc:
            # Extract first meaningful phrase
            tagline_match = re.search(r'([^.–]{10,60})', seo_desc)
            if tagline_match:
                updated_row['Ritual-Headline (product.metafields.custom.ritual_tagline)'] = tagline_match.group(1).strip()
    
    return updated_row


def main():
    """Main function to process CSV file."""
    csv_file_path = r'c:\Users\visha\Downloads\Product detail pages.csv'
    output_file_path = r'c:\Users\visha\Downloads\Product detail pages_updated.csv'
    
    print(f"Reading CSV file: {csv_file_path}")
    
    rows = []
    fieldnames = None
    
    # Read CSV
    with open(csv_file_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        fieldnames = reader.fieldnames
        for row in reader:
            rows.append(row)
    
    print(f"Found {len(rows)} rows to process")
    
    # Process each row
    updated_rows = []
    for i, row in enumerate(rows, 1):
        handle = row.get('Handle', '')
        html_content = row.get('Body (HTML)', '')
        
        if not html_content:
            print(f"Row {i} ({handle}): No HTML content, skipping...")
            updated_rows.append(row)
            continue
        
        print(f"Row {i} ({handle}): Processing...")
        updated_row = map_product_metafields(row, html_content)
        updated_rows.append(updated_row)
    
    # Write updated CSV
    print(f"\nWriting updated CSV to: {output_file_path}")
    with open(output_file_path, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(updated_rows)
    
    print("Done! Updated CSV saved.")
    print(f"\nSummary: Processed {len(updated_rows)} rows")


if __name__ == '__main__':
    try:
        from bs4 import BeautifulSoup
    except ImportError:
        print("Installing beautifulsoup4...")
        import subprocess
        subprocess.check_call(['pip', 'install', 'beautifulsoup4'])
        from bs4 import BeautifulSoup
    
    main()
