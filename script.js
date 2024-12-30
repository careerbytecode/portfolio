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

    /* Contact Form Submission */
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Simple form validation (can be expanded)
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Here you can add AJAX to send form data to a server
        // For now, we'll just display a success message
        alert('Thank you for your message! I will get back to you soon.');

        // Reset the form
        contactForm.reset();
    });
});
