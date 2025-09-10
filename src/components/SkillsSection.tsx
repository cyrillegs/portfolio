import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Zap, 
  Globe, 
  Settings, 
  CreditCard, 
  MessageSquare, 
  Database,
  Workflow,
  Code2
} from "lucide-react";

export const SkillsSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1);
  const { ref: achievementsRef, isVisible: achievementsVisible } = useScrollAnimation(0.1, 300);
  const skillCategories = [
    {
      title: "No-Code Platform",
      icon: <Code2 className="h-8 w-8" />,
      description: "Full-stack app development without traditional coding",
      skills: ["Bubble.io", "Responsive Design", "Database Design", "User Authentication"],
      color: "primary"
    },
    {
      title: "Automation Platforms",
      icon: <Workflow className="h-8 w-8" />,
      description: "Streamlining workflows and connecting systems",
      skills: ["Zapier", "Make (Integromat)", "N8N", "Custom Workflows"],
      color: "accent"
    },
    {
      title: "Third-Party APIs",
      icon: <Globe className="h-8 w-8" />,
      description: "Integrating powerful external services seamlessly",
      skills: ["Google APIs", "Stripe Payment", "Twilio SMS/Voice", "RESTful APIs"],
      color: "secondary"
    },
    {
      title: "Specializations",
      icon: <Settings className="h-8 w-8" />,
      description: "Advanced features and custom solutions",
      skills: ["Payment Processing", "SMS/Voice Integration", "Data Analytics", "API Security"],
      color: "primary"
    }
  ];

  const getIconBySkill = (skill: string) => {
    if (skill.includes("Google")) return <Globe className="h-4 w-4" />;
    if (skill.includes("Stripe")) return <CreditCard className="h-4 w-4" />;
    if (skill.includes("Twilio")) return <MessageSquare className="h-4 w-4" />;
    if (skill.includes("Database")) return <Database className="h-4 w-4" />;
    return <Zap className="h-4 w-4" />;
  };

  return (
    <section id="skills" className="py-20 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Technical Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            My Technology Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leveraging cutting-edge no-code platforms and automation tools to deliver powerful solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className={`group hover:shadow-glow-primary transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur border-border/50 ${
                sectionVisible ? `animate-fade-in-up [animation-delay:${index * 200}ms]` : 'opacity-0 translate-y-10'
              }`}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full bg-${category.color}/20 text-${category.color} mr-4 group-hover:shadow-glow-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className={`flex items-center gap-2 px-3 py-2 hover:bg-primary/20 transition-all duration-300 hover:scale-105 ${
                        sectionVisible ? `animate-fade-in [animation-delay:${(index * 200) + (skillIndex * 100) + 200}ms]` : 'opacity-0'
                      }`}
                    >
                      {getIconBySkill(skill)}
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key achievements */}
        <div className="grid md:grid-cols-3 gap-8 text-center" ref={achievementsRef}>
          <div className={`p-6 group hover:scale-105 transition-all duration-300 ${
            achievementsVisible ? 'animate-fade-in [animation-delay:100ms]' : 'opacity-0 translate-y-5'
          }`}>
            <div className="text-4xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">50+</div>
            <p className="text-muted-foreground">Automations Built</p>
          </div>
          <div className={`p-6 group hover:scale-105 transition-all duration-300 ${
            achievementsVisible ? 'animate-fade-in [animation-delay:200ms]' : 'opacity-0 translate-y-5'
          }`}>
            <div className="text-4xl font-bold text-accent mb-2 group-hover:text-primary transition-colors duration-300">25+</div>
            <p className="text-muted-foreground">API Integrations</p>
          </div>
          <div className={`p-6 group hover:scale-105 transition-all duration-300 ${
            achievementsVisible ? 'animate-fade-in [animation-delay:300ms]' : 'opacity-0 translate-y-5'
          }`}>
            <div className="text-4xl font-bold text-secondary mb-2 group-hover:text-accent transition-colors duration-300">100%</div>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};