// Function to display an error message
function displayError(inputElement, message) {
    var errorElement = inputElement.parentNode.querySelector('.error-message');
    if (!errorElement) {
      errorElement = document.createElement('span');
      errorElement.className = 'error-message';
      inputElement.parentNode.appendChild(errorElement);
    }
    errorElement.textContent = message;
    inputElement.classList.add('error');
  }
  


  // Function to clear the error message for a specific field
  function clearErrorMessage(inputElement) {
    var errorElement =  inputElement.parentNode.querySelector('.error-message');
    if (errorElement) {
      errorElement.textContent = '';
      inputElement.classList.remove('error');
    }
   }
  
  // Function to handle the newsletter checkbox alert
  function handleNewsletterCheckbox() {
    var newsletterCheckbox = document.getElementById('newsletter');
    newsletterCheckbox.addEventListener('change', function() {
      if (this.checked) {
        alert('Please be aware that you might receive a lot of emails from us, which some might consider spam.');
      }
    });
  }
  
  // Main validation function
  function validate() {
    var isValid = true;
    var email = document.getElementById('email');
    var login = document.getElementById('login');
    var password = document.getElementById('pass');
    var confirmPassword = document.getElementById('pass2');
    var terms = document.getElementById('terms');
  
    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      displayError(email, 'Please enter a valid email address.');
      isValid = false;
    } else {
      clearErrorMessage(email);
    }
  
    // Validate login name
    if (login.value.length === 0 || login.value.length > 30) {
      displayError(login, 'User name should be non-empty and within 30 characters long.');
      isValid = false;
    } else {
      login.value = login.value.toLowerCase(); // Convert login name to lower case
      clearErrorMessage(login);
    }
  
    // Validate password
    if (password.value.length < 8) {
      displayError(password, 'Password must be at least 8 characters long.');
      isValid = false;
    } else {
      clearErrorMessage(password);
    }
  
    // Validate confirm password
    if (password.value !== confirmPassword.value || confirmPassword.value.length === 0) {
      displayError(confirmPassword, 'Passwords do not match.');
      isValid = false;
    } else {
      clearErrorMessage(confirmPassword);
    }
  
    // Validate terms and conditions
    if (!terms.checked) {
      displayError(terms, 'You must accept the terms and conditions.');
      isValid = false;
    } else {
      clearErrorMessage(terms);
    }
  
    // Returns false to prevent form submission if validation is fail.
    return isValid;
  }
  
  // Event listeners for real-time validation
  document.getElementById('email').addEventListener('input', function() {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value)) {
      clearErrorMessage(this);
    }
  });
  
  document.getElementById('login').addEventListener('input', function() {
    if (this.value.length > 0 && this.value.length <= 30) {
      clearErrorMessage(this);
    }
  });
  
  document.getElementById('pass').addEventListener('input', function() {
    if (this.value.length >= 8) {
      clearErrorMessage(this);
    }
  });
  
  document.getElementById('pass2').addEventListener('input', function() {
    if (this.value === document.getElementById('pass').value && this.value.length >= 8) {
      clearErrorMessage(this);
    }
  });
  
  // Set up the newsletter checkbox alert
  handleNewsletterCheckbox();
  