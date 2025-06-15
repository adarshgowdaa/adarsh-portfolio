import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export function AboutSection() {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">About Me</h2>
        <div 
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            hasIntersected ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
          }`}
        >
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate Software Developer with expertise in GenAI technologies and full-stack development. 
              Currently working at Gnani.ai, I specialize in building scalable AI-powered applications that transform 
              how businesses analyze and interact with data.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              With a strong foundation in modern web technologies and AI/ML, I've contributed to enterprise-grade 
              platforms serving thousands of users daily. My focus is on creating intelligent, user-centric solutions 
              that bridge the gap between complex AI capabilities and intuitive user experiences.
            </p>
          </div>
          
          <Card className="glass border-none">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-semibold gradient-text">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-slate-100">Bachelor of Engineering</h4>
                  <p className="text-slate-300">Computer Science and Engineering</p>
                  <p className="text-slate-300">Vidyavardhaka College of Engineering</p>
                  <p className="text-accent font-semibold">CGPA: 8.60</p>
                  <p className="text-sm text-slate-400">Aug 2020 - June 2024 • Mysuru, Karnataka, India</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
