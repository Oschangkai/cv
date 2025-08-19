import type { TranslationKey } from '@/i18n/ui';

/**
 * Format date string to year
 * @param dateString ISO date string (e.g. "2021-01-01")
 * @param t translation function
 * @returns formatted year string
 */
export function formatYear(dateString: string | null, t: (key: TranslationKey, params?: Record<string, string>) => string): string {
  if (!dateString) {
    return t('date.current');
  }

  const date = new Date(dateString);
  const year = date.getFullYear().toString();

  return t('date.format.year', { year });
}

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
 * Check if two dates are in the same year
 * @param startDate start date string
 * @param endDate end date string (can be null)
 * @returns true if the two dates are in the same year
 */
export function isSameYear(startDate: string, endDate: string | null): boolean {
  if (!endDate) {
    return false;
  }

  const start = new Date(startDate);
  const end = new Date(endDate);

  return start.getFullYear() === end.getFullYear();
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

  // if startDate and endDate are both null or empty string, return empty string
  if (startDate == "" && endDate == "") {
    return "";
  }

  // Otherwise, show the time range
  const startFormatted = formatYearMonth(startDate, t);
  const endFormatted = formatYearMonth(endDate, t);

  return `${startFormatted} - ${endFormatted}`;
}

/**
 * Calculate the duration between two dates
 * @param startDate start date
 * @param endDate end date (can be null, means present)
 * @param t translation function
 * @returns formatted duration string
 */
export function calculateWorkDuration(
  startDate: string,
  endDate: string | null,
  t: (key: TranslationKey, params?: Record<string, string>) => string
): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date(); // If there is no end date, use the current date

  // Calculate the difference in years and months
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  // If the months are negative, adjust the years and months
  if (months < 0) {
    years--;
    months += 12;
  }

  // Format the output
  if (years === 0 && months === 0) {
    return t('duration.less_than_month');
  } else if (years === 0) {
    return t('duration.months', { months: months.toString() });
  } else if (months === 0) {
    return t('duration.years', { years: years.toString() });
  } else {
    return t('duration.years_months', { 
      years: years.toString(),
      months: months.toString()
    });
  }
}

/**
 * Format education date range specifically for education section
 * Education dates usually show academic years, so we focus on year display
 * @param startDate start date
 * @param endDate end date (can be null, means current/ongoing)
 * @param t translation function
 * @returns formatted education date range string
 */
export function formatEducationDateRange(
  startDate: string,
  endDate: string | null,
  t: (key: TranslationKey, params?: Record<string, string>) => string
): string {
  // Handle empty dates
  if (!startDate) {
    return "";
  }

  // If the start and end dates are in the same year, only show the year
  if (isSameYear(startDate, endDate)) {
    return formatYear(startDate, t);
  }

  const startFormatted = formatYear(startDate, t);
  const endFormatted = formatYear(endDate, t);

  // Different years, show range
  return `${startFormatted} - ${endFormatted}`;
}