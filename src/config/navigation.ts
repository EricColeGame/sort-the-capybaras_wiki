import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Boxes,
  Keyboard,
  MessagesSquare,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export interface NavItem {
  /** Translation key under the `nav` namespace. */
  key: string;
  /** URL path for this content type listing page. */
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

/**
 * Top-level navigation entries. Each category slug maps 1:1 to a directory
 * under `content/<locale>/` (the source of truth for article categories).
 */
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Boxes, isContentType: true },
  { key: "progression", path: "/progression", icon: TrendingUp, isContentType: true },
  { key: "features", path: "/features", icon: Sparkles, isContentType: true },
  { key: "community", path: "/community", icon: MessagesSquare, isContentType: true },
  { key: "controls", path: "/controls", icon: Keyboard, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
