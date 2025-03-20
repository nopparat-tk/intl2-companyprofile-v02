import React, { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function PhoneCall() {
   const t = useTranslations("HeaderBtn");
   const [showPhoneNumber, setShowPhoneNumber] = useState(false);

   const togglePhoneNumber = () => {
      setShowPhoneNumber(!showPhoneNumber);
   };
   return (
      <>
         {showPhoneNumber ? (
            <Link href={`tel:${t("phone_no")}`}>{t("phone_no")}</Link>
         ) : (
            <a
               // className="btn-box"
               style={{ cursor: "pointer" }}
               onClick={togglePhoneNumber}
            >
               {t("phone_no").slice(0, 7)} ****
            </a>
         )}
      </>
   );
}
