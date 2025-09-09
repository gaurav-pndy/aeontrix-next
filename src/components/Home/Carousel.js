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
  <FaGithub key="github-1" aria-label="GitHub" />,
  <FaDiscord key="discord-1" aria-label="Discord" />,
  <SiClaude key="claude-1" aria-label="Claude" />,
  <SiGmail key="gmail-1" aria-label="Gmail" />,
  <FaDropbox key="dropbox-1" aria-label="Dropbox" />,
  <FaFigma key="figma-1" aria-label="Figma" />,
  <SiNotion key="notion-1" aria-label="Notion" />,
  <FaSlack key="slack-1" aria-label="Slack" />,
  <SiAirtable key="airtable-1" aria-label="Airtable" />,
  <SiPerplexity key="perplexity-1" aria-label="Perplexity" />,
  <RiGeminiLine key="gemini-1" aria-label="Gemini" />,
  <SiN8N key="n8n-1" aria-label="n8n" />,
  <SiMake key="make-1" aria-label="Make" />,

  <FaGithub key="github-2" aria-label="GitHub" />,
  <FaDiscord key="discord-2" aria-label="Discord" />,
  <SiClaude key="claude-2" aria-label="Claude" />,
  <SiGmail key="gmail-2" aria-label="Gmail" />,
  <FaDropbox key="dropbox-2" aria-label="Dropbox" />,
  <FaFigma key="figma-2" aria-label="Figma" />,
  <SiNotion key="notion-2" aria-label="Notion" />,
  <FaSlack key="slack-2" aria-label="Slack" />,
  <SiAirtable key="airtable-2" aria-label="Airtable" />,
  <SiPerplexity key="perplexity-2" aria-label="Perplexity" />,
  <RiGeminiLine key="gemini-2" aria-label="Gemini" />,
  <SiN8N key="n8n-2" aria-label="n8n" />,
  <SiMake key="make-2" aria-label="Make" />,
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
