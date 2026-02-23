import Image from "next/image";
import Hero from "@/components/Hero";
import WebinarsSection from "@/components/WebinarsSection";
import StatsSection from "@/components/StatsSection";
import Specializations from "@/components/Specializations";
import About from "@/components/About";
import CTA from "@/components/CTA";
import { Testimonials } from "@/components/Testimonials";


export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center w-full ">
      <Hero />
      <StatsSection />
      <Specializations />
      <WebinarsSection />
      <About aboutImage="/about.png" />
      <Testimonials />
      <CTA />
      
    </div>
  );
}
