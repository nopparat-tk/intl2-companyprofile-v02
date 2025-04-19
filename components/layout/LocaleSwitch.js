"use client";

import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";

const { useRouter, usePathname } = createSharedPathnamesNavigation({
   locales: ["en", "ru", "th", "ch"],
});

export default function LocaleSwitch() {
   const locale = useLocale();
   const router = useRouter();
   const pathname = usePathname();
   const [isPending, startTransition] = useTransition();

   const items = [
      { value: "en", label: "🇺🇸 ENG" },
      { value: "ru", label: "🇷🇺 RUS" },
      { value: "th", label: "🇹🇭 THA" },
      { value: "ch", label: "🇨🇳 CHN" },
   ];

   const handleLocaleChange = (newLocale) => {
      startTransition(() => {
         router.replace(pathname, { locale: newLocale });
      });
   };

   return (
      <div className="main-header__language-switcher">
         <div className="icon">
            <span className="fa fa-globe"></span>
         </div>
         <div className="language-switcher clearfix">
            <div className="select-box clearfix">
               <select
                  className={`selectmenu wide ${isPending ? "opacity-50" : ""}`}
                  value={locale}
                  onChange={(e) => handleLocaleChange(e.target.value)}
                  disabled={isPending}
                  style={{
                     cursor: isPending ? "wait" : "pointer",
                  }}
               >
                  {items.map((item) => (
                     <option key={item.value} value={item.value}>
                        {item.label}
                     </option>
                  ))}
               </select>
            </div>
         </div>
      </div>
   );
}
