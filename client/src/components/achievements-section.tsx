import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, Users, Calendar, Award } from 'lucide-react';

const competitions = [
  {
    title: "Intel AI Global Impact Festival",
    date: "Aug 2022",
    icon: <Trophy className="w-8 h-8" />,
    color: "from-yellow-500 to-orange-500",
    achievements: [
      "Developed a communication system for Locked-in Syndrome (LIS) patients using AI technologies, enabling effective communication",
      "Recognized as one of the Top 3 entries from India in the Student-AI Impact Creators category among over 1,000 entries"
    ]
  },
  {
    title: "Tech-A-Thon",
    date: "June 2022",
    icon: <Medal className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
    achievements: [
      "Constructed a web application to clone a person's voice from English to French and Spanish within a 24-hour hackathon, achieving 85% accuracy in voice replication",
      "Awarded the Fourth Prize among 200 teams and received a lump sum of ₹25,000"
    ]
  }
];

const volunteerExperience = [
  {
    title: "Community Lead",
    organization: "Code Club (Student Clubs) VVCE",
    location: "Mysuru, India",
    icon: <Users className="w-8 h-8" />,
    color: "from-green-500 to-blue-500",
    achievements: [
      "Organized 15+ workshops and events, mentoring over 300 students in web development and AI",
      "Increased club membership by 50% through engaging sessions on frontend technologies, fostering a community of skilled developers"
    ]
  }
];

export function AchievementsSection() {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="achievements" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Achievements & Leadership</h2>
        
        <div 
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${
            hasIntersected ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
          }`}
        >
          {/* Competitions */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-semibold text-accent">Competitions</h3>
            </div>
            
            {competitions.map((competition, index) => (
              <Card 
                key={competition.title}
                className="glass border-none hover:scale-[1.02] transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`bg-gradient-to-r ${competition.color} w-12 h-12 rounded-full flex items-center justify-center text-white`}>
                      {competition.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-primary mb-1">{competition.title}</h4>
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <span className="text-sm text-slate-400">{competition.date}</span>
                      </div>
                      <ul className="space-y-2">
                        {competition.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-slate-300 text-sm">
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Volunteer Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-semibold text-accent">Leadership & Community</h3>
            </div>
            
            {volunteerExperience.map((experience, index) => (
              <Card 
                key={experience.title}
                className="glass border-none hover:scale-[1.02] transition-transform duration-300"
                style={{ animationDelay: `${(competitions.length + index) * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`bg-gradient-to-r ${experience.color} w-12 h-12 rounded-full flex items-center justify-center text-white`}>
                      {experience.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-primary mb-1">{experience.title}</h4>
                      <p className="text-sm text-slate-300 mb-1">{experience.organization}</p>
                      <p className="text-sm text-slate-400 mb-3">{experience.location}</p>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-slate-300 text-sm">
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
