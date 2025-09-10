import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 37, 67, 0.85), rgba(34, 37, 67, 0.85)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-secondary/15 rounded-full blur-2xl animate-float delay-500"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm animate-fade-in">
          No-Code Automation Specialist
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent animate-fade-in-up [animation-delay:200ms]">
          Building the Future with
          <br />
          <span className="text-primary animate-glow-pulse">Smart Automation</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:400ms]">
          I create powerful integrations using Bubble.io, automation platforms, and APIs to streamline business processes and unlock growth potential.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in [animation-delay:600ms]">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={scrollToProjects}
            className="text-lg px-8 py-6 group hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105"
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-6 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
            <Mail className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6 animate-fade-in [animation-delay:800ms]">
          <Button variant="ghost" size="icon" className="hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};