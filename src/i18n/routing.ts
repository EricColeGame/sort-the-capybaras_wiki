import { defineRouting } from "next-intl/routing";
import { siteConfig } from "@/config/site";

/**
 * Supported locales for this site. This array is the single source of truth:
 * `src/i18n/request.ts`, `src/components/language-switcher.tsx` and the
 * `src/locales/*.json` file set must all stay in sync with it.
 */
export const locales = ["en", "ja", "ko", "es"] as const;

export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: siteConfig.defaultLocale as Locale,
  localePrefix: "always",
  localeDetection: false,
});
