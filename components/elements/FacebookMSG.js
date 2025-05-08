"use client";
import React, { useState } from "react";
import Link from "next/link";
import "../../public/assets/css/module-css/chat-button.css";

export default function FacebookMSG() {
   const [isActivate, setActivate] = useState(false);

   const handleActivate = () => {
      setActivate(!isActivate);
   };

   return (
      <div className="chatContainer">
         <button onClick={handleActivate} className="chatButton">
            {isActivate ? (
               <i className="fas fa-times close"></i>
            ) : (
               <i className="fa fa-comments"></i>
            )}
         </button>
         {isActivate && (
            <div className="iconConatiner">
               <Link
                  className="fab fa-facebook-f msgIcon"
                  href="https://m.me/207440262444547"
                  target="_blank"
               ></Link>

               <Link
                  className="fab fa-line lineIcon"
                  href="https://lin.ee/UZ46BIS"
                  target="_blank"
               ></Link>
            </div>
         )}
      </div>
   );
}
