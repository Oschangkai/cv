/**
 * Utility functions to check if sections have content
 * Used to conditionally render sections only when they contain data
 */

import type { CV } from "../cv.d";

/**
 * Check if any section should be visible
 * Returns an object with boolean flags for each section
 */
export function getSectionVisibility(cvData: CV) {
  return {
    about: Boolean(cvData.basics?.summary?.trim()),
    experience: Array.isArray(cvData.work) && cvData.work.length > 0,
    education: Array.isArray(cvData.education) && cvData.education.length > 0,
    projects: Array.isArray(cvData.projects) && cvData.projects.length > 0,
    skills: Array.isArray(cvData.skills) && cvData.skills.length > 0,
    certificates: Array.isArray(cvData.certificates) && cvData.certificates.length > 0,
  };
}
