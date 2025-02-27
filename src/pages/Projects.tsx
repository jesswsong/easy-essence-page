
import { SectionHeader } from "@/components/section-header";
import { Card, CardTitle, CardDescription, CardContent } from "@/components/card";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Minimalist App Interface",
    description: "A clean, modern interface design for a productivity application.",
    role: "UI/UX Designer",
    tech: ["Figma", "Prototyping", "User Research"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&h=500",
    url: "#",
  },
  {
    title: "E-commerce Platform",
    description: "A complete redesign of an e-commerce platform focused on simplicity and conversion.",
    role: "Lead Designer & Frontend Developer",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500",
    url: "#",
  },
  {
    title: "Personal Finance Dashboard",
    description: "An intuitive dashboard for tracking personal finances and investments.",
    role: "UX Designer & Frontend Developer",
    tech: ["Vue.js", "D3.js", "Firebase"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500",
    url: "#",
  },
  {
    title: "Health & Wellness App",
    description: "A mobile app designed to help users track their fitness and wellness goals.",
    role: "Product Designer",
    tech: ["React Native", "Redux", "UI/UX Design"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=500",
    url: "#",
  },
];

export default function Projects() {
  return (
    <div className="container py-12 space-y-12 md:py-24 animate-fade-in">
      <SectionHeader
        title="Projects"
        description="Explore my recent work and case studies, showcasing my approach to design and development."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={project.title} 
            className={`hover-lift overflow-hidden animate-fade-in animation-delay-${(index + 1) * 100}`}
          >
            <div className="aspect-video overflow-hidden rounded-t-xl -mx-6 -mt-6 mb-6">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription className="mt-2">{project.description}</CardDescription>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium">Role</p>
                <p className="text-sm text-muted-foreground">{project.role}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Technologies</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a 
                href={project.url} 
                className="inline-flex items-center text-sm font-medium text-primary link-underline gap-1"
              >
                View Project <ExternalLink className="h-3.5 w-3.5 ml-1" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
