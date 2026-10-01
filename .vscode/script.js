// Mobile navigation toggle
const burgerBtn = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');
const allLinks = document.querySelectorAll('.nav-links .link, .mobile-cta a');

if (burgerBtn && navLinks) {
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  allLinks.forEach((link) => {
    link.addEventListener('click', () => {
      burgerBtn.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}

// Contact form handling & validation
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const msgInput = document.getElementById('message');

  const nameErr = document.getElementById('nameErr');
  const emailErr = document.getElementById('emailErr');
  const msgErr = document.getElementById('msgErr');
  const formMsg = document.getElementById('formMsg');
  const submitBtn = document.getElementById('submitBtn');

  function isValidEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }

  function resetErrors() {
    nameErr.textContent = '';
    emailErr.textContent = '';
    msgErr.textContent = '';
    nameInput.classList.remove('is-invalid');
    emailInput.classList.remove('is-invalid');
    msgInput.classList.remove('is-invalid');
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    resetErrors();

    let hasError = false;

    if (!nameInput.value.trim()) {
      nameErr.textContent = 'Name is required.';
      nameInput.classList.add('is-invalid');
      hasError = true;
    }

    const emailVal = emailInput.value.trim();
    if (!emailVal) {
      emailErr.textContent = 'Email is required.';
      emailInput.classList.add('is-invalid');
      hasError = true;
    } else if (!isValidEmail(emailVal)) {
      emailErr.textContent = 'Enter a valid email address.';
      emailInput.classList.add('is-invalid');
      hasError = true;
    }

    if (!msgInput.value.trim()) {
      msgErr.textContent = 'Please enter a brief message.';
      msgInput.classList.add('is-invalid');
      hasError = true;
    }

    if (hasError) return;

    // Simulate form submission feedback
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    setTimeout(() => {
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';

      formMsg.className = 'form-msg success';
      formMsg.textContent = 'Thanks! Your inquiry has been sent successfully.';

      setTimeout(() => {
        formMsg.style.display = 'none';
        formMsg.className = 'form-msg';
      }, 5000);
    }, 600);
  });
}

// Current copyright year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}