export const defaultLocale = "th";
export const locales = ["en", "ru", "th", "ch"];

export function getLocaleParamSchema() {
   return {
      locale: locales,
   };
}
