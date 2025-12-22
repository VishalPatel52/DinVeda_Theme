/**
 * DinVeda Help & Support Page Functionality
 * Handles search filtering and category tab switching
 */

(function() {
  'use strict';

  const DinVedaHelpSupport = {
    searchInput: null,
    categoryTabs: [],
    categorySections: [],
    faqItems: [],
    currentCategory: 'all',
    searchQuery: '',

    init: function() {
      // Find the help support section
      const helpSection = document.querySelector('.dinveda-help-support');
      if (!helpSection) return;

      // Get search input
      this.searchInput = helpSection.querySelector('.dinveda-help-support__search-input');
      if (this.searchInput) {
        this.searchInput.addEventListener('input', this.handleSearch.bind(this));
        this.searchInput.addEventListener('keyup', this.handleSearch.bind(this));
      }

      // Get category tabs
      this.categoryTabs = Array.from(helpSection.querySelectorAll('.dinveda-help-support__category-tab'));
      this.categoryTabs.forEach(tab => {
        tab.addEventListener('click', this.handleCategoryClick.bind(this));
      });

      // Get category sections
      this.categorySections = Array.from(helpSection.querySelectorAll('.dinveda-help-support__category-section'));

      // Get all FAQ items
      this.faqItems = Array.from(helpSection.querySelectorAll('.dinveda-help-support__faq-item'));

      // Initialize - show all categories
      this.updateDisplay();
    },

    handleSearch: function(e) {
      this.searchQuery = e.target.value.trim().toLowerCase();
      this.updateDisplay();
    },

    handleCategoryClick: function(e) {
      e.preventDefault();
      const tab = e.currentTarget;
      const category = tab.getAttribute('data-category');

      // Update active tab
      this.categoryTabs.forEach(t => {
        t.classList.remove('dinveda-help-support__category-tab--active');
      });
      tab.classList.add('dinveda-help-support__category-tab--active');

      // Update current category
      this.currentCategory = category;
      this.updateDisplay();

      // Scroll to category section if not "all"
      if (category !== 'all') {
        // Try to find section by ID first (for anchor navigation)
        let sectionId = category;
        if (category === 'ordering_shipping') sectionId = 'ordering';
        else if (category === 'product_info') sectionId = 'product';
        else if (category === 'returns_refunds') sectionId = 'returns';
        else if (category === 'account_management') sectionId = 'account';
        
        const categorySection = document.getElementById(sectionId) || 
                               document.querySelector(`.dinveda-help-support__category-section[data-category="${category}"]`);
        
        if (categorySection) {
          const offset = 100; // Account for sticky header
          const elementPosition = categorySection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } else {
        // Scroll to top if "all" is selected
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    },

    updateDisplay: function() {
      // Filter FAQs based on search query and category
      this.faqItems.forEach(faqItem => {
        const categorySection = faqItem.closest('.dinveda-help-support__category-section');
        const categoryId = categorySection ? categorySection.getAttribute('data-category') : null;

        // Check if FAQ matches search query
        const questionText = faqItem.querySelector('.dinveda-help-support__faq-question-text');
        const answerText = faqItem.querySelector('.dinveda-help-support__faq-answer');
        
        const question = questionText ? questionText.textContent.toLowerCase() : '';
        const answer = answerText ? answerText.textContent.toLowerCase() : '';
        const matchesSearch = !this.searchQuery || question.includes(this.searchQuery) || answer.includes(this.searchQuery);

        // Check if FAQ matches current category
        const matchesCategory = this.currentCategory === 'all' || categoryId === this.currentCategory;

        // Show/hide FAQ item
        if (matchesSearch && matchesCategory) {
          faqItem.removeAttribute('hidden');
        } else {
          faqItem.setAttribute('hidden', '');
        }
      });

      // Show/hide category sections based on whether they have visible FAQs
      this.categorySections.forEach(section => {
        const categoryId = section.getAttribute('data-category');
        const faqsInSection = section.querySelectorAll('.dinveda-help-support__faq-item:not([hidden])');
        
        // Show section if:
        // 1. Current category is 'all' and section has visible FAQs, OR
        // 2. Current category matches this section and section has visible FAQs
        const shouldShow = (this.currentCategory === 'all' || categoryId === this.currentCategory) && faqsInSection.length > 0;
        
        if (shouldShow) {
          section.removeAttribute('hidden');
        } else {
          section.setAttribute('hidden', '');
        }
      });

      // Highlight search terms in visible FAQs
      if (this.searchQuery) {
        this.highlightSearchTerms();
      } else {
        this.removeHighlights();
      }
    },

    highlightSearchTerms: function() {
      const searchTerms = this.searchQuery.split(/\s+/).filter(term => term.length > 0);
      
      this.faqItems.forEach(faqItem => {
        if (faqItem.hasAttribute('hidden')) return;

        const questionText = faqItem.querySelector('.dinveda-help-support__faq-question-text');
        const answerText = faqItem.querySelector('.dinveda-help-support__faq-answer');

        if (questionText) {
          this.highlightText(questionText, searchTerms);
        }
        if (answerText) {
          this.highlightText(answerText, searchTerms);
        }
      });
    },

    highlightText: function(element, searchTerms) {
      // Remove existing highlights
      const highlights = element.querySelectorAll('.dinveda-help-support__highlight');
      highlights.forEach(highlight => {
        const parent = highlight.parentNode;
        parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
        parent.normalize();
      });

      // Create text node if element doesn't have one
      if (element.childNodes.length === 0) {
        element.appendChild(document.createTextNode(element.textContent));
      }

      // Highlight search terms
      searchTerms.forEach(term => {
        const walker = document.createTreeWalker(
          element,
          NodeFilter.SHOW_TEXT,
          null,
          false
        );

        const textNodes = [];
        let node;
        while (node = walker.nextNode()) {
          if (node.textContent.toLowerCase().includes(term.toLowerCase())) {
            textNodes.push(node);
          }
        }

        textNodes.forEach(textNode => {
          const text = textNode.textContent;
          const regex = new RegExp(`(${term})`, 'gi');
          const highlightedText = text.replace(regex, '<mark class="dinveda-help-support__highlight">$1</mark>');
          
          if (highlightedText !== text) {
            const wrapper = document.createElement('span');
            wrapper.innerHTML = highlightedText;
            textNode.parentNode.replaceChild(wrapper, textNode);
          }
        });
      });
    },

    removeHighlights: function() {
      const highlights = document.querySelectorAll('.dinveda-help-support__highlight');
      highlights.forEach(highlight => {
        const parent = highlight.parentNode;
        parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
        parent.normalize();
      });
    }
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      DinVedaHelpSupport.init();
    });
  } else {
    DinVedaHelpSupport.init();
  }
})();

