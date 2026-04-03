// Update current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Toggle See All Menu items
const toggleMenuBtn = document.getElementById('toggle-menu-btn');
const extraMenuItems = document.querySelectorAll('.extra-menu-item');

if (toggleMenuBtn) {
    toggleMenuBtn.addEventListener('click', () => {
        extraMenuItems.forEach(item => {
            item.classList.toggle('d-none');
            // Remove the intersection observer 'appear' class so it triggers animation again if needed
            // item.classList.remove('appear');
            // If they are no longer display: none, observer will immediately fade them in.
        });
        
        if (toggleMenuBtn.textContent === 'See All Menu') {
            toggleMenuBtn.textContent = 'Show Less';
        } else {
            toggleMenuBtn.textContent = 'See All Menu';
        }
    });
}

// Scroll Animations using Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right');
animatedElements.forEach(el => observer.observe(el));
