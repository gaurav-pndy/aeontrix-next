import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

export const metadata = {
  title: "404 Not Found | Aeonix",
  description: "The page you're looking for doesn't exist.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "404 Not Found | Aeonix",
    description: "The page you're looking for doesn't exist.",
    url: "https://aeonix.com/404",
    images: [{ url: "https://aeonix.com/aeonix-logo.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "404 Not Found | Aeonix",
  },
};

export default function NotFound() {
  return (
    <main>
      <div className="px-4 relative z-10 pb-12 max-w-7xl mx-auto text-white min-h-[70vh] flex flex-col items-center justify-center">
        <div className="text-center content-box border-glow-wrapper highlighted-box-small relative p-10 rounded-2xl">
          <div className="border-glow"></div>

          <div className="flex justify-center text-[#00FF93] mb-4">
            <FaExclamationTriangle size={60} />
          </div>

          <h1 className="gradient-title font-bold !mb-4 text-4xl">404</h1>
          <h2 className="text-2xl font-bold text-seasalt mb-4">
            Page Not Found
          </h2>

          <p className="text-[#F8F9FB]/70 mb-6 max-w-md">
            The page you're looking for does not exist or has been moved.
          </p>

          <div className="flex gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-[#00FF93] text-black font-semibold hover:bg-[#00ff40] transition-all duration-200"
            >
              Return to Homepage
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-[#1c1c1c]">
            <p className="text-sm text-[#F8F9FB]/50">
              Need help?{" "}
              <Link href="/contact" className="text-[#00FF93] hover:underline">
                Contact our support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
