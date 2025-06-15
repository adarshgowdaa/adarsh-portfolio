import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { 
  SiLinkedin, 
  SiGithub,
  SiGmail
} from 'react-icons/si';
import { 
  Bot, 
  Code, 
  TrendingUp, 
  Cloud,
  Download,
  User
} from 'lucide-react';

export function HeroSection() {
  const { ref, hasIntersected } = useIntersectionObserver();

  const handleDownloadResume = () => {
    // In a real implementation, this would download the actual PDF
    const link = document.createElement('a');
    link.href = '/api/resume/download';
    link.download = 'A_Adarsh_Resume.pdf';
    link.click();
  };

  const areasOfInterest = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "GenAI Development",
      color: "text-primary"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Dev",
      color: "text-secondary"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Data Analytics",
      color: "text-accent"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Systems",
      color: "text-green-500"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 transition-all duration-1000 ${
          hasIntersected ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
        }`}
      >
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="gradient-text">A Adarsh</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light">
              Software Developer & <span className="text-accent font-semibold">GenAI Engineer</span>
            </p>
          </div>
          
          {/* Enhanced Areas of Interest */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-300">Areas of Interest</h3>
            <div className="grid grid-cols-2 gap-3">
              {areasOfInterest.map((area, index) => (
                <div 
                  key={area.title}
                  className="glass rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`${area.color} mb-2 flex justify-center`}>
                    {area.icon}
                  </div>
                  <p className="text-sm font-medium">{area.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
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

          <div className="flex space-x-6">
            <a 
              href="https://linkedin.com/in/adarsh463" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary transition-colors duration-300"
            >
              <SiLinkedin />
            </a>
            <a 
              href="https://github.com/adarshgowdaa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary transition-colors duration-300"
            >
              <SiGithub />
            </a>
            <a 
              href="mailto:adarshgowda463@gmail.com"
              className="text-2xl hover:text-primary transition-colors duration-300"
            >
              <SiGmail />
            </a>
          </div>
        </div>

        {/* Profile Image Placeholder */}
        <div className="flex justify-center">
          <div className="relative group">
            <div className="w-80 h-80 glass rounded-full flex items-center justify-center animate-glow">
              <User className="w-32 h-32 text-slate-400" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
