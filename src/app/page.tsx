import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LandingPadUFO } from "@/components/ui/LandingPadUFO";
import { BeamUpButton } from "@/components/ui/BeamUpButton";
import { HeroSection } from "@/components/sections/HeroSection";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        {/* Field reports carousel — top band */}
        <TestimonialsCarousel />
        {/* Merged subject profile + clearance records */}
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
      <LandingPadUFO />
      <BeamUpButton />
    </>
  );
}
