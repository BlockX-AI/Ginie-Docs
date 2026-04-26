# Ginie Documentation

A comprehensive, multi-page documentation site for Ginie - the AI-powered Canton dApp generator that transforms plain English descriptions into fully compiled, deployed Daml smart contracts.

## 📋 Overview

This documentation site provides complete guidance for using Ginie, from quick start tutorials to advanced platform features. Built with modern web technologies and featuring a responsive design with theme support, full-text search, and interactive navigation.

## 🚀 Features

### User Experience
- **Multi-page Structure**: Organized content across 6 dedicated pages
- **3-Way Theme Toggle**: Light, Dark, and Read (sepia) modes with localStorage persistence
- **Full-Text Search**: Cross-page search with highlighted results and instant navigation
- **Scroll-Spy Navigation**: Active section highlighting in the sidebar
- **Responsive Design**: Mobile-optimized layout that works on all devices

### Technical Features
- **Screenshot Hydration**: Images dynamically loaded from base64 data in the main site
- **Copy Buttons**: One-click code copying functionality
- **Semantic HTML**: Clean, accessible markup structure
- **Modern CSS**: CSS variables for theming, flexbox/grid layouts
- **Interactive JavaScript**: Search, navigation, and UI enhancements

## 📁 Project Structure

```
docs/
├── README.md                 # This file
├── .env.local               # Environment variables (gitignored)
├── .gitignore              # Git ignore rules
├── .vercel/                # Vercel deployment configuration
├── assets/                 # Shared assets
│   ├── app.js             # JavaScript functionality
│   ├── styles.css         # Unified stylesheet
│   └── images/            # Documentation screenshots
│       ├── ginie-step1-landing-page.png
│       ├── ginie-step2-party-identity.png
│       ├── ginie-step3-describe-contract.png
│       ├── ginie-step4-deploying-pipeline.png
│       ├── ginie-step5-contract-deployed.png
│       ├── ginie-step5-contract-code.png
│       ├── ginie-ledger-explorer.png
│       ├── ginie-ledger-verify.png
│       ├── ginie-pipeline-sidebar.png
│       └── ginie-security-scores.png
├── index.html              # Main landing page
├── getting-started.html    # Quick start guide and core concepts
├── how-it-works.html       # Pipeline and architecture details
├── features.html           # Full-stack dApp builder features
├── platform.html          # Self-hosting and platform information
└── reference.html          # FAQ and technical reference
```

## 📄 Documentation Pages

### **Introduction** (`index.html`)
- Overview of Ginie's capabilities
- Key differentiators and value proposition
- Quick navigation to all sections

### **Getting Started** (`getting-started.html`)
- **Quick Start**: Deploy your first Canton contract in 5 minutes
- **Core Concepts**: Understanding GinieNet, Daml, Canton Network, and SDK
- Step-by-step walkthrough with screenshots
- Python SDK basics

### **How It Works** (`how-it-works.html`)
- **7-Stage Pipeline**: Complete AI workflow from prompt to deployment
- **Intent Agent**: English to structured JSON conversion
- **RAG Layer**: Pattern retrieval from institutional library
- **Fix Agent**: Error handling and auto-correction
- **Audit Layer**: 5-gate pre-deployment security scan
- **SCU Compatibility**: Smart Contract Upgrade support

### **Features** (`features.html`)
- **Contract Templates**: IOU, Token Transfer, Bond, Repo, DvP, and more
- **Ledger Explorer**: Live sandbox state visualization
- **Full-Stack dApp Builder**: Complete application generation
- **GitHub Integration**: Repository management and CI/CD
- **MCP Server**: Model Context Protocol integration
- **IDE Extensions**: VS Code, Cursor, JetBrains support

### **Platform** (`platform.html`)
- **Python SDK**: Programmatic contract generation and deployment
- **Self-Hosting**: Docker-based deployment guide
- **Ginie-1**: Air-gapped, Canton-native language model
- Environment configuration and service architecture

### **Reference** (`reference.html`)
- **Scope & Limitations**: What Ginie handles well and current boundaries
- **FAQ**: Common questions about accounts, LLMs, storage, and deployment
- **Technical specifications and best practices**

## 🛠️ Development

### Technologies Used
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: No framework dependencies for maximum compatibility
- **Google Fonts**: Inter and JetBrains Mono for optimal readability
- **Mermaid**: Diagram rendering for technical illustrations

### Key Components

#### Search System (`assets/app.js`)
- Pre-built search index for instant results
- Fuzzy matching across titles, content, and sections
- Highlighted preview text
- Keyboard navigation support

#### Theme System (`assets/styles.css`)
- CSS custom properties for consistent theming
- Three distinct themes with smooth transitions
- Persistent user preferences
- Accessibility-focused color contrasts

#### Navigation
- Fixed sidebar with scroll-spy functionality
- Breadcrumb navigation for deep sections
- Mobile-responsive hamburger menu
- Smooth scroll animations

#### Screenshot Hydration
- Dynamic loading from base64 image data
- Lazy loading for performance optimization
- Fallback handling for missing images
- Consistent sizing and styling

## 🚀 Deployment

### Local Development
```bash
# Serve the documentation site locally
python -m http.server 8000
# or
npx serve .
```

### Production Deployment
The site is designed for static hosting and works with:
- **Vercel**: Zero-config deployment with automatic HTTPS
- **Netlify**: Continuous deployment from Git
- **GitHub Pages**: Free hosting for public repositories
- **Any static host**: Upload the `docs/` folder as-is

### Environment Variables
Create `.env.local` for development:
```env
# Optional: Custom API endpoints or configuration
```

## 🎨 Design System

### Color Palette
- **Primary**: Green accent (`#16a34a`) reflecting Canton Network branding
- **Neutral**: Gray scale for text and backgrounds
- **Semantic**: Colors for success, warning, and error states

### Typography
- **Headings**: Inter (600-700 weight)
- **Body**: Inter (400-500 weight)
- **Code**: JetBrains Mono for technical content

### Layout
- **Sidebar**: 256px fixed width on desktop
- **Content**: Max-width 780px for optimal readability
- **Responsive**: Collapsible navigation on mobile devices

## 🔧 Customization

### Adding New Pages
1. Create new HTML file following the existing template structure
2. Add navigation entries to the sidebar in all pages
3. Update the search index in `assets/app.js`
4. Add any new screenshots to `assets/images/`

### Modifying Themes
Update CSS variables in `:root`, `[data-theme="dark"]`, and `[data-theme="read"]` sections of `assets/styles.css`.

### Extending Search
Add new entries to the `SEARCH_INDEX` array in `assets/app.js` with section, title, URL, and searchable text content.

## 📱 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Features**: CSS Grid, Custom Properties, Fetch API, LocalStorage

## 🤝 Contributing

When contributing to the documentation:
1. Follow the established file structure and naming conventions
2. Maintain semantic HTML and accessibility standards
3. Test all themes and responsive breakpoints
4. Update the search index for new content
5. Ensure all links and references are functional

## 📄 License

This documentation is part of the Ginie project and follows the same open-source license as the main repository.

## 🔗 Related Resources

- **Main Project**: [BlockX-AI/Canton_Ginie](https://github.com/BlockX-AI/Canton_Ginie)
- **Live Site**: [canton.ginie.xyz](https://canton.ginie.xyz)
- **Canton Network**: [digitalasset.com/canton](https://digitalasset.com/canton)
- **Daml Documentation**: [docs.daml.com](https://docs.daml.com)
- **Canton Skills**: [github.com/BlockX-AI/Canton_skills](https://github.com/BlockX-AI/Canton_skills)
