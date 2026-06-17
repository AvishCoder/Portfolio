export interface PricingTier {
  name: string;
  setupLabel: string; // e.g. "₹1,999 one-time setup"
  monthlyLabel: string; // e.g. "₹999/month"
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  badge?: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    setupLabel: "₹1,999 one-time setup",
    monthlyLabel: "₹999/month",
    description: "For a single business that wants a basic AI assistant on its website.",
    features: [
      "1 custom chatbot",
      "FAQ flows & business Q&A",
      "Basic brand customization",
      "Email support",
    ],
    ctaLabel: "Start with Starter",
    ctaHref: "#contact",
  },
  {
    name: "Growth",
    setupLabel: "₹3,999 one-time setup",
    monthlyLabel: "₹1,999/month",
    description: "For businesses that want leads captured automatically and WhatsApp integrated.",
    features: [
      "2 custom chatbots",
      "Lead capture + CRM export",
      "WhatsApp integration",
      "Monthly content updates",
      "Priority support",
    ],
    ctaLabel: "Choose Growth",
    ctaHref: "#contact",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Custom",
    setupLabel: "₹4,999 one-time setup",
    monthlyLabel: "₹2,999/month",
    description: "For multi-language bots, complex flows, or full API integrations.",
    features: [
      "Fully custom conversation flows",
      "Multi-language (Hindi + English)",
      "API integrations (CRM, payments, booking)",
      "Dedicated account manager",
    ],
    ctaLabel: "Get a Custom Quote",
    ctaHref: "#contact",
  },
];
