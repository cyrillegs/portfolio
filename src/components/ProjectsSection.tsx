import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Github, Zap, CreditCard, MessageSquare, Database } from "lucide-react";

export const ProjectsSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1);
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation(0.1, 500);
  const projects = [
    {
      title: "E-commerce Automation Suite",
      description: "Complete order processing automation connecting Bubble.io store with Stripe payments, automated email marketing, and inventory management through Google Sheets API.",
      technologies: ["Bubble.io", "Stripe API", "Google Sheets", "Zapier", "Email Marketing"],
      features: [
        "Automated order processing",
        "Real-time inventory updates", 
        "Customer email sequences",
        "Payment webhook handling"
      ],
      icon: <CreditCard className="h-6 w-6" />,
      category: "E-commerce"
    },
    {
      title: "Multi-Channel Communication Hub",
      description: "Integrated communication platform using Twilio for SMS/voice, with automated customer support workflows and CRM synchronization.",
      technologies: ["Bubble.io", "Twilio API", "Make", "CRM Integration", "Webhooks"],
      features: [
        "SMS/Voice automation",
        "Multi-channel routing",
        "CRM data sync",
        "Response tracking"
      ],
      icon: <MessageSquare className="h-6 w-6" />,
      category: "Communication"
    },
    {
      title: "Business Intelligence Dashboard",
      description: "Real-time analytics dashboard pulling data from multiple sources using Google APIs, with automated report generation and alerts.",
      technologies: ["Bubble.io", "Google Analytics API", "Google Sheets", "N8N", "Chart.js"],
      features: [
        "Multi-source data aggregation",
        "Real-time visualization",
        "Automated reporting",
        "Custom alert system"
      ],
      icon: <Database className="h-6 w-6" />,
      category: "Analytics"
    },
    {
      title: "Workflow Automation Platform",
      description: "Custom automation platform for small businesses to create their own workflows without coding, featuring drag-and-drop interface and pre-built integrations.",
      technologies: ["Bubble.io", "Multiple APIs", "Zapier", "Make", "Custom Webhooks"],
      features: [
        "Visual workflow builder",
        "Pre-built integrations",
        "Custom trigger system",
        "Performance monitoring"
      ],
      icon: <Zap className="h-6 w-6" />,
      category: "Platform"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/20" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Featured Work
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Recent Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world solutions that demonstrate the power of no-code automation and API integration
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`group hover:shadow-glow-accent transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur border-border/50 ${
                sectionVisible ? `animate-fade-in-up [animation-delay:${index * 200}ms]` : 'opacity-0 translate-y-10'
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/20 text-primary group-hover:shadow-glow-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                      {project.icon}
                    </div>
                    <Badge variant="secondary" className="group-hover:bg-accent/20 transition-colors duration-300">{project.category}</Badge>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-all duration-300 group-hover:translate-x-2">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className={`text-xs hover:bg-accent/20 transition-all duration-300 hover:scale-105 ${
                          sectionVisible ? `animate-fade-in [animation-delay:${(index * 200) + (techIndex * 50) + 400}ms]` : 'opacity-0'
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="default" size="sm" className="flex-1 group/btn hover:scale-105 transition-all duration-300">
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    View Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 group/btn hover:scale-105 transition-all duration-300">
                    <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                    Case Study
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12" ref={buttonRef}>
          <Button variant="gradient" size="lg" className={`group hover:scale-105 transition-all duration-300 ${
            buttonVisible ? 'animate-fade-in [animation-delay:200ms]' : 'opacity-0 translate-y-5'
          }`}>
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};