import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import Section1 from "./Components/HomePageSections/Section1";
import TestimonialSection from "./Components/HomePageSections/TestimonialSection";
import Footer from "./Components/Footer";
import Section2 from "./Components/HomePageSections/Section2";
export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <HeroSection />
        <Section1 />
        <TestimonialSection />
        <Section2 />
      </div>
    </>
  );
}
