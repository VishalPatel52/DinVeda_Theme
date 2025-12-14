#!/usr/bin/env node

/**
 * Script to validate all template files for missing 'order' or 'block_order' keys
 */

const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, '..', 'templates');
const files = fs.readdirSync(templatesDir).filter(f => f.endsWith('.json'));

let hasErrors = false;

files.forEach(file => {
  const filePath = path.join(templatesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove comments
  content = content.replace(/\/\*[\s\S]*?\*\//g, '');
  
  try {
    const data = JSON.parse(content);
    const errors = [];
    
    // Check top-level order
    if (data.sections && !data.order) {
      errors.push('Missing top-level "order" array');
    }
    
    // Check if order matches sections
    if (data.sections && data.order) {
      const sectionKeys = Object.keys(data.sections);
      const missingInOrder = sectionKeys.filter(k => !data.order.includes(k));
      const missingInSections = data.order.filter(k => !sectionKeys.includes(k));
      
      if (missingInOrder.length) {
        errors.push(`Sections missing from order: ${missingInOrder.join(', ')}`);
      }
      if (missingInSections.length) {
        errors.push(`Order references missing sections: ${missingInSections.join(', ')}`);
      }
    }
    
    // Check sections with blocks for block_order
    if (data.sections) {
      Object.entries(data.sections).forEach(([sectionId, section]) => {
        if (section.blocks && typeof section.blocks === 'object' && Object.keys(section.blocks).length > 0) {
          if (!section.block_order) {
            errors.push(`Section "${sectionId}" has blocks but missing "block_order"`);
          } else {
            // Check if block_order matches blocks
            const blockKeys = Object.keys(section.blocks);
            const missingInOrder = blockKeys.filter(k => !section.block_order.includes(k));
            const missingInBlocks = section.block_order.filter(k => !blockKeys.includes(k));
            
            if (missingInOrder.length) {
              errors.push(`Section "${sectionId}": blocks missing from block_order: ${missingInOrder.join(', ')}`);
            }
            if (missingInBlocks.length) {
              errors.push(`Section "${sectionId}": block_order references missing blocks: ${missingInBlocks.join(', ')}`);
            }
          }
        }
        
        // Check nested blocks (blocks within blocks)
        if (section.blocks) {
          Object.entries(section.blocks).forEach(([blockId, block]) => {
            if (block.blocks && typeof block.blocks === 'object' && Object.keys(block.blocks).length > 0) {
              if (!block.block_order) {
                errors.push(`Section "${sectionId}", block "${blockId}": has nested blocks but missing "block_order"`);
              }
            } else if (block.blocks && typeof block.blocks === 'object' && Object.keys(block.blocks).length === 0) {
              // Empty blocks object - should have empty block_order
              if (!block.block_order) {
                errors.push(`Section "${sectionId}", block "${blockId}": has empty blocks but missing "block_order"`);
              }
            }
          });
        }
      });
    }
    
    if (errors.length > 0) {
      console.error(`\n❌ ${file}:`);
      errors.forEach(err => console.error(`   - ${err}`));
      hasErrors = true;
    } else {
      console.log(`✅ ${file}`);
    }
    
  } catch (error) {
    console.error(`\n❌ ${file}: JSON parse error - ${error.message}`);
    hasErrors = true;
  }
});

if (hasErrors) {
  console.error('\n❌ Validation failed!');
  process.exit(1);
} else {
  console.log('\n✅ All templates are valid!');
  process.exit(0);
}

