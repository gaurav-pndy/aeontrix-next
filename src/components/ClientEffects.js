"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientEffects() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    const gridOverlay = document.querySelector(".grid-overlay");
    let lastMouseEvent = null;

    if (!gridOverlay) return;

    function updateCursorLight(e) {
      const x = e.clientX;
      const y = e.clientY;
      gridOverlay.style.background = `radial-gradient(180px circle at ${x}px ${y}px, rgba(0, 255, 147, 0.2) 0%, transparent 40%)`;
      lastMouseEvent = e;
    }

    function onScroll() {
      if (lastMouseEvent) {
        updateCursorLight(lastMouseEvent);
      }
    }

    const buttonListeners = [];

    function attachCursorGlow() {
      const buttons = document.querySelectorAll(".glow-button");

      buttons.forEach((button) => {
        const glow = button.querySelector(".cursor-glow");

        const handleMove = (e) => {
          if (!glow) return;
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          glow.style.left = `${x}px`;
          glow.style.top = `${y}px`;
          glow.style.opacity = "1";
        };

        const handleLeave = () => {
          if (!glow) return;
          glow.style.opacity = "0";
        };

        button.addEventListener("mousemove", handleMove);
        button.addEventListener("mouseleave", handleLeave);

        buttonListeners.push({ button, handleMove, handleLeave });
      });
    }

    attachCursorGlow();

    document.addEventListener("mousemove", updateCursorLight);
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("mousemove", updateCursorLight);
      document.removeEventListener("scroll", onScroll);

      buttonListeners.forEach(({ button, handleMove, handleLeave }) => {
        button.removeEventListener("mousemove", handleMove);
        button.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const boxes = document.querySelectorAll(".border-glow-wrapper");
      const listeners = [];

      boxes.forEach((box) => {
        const border = box.querySelector(".border-glow");
        if (!border) return;

        const handleMouseMove = (e) => {
          const rect = box.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          border.style.setProperty("--x", `${x}px`);
          border.style.setProperty("--y", `${y}px`);
        };

        const handleMouseLeave = () => {
          border.style.setProperty("--x", `-200px`);
          border.style.setProperty("--y", `-200px`);
        };

        box.addEventListener("mousemove", handleMouseMove);
        box.addEventListener("mouseleave", handleMouseLeave);

        listeners.push({ box, handleMouseMove, handleMouseLeave });
      });

      // Cleanup function to remove listeners
      const cleanup = () => {
        listeners.forEach(({ box, handleMouseMove, handleMouseLeave }) => {
          box.removeEventListener("mousemove", handleMouseMove);
          box.removeEventListener("mouseleave", handleMouseLeave);
        });
      };
    }, 2000); // 100ms delay (adjust as necessary)

    return () => {
      clearTimeout(timeout);
      if (typeof cleanup === "function") cleanup();
    };
  }, [pathname]);

  return null; // this component does not render UI
}
