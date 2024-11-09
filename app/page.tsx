import About from "@/components/About";
import Comparision from "@/components/Comparision";
import ContactForm from "@/components/ContactForm";
import Foooter from "@/components/Foooter";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Infos from "@/components/Infos";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import { Form } from "@/components/ui/form";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Infos/>
      <About/>
      <WhyUs/>
      <Section/>
      <Comparision/>
      <Footer/>
      <ContactForm/>
      <Foooter/>
    </main>
  );
}
