"use client";
import { useEffect } from "react";

export default function FacebookMSG({ pageId, appId }) {
   useEffect(() => {
      window.fbAsyncInit = function () {
         FB.init({
            appId: appId, //Optional
            xfbml: true,
            version: "v18.0", // Replace with your desired version
         });
      };

      (function (d, s, id) {
         var js,
            fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) return;
         js = d.createElement(s);
         js.id = id;
         js.src =
            "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0&appId=" +
            appId; //Optional
         fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
   }, [pageId, appId]);
   return (
      <div
         className="fb-customerchat"
         attribution="setup_tool"
         page_id={pageId}
      ></div>
   );
}
