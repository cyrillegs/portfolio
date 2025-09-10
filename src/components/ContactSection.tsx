import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, MessageSquare, Calendar, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1, 200);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to your backend
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', project: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Let's Connect
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Ready to Automate?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how automation and smart integrations can transform your business processes
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8" ref={cardsRef}>
          {/* Contact Options */}
          <div className="space-y-6">
            <Card className={`hover:shadow-glow-primary transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur border-border/50 ${
              cardsVisible ? 'animate-fade-in [animation-delay:200ms]' : 'opacity-0 translate-y-10'
            }`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-primary/20 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">Email Me</h3>
                    <p className="text-sm text-muted-foreground">Quick response guaranteed</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full hover:scale-105 transition-all duration-300">
                  hello@example.com
                </Button>
              </CardContent>
            </Card>

            <Card className={`hover:shadow-glow-accent transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur border-border/50 ${
              cardsVisible ? 'animate-fade-in [animation-delay:400ms]' : 'opacity-0 translate-y-10'
            }`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-accent/20 text-accent">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Book a Call</h3>
                    <p className="text-sm text-muted-foreground">30-minute strategy session</p>
                  </div>
                </div>
                <Button variant="gradient" className="w-full hover:scale-105 transition-all duration-300">
                  Schedule Call
                </Button>
              </CardContent>
            </Card>

            <Card className={`hover:shadow-glow-primary transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur border-border/50 ${
              cardsVisible ? 'animate-fade-in [animation-delay:600ms]' : 'opacity-0 translate-y-10'
            }`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-secondary/20 text-secondary">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Live Chat</h3>
                    <p className="text-sm text-muted-foreground">Instant support available</p>
                  </div>
                </div>
                <Button variant="secondary" className="w-full hover:scale-105 transition-all duration-300">
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className={`bg-card/50 backdrop-blur border-border/50 ${
              sectionVisible ? 'animate-fade-in-up [animation-delay:300ms]' : 'opacity-0 translate-y-10'
            }`}>
              <CardHeader>
                <CardTitle className="text-2xl">Tell Me About Your Project</CardTitle>
                <p className="text-muted-foreground">
                  Share your automation needs and I'll provide a tailored solution
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name</label>
                      <Input 
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input 
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Project Type</label>
                    <Input 
                      placeholder="e.g., E-commerce automation, API integration, Workflow setup"
                      value={formData.project}
                      onChange={(e) => handleInputChange('project', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Project Details</label>
                    <Textarea 
                      placeholder="Describe your automation needs, current challenges, and desired outcomes..."
                      className="min-h-32"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full md:w-auto group hover:scale-105 transition-all duration-300"
                  >
                    <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};