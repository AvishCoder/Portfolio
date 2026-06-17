import type { Metadata } from "next";
import "./globals.css";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";
import { CITY, EMAIL } from "@/lib/contact";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-flax-sigma-59.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Affordable AI Chatbots for Indian Local Businesses`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Custom AI chatbots for gyms, coaching institutes, and restaurants in India. Setup in 3-5 days. Get a free demo today.",
  keywords: [
    "AI chatbot India",
    "affordable chatbot India",
    "chatbot for gym",
    "chatbot for coaching institute",
    "chatbot for restaurant",
    "local business AI",
    `${CITY} chatbot`,
  ],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | AI Chatbots for Local Businesses`,
    description:
      "Custom AI chatbots for gyms, coaching institutes, and restaurants across India. Setup in 3 days.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | AI Chatbots for Local Businesses`,
    description: SITE_TAGLINE,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0a0a0a] text-white antialiased">{children}</body>
    </html>
  );
}
