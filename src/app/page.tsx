import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Demos from "@/components/Demos";
import Founder from "@/components/Founder";
import HowItWorks from "@/components/HowItWorks";
import WebsiteServices from "@/components/WebsiteServices";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Demos />
      <Founder />
      <HowItWorks />
      <WebsiteServices />
      <Pricing />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
