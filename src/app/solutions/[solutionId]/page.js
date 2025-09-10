import { solutionsData } from "@/data/solutionsData";
import SolutionClient from "./SolutionClient";

// Export metadata for SEO (server only)
export async function generateMetadata({ params }) {
  const { solutionId } = await params;
  const solution = solutionsData.find((s) => s.id === solutionId);

  if (!solution) {
    return {
      title: "Solution Not Found | Aeontrix",
      robots: { index: false, follow: false },
    };
  }
  const title = `${solution.title} | Aeontrix`;
  const description =
    solution.desc?.substring(0, 150) ||
    "Explore AI automation solutions with Aeontrix.";
  const url = `https://aeontrix.com/solutions/${solutionId}`;
  return {
    title,
    description,
    keywords: `${solution.title.toLowerCase()}, AI automation, business automation, Aeontrix, ${solutionId}`,
    openGraph: {
      title,
      description,
      url,
      images: ["https://aeontrix.com/aeontrix-emblem.png"],
    },
    twitter: {
      site: "@aeontrix",
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function Page({ params }) {
  const { solutionId } = await params;

  // Pass all required props to client component
  return <SolutionClient solutionId={solutionId} />;
}
