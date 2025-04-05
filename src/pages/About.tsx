
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent } from "@/components/card";
import { User, Briefcase, FileText, Mail, Shapes } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// User settings - add your name here
const userSettings = {
  name: "John Doe", // Replace with your name
  title: "A minimalist designer and developer focused on creating elegant, functional digital experiences."
};

export default function About() {
  return (
    <div className="container py-12 space-y-12 md:py-24 relative overflow-hidden">
      <section className="space-y-6 relative z-10 flex flex-col md:flex-row items-center gap-8">
        {/* Profile Photo Section */}
        <div className="profile-photo-container animate-fade-in subtle-shadow">
          <img 
            src="/lovable-uploads/5c88fa3a-35d0-4191-a4a4-879efb15b9b0.png" 
            alt="Mountain landscape with tunnel" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-3 text-center md:text-left flex-1">
          <p className="text-sm text-muted-foreground animate-fade-in">Hello, I'm</p>
          <h1 className="text-4xl font-title font-bold tracking-tight sm:text-5xl xl:text-7xl animate-fade-in animation-delay-100 text-primary">
            {userSettings.name}
          </h1>
          <p className="max-w-[600px] text-xl text-muted-foreground animate-fade-in animation-delay-200">
            {userSettings.title}
          </p>
          <div className="flex flex-wrap gap-4 pt-6 animate-fade-in animation-delay-300 justify-center md:justify-start">
            <Button asChild className="rounded-full">
              <Link to="/contact">Get in touch</Link>
            </Button>
            <Button variant="outline" asChild className="rounded-full">
              <Link to="/projects">View projects</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="space-y-8 relative z-10">
        <SectionHeader 
          title="About Me" 
          description="I'm passionate about clean design, thoughtful experiences, and solving complex problems with elegant solutions."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="animate-fade-in animation-delay-300 minimalist-card">
            <CardContent>
              <p className="leading-relaxed">
                I've spent years refining my approach to design and development, always focused on creating experiences that feel effortless and intuitive. My work philosophy is heavily influenced by the principles of minimalism and functionality.
              </p>
            </CardContent>
          </Card>
          
          <Card className="animate-fade-in animation-delay-400 minimalist-card">
            <CardContent>
              <p className="leading-relaxed">
                When I'm not designing or coding, you might find me exploring photography, reading about architecture, or enjoying a cup of precisely brewed coffee. The attention to detail I bring to my personal pursuits translates directly to my professional work.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="space-y-8 relative z-10">
        <SectionHeader 
          title="Explore" 
          description="Navigate through different sections of my portfolio."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <Card className="hover-lift animate-fade-in animation-delay-300 group minimalist-card" onClick={() => window.location.href = '/'}>
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium">About</h3>
              <p className="text-sm text-muted-foreground mt-2">Learn more about me and my background.</p>
            </div>
          </Card>
          
          <Card className="hover-lift animate-fade-in animation-delay-400 group minimalist-card" onClick={() => window.location.href = '/projects'}>
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium">Projects</h3>
              <p className="text-sm text-muted-foreground mt-2">Explore my recent work and case studies.</p>
            </div>
          </Card>
          
          <Card className="hover-lift animate-fade-in animation-delay-500 group minimalist-card" onClick={() => window.location.href = '/resume'}>
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium">Resume</h3>
              <p className="text-sm text-muted-foreground mt-2">View my professional experience and skills.</p>
            </div>
          </Card>
          
          <Card className="hover-lift animate-fade-in animation-delay-600 group minimalist-card" onClick={() => window.location.href = '/contact'}>
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium">Contact</h3>
              <p className="text-sm text-muted-foreground mt-2">Get in touch with me for collaborations.</p>
            </div>
          </Card>
          
          <Card className="hover-lift animate-fade-in animation-delay-700 group minimalist-card" onClick={() => window.location.href = '/misc'}>
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Shapes className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium">Misc</h3>
              <p className="text-sm text-muted-foreground mt-2">Other things I'm interested in.</p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
