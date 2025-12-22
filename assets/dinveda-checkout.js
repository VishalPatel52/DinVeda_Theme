/**
 * DinVeda Checkout Form Handler
 * Handles form submission, discount codes, and redirect to Shopify checkout
 */

(function() {
  'use strict';

  const DinVedaCheckout = {
    init: function() {
      const form = document.getElementById('dinveda-checkout-form');
      if (!form) return;

      // Handle form submission
      form.addEventListener('submit', this.handleFormSubmit.bind(this));

      // Handle discount code application
      const applyDiscountBtn = document.getElementById('apply_discount_btn');
      if (applyDiscountBtn) {
        applyDiscountBtn.addEventListener('click', this.handleDiscountCode.bind(this));
      }

      // Pre-fill form if customer is logged in
      this.prefillForm();
    },

    handleFormSubmit: function(e) {
      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);
      const checkoutData = {};

      // Collect form data
      checkoutData.email = formData.get('checkout[email]');
      checkoutData.accepts_marketing = formData.get('checkout[accepts_marketing]') === '1';
      checkoutData.shipping_address = {
        first_name: formData.get('checkout[shipping_address][first_name]'),
        last_name: formData.get('checkout[shipping_address][last_name]'),
        address1: formData.get('checkout[shipping_address][address1]'),
        address2: formData.get('checkout[shipping_address][address2]'),
        city: formData.get('checkout[shipping_address][city]'),
        country: formData.get('checkout[shipping_address][country]'),
        province: formData.get('checkout[shipping_address][province]'),
        zip: formData.get('checkout[shipping_address][zip]'),
        phone: formData.get('checkout[shipping_address][phone]')
      };

      // Validate required fields
      if (!this.validateForm(checkoutData)) {
        return false;
      }

      // Store in sessionStorage for checkout redirect
      sessionStorage.setItem('dinveda_checkout_data', JSON.stringify(checkoutData));

      // Build checkout URL with attributes
      const checkoutUrl = this.buildCheckoutUrl(checkoutData);

      // Redirect to Shopify checkout
      window.location.href = checkoutUrl;
    },

    validateForm: function(data) {
      const required = ['email', 'first_name', 'last_name', 'address1', 'city', 'country', 'zip'];
      const errors = [];

      if (!data.email || !this.isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
      }

      if (!data.shipping_address.first_name) {
        errors.push('First name is required');
      }

      if (!data.shipping_address.last_name) {
        errors.push('Last name is required');
      }

      if (!data.shipping_address.address1) {
        errors.push('Address is required');
      }

      if (!data.shipping_address.city) {
        errors.push('City is required');
      }

      if (!data.shipping_address.country) {
        errors.push('Country is required');
      }

      if (!data.shipping_address.zip) {
        errors.push('Postal code is required');
      }

      if (errors.length > 0) {
        alert(errors.join('\n'));
        return false;
      }

      return true;
    },

    isValidEmail: function(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },

    buildCheckoutUrl: function(data) {
      const baseUrl = '/checkout';
      const params = new URLSearchParams();

      // Add email
      if (data.email) {
        params.append('checkout[email]', data.email);
      }

      // Add shipping address
      if (data.shipping_address.first_name) {
        params.append('checkout[shipping_address][first_name]', data.shipping_address.first_name);
      }
      if (data.shipping_address.last_name) {
        params.append('checkout[shipping_address][last_name]', data.shipping_address.last_name);
      }
      if (data.shipping_address.address1) {
        params.append('checkout[shipping_address][address1]', data.shipping_address.address1);
      }
      if (data.shipping_address.address2) {
        params.append('checkout[shipping_address][address2]', data.shipping_address.address2);
      }
      if (data.shipping_address.city) {
        params.append('checkout[shipping_address][city]', data.shipping_address.city);
      }
      if (data.shipping_address.country) {
        params.append('checkout[shipping_address][country]', data.shipping_address.country);
      }
      if (data.shipping_address.province) {
        params.append('checkout[shipping_address][province]', data.shipping_address.province);
      }
      if (data.shipping_address.zip) {
        params.append('checkout[shipping_address][zip]', data.shipping_address.zip);
      }
      if (data.shipping_address.phone) {
        params.append('checkout[shipping_address][phone]', data.shipping_address.phone);
      }

      // Add marketing consent
      if (data.accepts_marketing) {
        params.append('checkout[accepts_marketing]', '1');
      }

      // Add discount code if stored
      const discountCode = sessionStorage.getItem('dinveda_discount_code');
      if (discountCode) {
        params.append('discount', discountCode);
      }

      return baseUrl + (params.toString() ? '?' + params.toString() : '');
    },

    handleDiscountCode: function(e) {
      e.preventDefault();

      const discountInput = document.getElementById('checkout_discount_code');
      const discountCode = discountInput.value.trim();
      const messageEl = document.getElementById('discount_message');

      if (!discountCode) {
        this.showDiscountMessage('Please enter a discount code', 'error');
        return;
      }

      // Apply discount code via Shopify discount API
      // Note: Discount codes are typically applied at checkout, not in cart
      // This will be handled by Shopify checkout, but we can validate here
      fetch('/discount/' + encodeURIComponent(discountCode), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => {
        if (response.ok) {
          this.showDiscountMessage('Discount code will be applied at checkout', 'success');
          // Store discount code for checkout
          sessionStorage.setItem('dinveda_discount_code', discountCode);
        } else {
          this.showDiscountMessage('Invalid discount code', 'error');
        }
      })
      .catch(error => {
        // If discount endpoint doesn't exist, just store it for checkout
        this.showDiscountMessage('Discount code will be applied at checkout', 'success');
        sessionStorage.setItem('dinveda_discount_code', discountCode);
      });
    },

    showDiscountMessage: function(message, type) {
      const messageEl = document.getElementById('discount_message');
      if (!messageEl) return;

      messageEl.textContent = message;
      messageEl.className = 'dinveda-checkout-summary__discount-message dinveda-checkout-summary__discount-message--' + type;
      messageEl.style.display = 'block';

      if (type === 'success') {
        setTimeout(() => {
          messageEl.style.display = 'none';
        }, 3000);
      }
    },

    prefillForm: function() {
      // Check if customer data exists in sessionStorage
      const storedData = sessionStorage.getItem('dinveda_checkout_data');
      if (storedData) {
        try {
          const data = JSON.parse(storedData);
          // Pre-fill form fields if empty
          const emailField = document.getElementById('checkout_email');
          if (emailField && !emailField.value && data.email) {
            emailField.value = data.email;
          }
          // Add more pre-fill logic as needed
        } catch (e) {
          console.error('Error parsing stored checkout data:', e);
        }
      }
    }
  };

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      DinVedaCheckout.init();
    });
  } else {
    DinVedaCheckout.init();
  }
})();

