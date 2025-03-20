"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Branch2() {
   const bd = useTranslations("BranchData");

   const [showPhoneNumber, setShowPhoneNumber] = useState(false);

   const togglePhoneNumber = () => {
      setShowPhoneNumber(!showPhoneNumber);
   };
   return (
      <div>
         <div className="pricing-one__single">
            <div className="pricing-one__single-inner">
               <div className="table-header">
                  <div className="img-box">
                     <img src="assets/images/branch/store_2.png" alt="" />
                  </div>
                  <div className="title-box text-center">
                     {/* <h2>Pathum Thani</h2> */}
                     <h2>{bd("branch_2")}</h2>
                  </div>
               </div>

               <div className="table-content">
                  <ul>
                     <li>
                        <div className="icon">
                           <span className="fa fa-map"></span>
                        </div>
                        <div className="text-box">
                           {/* <p>
                              39 Soi Tawan-Ok 26, Moo 5, <br /> Khlong Si
                              Subdistrict, Khlong Luang District, Pathum Thani
                              Province 12120
                           </p> */}
                           <p>{bd("add_2")}</p>
                        </div>
                     </li>

                     <li>
                        <div className="icon">
                           <span className="fa fa-phone-alt"></span>
                        </div>
                        <div className="text-box">
                           {showPhoneNumber ? (
                              <Link href={`tel:${bd("phone_2")}`}>
                                 {bd("phone_2")}
                              </Link>
                           ) : (
                              <a
                                 className="btn-box"
                                 style={{
                                    cursor: "pointer",
                                 }}
                                 onClick={togglePhoneNumber}
                              >
                                 {bd("phone_2").slice(0, 7)} ****
                              </a>
                           )}
                           {/* <Link href={`tel:${bd("phone_2")}`}>
                              {bd("phone_2")}
                           </Link> */}
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}
