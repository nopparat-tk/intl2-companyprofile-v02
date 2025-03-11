"use client";
import React from "react";
import { LiveChatLoaderProvider, Messenger } from "react-live-chat-loader";

export default function FacebookMSG() {
   return (
      <div>
         <LiveChatLoaderProvider
            provider="messenger"
            providerKey="207440262444547"
            appID="1278743569993286"
         >
            <Messenger
               pageId="207440262444547"
               appId="1278743569993286"
               greetingDialogDisplay="show"
               greetingDialogDelay={0}
            />
         </LiveChatLoaderProvider>
      </div>
   );
}
