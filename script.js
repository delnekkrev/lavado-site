// ==========================================
// SMOOTH SCROLL & NAVIGATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');

            if (targetId === '#') return;

            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================
    // MOBILE MENU TOGGLE
    // ==========================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const nav = document.getElementById('nav');

    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            const icon = mobileMenuToggle.querySelector('.material-symbols-outlined');
            icon.textContent = nav.classList.contains('nav-active') ? 'close' : 'menu';
        });

        // Close mobile menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                    const icon = mobileMenuToggle.querySelector('.material-symbols-outlined');
                    icon.textContent = 'menu';
                }
            });
        });
    }

    // ==========================================
    // HEADER SCROLL EFFECT
    // ==========================================
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }

        lastScroll = currentScroll;
    });

    // ==========================================
    // REVIEWS CAROUSEL
    // ==========================================
    const carousel = document.getElementById('reviewCarousel');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const indicators = document.querySelectorAll('.indicator');

    if (carousel && prevBtn && nextBtn) {
        let currentIndex = 0;
        const cards = carousel.querySelectorAll('.review-card');
        const totalCards = cards.length;

        // Determine cards per view based on screen size
        const getCardsPerView = () => {
            return window.innerWidth >= 768 ? 3 : 1;
        };

        const getTotalPages = () => {
            const cardsPerView = getCardsPerView();
            return Math.ceil(totalCards / cardsPerView);
        };

        const updateCarousel = (index) => {
            const cardsPerView = getCardsPerView();
            const cardWidth = cards[0].offsetWidth;
            const gap = 24; // 24px gap between cards
            const scrollAmount = (cardWidth + gap) * index * cardsPerView;

            carousel.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });

            currentIndex = index;
            updateIndicators();
        };

        const updateIndicators = () => {
            indicators.forEach((indicator, idx) => {
                indicator.classList.toggle('active', idx === currentIndex);
            });
        };

        prevBtn.addEventListener('click', () => {
            const totalPages = getTotalPages();
            currentIndex = (currentIndex - 1 + totalPages) % totalPages;
            updateCarousel(currentIndex);
        });

        nextBtn.addEventListener('click', () => {
            const totalPages = getTotalPages();
            currentIndex = (currentIndex + 1) % totalPages;
            updateCarousel(currentIndex);
        });

        // Auto-play carousel
        let autoplayInterval = setInterval(() => {
            const totalPages = getTotalPages();
            currentIndex = (currentIndex + 1) % totalPages;
            updateCarousel(currentIndex);
        }, 5000);

        // Pause autoplay on hover
        carousel.addEventListener('mouseenter', () => {
            clearInterval(autoplayInterval);
        });

        carousel.addEventListener('mouseleave', () => {
            autoplayInterval = setInterval(() => {
                const totalPages = getTotalPages();
                currentIndex = (currentIndex + 1) % totalPages;
                updateCarousel(currentIndex);
            }, 5000);
        });

        // Drag to scroll functionality
        let isDown = false;
        let startX;
        let scrollLeft;

        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            carousel.style.cursor = 'grabbing';
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });

        carousel.addEventListener('mouseleave', () => {
            isDown = false;
            carousel.style.cursor = 'grab';
        });

        carousel.addEventListener('mouseup', () => {
            isDown = false;
            carousel.style.cursor = 'grab';
        });

        carousel.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });

        // Update on scroll
        carousel.addEventListener('scroll', () => {
            const cardsPerView = getCardsPerView();
            const cardWidth = cards[0].offsetWidth;
            const gap = 24;
            const scrollPosition = carousel.scrollLeft;
            const newIndex = Math.round(scrollPosition / ((cardWidth + gap) * cardsPerView));

            if (newIndex !== currentIndex) {
                currentIndex = newIndex;
                updateIndicators();
            }
        });

        // Update on window resize
        window.addEventListener('resize', () => {
            updateCarousel(0);
            currentIndex = 0;
        });

        // Initialize
        updateIndicators();
    }

    // ==========================================
    // CALL BUTTON FUNCTIONALITY
    // ==========================================
    const callBtn = document.getElementById('callBtn');

    if (callBtn) {
        callBtn.addEventListener('click', () => {
            // Replace with actual phone number
            window.location.href = 'tel:+1234567890';
        });
    }

    // ==========================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for fade-in animation
    const animatedElements = document.querySelectorAll('.service-card, .membership-card, .why-us-item, .review-card, .location-item');

    // Only apply animations if user hasn't set reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        // Add fade-in class styles
        const style = document.createElement('style');
        style.textContent = `
            .fade-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(style);
    }

    // ==========================================
    // FORM VALIDATION (if forms are added later)
    // ==========================================
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePhone = (phone) => {
        const re = /^[\d\s\-\+\(\)]+$/;
        return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
    };

    // ==========================================
    // PERFORMANCE OPTIMIZATION
    // ==========================================
    // Lazy load images (if more images are added)
    const lazyImages = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // ==========================================
    // UTILITY FUNCTIONS
    // ==========================================
    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    const throttle = (func, limit) => {
        let inThrottle;
        return function () {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    };

    // ==========================================
    // ANALYTICS & TRACKING (placeholder)
    // ==========================================
    const trackEvent = (category, action, label) => {
        // Placeholder for Google Analytics or other tracking
        console.log('Event tracked:', { category, action, label });

        // Example: gtag('event', action, { 'event_category': category, 'event_label': label });
    };

    // Track button clicks
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const btnText = e.target.textContent.trim();
            trackEvent('Button', 'Click', btnText);
        });
    });

    // Track navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const section = link.getAttribute('href');
            trackEvent('Navigation', 'Click', section);
        });
    });

    // ==========================================
    // CONSOLE MESSAGE
    // ==========================================
    console.log('%c🚗 Lavado Hand Wash NYC 🚗', 'font-size: 20px; font-weight: bold; color: #ff296d;');
    console.log('%cStay Glossy!', 'font-size: 14px; color: #00f3ff;');
});

// ==========================================
// SERVICE WORKER (for PWA - optional)
// ==========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when service worker is ready
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered:', registration))
        //     .catch(error => console.log('SW registration failed:', error));
    });
}
