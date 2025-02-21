"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Branch1() {
   const bd = useTranslations("BranchData");

   const [showPhoneNumber, setShowPhoneNumber] = useState(false);

   const togglePhoneNumber = () => {
      setShowPhoneNumber(!showPhoneNumber);
   };
   return (
      <div>
         <div className="pricing-two__single">
            <div className="pricing-two__single-inner">
               <div className="table-header">
                  <div className="img-box">
                     <img src="assets/images/branch/store_1.png" alt="" />
                  </div>
                  <div className="title-box text-center">
                     {/* <h2>Pathum Thani</h2> */}
                     <h2>{bd("branch_1")}</h2>
                     {/* <h3>
                        $99 <span>/50kg</span>
                     </h3> */}
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
                              39/4 Soi Tawan-Ok 26, Moo 5, Khlong Si
                              Subdistrict, Khlong Luang District, Pathum Thani
                              Province 12120
                           </p> */}
                           <p>{bd("add_1")}</p>
                        </div>
                     </li>

                     <li>
                        <div className="icon">
                           <span className="fa fa-phone-alt"></span>
                        </div>
                        <div className="text-box">
                           {showPhoneNumber ? (
                              <Link href={`tel:${bd("phone_1")}`}>
                                 {bd("phone_1")}
                              </Link>
                           ) : (
                              <a
                                 className="btn-box"
                                 style={{
                                    cursor: "pointer",
                                 }}
                                 onClick={togglePhoneNumber}
                              >
                                 *** *** ****
                              </a>
                           )}
                           {/* <Link href={`tel:${bd("phone_1")}`}>
                              {bd("phone_1")}
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
