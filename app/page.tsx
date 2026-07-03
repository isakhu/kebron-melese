import { AboutSection } from '../components/about-section';
import { CertificationsSection } from '../components/certifications-section';
import { ContactSection } from '../components/contact-section';
import { EducationSection } from '../components/education-section';
import { LanguagesSection } from '../components/languages-section';
import { ExperienceSection } from '../components/experience-section';
import { HeroSection } from '../components/hero-section';
import { ProjectsSection } from '../components/projects-section';
import { SkillsSection } from '../components/skills-section';
import { Footer } from '../components/footer';

export default function HomePage() {
  return (
    <main className="bg-slate-50">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <LanguagesSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
