# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.5.0] - 2025-08-28

### Added
- **Theme Switching System** - Light, dark, and auto modes with system detection (2ec8138)
- **Native Print Functionality** - Window print integration with keyboard accessibility (08638c5)
- **Dark Mode** - Complete dark mode support with proper contrast (a118701)

### Changed
- **Icon Standardization** - Consistent 16px sizing across all components (88546c4)
- **Header Z-index Management** - Improved layer hierarchy and mobile button order (827e52e)

## [1.4.0] - 2025-08-26

### Added
- **Print Layout Optimization** - Page breaks and A4 formatting (ac05e61, 0c68047)
- **Enhanced Language Detection** - Multi-tier browser preference system (172e123)
- **WorldMap Icon** - Replaced emoji with proper SVG icon (59c41d9)

### Changed
- **Header Actions Component** - Centralized header controls (fe4090f)
- **Language Switcher UX** - Subtle animations and improved dropdown design (2f91a0a)
- **Section Ordering** - Optimized CV flow: Skills after About, Interests before Projects (9b6b6f7)
- **Skills Hover Effects** - Reduced visual distraction with refined animations (fb4f7ea)

## [1.3.0] - 2025-08-24

### Added
- **Certificates Section** - Complete certification display with scores and links (e81f79c)
- **Interests Section** - Summary, highlights, and keywords support (2742a67)
- **Interactive Skills System** - Expandable cards with level indicators and keywords (157dba5)
- **Skill Category Icons** - Cloud, DevOps, Infrastructure, Backend, Frontend icons (f1538e0)
- **Experience Highlights** - Key achievements display for work positions (884df63)

### Changed
- **Print Formatting** - Enhanced typography and spacing for professional output (31e79c4, c2a1a2a)

### Fixed
- **Date Calculation** - Improved accuracy for short-term work periods (a7eb3f4)

## [1.2.0] - 2025-08-19

### Added
- **Education Enhancements** - Expandable highlights and institution URLs (2df82a1)
- **Hero Print Layout** - URL display support for print (dfdd7b6)

### Changed
- **Experience Skills Display** - Added skills chips to work experience (f9f9cac)
- **Layout Spacing** - Improved text formatting and responsive design (f971bd4)
- **Hero Layout** - Better proportions and image alignment (5a65e3f, e90d889)

### Fixed
- **Layout Overflow** - Prevent horizontal scrolling on mobile devices (9b6acf5, 2a53eb1)
- **Font Stack** - Improved typography and language parameters (03843bc)

## [1.1.0] - 2025-08-13

### Added
- **Date Formatting System** - i18n support with work duration calculation (81257e7, 885fd0b)
- **Keyboard Shortcuts** - changed "cmd+k" key shortcut for command palette to "/" (795e487)
- **Conditional Rendering** - Sections auto-hide when no content available (8e6db92)

## [1.0.0] - 2025-08-13

### Added
- **Multi-language Support** - Complete internationalization system
  - Language switcher in top-right corner with globe icon and dropdown menu
  - Automatic language detection based on browser preferences
  - Language preference persistence in localStorage
  - Dynamic language detection and fallback system
  
- **Smart Date Display**
  - Work experience now shows duration (e.g., "2 years 3 months") below date ranges
  - Localized date formats per language (e.g., "2021 年 1 月" for Chinese, "01/2021" for English)
  - Single date display for same-year start/end periods (avoids "2021 - 2021")
  - Hover tooltips show full date information
  
- **Dynamic Content Rendering**
  - Sections automatically hide when no content is available
  
- **Automatic redirection 404 Page**
  - Automatic redirection to user's preferred language or default language
  - Fallback redirection if JavaScript is disabled

### Changed
- **Language Switcher Design**
  - Modern dropdown interface with country/language names
  - Active language highlighting with blue accent
  - Smooth animations and hover effects
  - Mobile-responsive design with globe icon only on small screens
  
- **Page Structure**
  - Multi-language routing with `/[lang]/` structure
  - Homepage now redirects to appropriate language version
  - Improved SEO with proper lang attributes
  
- **Footer Interaction**
  - Desktop version footer becomes clickable to open command palette
  - Added hover effects for better user feedback
  - Cursor changes to pointer on hover
  - Press `/` key to quickly open command palette (replaces Cmd+K)


### Technical
- **Language System Architecture**
  - Dynamic language detection using file scanning
  - Graceful fallbacks when UI translations or CV data are missing
  - Separation of UI language and CV content language
  - Support for adding new languages without code changes

---

## Contributing

When adding new features, please update this changelog with user-facing changes, focusing on:
- What users will see differently
- How the experience has improved
- Any new interactions or behaviors
- Visual design changes

For technical implementation details, refer to git commit messages and code comments.
