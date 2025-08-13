# Minimalist Portfolio JSON

> **Forked from [midudev/minimalist-portfolio-json](https://github.com/midudev/minimalist-portfolio-json)**

A minimalist CV/portfolio built with Astro and enhanced with multilingual support and some features.

![Astro Badge](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff&style=flat)
![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)

## ✨ Features

- **🌍 Multi-language Support** - With automatic language detection
- **⌨️ Smart Keyboard Shortcuts** - Press `/` to open command palette, print with `Cmd+P`
- **📱 Language Switcher** - Dynamic language switching with localStorage persistence
- **🎨 Clean Design** - Based on Bartosz Jarocki's elegant design
- **📄 Print Optimized** - Perfect for both web viewing and PDF generation

## 🛠️ Tech Stack

- [**Astro**](https://astro.build/) - Modern web framework
- [**TypeScript**](https://www.typescriptlang.org/) - Type-safe JavaScript
- [**Hotkeypad**](https://github.com/ssleptsov/ninja-keys) - Keyboard shortcuts menu

## 🚀 Quick Start

### 1. Clone or Fork This Repository

```bash
# Clone this enhanced version
git clone https://github.com/[your-username]/cv.git
cd cv

# Install dependencies (using bun recommended)
bun i
```

### 2. Add Your Content

Create your CV data files for each supported language:
- `cv.en_us.json` - English version
- `cv.zh_tw.json` - Traditional Chinese version
- ...etc

Use the [JSON Resume schema](https://jsonresume.org/schema/) format.

### 3. Start Development

```bash
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) to see your CV.

## 📁 Project Structure

```
/
├── src/
│   ├── components/
│   │   ├── sections/          # CV sections (Hero, About, Experience, etc.)
│   │   ├── KeyboardManager.astro
│   │   └── LanguageSwitcher.astro
│   ├── i18n/
│   │   ├── ui.ts             # UI translations
│   │   └── utils.ts          # Translation utilities
│   ├── utils/
│   │   ├── language-context.ts # Language management
│   │   ├── date-formatter.ts   # Date formatting utilities
│   │   └── section-utils.ts    # Content validation
│   └── pages/
│       ├── [lang]/
│       │   └── index.astro   # Multi-language pages
│       ├── 404.astro         # Error page with redirection
│       └── index.astro       # Language detection & redirect
├── cv.<language_code>.json   # Language specific CV data (e.g., `cv.en_us.json`, `cv.zh_tw.json`)
└── cv.json                   # Default CV data
```

## 🧞 Commands

| Command | Action |
|:--------|:-------|
| `bun dev` / `bun start` | Start development server at `localhost:4321` |
| `bun run build` | Build production site to `./dist/` |
| `bun preview` | Preview build locally |


## 🔧 Language Configuration

The system automatically detects available CV files and UI translations, falling back gracefully when content isn't available in the user's preferred language.

**1. UI Translations**
- Location: `src/i18n/ui.ts`
- Add new language keys to the `ui` object with corresponding translations
- Supports parameter interpolation (e.g., `{name}`, `{network}`)

**2. CV Data Files**
- Format: `cv.{language_code}.json` (e.g., `cv.en_us.json`, `cv.zh_tw.json`)
- Place in project root directory
- Follow [JSON Resume schema](https://jsonresume.org/schema/) format

**3. Language Display Names and Default Language**
- Location: `astro.config.mjs` → `i18nConfig.languageNames`
- Controls how language names appear in the language switcher
- Format: `'language_code': 'Display Name'`

```javascript
// Example in astro.config.mjs
languageNames: {
  'zh_tw': '繁體中文',
  'en_us': 'English (US)',
  'ja_jp': '日本語',
  'es_es': 'Español'
}
```

## 🎯 Key Enhancements

1. **Dynamic Language Detection** - Scans available CV files automatically
2. **Smart Date Formatting** - Displays work duration in natural language
3. **Conditional Section Rendering** - Hides empty sections for cleaner layouts
4. **Enhanced Keyboard UX** - Multiple shortcuts including `/` for quick access
5. **Language Persistence** - Remembers user's language choice
6. **Graceful Fallbacks** - Handles missing translations and CV data elegantly

## 📄 License

[MIT](LICENSE.txt) - Originally created by [**midudev**](https://midu.dev), enhanced with additional features.

## 🙏 Credits

- Original design: [Bartosz Jarocki](https://github.com/BartoszJarocki/cv)
- Base template: [midudev](https://github.com/midudev/minimalist-portfolio-json)
- JSON Resume schema: [jsonresume.org](https://jsonresume.org/schema/)