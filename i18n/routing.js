import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["th", "en", "ru", "ch"],
  defaultLocale: "th",
  localeDetection: false,
});
