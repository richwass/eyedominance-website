// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentSlide = 0;

    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Show current slide
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto-advance disabled for better user control
    // setInterval(nextSlide, 5000);
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.nav-mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('mobile-active');
            this.classList.toggle('active');
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Enhanced analytics for download tracking
document.addEventListener('DOMContentLoaded', function() {
    // Track iOS downloads
    const iOSButtons = document.querySelectorAll('a[href*="apps.apple.com"]');
    iOSButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Additional tracking for iOS downloads
            console.log('iOS download tracked');
            
            // Track button location
            const buttonLocation = this.closest('.hero') ? 'Hero' : 
                                  this.closest('.navbar') ? 'Navigation' :
                                  this.closest('#download') ? 'Download Section' : 'Other';
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'download_app', {
                    'platform': 'iOS',
                    'location': buttonLocation,
                    'value': 1.99
                });
            }
        });
    });
    
    // Track Android waitlist signups
    const androidButtons = document.querySelectorAll('a[href*="docs.google.com/forms"]');
    androidButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Android waitlist signup tracked');
            
            const buttonLocation = this.closest('.hero') ? 'Hero' : 
                                  this.closest('#download') ? 'Download Section' : 'Other';
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'join_waitlist', {
                    'platform': 'Android',
                    'location': buttonLocation
                });
            }
        });
    });
});

// Launch celebration animation
document.addEventListener('DOMContentLoaded', function() {
    const announcement = document.querySelector('.hero-announcement');
    if (announcement) {
        // Add a subtle entrance animation
        announcement.style.opacity = '0';
        announcement.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            announcement.style.transition = 'all 0.6s ease';
            announcement.style.opacity = '1';
            announcement.style.transform = 'translateY(0)';
        }, 500);
    }
});