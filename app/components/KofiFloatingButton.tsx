"use client";

import Script from "next/script";

interface KofiFloatingButtonProps {
  username: string;
  label?: string;
  color?: string;
}

export default function KofiFloatingButton({
  username,
  label = "Support Me",
  color = "#fcbf47",
}: KofiFloatingButtonProps) {
  return (
    <>
      <style>{`
        /* 1. Position the main wrapper to the bottom-right */
        .floatingchat-container-wrap {
          left: auto !important;
          right: 16px !important;
          margin: 0 !important;
        }
        .floatingchat-container-wrap-mobi {
          left: auto !important;
          right: 180px !important;
          margin: 0 !important;
        }
        /* 2. Keep the popup container aligned inside the wrapper */
        .floating-chat-kofi-popup-iframe-container,
        .floating-chat-kofi-popup-iframe-container-mobi {
          left: auto !important;
          right: 0 !important;
          margin: 0 !important;
          transform: none !important;
        }

        /* 3. Ensure the iframe stays within viewport width on mobile */
        .floating-chat-kofi-popup-iframe {
          left: auto !important;
          right: 16px !important;
          max-width: calc(100vw - 32px) !important;
        }
      `}</style>
      <Script
        src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.kofiWidgetOverlay) {
            window.kofiWidgetOverlay.draw(username, {
              type: "floating-chat",
              "floating-chat.donateButton.text": label,
              "floating-chat.donateButton.background-color": color,
              "floating-chat.donateButton.text-color": "#323842",
            });
          }
        }}
      />
    </>
  );
}
