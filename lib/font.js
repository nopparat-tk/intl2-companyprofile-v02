import { Noto_Sans, Noto_Sans_Thai, Noto_Sans_SC } from "next/font/google";

export const notoSans = Noto_Sans({
   weight: ["400", "500", "600", "700", "800", "900"],
   subsets: ["latin", "cyrillic"],
   variable: "--logistiq-font",
   display: "swap",
});

export const notoSansTh = Noto_Sans_Thai({
   weight: ["400", "500", "600", "700", "800", "900"],
   subsets: ["thai"],
   variable: "--logistiq-thai-font",
   display: "swap",
});

export const notoSansSC = Noto_Sans_SC({
   weight: ["400", "500", "600", "700", "800", "900"],
   subsets: ["latin", "cyrillic"],
   variable: "--logistiq-sc-font",
   display: "swap",
});
