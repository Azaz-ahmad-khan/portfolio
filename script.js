// script.js

// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile nav when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});

// Trigger reveal for hero section immediately on load
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelectorAll('#hero .reveal').forEach(el => {
            el.classList.add('active');
        });
    }, 100);
});

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference in localStorage
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
}

themeToggle.addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-theme') === 'light') {
        document.documentElement.removeAttribute('data-theme');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('portfolio-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('portfolio-theme', 'light');
    }
});
