export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Sort The Capybaras Wiki",
  shortName: "Sort The Capybaras",
  logoText: "S",
  tagline: "Sorting Guides, Tips & Capybara Collection",
  description: "Complete Sort The Capybaras Wiki with level guides, puzzle solutions, gameplay tips, capybara information, and everything players need to master the sorting challenges.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sort-the-capybaras.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sort-the-capybaras.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/5130480/Sort_The_Capybaras/",
  heroVideoId: "t2H6Z_MTaxU", // Sort The Capybaras full gameplay walkthrough
  social: {
    discord: "https://discord.gg/mtCHqd9gr",
    youtube: "https://www.youtube.com/@RedPandaStudio-c2w",
    twitter: "https://x.com/Red_PandaStudio",
    tiktok: "https://www.tiktok.com/@redpandagamestudio",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
