// script.js

document.addEventListener('DOMContentLoaded', () => {
    /* Navbar Toggle for Mobile */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('toggle');
    });

    /* Smooth Scrolling */
    const links = document.querySelectorAll('.nav-links a');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: 'smooth'
        });
    }

    /* Project Carousel Auto Scroll */
    const projectCarousel = document.querySelector('.project-carousel');
    let projectScrollAmount = 0;

    setInterval(() => {
        if (projectScrollAmount >= projectCarousel.scrollWidth - projectCarousel.clientWidth) {
            projectScrollAmount = 0;
        } else {
            projectScrollAmount += 300;
        }
        projectCarousel.scrollTo({
            left: projectScrollAmount,
            behavior: 'smooth'
        });
    }, 5000);

    /* Testimonial Carousel Auto Scroll */
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    let testimonialScrollAmount = 0;

    setInterval(() => {
        if (testimonialScrollAmount >= testimonialCarousel.scrollWidth - testimonialCarousel.clientWidth) {
            testimonialScrollAmount = 0;
        } else {
            testimonialScrollAmount += 300;
        }
        testimonialCarousel.scrollTo({
            left: testimonialScrollAmount,
            behavior: 'smooth'
        });
    }, 7000);

    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
    
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
    
        // Validation
        if (name === '') {
            alert('Please enter your name.');
            return;
        }
    
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
    
        if (message === '') {
            alert('Please enter a message.');
            return;
        }
    
        alert('Your message has been sent successfully!');
        this.reset(); // Reset the form after successful validation
    });
    
    // Email validation helper function
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }


    
// Carousel Functionality
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');

const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange slides next to one another
slides.forEach((slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
});

// Move to target slide
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

// Move to the next slide
nextButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;

  if (nextSlide) {
    moveToSlide(track, currentSlide, nextSlide);
  }
});

// Move to the previous slide
prevButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;

  if (prevSlide) {
    moveToSlide(track, currentSlide, prevSlide);
  }
});

});