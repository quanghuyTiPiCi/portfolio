"use client";

import Landing from "@/app/components/Landing";
import MySkills from "@/app/components/MySkills";
import LineGradient from "@/app/components/Shared/LineGradient";
import Projects from "@/app/components/Projects";
import Testimonials from "@/app/components/Testimonials";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <>
      <Landing setSelectedPage={() => {}} />
      <LineGradient />
      <MySkills />
      <LineGradient />
      <Projects />
      <LineGradient />
      <Testimonials />
      <LineGradient />
      <Contact />
    </>
  );
}
