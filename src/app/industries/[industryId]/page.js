import { industriesData } from "@/data/industriesData";
import IndustryClient from "./IndustryClient";

export async function generateMetadata({ params }) {
  const { industryId } = await params;
  const industry = industriesData.find((s) => s.id === industryId);
  if (!industry) {
    return {
      title: "Not Found | Aeontrix",
      robots: { index: false, follow: false },
    };
  }
  return {
    title: `${industry.title} | Aeontrix`,
    description:
      industry?.desc?.substring(0, 150) ||
      "Explore AI automation solutions with Aeontrix.",
    keywords: `${industry.title.toLowerCase()}, AI automation, business automation, Aeontrix, ${industryId}`,
    openGraph: {
      title: `${industry.title} | Aeontrix`,
      description: industry?.desc?.substring(0, 150),
      url: `https://aeontrix.com/industries/${industryId}`,
      images: ["https://aeontrix.com/aeontrix-emblem.png"],
    },
    twitter: {
      site: "@aeontrix",
    },
    alternates: {
      canonical: `https://aeontrix.com/industries/${industryId}`,
    },
  };
}

export default async function IndustryPage({ params }) {
  const { industryId } = await params;

  return <IndustryClient industryId={industryId} />;
}
