import type { SkillLevel } from "@/cv.d.ts";

// Unified skill level mapping
const SKILL_LEVEL_MAPPING: Record<string, SkillLevel> = {
  // Standard skill levels
  Fundamental: "Fundamental",
  Intermediate: "Intermediate",
  Proficient: "Proficient",
  Expert: "Expert",
  
  // Fundamental level aliases
  "Beginner": "Fundamental",
  "Basic": "Fundamental", 
  "Novice": "Fundamental",
  "Entry": "Fundamental",
  "Starter": "Fundamental",
  
  // Intermediate level aliases  
  "Medium": "Intermediate",
  "Average": "Intermediate",
  "Moderate": "Intermediate",
  
  // Proficient level aliases
  "Advanced": "Proficient",
  "Skilled": "Proficient",
  "Competent": "Proficient",
  "Good": "Proficient",
  
  // Expert level aliases
  "Master": "Expert",
  "Professional": "Expert",
  "Senior": "Expert",
  "Excellent": "Expert",
  "Guru": "Expert",
} as const;


export function getSkillLevel(level: string): SkillLevel | "unknown" {
  if (!level) {
    return "unknown";
  }

  // Search through unified mapping
  const matchedEntry = Object.entries(SKILL_LEVEL_MAPPING)
    .find(([key]) => key.toLowerCase() === level.trim().toLowerCase());

  return matchedEntry ? matchedEntry[1] : "unknown";
}