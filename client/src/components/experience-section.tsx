import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, MapPin, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

const experiences = [
  {
    title: "Software Developer",
    company: "Gnani.ai",
    location: "Bengaluru, India",
    period: "Aug 2024 - Present",
    current: true,
    projects: [
      {
        name: "Aura365 | GenAI Call QA Analysis Platform",
        achievements: [
          "Architected and developed scalable backend systems for an enterprise-grade call analysis platform serving large-scale operations",
          "Built robust APIs using FastAPI, SQL databases and MongoDB to handle high-volume call recording uploads and AI-powered analysis workflows, processing thousands of calls daily",
          "Designed efficient data storage and retrieval systems using ClickHouse for analytics and Redis for caching, reducing query response time"
        ]
      },
      {
        name: "Inya Product | inya.ai",
        achievements: [
          "Engineered engaging user interfaces leveraging React.js and TypeScript for the GenVoice product, boosting productivity and insights in AI and custom bot development",
          "Integrated state management using Redux, enhancing application scalability and reducing data inconsistencies",
          "Crafted responsive designs with a custom Design System, ensuring consistent branding across devices and increasing user engagement",
          "Devised systems to transform content into embeddings for intelligent responses, enhancing response accuracy",
          "Resolved cross-browser compatibility issues, reducing bug reports"
        ]
      }
    ]
  },
  {
    title: "Software Developer",
    company: "Leucine Inc",
    location: "Bengaluru, India",
    period: "Dec 2023 - July 2024",
    current: false,
    projects: [
      {
        name: "FDA Tracker | fdatracker.ai",
        achievements: [
          "Architected a robust application that delivered in-depth analysis on critical documents, enhancing workflow efficiency for over 400 pharmaceutical professionals across 180 domains within five months of launch",
          "Leveraged advanced AI models to generate detailed reports and actionable insights, cutting manual analysis time",
          "Implemented responsive and interactive UI components using React.js, TypeScript, and Bootstrap"
        ]
      },
      {
        name: "Application Builder",
        achievements: [
          "Created an intuitive no-code platform empowering users to build applications from simple descriptions, reducing client development time",
          "Utilized Large Language Models (LLMs) to generate detailed workflow steps from high-level descriptions, increasing process accuracy",
          "Devised a system to process user feedback for continuous improvement, enhancing user satisfaction scores"
        ]
      }
    ]
  }
];

export function ExperienceSection() {
  const { ref, hasIntersected } = useIntersectionObserver();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Professional Experience</h2>
        
        <div 
          ref={ref}
          className={`space-y-12 transition-all duration-1000 ${
            hasIntersected ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
          }`}
        >
          {experiences.map((experience, index) => (
            <Card 
              key={`${experience.company}-${experience.period}`}
              className="glass border-none hover:scale-[1.02] transition-all duration-300 mouse-parallax"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                transform: `translateX(${mousePosition.x * 0.005}px) translateY(${mousePosition.y * 0.003}px)`
              }}
            >
              <CardContent className="p-8">
                <div className="flex flex-wrap justify-between items-start mb-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold gradient-text">{experience.title}</h3>
                    <p className="text-xl text-accent font-semibold">{experience.company}</p>
                    <div className="flex items-center gap-2 text-slate-400">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <Badge 
                      variant={experience.current ? "default" : "secondary"}
                      className={experience.current ? "bg-primary text-primary-foreground" : "bg-slate-600 text-slate-100"}
                    >
                      {experience.period}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {experience.projects.map((project, projectIndex) => (
                    <div key={project.name} className="space-y-3">
                      <h4 className="text-lg font-semibold text-secondary">{project.name}</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, achievementIndex) => (
                          <li 
                            key={achievementIndex} 
                            className="flex items-start gap-3 text-slate-300"
                          >
                            <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
