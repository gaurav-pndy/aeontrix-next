"use client";

import Marquee from "react-fast-marquee";
import {
  FaDiscord,
  FaDropbox,
  FaFigma,
  FaGithub,
  FaSlack,
} from "react-icons/fa6";
import { RiGeminiLine } from "react-icons/ri";
import {
  SiAirtable,
  SiClaude,
  SiGmail,
  SiMake,
  SiN8N,
  SiNotion,
  SiPerplexity,
} from "react-icons/si";

const logos = [
  <FaGithub aria-label="GitHub" />,
  <FaDiscord aria-label="Discord" />,
  <SiClaude aria-label="Claude" />,
  <SiGmail aria-label="Gmail" />,
  <FaDropbox aria-label="Dropbox" />,
  <FaFigma aria-label="Figma" />,
  <SiNotion aria-label="Notion" />,
  <FaSlack aria-label="Slack" />,
  <SiAirtable aria-label="Airtable" />,
  <SiPerplexity aria-label="Perplexity" />,
  <RiGeminiLine aria-label="Gemini" />,
  <SiN8N aria-label="n8n" />,
  <SiMake aria-label="Make" />,

  <FaGithub aria-label="GitHub" />,
  <FaDiscord aria-label="Discord" />,
  <SiClaude aria-label="Claude" />,
  <SiGmail aria-label="Gmail" />,
  <FaDropbox aria-label="Dropbox" />,
  <FaFigma aria-label="Figma" />,
  <SiNotion aria-label="Notion" />,
  <FaSlack aria-label="Slack" />,
  <SiAirtable aria-label="Airtable" />,
  <SiPerplexity aria-label="Perplexity" />,
  <RiGeminiLine aria-label="Gemini" />,
  <SiN8N aria-label="n8n" />,
  <SiMake aria-label="Make" />,
];

const Carousel = () => {
  const half = Math.ceil(logos.length / 2);
  const topRow = logos.slice(0, half);
  const bottomRow = logos.slice(half);

  return (
    <section className="w-full mb-20" aria-label="Partner logos carousel">
      <div className="mx-auto">
        {/* Top Row */}
        <div className="mt-10">
          <Marquee speed={30} gradient={false}>
            {topRow.map((logo, index) => (
              <div
                key={`top-${index}`}
                className="flex items-center justify-center mx-2 md:mx-6 px-4 py-2 border border-[#083d3d] bg-[#0d0d0d]/20 hover:border-[#00FF93] text-4xl rounded-xl p-4 md:p-6 text-neutral-400 hover:text-neutral-200 shadow-2xl transition-all"
              >
                {logo}
              </div>
            ))}
          </Marquee>
        </div>

        {/* Bottom Row */}
        <div className="mt-6">
          <Marquee speed={30} direction="right" gradient={false}>
            {bottomRow.map((logo, index) => (
              <div
                key={`bottom-${index}`}
                className="flex items-center justify-center mx-2 md:mx-6 px-4 py-2 border border-[#083d3d] bg-[#0d0d0d]/20 hover:border-[#00FF93] text-4xl rounded-xl p-4 md:p-6 text-neutral-400 hover:text-neutral-200 shadow-2xl transition-all"
              >
                {logo}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
