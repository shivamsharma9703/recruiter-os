import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Vision from "@/components/Vision";
import Pricing from "@/components/Pricing";
import Demo from "@/components/Demo";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <main style={{ background: "#000", minHeight: "100vh" }}>
      <StructuredData />
      <ScrollObserver />
      <Nav />
      <Hero />
      <Marquee />
      <Features />
      <HowItWorks />
      <Vision />
      <Pricing />
      <Demo />
      <CTABand />
      <Footer />
    </main>
  );
}