// Single source of truth for public contact info.
// Replace the GOOGLE_FORM_URL below with your real form when ready.

// TODO: Replace with the real Google Form URL (share link).
// The form should ask for: business name, business type, email, preferred time to call.
export const GOOGLE_FORM_URL =
  process.env.NEXT_PUBLIC_GOOGLE_FORM_URL ??
  "https://forms.gle/your-google-form-id";

// Public contact email — used in footer, contact section, and as mailto: fallback.
export const EMAIL = "contact.avishaistudio@gmail.com";

export const EMAIL_LINK = `mailto:${EMAIL}`;

// City shown in footer, hero, and meta tags. Local SEO target.
export const CITY = "Sri Ganganagar, Rajasthan";
