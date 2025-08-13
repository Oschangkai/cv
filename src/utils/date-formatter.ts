import type { TranslationKey } from '@/i18n/ui';

/**
 * Format date string to year and month
 * @param dateString ISO date string (e.g. "2021-01-01")
 * @param t translation function
 * @returns formatted year and month string
 */
export function formatYearMonth(dateString: string | null, t: (key: TranslationKey, params?: Record<string, string>) => string): string {
  if (!dateString) {
    return t('date.current');
  }

  const date = new Date(dateString);
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');

  return t('date.format.year_month', { year, month });
}

/**
 * Check if two dates are in the same year and month
 * @param startDate start date string
 * @param endDate end date string (can be null)
 * @returns true if the two dates are in the same year and month
 */
export function isSameYearMonth(startDate: string, endDate: string | null): boolean {
  if (!endDate) {
    return false;
  }

  const start = new Date(startDate);
  const end = new Date(endDate);

  return start.getFullYear() === end.getFullYear() && 
         start.getMonth() === end.getMonth();
}

/**
 * Format the time range of work experience
 * @param startDate start date
 * @param endDate end date (can be null, means present)
 * @param t translation function
 * @returns formatted time range string
 */
export function formatWorkDateRange(
  startDate: string, 
  endDate: string | null, 
  t: (key: TranslationKey, params?: Record<string, string>) => string
): string {
  // If the start and end dates are in the same year and month, only show the year and month
  if (isSameYearMonth(startDate, endDate)) {
    return formatYearMonth(startDate, t);
  }

  // Otherwise, show the time range
  const startFormatted = formatYearMonth(startDate, t);
  const endFormatted = formatYearMonth(endDate, t);

  return `${startFormatted} - ${endFormatted}`;
}
