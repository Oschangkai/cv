import type { UiLang, TranslationKey } from '@/i18n/ui';
import { ui } from '@/i18n/ui';
import { getUILang, useTranslations } from '@/i18n/utils';
import type { CV } from '@/cv.d.ts';
import { i18nConfig } from '@astro.config';

/**
 * The language context interface
 * Unified management of UI language and CV content language
 */
export interface LanguageContext {
  /** UI interface language */
  uiLang: UiLang;
  /** User selected language (what user actually chose) */
  selectedLang: string;
  /** CV content language (may be different from selectedLang due to fallback) */
  cvLang: string;
  /** Translation function */
  t: (key: TranslationKey, params?: Record<string, string>) => string;
  /** CV data */
  cvData: CV;
}

/**
 * Global language context storage
 * Set when server-side rendering, so all components can access it
 */
let globalLanguageContext: LanguageContext | null = null;

/**
 * Initialize the language context
 * This function should be called once at the page level
 * @param lang The language code (user selected language)
 */
export async function initializeLanguageContext(lang: string): Promise<LanguageContext> {

  const { cvData, cvLang } = await getCVData(lang);
  const uiLang = getUILang(lang);
  
  const t = useTranslations(uiLang);
  
  const context: LanguageContext = {
    uiLang,
    selectedLang: lang, // Keep track of what user actually selected
    cvLang, // This might be different due to CV fallback
    t,
    cvData,
  };

  globalLanguageContext = context;
  
  return context;
}

/**
 * Get the current language context
 * All components can use this function to get the language settings and translation function
 * @returns The language context, if not initialized, throw an error
 */
export function getLanguageContext(): LanguageContext {
  if (!globalLanguageContext) {
    throw new Error('Language context not initialized. Call initializeLanguageContext() first.');
  }
  return globalLanguageContext;
}

/**
 * Convenience function: directly get the translation function
 * @returns The translation function
 */
export function useTranslation(): (key: TranslationKey, params?: Record<string, string>) => string {
  return getLanguageContext().t;
}

/**
 * Convenience function: get the user selected language
 * @returns The user selected language code
 */
export function getSelectedLang(): string {
  return getLanguageContext().selectedLang;
}

/**
 * Convenience function: get the CV language
 * @returns The CV language code
 */
export function getCVLang(): string {
  return getLanguageContext().cvLang;
}

/**
 * Convenience function: get the specific section of the CV
 * @param key The key of the CV data
 * @returns The corresponding data
 */
export function getCVSection<K extends keyof CV>(key: K): CV[K] {
  return getLanguageContext().cvData[key];
}

/**
 * Get the CV data for the specified language
 * @param lang The language code
 * @returns The CV data and the actual language code used
 */
export async function getCVData(lang: string): Promise<{ cvData: CV; cvLang: string }> {
  try {
    const cvData = await import(`../../cv.${lang}.json`);
    return {
      cvData: cvData.default as CV,
      cvLang: lang,
    };
  } catch (error) {
    console.warn(`Failed to load CV data for language: ${lang}, falling back to default`);
    try {
      const defaultCvData = await import(`../../cv.${i18nConfig.defaultLocale}.json`);
      return {
        cvData: defaultCvData.default as CV,
        cvLang: i18nConfig.defaultLocale,
      };
    } catch (fallbackError) {
      console.error('Failed to load default CV data:', fallbackError);
      const fallbackCvData = await import('../../cv.json');
      return {
        cvData: fallbackCvData.default as CV,
        cvLang: i18nConfig.defaultLocale,
      };
    }
  }
}

/**
 * Get all available languages (combination of UI languages and CV files)
 * @returns Array of available language codes
 */
export async function getAvailableLanguages(): Promise<string[]> {
  const availableLanguages = new Set<string>();

  // Add all UI languages
  const uiLanguages = Object.keys(ui) as UiLang[];
  uiLanguages.forEach(lang => availableLanguages.add(lang));

  // Use Vite's import.meta.glob to scan for CV files
  // This will be resolved at build time and includes all matching files
  const cvFiles = import.meta.glob('../../cv.*.json', { as: 'url' });

  // Extract language codes from CV file paths
  Object.keys(cvFiles).forEach(filePath => {
    // Example: '../../cv.ja_jp.json' -> extract 'ja_jp'
    const match = filePath.match(/\/cv\.(.+)\.json$/);
    if (match) {
      const lang = match[1];
      availableLanguages.add(lang);
    }
  });

  // Check for base cv.json file (represents default language)
  const baseCvFiles = import.meta.glob('../../cv.json', { as: 'url' });
  if (Object.keys(baseCvFiles).length > 0) {
    availableLanguages.add(i18nConfig.defaultLocale);
  }

  return Array.from(availableLanguages).sort();
}

/**
 * Check if a CV file exists for the given language
 * @param lang Language code to check
 * @returns Promise<boolean> indicating if CV file exists
 */
export async function hasCVFile(lang: string): Promise<boolean> {
  try {
    await import(`../../cv.${lang}.json`);
    return true;
  } catch {
    return false;
  }
}

/**
 * Check if UI translation exists for the given language
 * @param lang Language code to check
 * @returns boolean indicating if UI translation exists
 */
export function hasUITranslation(lang: string): boolean {
  return lang in ui;
}
