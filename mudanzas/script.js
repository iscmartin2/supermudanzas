// Mobile menu toggle
document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('active');
    // Change icon
    const icon = this.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#navMenu a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('navMenu').classList.remove('active');
        const icon = document.querySelector('#mobileMenuBtn i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            // Close mobile menu if open
            document.getElementById('navMenu').classList.remove('active');
            const icon = document.querySelector('#mobileMenuBtn i');
            if (icon.classList.contains('fa-times')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    
    // Show success message
    alert(`¡Gracias ${name}! Hemos recibido tu solicitud de presupuesto. Te contactaremos en breve al teléfono ${phone} para ofrecerte un presupuesto personalizado.`);
    
    // Reset form
    this.reset();
});

// Sticky header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.padding = '0.7rem 0';
        header.style.backgroundColor = 'rgba(44, 62, 80, 0.98)';
    } else {
        header.style.padding = '1rem 0';
        header.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
    }
});

// Testimonial slider
let currentSlide = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.testimonial-prev');
const nextBtn = document.querySelector('.testimonial-next');

function showSlide(n) {
    // Hide all testimonials
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Calculate slide index
    if (n >= testimonials.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = testimonials.length - 1;
    } else {
        currentSlide = n;
    }
    
    // Show current slide
    testimonials[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Initialize slider
showSlide(currentSlide);

// Next slide
nextBtn.addEventListener('click', function() {
    showSlide(currentSlide + 1);
});

// Previous slide
prevBtn.addEventListener('click', function() {
    showSlide(currentSlide - 1);
});

// Dot click
dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
        showSlide(index);
    });
});

// Auto slide every 5 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Newsletter form
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(`¡Gracias por suscribirte con el email ${email}! Te enviaremos consejos y ofertas especiales pronto.`);
    this.reset();
});

// Add active class to nav links based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active-nav');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active-nav');
                }
            });
        }
    });
});

// Add active-nav class to nav links on hover
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.classList.add('active-nav');
    });
    
    link.addEventListener('mouseleave', function() {
        if (!this.getAttribute('href').includes(window.location.hash) || !window.location.hash) {
            this.classList.remove('active-nav');
        }
    });
});