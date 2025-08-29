# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Since this is a static website without a build process:
- **Run locally**: Open HTML files directly in browser or use a local server like `python -m http.server 8000` or VS Code Live Server
- **Test changes**: Refresh browser to see changes immediately
- **Deploy**: Copy files to web server (no build step required)

## Architecture

### Multi-Brand Structure
The codebase contains three casino brands under HK Trusted Group:
- `default/` - Main HK Trusted Group site (uses `assets_default/` folder for styles and assets)
- `hk8/` - HK8 casino brand (HKD 88 signup bonus) - uses `assets/` folder
- `w8/` - W8HK betting platform (HKD 80 bonus + lottery) - uses `assets/` folder
- `d9/` - Dragon9 casino (HKD 60 bonus with auto-rebate) - uses `assets/` folder

Each brand directory contains bilingual versions:
- `index_cn.html` - Chinese version
- `index_en.html` - English version

### Asset Organization
- `assets/` - Shared assets for hk8, w8, and d9 brand sites
  - `fonts/` - Custom Borda fonts and Tabler icons
  - `images/` - Game images, company logos, promotional materials
  - `js/` - JavaScript files (app.js for card shuffle, main.js for general functionality)
  - `styles/app.css` - Main stylesheet (261KB) containing all styling
- `assets_default/` - Separate assets specifically for the default folder site
  - Contains its own styles, images, and JavaScript files
  - Used exclusively by the main HK Trusted Group site in `default/` folder

### Key JavaScript Functionality
- **app.js**: Implements card shuffling animation for promotional cards and Swiper slider initialization
- **main.js**: General site functionality and interactions
- Uses Swiper.js v11 (CDN) for carousel/slider components

### CSS Architecture
The `app.css` file uses:
- Utility-first classes for spacing, colors, typography
- Component classes for cards, buttons, navigation
- Responsive breakpoints for mobile/tablet/desktop
- Custom properties for theming

### Third-Party Integrations
- Google Analytics (gtag.js) for tracking
- Facebook Pixel for marketing analytics
- Swiper.js for carousels
- Google Fonts (Orbitron family)

### Important Patterns
- Version control via query parameters (`?v=2.5` on assets)
- WebP image format for performance
- Responsive design with mobile-first approach
- Promotional cards with interactive shuffle animations
- Multi-language support through separate HTML files