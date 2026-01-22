# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Since this is a static website without a build process:
- **Run locally**: Open HTML files directly in browser or use a local server like `python -m http.server 8000` or VS Code Live Server
- **Test changes**: Refresh browser to see changes immediately
- **Deploy**: Deployed on Cloudflare Pages (automatic deployment on push to master branch)

## Architecture

### URL Structure (Cloudflare Pages Friendly)
The site uses a folder-based URL structure optimized for Cloudflare Pages:

**Root Domain:**
- `/` (root) - Main HK Trusted Group site (Chinese) - served from `index.html`
- `/en/` - Main HK Trusted Group site (English) - served from `en/index.html`

**Brand Sites:**
Each brand has separate Chinese and English folders:
- `/hk8/` - HK8 Chinese (HKD 88 signup bonus)
- `/hk8en/` - HK8 English
- `/w8/` - W8HK Chinese (HKD 80 bonus + lottery)
- `/w8en/` - W8HK English
- `/d9/` - Dragon9 Chinese (HKD 88 bonus with auto-rebate)
- `/d9en/` - Dragon9 English
- `/gt88/` - GT88 Chinese (HKD 100 bonus)
- `/gt88en/` - GT88 English
- `/mb8/` - MB8 Chinese (HKD 90 bonus)
- `/mb8en/` - MB8 English

### Asset Organization
- `assets/` - Shared assets for all brand sites (hk8, w8, d9, gt88, mb8)
  - `fonts/` - Custom Borda fonts and Tabler icons
  - `images/` - Game images, company logos, promotional materials
  - `js/` - JavaScript files (app.js for card shuffle, main.js for general functionality)
  - `styles/app.css` - Main stylesheet (261KB) containing all styling
- `assets_default/` - Separate assets specifically for root site
  - Contains its own styles, images, and JavaScript files
  - Used exclusively by root `index.html` and `/en/index.html`

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
- Version control via query parameters (`?v=2.6` on assets)
- WebP image format for performance
- Responsive design with mobile-first approach
- Promotional cards with interactive shuffle animations
- Multi-language support through separate folders (Cloudflare Pages friendly)
- Each language version is in its own folder with `index.html`
- Language switchers use absolute paths (e.g., `/d9` for Chinese, `/d9en` for English)

### Cloudflare Pages Configuration
- **Root directory**: Leave empty (default: `/`)
- **Build command**: None (static site)
- **Build output directory**: `/`
- The root `index.html` serves the main site homepage
- All brand folders are automatically routed by Cloudflare Pages