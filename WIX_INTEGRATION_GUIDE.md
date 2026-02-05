# Wix Integration Guide for Lavado Hand Wash

This guide will help you integrate the Lavado Hand Wash website into Wix.

## 📋 Overview

Since Wix uses its own page builder, you'll need to:
1. Add the custom JavaScript code
2. Recreate the HTML structure using Wix elements
3. Add custom CSS for styling

## 🔧 Step 1: Add Custom JavaScript

### Method A: Custom Code in Site Settings (Recommended)

1. **Open Wix Editor** for your site
2. Click **Settings** (gear icon) in the left sidebar
3. Click **Custom Code** under Advanced Settings
4. Click **+ Add Custom Code** at the top right
5. In the popup:
   - **Paste the code** from `wix-script.js`
   - **Name it**: "Lavado Interactive Features"
   - **Add Code to**: Choose "Body - end"
   - **Load code on**: Select "All pages"
   - Click **Apply**

### Method B: Page Code (For Single Page)

1. In Wix Editor, click **Settings** → **Advanced Settings** → **Custom Code**
2. Add to the **Body - end** section
3. Paste the code from `wix-script.js`

## 🎨 Step 2: Add Custom CSS

### Adding CSS to Wix

1. In Wix Editor, click **Settings** → **Advanced Settings** → **Custom Code**
2. Click **+ Add Custom Code**
3. Paste the CSS from `style.css` wrapped in `<style>` tags:

```html
<style>
/* Paste your CSS here from style.css */
:root {
    --color-primary: #ff296d;
    --color-secondary: #00f3ff;
    /* ... rest of CSS variables ... */
}
/* ... rest of your CSS ... */
</style>
```

4. Set to load in **Head** section
5. Load on **All pages**

## 🏗️ Step 3: Build the Page Structure in Wix

### Header Section

1. **Add a Header**:
   - Click **Add** (+) → **Header & Footer** → Choose a header
   - Or use **Blank Header** for full customization

2. **Add Logo**:
   - Add **Text** element with "LAVADO"
   - Add **Icon** (water drop) from Wix icons
   - Set ID: `logo` in Advanced Settings

3. **Add Navigation Menu**:
   - Add **Menu** element
   - Create menu items: Services, Memberships, Why Us, Locations
   - Link each to page anchors (#services, #memberships, etc.)
   - Set ID: `nav`

4. **Add Call Button**:
   - Add **Button** element
   - Text: "CALL US"
   - Set ID: `callBtn`
   - Link to: `tel:+1234567890` (replace with real number)

### Hero Section

1. **Add a Strip/Section**:
   - Click **Add** (+) → **Strip**
   - Set background image (upload your hero image)
   - Set minimum height: 600px

2. **Add Hero Content**:
   - Add **Text** element for main heading: "THE BEST HAND WASH"
   - Add **Text** element for subheading: "IN NYC"
   - Add **Text** element for description
   - Add two **Button** elements: "BOOK YOUR WASH" and "VIEW PACKAGES"

3. **Set IDs**:
   - Section ID: `hero`
   - Add class: `hero-content` to container

### Services Section

1. **Add a Strip/Section**:
   - Set ID: `services`
   - Add heading: "Services & Packages"

2. **Create 3 Columns** (for 3 packages):
   - Use **Multi-Column Layout** or **Grid**
   - Each column contains:
     - Package name (text)
     - Price (text)
     - Feature list (text elements)
     - Button

3. **Add Classes**:
   - Each card: `service-card`
   - Middle card (Pro): `service-card-popular`

### Memberships Section

1. **Add a Strip/Section**:
   - Set ID: `memberships`
   - Add heading: "UNLIMITED WASHES"
   - Add subheading: "Pay once, wash all month."

2. **Create 2 Columns**:
   - Left: Cars/Vans membership
   - Right: TLC/Commercial membership
   - Each with pricing and features

3. **Add Classes**:
   - Cards: `membership-card`
   - Right card: `membership-card-commercial`

### Why Us Section

1. **Add a Strip/Section**:
   - Set ID: `why-us`

2. **Create 4 Columns**:
   - Each with icon, title, and description
   - Use Wix icons or upload custom icons

3. **Add Classes**:
   - Items: `why-us-item`

### Reviews Section

1. **Add a Strip/Section**:
   - Set ID: `reviews`

2. **Add Review Carousel**:
   - Option A: Use Wix **Slider** element
   - Option B: Create custom with **Repeater**
   - Add navigation buttons (prev/next)
   - Set IDs: `carouselPrev`, `carouselNext`, `reviewCarousel`

3. **Add Review Cards**:
   - Each review with avatar, name, text, stars
   - Class: `review-card`

### Locations Section

1. **Add a Strip/Section**:
   - Set ID: `locations`

2. **Create 2 Columns**:
   - Left: Location information (text)
   - Right: Google Maps embed or image

3. **Add Location Details**:
   - Bronx: Address, hours, "Get Directions" button
   - Yonkers: Address, hours, "Get Directions" button

### Footer

1. **Add Footer**:
   - Add **Footer** element
   - Add logo, copyright text
   - Add social media icons

## 🎯 Step 4: Set Element IDs and Classes

**CRITICAL**: For the JavaScript to work, you must set these IDs:

### How to Set IDs in Wix:
1. Select the element
2. Click the **Settings** icon (gear)
3. Go to **Advanced** tab
4. In **Element ID**, enter the ID

### Required IDs:
- `header` - Header section
- `nav` - Navigation menu
- `mobileMenuToggle` - Mobile menu button
- `callBtn` - Call button
- `hero` - Hero section
- `services` - Services section
- `memberships` - Memberships section
- `why-us` - Why Us section
- `reviews` - Reviews section
- `reviewCarousel` - Review carousel container
- `carouselPrev` - Previous button
- `carouselNext` - Next button
- `locations` - Locations section

### Required Classes:
- `service-card` - Service cards
- `service-card-popular` - Popular service card
- `membership-card` - Membership cards
- `membership-card-commercial` - Commercial membership card
- `why-us-item` - Why Us items
- `review-card` - Review cards
- `indicator` - Carousel indicators

### How to Set Classes in Wix:
1. Select the element
2. Click **Settings** → **Advanced**
3. In **CSS Classes**, enter the class name

## 🎨 Step 5: Apply Custom Styling

### Using Wix Design Panel:

1. **Colors**:
   - Primary: #ff296d (Neon Pink)
   - Secondary: #00f3ff (Neon Cyan)
   - Background: #0a0508 (Dark)

2. **Fonts**:
   - Headings: Russo One (or similar bold font)
   - Body: Montserrat or Inter
   - Upload custom fonts if needed

3. **Effects**:
   - Add **Shadow** effects to buttons
   - Use **Opacity** for glassmorphism
   - Add **Hover** effects

### Advanced Styling with CSS:

If Wix design panel is limited, add custom CSS:

```html
<style>
/* Glassmorphism effect */
.service-card, .membership-card, .review-card {
    background: rgba(54, 23, 33, 0.4) !important;
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 41, 109, 0.3);
    box-shadow: 0 0 20px rgba(255, 41, 109, 0.1);
}

/* Neon glow text */
.neon-glow {
    text-shadow: 0 0 10px rgba(255, 41, 109, 0.8), 
                 0 0 20px rgba(255, 41, 109, 0.4);
}

/* Button styles */
.btn-primary {
    background-color: #ff296d !important;
    box-shadow: 0 0 15px rgba(255, 41, 109, 0.5) !important;
}
</style>
```

## 📱 Step 6: Mobile Optimization

1. **Switch to Mobile View** in Wix Editor
2. Adjust layouts for mobile:
   - Stack columns vertically
   - Reduce font sizes
   - Adjust spacing
3. Test mobile menu functionality

## 🔗 Step 7: Add Links and Actions

### Call Button:
- Link to: `tel:+1234567890`
- Replace with actual phone number

### Navigation Links:
- Services → `#services`
- Memberships → `#memberships`
- Why Us → `#why-us`
- Locations → `#locations`

### Location Buttons:
- "Get Directions" → Google Maps link
- Example: `https://maps.google.com/?q=123+Industrial+Pkwy+Bronx+NY`

## 🧪 Step 8: Testing

1. **Preview** your site
2. Test all interactive features:
   - ✅ Smooth scroll navigation
   - ✅ Mobile menu toggle
   - ✅ Review carousel
   - ✅ Call button
   - ✅ Hover effects
3. Test on mobile devices
4. Check all links work

## 📊 Step 9: SEO Settings in Wix

1. Go to **Settings** → **SEO (Google)**
2. Set **Page Title**: "Lavado Hand Wash | NYC's Best Luxury Car Detailing"
3. Set **Page Description**: "Experience NYC's premier luxury hand wash and car detailing service. 100% hand wash, no machines. Serving Bronx & Yonkers with unlimited membership plans."
4. Add **Keywords**: hand wash NYC, car detailing Bronx, luxury car wash
5. Upload **Social Share Image** (1200x630px)

## 🚀 Step 10: Publish

1. Click **Publish** in top right
2. Test live site
3. Submit to Google Search Console

## 💡 Tips for Wix

### Limitations:
- Wix may not support all CSS properties
- Some animations might need adjustment
- Backdrop-filter may not work in all browsers

### Workarounds:
- Use Wix's built-in effects where possible
- Test in multiple browsers
- Use PNG images with transparency for glass effects
- Consider using Wix Velo for advanced interactions

## 🆘 Troubleshooting

### JavaScript Not Working:
1. Check element IDs are set correctly
2. Verify code is in "Body - end" section
3. Check browser console for errors

### Styling Issues:
1. Use `!important` in CSS if Wix overrides styles
2. Increase CSS specificity
3. Use Wix's design panel first, then custom CSS

### Mobile Menu Not Working:
1. Ensure `mobileMenuToggle` ID is set
2. Check `nav` ID is on menu element
3. Verify Material Icons are loaded

## 📚 Additional Resources

- **Wix Custom Code**: https://support.wix.com/en/article/adding-custom-code-to-your-site
- **Wix Velo**: https://www.wix.com/velo (for advanced JavaScript)
- **Wix SEO**: https://support.wix.com/en/article/about-seo-on-wix

## 📞 Support

If you need help:
1. Check Wix Help Center
2. Contact Wix Support
3. Hire a Wix Expert for custom development

---

**Good luck with your Wix site! 🚗✨**
