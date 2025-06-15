import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { 
  SiLinkedin, 
  SiGithub,
  SiGmail
} from 'react-icons/si';
import { Phone, MapPin } from 'lucide-react';

const contactMethods = [
  {
    icon: <SiGmail className="w-8 h-8" />,
    title: "Email",
    value: "adarshgowda463@gmail.com",
    href: "mailto:adarshgowda463@gmail.com",
    color: "text-red-500"
  },
  {
    icon: <SiLinkedin className="w-8 h-8" />,
    title: "LinkedIn",
    value: "linkedin.com/in/adarsh463",
    href: "https://linkedin.com/in/adarsh463",
    color: "text-blue-600"
  },
  {
    icon: <SiGithub className="w-8 h-8" />,
    title: "GitHub",
    value: "github.com/adarshgowdaa",
    href: "https://github.com/adarshgowdaa",
    color: "text-slate-100"
  }
];

export function ContactSection() {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 gradient-text">Let's Connect</h2>
        <p className="text-xl text-slate-300 mb-12">
          Ready to collaborate on exciting projects or discuss opportunities in GenAI and software development.
        </p>
        
        <div 
          ref={ref}
          className={`grid md:grid-cols-3 gap-8 mb-12 transition-all duration-1000 ${
            hasIntersected ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
          }`}
        >
          {contactMethods.map((method, index) => (
            <Card 
              key={method.title}
              className="glass border-none hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`${method.color} mb-4 flex justify-center`}>
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-100">{method.title}</h3>
                <a 
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-slate-300 hover:text-accent transition-colors text-sm break-all"
                >
                  {method.value}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glass border-none inline-block">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-slate-300">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91-8660094048</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-300">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
