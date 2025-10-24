//Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
}

//Section Navigation
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const sections = document.querySelectorAll('main section');

// Show the first section by default
if (sections.length > 0) {
  sections[0].classList.add('active-section');
  navLinks[0].classList.add('active');
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (!targetSection) return; // Prevent errors if section not found

    
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // Hide all sections
    sections.forEach(sec => sec.classList.remove('active-section'));

    // FadeIn
    targetSection.classList.add('active-section');
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

//Contact Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (!email || !message) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    alert('Thank you! Your message has been sent.');
    this.reset();
  });
}
