# Tasteology — Front-End Development Assessment

Author: Rodney Aure  
Role: Senior Front-End Developer Candidate  

---

## Project Overview

Tasteology is a front-end development assessment project designed to demonstrate proficiency in modern web development standards, including semantic HTML, modular CSS architecture, JavaScript interactivity, accessibility (WCAG 2.1 AA) compliance, and SEO optimization.

This project emphasizes code quality, scalability, and maintainability, reflecting enterprise-grade front-end engineering practices.

---

## Objectives

- Implement clean and accessible HTML structure.
- Apply modular CSS for layout and responsiveness.
- Develop functional and accessible modal interactions.
- Optimize for search engine visibility (SEO).
- Configure a basic Webpack build process for scalability.

---

## Features

| Category | Description |
|-----------|-------------|
| Accessibility | Semantic HTML5 elements, ARIA roles, visible focus states, and reduced motion support. |
| SEO | Meta tags for description, author, and keywords with Open Graph recommendations. |
| Performance | Lightweight, modular code and optimized layout. |
| Scalability | Webpack build pipeline for development and production environments. |
| Maintainability | Separated CSS and JS files for easier management and updates. |
| Future-Ready | Structured for easy migration to React, Vue, or Svelte frameworks. |

---

## Project Structure

```
KMC-Orchard/
├── README.md
├── package.json
├── webpack.config.js
├── src/
│   ├── index.html
│   ├── styles/
│   │   ├── main.css
│   │   ├── cards.css
│   │   ├── gallery.css
│   │   ├── modal.css
│   ├── js/
│   │   ├── modal.js
│   │   ├── cardlog.js
│   └── images/ (optional)
└── dist/ (generated build output)
```

---

## Installation and Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/tasteology.git
   cd tasteology
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   This command launches the site at `http://localhost:3000` with live reloading enabled.

4. Build for production:
   ```bash
   npm run build
   ```
   The optimized files will be generated inside the `dist/` directory.

---

## Accessibility Compliance

This project follows WCAG 2.1 AA standards and accessibility best practices:
- Proper use of landmark roles (`banner`, `main`, `contentinfo`, `dialog`)
- Descriptive `aria-labelledby` and `aria-modal` attributes on modal components
- Visible focus outlines for keyboard navigation
- Hidden text utility (`.visually-hidden`) for screen readers
- Support for reduced motion preferences via `prefers-reduced-motion`

**Future improvements:**
- Add `tabindex="0"` to gallery images for keyboard users.
- Use `aria-live="polite"` for dynamically updated modal descriptions.

---

## SEO Optimization

The project includes key meta tags for SEO and content relevance:

```html
<meta name="description" content="Tasteology - Exploring the science and beauty of cooking.">
<meta name="keywords" content="cooking, gastronomy, taste, recipes, food science">
<meta name="author" content="Rodney Aure">
```

**Recommended additions for enhanced visibility:**
```html
<meta name="robots" content="index, follow">
<meta property="og:title" content="Tasteology | The Science of Cooking">
<meta property="og:description" content="Exploring the science, art, and emotion behind every flavour.">
<meta property="og:type" content="website">
<meta property="og:image" content="https://yourdomain.com/images/preview.jpg">
<meta name="twitter:card" content="summary_large_image">
```

---

## Technologies Used

| Category | Stack |
|-----------|--------|
| Markup | HTML5 (semantic and accessible) |
| Styling | CSS3 (Grid, Flexbox, Media Queries, Reduced Motion) |
| Scripting | JavaScript (ES6, modular structure) |
| Build Tool | Webpack 5 |
| Fonts | Google Fonts – Open Sans |

---

## Build System

The project is configured with Webpack for bundling and optimization.  
Webpack handles HTML, CSS, and JavaScript compilation and serves the site locally in development mode.

**Available Scripts:**
```bash
npm run dev    # Start development server with live reload
npm run build  # Build and minify files for production
```

---

## Future Enhancements

1. Migrate project to a SPA framework such as React, Vue, or Svelte.
2. Integrate analytics tracking instead of console logging.
3. Implement image optimization through Webpack plugins.
4. Add service worker for offline support (PWA).
5. Include automated tests with Jest or Cypress.

---

## Professional Summary

This assessment project demonstrates:
- Advanced understanding of front-end development principles.
- Awareness of accessibility and SEO best practices.
- Competence in modern build tools and project configuration.
- Scalable, maintainable code organization.
- Production-readiness and framework adaptability.

---

## License

This project is licensed under the MIT License.  
© 2025 Rodney Aure. All rights reserved.
