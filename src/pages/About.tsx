
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent } from "@/components/card";
import { User, Briefcase, FileText, Mail } from "lucide-react";

export default function About() {
  return (
    <div className="container py-12 space-y-12 md:py-24">
      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground animate-fade-in">Hello, I'm</p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl animate-fade-in animation-delay-100">
            Your Name
          </h1>
          <p className="max-w-[600px] text-xl text-muted-foreground animate-fade-in animation-delay-200">
            A minimalist designer and developer focused on creating elegant, functional digital experiences.
          </p>
        </div>
      </section>
      
      <section className="space-y-6">
        <SectionHeader 
          title="About Me" 
          description="I'm passionate about clean design, thoughtful experiences, and solving complex problems with elegant solutions."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="animate-fade-in animation-delay-300">
            <CardContent>
              <p className="leading-relaxed">
                I've spent years refining my approach to design and development, always focused on creating experiences that feel effortless and intuitive. My work philosophy is heavily influenced by the principles of minimalism and functionality.
              </p>
            </CardContent>
          </Card>
          
          <Card className="animate-fade-in animation-delay-400">
            <CardContent>
              <p className="leading-relaxed">
                When I'm not designing or coding, you might find me exploring photography, reading about architecture, or enjoying a cup of precisely brewed coffee. The attention to detail I bring to my personal pursuits translates directly to my professional work.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="space-y-6">
        <SectionHeader 
          title="Navigation" 
          description="Explore different sections of my portfolio."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover-lift animate-fade-in animation-delay-300" onClick={() => window.location.href = '/'}>
            <div className="flex items-center space-x-4">
              <User className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-medium">About</h3>
            </div>
            <CardContent>
              <p className="text-muted-foreground">Learn more about me and my background.</p>
            </CardContent>
          </Card>
          
          <Card className="hover-lift animate-fade-in animation-delay-400" onClick={() => window.location.href = '/projects'}>
            <div className="flex items-center space-x-4">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-medium">Projects</h3>
            </div>
            <CardContent>
              <p className="text-muted-foreground">Explore my recent work and case studies.</p>
            </CardContent>
          </Card>
          
          <Card className="hover-lift animate-fade-in animation-delay-500" onClick={() => window.location.href = '/resume'}>
            <div className="flex items-center space-x-4">
              <FileText className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-medium">Resume</h3>
            </div>
            <CardContent>
              <p className="text-muted-foreground">View my professional experience and skills.</p>
            </CardContent>
          </Card>
          
          <Card className="hover-lift animate-fade-in animation-delay-600" onClick={() => window.location.href = '/contact'}>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-medium">Contact</h3>
            </div>
            <CardContent>
              <p className="text-muted-foreground">Get in touch with me for collaborations.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
