
const imageSlider = document.querySelector('.artwork-slider');
const slides = Array.from(imageSlider.querySelectorAll('.slide'));
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function previousSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

// Form Validation
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Perform form validation
  // Validate required fields
  // Validate email format
  // ...

  // If validation passes, submit the form
  // contactForm.submit();
});

// Smooth Scrolling
const navigationLinks = document.querySelectorAll('nav ul li a');

navigationLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Mobile Menu
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

// Lightbox Gallery
const artworkThumbnails = document.querySelectorAll('.artwork-thumbnail');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');

artworkThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    const imageUrl = thumbnail.getAttribute('src');
    lightboxImage.setAttribute('src', imageUrl);
    lightbox.classList.add('show');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('show');
});

// Dynamic Content Loading (Example using Intersection Observer API)
const gallerySection = document.querySelector('#gallery');
const loadMoreButton = document.querySelector('.load-more-button');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Perform AJAX request to load more artworks
      // Append the new artworks to the gallery section
      // ...
    }
  });
});

observer.observe(loadMoreButton);
