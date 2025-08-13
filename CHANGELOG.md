# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
