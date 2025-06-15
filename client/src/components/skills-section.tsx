import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect } from 'react';
import { FaJava, FaPython } from 'react-icons/fa';
import { 
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFastapi,
  SiMui,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGit,
  SiClickhouse
} from 'react-icons/si';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: <SiJavascript className="w-16 h-16" />, color: "text-yellow-500" },
      { name: "TypeScript", icon: <SiTypescript className="w-16 h-16" />, color: "text-blue-500" },
      { name: "Java", icon: <FaJava className="w-16 h-16" />, color: "text-red-600" },
      { name: "Python", icon: <FaPython className="w-16 h-16" />, color: "text-yellow-400" },
    ]
  },
  {
    title: "Frameworks & Technologies",
    skills: [
      { name: "React.js", icon: <SiReact className="w-16 h-16" />, color: "text-cyan-400" },
      { name: "Next.js", icon: <SiNextdotjs className="w-16 h-16" />, color: "text-slate-100" },
      { name: "Node.js", icon: <SiNodedotjs className="w-16 h-16" />, color: "text-green-500" },
      { name: "FastAPI", icon: <SiFastapi className="w-16 h-16" />, color: "text-green-400" },
      { name: "Material-UI", icon: <SiMui className="w-16 h-16" />, color: "text-blue-500" },
    ]
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="w-16 h-16" />, color: "text-blue-600" },
      { name: "MongoDB", icon: <SiMongodb className="w-16 h-16" />, color: "text-green-500" },
      { name: "ClickHouse", icon: <SiClickhouse className="w-16 h-16" />, color: "text-yellow-500" },
      { name: "Redis", icon: <SiRedis className="w-16 h-16" />, color: "text-red-500" },
      { name: "Git", icon: <SiGit className="w-16 h-16" />, color: "text-orange-500" },
    ]
  }
];

export function SkillsSection() {
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
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Technical Skills</h2>
        
        <div 
          ref={ref}
          className={`space-y-12 transition-all duration-1000 ${
            hasIntersected ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
          }`}
        >
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-8">
              <h3 className="text-2xl font-semibold text-center text-slate-200">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <Card
                    key={skill.name}
                    className="glass border-none hover:scale-105 transition-all duration-300 tech-logo cursor-pointer"
                    style={{ 
                      animationDelay: `${(categoryIndex * category.skills.length + skillIndex) * 0.1}s`,
                      transform: `translateY(${Math.sin((mousePosition.x + skillIndex * 20) * 0.01) * 2}px)`
                    }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`${skill.color} mb-3 flex justify-center transition-all duration-300 hover:scale-110`}>
                        {skill.icon}
                      </div>
                      <p className="font-semibold text-slate-100">{skill.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
