# Lavado Hand Wash NYC - Website

A premium, SEO-optimized website for Lavado Hand Wash, NYC's best luxury car detailing and hand wash service. Features a stunning cyberpunk aesthetic with glassmorphism effects, neon glows, and smooth animations.

## 🚗 Features

### Design & Aesthetics
- **Cyberpunk Theme**: Vibrant neon colors (primary pink #ff296d, secondary cyan #00f3ff)
- **Glassmorphism Effects**: Modern glass card designs with backdrop blur
- **Neon Text Effects**: Eye-catching glow effects on headings
- **Premium Typography**: Russo One for headings, Montserrat for display, Inter for body
- **Responsive Design**: Mobile-first approach with breakpoints at 640px, 768px, and 1024px
- **Dark Mode**: Optimized for dark theme viewing

### Technical Features
- **SEO Optimized**: 
  - Semantic HTML5 structure
  - Comprehensive meta tags (title, description, keywords)
  - Open Graph tags for social media
  - Proper heading hierarchy (single H1 per page)
  - Descriptive alt text and ARIA labels
- **Accessibility**:
  - Respects `prefers-reduced-motion` for animations
  - Keyboard navigation support
  - Focus-visible states
  - ARIA labels on interactive elements
  - Semantic HTML structure
- **Performance**:
  - CSS variables for efficient theming
  - Lazy loading support for images
  - Optimized animations
  - Debounced/throttled event handlers
- **Interactive Elements**:
  - Smooth scroll navigation
  - Responsive mobile menu
  - Auto-playing review carousel with manual controls
  - Drag-to-scroll functionality
  - Hover effects and micro-animations

### Design System
- **8px Grid System**: Consistent spacing throughout
- **CSS Variables**: Easy theme customization
- **Color Palette**:
  - Primary: #ff296d (Neon Pink)
  - Secondary: #00f3ff (Neon Cyan)
  - Background Dark: #0a0508
  - Card Dark: #1a0b12
  - Glass Background: rgba(54, 23, 33, 0.4)

## 📁 Project Structure

```
lavado-site/
├── index.html          # Main HTML file with semantic structure
├── style.css           # Comprehensive CSS with variables and responsive design
├── script.js           # Interactive JavaScript functionality
├── assets/             # Images and media files
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for testing)

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. For local development with live reload, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

4. Navigate to `http://localhost:8000` in your browser

## 📱 Sections

### Header
- Sticky navigation with glassmorphism effect
- Mobile-responsive hamburger menu
- Call-to-action button

### Hero Section
- Full-width background image with overlay
- Neon glow title effects
- Dual CTA buttons

### Services & Packages
- Three-tier pricing (Basic, Pro, Elite)
- Glass card design
- Feature lists with icons
- "Most Popular" badge on Pro tier

### Memberships
- Unlimited wash plans
- Cars/Vans and TLC/Commercial options
- Animated glow effects on hover
- Pricing breakdown with oversized vehicle options

### Why Us
- Four key value propositions
- Icon-based layout
- Alternating primary/secondary colors

### Reviews
- Auto-playing carousel
- Manual navigation controls
- Drag-to-scroll functionality
- 4.9/5 star rating display
- Customer testimonials with avatars

### Locations
- Bronx and Yonkers locations
- Hours of operation
- Interactive map placeholder
- "Get Directions" links

### Footer
- Brand logo and copyright
- Social media links
- Minimal, clean design

## 🎨 Customization

### Colors
Edit CSS variables in `style.css`:

```css
:root {
    --color-primary: #ff296d;
    --color-secondary: #00f3ff;
    --color-background-dark: #0a0508;
    /* ... more variables */
}
```

### Spacing
All spacing uses the 8px grid system:

```css
--spacing-1: 8px;
--spacing-2: 16px;
--spacing-3: 24px;
/* ... and so on */
```

### Typography
Font families are defined as variables:

```css
--font-display: 'Montserrat', sans-serif;
--font-heading: 'Russo One', sans-serif;
--font-body: 'Inter', sans-serif;
```

## 📊 SEO Optimization

### Meta Tags
- Title: "Lavado Hand Wash | NYC's Best Luxury Car Detailing & Hand Wash Services"
- Description: Comprehensive service description with keywords
- Keywords: hand wash NYC, car detailing Bronx, luxury car wash, etc.
- Open Graph tags for social sharing

### Semantic HTML
- Proper use of `<header>`, `<nav>`, `<section>`, `<footer>`
- Single `<h1>` per page with proper heading hierarchy
- Descriptive link text and button labels

### Performance
- Optimized images (use WebP format when possible)
- Lazy loading support
- Minimal JavaScript for core functionality
- CSS animations respect user preferences

## ♿ Accessibility

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Focus states clearly visible
- Logical tab order

### Screen Readers
- ARIA labels on icon buttons
- Semantic HTML structure
- Descriptive alt text (when images are added)

### Motion Preferences
- Respects `prefers-reduced-motion`
- Animations disabled for users who prefer reduced motion
- Smooth scroll can be disabled

## 🔧 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Future Enhancements

- [ ] Add booking system integration
- [ ] Implement Google Maps API for locations
- [ ] Add contact form with validation
- [ ] Create gallery section with before/after photos
- [ ] Implement Google Reviews API integration
- [ ] Add Progressive Web App (PWA) support
- [ ] Create service worker for offline functionality
- [ ] Add analytics tracking (Google Analytics 4)
- [ ] Implement schema.org structured data
- [ ] Add multilingual support (English/Spanish)

## 📞 Contact Information

**Lavado Hand Wash NYC**

**Bronx Location:**
- Address: 123 Industrial Pkwy, Bronx, NY 10451
- Hours: 8AM - 8PM Daily

**Yonkers Location:**
- Address: 45 Central Park Ave, Yonkers, NY 10704
- Hours: 9AM - 7PM Daily

## 📄 License

© 2024 Lavado Hand Wash NYC. All rights reserved.

## 🙏 Credits

- Design inspiration: Cyberpunk aesthetic with modern web design trends
- Icons: Google Material Symbols
- Fonts: Google Fonts (Inter, Russo One, Montserrat)

---

**Stay Glossy! 🚗✨**
