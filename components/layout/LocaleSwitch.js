"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";
import { routing } from "@/i18n/routing";

export default function LocaleSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const items = routing.locales.map((locale) => ({
    value: locale,
    label: locale.toUpperCase(),
  }));

  const labels = {
    en: "Eng",
    ru: "Рус",
    th: "ไทย",
    ch: "中",
  };

  const handleLocaleChange = (newLocale) => {
    if (newLocale === locale) return;

    startTransition(() => {
      // Remove current locale from pathname and add new locale
      const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
      const newPath = `/${newLocale}${pathWithoutLocale}`;
      router.push(newPath);
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
            className="selectmenu wide"
            value={locale}
            onChange={(e) => handleLocaleChange(e.target.value)}
            disabled={isPending}
            style={{
              cursor: "pointer",
            }}
          >
            {items.map((item) => (
              <option key={item.value} value={item.value}>
                {labels[item.value]}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
