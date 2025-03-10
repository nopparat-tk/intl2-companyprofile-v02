"use client";
import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

export default function FacebookMSG() {
   return (
      <div>
         <FacebookProvider appId="1278743569993286" chatSupport>
            <CustomChat pageId="207440262444547" minimized={true} />
         </FacebookProvider>
      </div>
   );
}
