import Navbar from "@/components/Navbar";
import ClientEffects from "@/components/ClientEffects"; // New client component
import "./globals.css";
import SeoBreadcrumbs from "@/components/SeoBreadcrumbs";
import Footer from "@/components/Footer";

// app/layout.js
export const metadata = {
  metadataBase: new URL("https://aeontrix.com"), // ✅ your production domain

  title: "Aeontrix | AI Transformation Partner",
  description:
    "Aeontrix AI helps businesses boost revenue and reduce workload by automating sales, marketing, and customer support with reliable AI systems.",
  keywords: [
    "AI automation",
    "business process automation",
    "AI agents",
    "chatbots",
    "workflow automation",
    "AI integration",
    "n8n vs Zapier",
    "AI transformation",
    "lead generation",
    "customer support automation",
  ],
  authors: [{ name: "Aeontrix" }],
  openGraph: {
    type: "website",
    url: "https://aeontrix.com/",
    title: "Aeontrix | AI Transformation Partner",
    description:
      "Aeontrix AI helps businesses automate sales, marketing, and customer support with reliable AI systems.",
    images: [
      {
        url: "/aeontrix-emblem.png",
        width: 1200,
        height: 630,
        alt: "Aeontrix Logo",
      },
    ],
    siteName: "Aeontrix",
  },
  twitter: {
    card: "summary_large_image",
    site: "@aeontrix",
    creator: "@aeontrix",
    images: ["/aeontrix-emblem.png"],
    title: "Aeontrix | AI Transformation Partner",
    description:
      "Aeontrix AI helps businesses automate sales, marketing, and support with reliable AI systems.",
  },
  icons: {
    icon: "/aeontrix-logo.png",
    apple: "/aeontrix-logo.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#2563EB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      {/* <Head /> */}
      <body className="min-h-screen wrapper bg-[#060606] relative ">
        <div className="absolute inset-0 grid-background">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="glow-background"></div>
          </div>
          <div id="gridOverlay" className="grid-overlay"></div>
        </div>
        <Navbar />
        <SeoBreadcrumbs />
        <ClientEffects /> {/* Client-side interactive code separated */}
        <main className="mt-[6.5rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
