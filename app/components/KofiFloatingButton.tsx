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
        .floatingchat-container-wrap,
        .floatingchat-container-wrap-mobi {
          left: unset !important;
          right: 16px !important;
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
