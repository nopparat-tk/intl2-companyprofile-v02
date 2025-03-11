"use client";
import { useEffect } from "react";

export default function FacebookMSG() {
   useEffect(() => {
      console.log("Initializing Facebook SDK");
      window.fbAsyncInit = function () {
         FB.init({
            appId: "1278743569993286",
            xfbml: true,
            version: "v18.0",
         });
         console.log("Facebook SDK initialized");
      };

      (function (d, s, id) {
         var js,
            fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) return;
         js = d.createElement(s);
         js.id = id;
         js.src =
            "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0&appId=1278743569993286";
         fjs.parentNode.insertBefore(js, fjs);
         console.log("Facebook SDK script added to the document");
      })(document, "script", "facebook-jssdk");
   }, []);

   return (
      <div>
         <div
            className="fb-customerchat"
            attribution="setup_tool"
            page_id="207440262444547"
         ></div>
      </div>
   );
}
