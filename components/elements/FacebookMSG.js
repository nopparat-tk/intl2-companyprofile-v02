"use client";
import React from "react";
import { LiveChatLoaderProvider } from "react-live-chat-loader";
export default function FacebookMSG() {
   return (
      <div>
         <LiveChatLoaderProvider
            provider="messenger"
            providerKey="207440262444547"
            appID="1278743569993286"
         >
            {/* <Messenger /> */}
         </LiveChatLoaderProvider>
      </div>
   );
}
