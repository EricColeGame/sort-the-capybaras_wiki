import type { LucideIcon } from "lucide-react";

export interface NavItem {
  key: string;
  path: string;
  icon: LucideIcon;
  isContentType: boolean;
}

/**
 * Top-level navigation entries. Cleared for the Sort The Capybaras refactor;
 * content types are re-populated in a later stage.
 */
export const NAVIGATION_CONFIG: readonly NavItem[] = [];

export const CONTENT_TYPES = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
