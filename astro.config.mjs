import { defineConfig } from 'astro/config';

// 語言配置
export const i18nConfig = {
  defaultLocale: 'en_us',
  // 語言顯示名稱
  languageNames: {
    'zh_tw': '繁體中文',
    'en_us': 'English (US)',
    'ja_jp': '日本語',
    'ko_kr': '한국어',
    'fr_fr': 'Français',
    'de_de': 'Deutsch',
    'es_es': 'Español'
  }
};

// https://astro.build/config
export default defineConfig({});
