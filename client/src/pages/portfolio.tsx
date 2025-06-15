import { ScrollProgress } from '@/components/scroll-progress';
import { FloatingNav } from '@/components/floating-nav';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { SkillsSection } from '@/components/skills-section';
import { ExperienceSection } from '@/components/experience-section';
import { AchievementsSection } from '@/components/achievements-section';
import { ContactSection } from '@/components/contact-section';

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 min-h-screen">
      <ScrollProgress />
      <FloatingNav />
      
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-slate-700">
        <p className="text-slate-400">
          &copy; 2024 A Adarsh. Crafted with passion for technology and innovation.
        </p>
      </footer>
    </div>
  );
}
