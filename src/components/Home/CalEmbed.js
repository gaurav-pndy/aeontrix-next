"use client";

import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";

const CalEmbed = () => {
  const [calLoaded, setCalLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const cal = await getCalApi({ origin: "https://app.cal.com" });

        if (!isMounted) return;

        // Configure theme and layout
        cal("ui", {
          theme: "dark",
          cssVarsPerTheme: {
            light: { "cal-brand": "#00ff95" },
            dark: { "cal-brand": "#00ff95" },
          },
          layout: "month_view",
        });

        // Embed inline calendar into specified element
        cal("inline", {
          elementOrSelector: "#cal-embed",
          calLink: "aeontrix-ai/aeontrix-discovery",
        });

        setCalLoaded(true);
      } catch (err) {
        console.warn("Cal.com API failed:", err);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="w-full max-w-5xl z-10 relative mx-auto px-4 py-20">
      <section
        id="cal-embed"
        className="content-box border-glow-wrapper highlighted-box-timeline backdrop-blur-lg rounded-3xl p-4 md:py-8 shadow-2xl relative"
        aria-live="polite"
        aria-busy={!calLoaded}
        aria-label="Calendar embed"
      >
        <div className="border-glow"></div>
        {!calLoaded && (
          <div
            className="text-white text-center py-20"
            role="status"
            aria-live="polite"
          >
            Loading Calendar...
          </div>
        )}
      </section>
    </div>
  );
};

export default CalEmbed;
