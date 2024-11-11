import { FeaturesSection } from "@/components/features";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/hero";
import { HowItWorksSection } from "@/components/how-it-works";
import { NewsLetter } from "@/components/news-letter";
import { Testimonials } from "@/components/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </section>
  );
}
