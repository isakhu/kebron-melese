import { AboutSection } from '../components/about-section';
import { ContactSection } from '../components/contact-section';
import { EducationSection } from '../components/education-section';
import { ExperienceSection } from '../components/experience-section';
import { HeroSection } from '../components/hero-section';
import { ProjectsSection } from '../components/projects-section';
import { SkillsSection } from '../components/skills-section';
import { Footer } from '../components/footer';

export default function HomePage() {
  return (
    <main className="bg-surface-darker">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
