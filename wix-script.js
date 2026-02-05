// ==========================================
// WIX-OPTIMIZED JAVASCRIPT
// ==========================================
// Instructions:
// 1. In Wix Editor, go to Settings > Custom Code
// 2. Click "Add Custom Code" in the <body> section (end of body)
// 3. Paste this entire code
// 4. Set it to load on "All Pages"
// ==========================================

(function () {
    'use strict';

    // Wait for DOM to be ready
    function initLavadoSite() {

        // ==========================================
        // SMOOTH SCROLL & NAVIGATION
        // ==========================================
        const navLinks = document.querySelectorAll('a[href^="#"]');

        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');

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
            mobileMenuToggle.addEventListener('click', function () {
                nav.classList.toggle('nav-active');
                const icon = this.querySelector('.material-symbols-outlined');
                if (icon) {
                    icon.textContent = nav.classList.contains('nav-active') ? 'close' : 'menu';
                }
            });

            // Close mobile menu when clicking a link
            navLinks.forEach(link => {
                link.addEventListener('click', function () {
                    if (nav.classList.contains('nav-active')) {
                        nav.classList.remove('nav-active');
                        const icon = mobileMenuToggle.querySelector('.material-symbols-outlined');
                        if (icon) {
                            icon.textContent = 'menu';
                        }
                    }
                });
            });
        }

        // ==========================================
        // HEADER SCROLL EFFECT
        // ==========================================
        const header = document.getElementById('header');
        let lastScroll = 0;

        window.addEventListener('scroll', function () {
            const currentScroll = window.pageYOffset;

            if (header) {
                if (currentScroll > 100) {
                    header.classList.add('header-scrolled');
                } else {
                    header.classList.remove('header-scrolled');
                }
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
            function getCardsPerView() {
                return window.innerWidth >= 768 ? 3 : 1;
            }

            function getTotalPages() {
                const cardsPerView = getCardsPerView();
                return Math.ceil(totalCards / cardsPerView);
            }

            function updateCarousel(index) {
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
            }

            function updateIndicators() {
                indicators.forEach(function (indicator, idx) {
                    indicator.classList.toggle('active', idx === currentIndex);
                });
            }

            prevBtn.addEventListener('click', function () {
                const totalPages = getTotalPages();
                currentIndex = (currentIndex - 1 + totalPages) % totalPages;
                updateCarousel(currentIndex);
            });

            nextBtn.addEventListener('click', function () {
                const totalPages = getTotalPages();
                currentIndex = (currentIndex + 1) % totalPages;
                updateCarousel(currentIndex);
            });

            // Auto-play carousel
            let autoplayInterval = setInterval(function () {
                const totalPages = getTotalPages();
                currentIndex = (currentIndex + 1) % totalPages;
                updateCarousel(currentIndex);
            }, 5000);

            // Pause autoplay on hover
            carousel.addEventListener('mouseenter', function () {
                clearInterval(autoplayInterval);
            });

            carousel.addEventListener('mouseleave', function () {
                autoplayInterval = setInterval(function () {
                    const totalPages = getTotalPages();
                    currentIndex = (currentIndex + 1) % totalPages;
                    updateCarousel(currentIndex);
                }, 5000);
            });

            // Drag to scroll functionality
            let isDown = false;
            let startX;
            let scrollLeft;

            carousel.addEventListener('mousedown', function (e) {
                isDown = true;
                carousel.style.cursor = 'grabbing';
                startX = e.pageX - carousel.offsetLeft;
                scrollLeft = carousel.scrollLeft;
            });

            carousel.addEventListener('mouseleave', function () {
                isDown = false;
                carousel.style.cursor = 'grab';
            });

            carousel.addEventListener('mouseup', function () {
                isDown = false;
                carousel.style.cursor = 'grab';
            });

            carousel.addEventListener('mousemove', function (e) {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - carousel.offsetLeft;
                const walk = (x - startX) * 2;
                carousel.scrollLeft = scrollLeft - walk;
            });

            // Update on scroll
            carousel.addEventListener('scroll', function () {
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
            window.addEventListener('resize', function () {
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
            callBtn.addEventListener('click', function () {
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

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
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
            animatedElements.forEach(function (el) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });

            // Add fade-in class styles
            const style = document.createElement('style');
            style.textContent = '.fade-in { opacity: 1 !important; transform: translateY(0) !important; }';
            document.head.appendChild(style);
        }

        // ==========================================
        // LAZY LOAD IMAGES
        // ==========================================
        const lazyImages = document.querySelectorAll('img[data-src]');

        const imageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(function (img) {
            imageObserver.observe(img);
        });

        // ==========================================
        // TRACK EVENTS (Wix Analytics)
        // ==========================================
        function trackEvent(category, action, label) {
            // Wix Analytics tracking
            if (window.wixDevelopersAnalytics) {
                window.wixDevelopersAnalytics.track(action, {
                    category: category,
                    label: label
                });
            }
            console.log('Event tracked:', { category: category, action: action, label: label });
        }

        // Track button clicks
        document.querySelectorAll('.btn').forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                const btnText = e.target.textContent.trim();
                trackEvent('Button', 'Click', btnText);
            });
        });

        // Track navigation clicks
        navLinks.forEach(function (link) {
            link.addEventListener('click', function (e) {
                const section = link.getAttribute('href');
                trackEvent('Navigation', 'Click', section);
            });
        });

        // ==========================================
        // CONSOLE MESSAGE
        // ==========================================
        console.log('%c🚗 Lavado Hand Wash NYC 🚗', 'font-size: 20px; font-weight: bold; color: #ff296d;');
        console.log('%cStay Glossy!', 'font-size: 14px; color: #00f3ff;');
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLavadoSite);
    } else {
        initLavadoSite();
    }

})();
