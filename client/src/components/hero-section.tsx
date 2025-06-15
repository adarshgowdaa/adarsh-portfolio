import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useState, useEffect } from 'react';
import { 
  SiLinkedin, 
  SiGithub,
  SiGmail
} from 'react-icons/si';
import { Download } from 'lucide-react';

export function HeroSection() {
  const { ref, hasIntersected } = useIntersectionObserver();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/api/resume/download';
    link.download = 'A_Adarsh_Resume.pdf';
    link.click();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Animated Elements with Mouse Interaction */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-float transition-transform duration-300 ease-out"
          style={{ 
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` 
          }}
        ></div>
        <div 
          className="absolute -bottom-8 -left-4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl animate-float transition-transform duration-300 ease-out" 
          style={{ 
            animationDelay: '2s',
            transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)` 
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl animate-float transition-transform duration-300 ease-out" 
          style={{ 
            animationDelay: '4s',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)` 
          }}
        ></div>
      </div>
      
      <div 
        ref={ref}
        className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${
          hasIntersected ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
        }`}
      >
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              🙋🏽 I'm <span className="gradient-text">A Adarsh</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light">
              Software Engineer | <span className="text-accent font-semibold">Building GenAI Solutions</span>
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Building innovative GenAI-enabled SaaS solutions with cutting-edge technologies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:scale-105 transition-all duration-300 px-8 py-3 rounded-full font-semibold"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline"
              onClick={handleDownloadResume}
              className="glass border-none hover:scale-105 transition-all duration-300 px-8 py-3 rounded-full font-semibold"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://linkedin.com/in/adarsh463" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <SiLinkedin />
            </a>
            <a 
              href="https://github.com/adarshgowdaa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <SiGithub />
            </a>
            <a 
              href="mailto:adarshgowda463@gmail.com"
              className="text-2xl hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <SiGmail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
