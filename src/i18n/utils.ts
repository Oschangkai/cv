import { ui, type UiLang, type TranslationKey } from './ui';
import { i18nConfig } from '@astro.config';

// Language configuration constants
export const defaultLanguage = i18nConfig.defaultLocale;

/**
 * Get the language code from the URL (only used for UI translation)
 * @param url Astro.url object
 * @returns UI language code
 */
export function getUILang(langParam: string | undefined): UiLang {
  if (langParam && langParam in ui) {
    return langParam as UiLang;
  }
  return defaultLanguage as UiLang;
}

/**
 * Create a translation function
 * @param lang Language code
 * @returns Translation function
 */
export function useTranslations(lang: UiLang) {
  return function t(key: TranslationKey, params?: Record<string, string>): string {
    // Get the translated text
    let text: string = ui[lang]?.[key] || ui[defaultLanguage as UiLang]?.[key] || key;
    
    // Process parameter interpolation (e.g. {name}, {network})
    if (params) {
      Object.entries(params).forEach(([paramKey, value]) => {
        text = text.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), value);
      });
    }
    
    return text;
  };
}

/**
 * Convenience function: directly get the translated text
 * @param lang Language code
 * @param key Translation key
 * @param params Parameter object
 * @returns Translated text
 */
export function t(lang: UiLang, key: TranslationKey, params?: Record<string, string>): string {
  const translate = useTranslations(lang);
  return translate(key, params);
}
