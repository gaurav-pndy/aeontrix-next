"use client";

import { useEffect } from "react";

import { usePathname } from "next/navigation";
import HeroSection from "@/components/Home/HeroSection";
import Carousel from "@/components/Home/Carousel";
import ServicesSection from "@/components/Home/ServicesSection";
import HumanAIComparison from "@/components/Home/HumanAIComparison";
import Timeline from "@/components/Home/Timeline";
import CalEmbed from "@/components/Home/CalEmbed";
import ContactForm from "@/components/Home/ContactForm";
import FaqSection from "@/components/Home/FaqSection";

export default function HomePage() {
  const pathname = usePathname();

  const scrollWithOffset = (el, offset = 100) => {
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    // In Next.js, to pass scroll info between routes, use URL params or state management instead of react-router state
    // Example: This would be replaced by your own logic based on URL query or context
    const params = new URLSearchParams(window.location.search);
    const targetId = params.get("scrollTo");
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) scrollWithOffset(el, 100);
      }, 100);
    }
  }, [pathname]);

  return (
    <>
      <main id="main">
        <HeroSection />
        <Carousel />
        <ServicesSection />
        <HumanAIComparison />
        <Timeline />
        <CalEmbed />
        <ContactForm />
        <FaqSection />
      </main>
    </>
  );
}
