import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Process } from "@/components/landing/Process";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { StickyMobileCTA } from "@/components/landing/StickyMobileCTA";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";

const LandingPage = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <StickyMobileCTA />
      <FloatingWhatsApp />
    </main>
  );
};

export default LandingPage;