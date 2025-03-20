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

   const [showPhoneNumber2, setShowPhoneNumber2] = useState(false);

   const togglePhoneNumber2 = () => {
      setShowPhoneNumber2(!showPhoneNumber2);
   };
   return (
      <div>
         <div className="pricing-one__single">
            <div className="pricing-one__single-inner">
               <div className="table-header">
                  <div className="img-box">
                     <img src="assets/images/branch/store_4.png" alt="" />
                  </div>
                  <div className="title-box text-center">
                     {/* <h2>Chanthaburi</h2> */}
                     <h2>{bd("branch_4")}</h2>
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
                              16/7 Sai Trok Nong Road, <br /> Khlung
                              Subdistrict, Khlung District, Chanthaburi Province
                              22110
                           </p> */}
                           <p>{bd("add_4")}</p>
                        </div>
                     </li>

                     <li>
                        <div className="icon">
                           <span className="fa fa-phone-alt"></span>
                        </div>
                        <div className="text-box">
                           {showPhoneNumber ? (
                              <Link href={`tel:${bd("phone_4")}`}>
                                 {bd("phone_4")}
                              </Link>
                           ) : (
                              <a
                                 className="btn-box"
                                 style={{
                                    cursor: "pointer",
                                 }}
                                 onClick={togglePhoneNumber}
                              >
                                 {bd("phone_4").slice(0, 7)} ****
                              </a>
                           )}
                           {/* <Link href={`tel:${bd("phone_3")}`}>
                              {bd("phone_3")}
                           </Link>{" "} */}
                           ,{" "}
                           {showPhoneNumber2 ? (
                              <Link href={`tel:${bd("mobile_4")}`}>
                                 {bd("mobile_4")}
                              </Link>
                           ) : (
                              <a
                                 className="btn-box"
                                 style={{
                                    cursor: "pointer",
                                 }}
                                 onClick={togglePhoneNumber2}
                              >
                                 {bd("mobile_4").slice(0, 7)} ****
                              </a>
                           )}
                           {/* <Link href={`tel:${bd("mobile_3")}`}>
                              {bd("mobile_3")}
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
