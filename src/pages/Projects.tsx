
import { useState, useEffect } from "react";
import { SectionHeader } from "@/components/section-header";
import { Card, CardTitle, CardDescription, CardContent } from "@/components/card";
import { ExternalLink, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

// Project database with tags
const projectsData = [
  {
    id: 1,
    title: "Minimalist App Interface",
    description: "A clean, modern interface design for a productivity application.",
    role: "UI/UX Designer",
    tech: ["Figma", "Prototyping", "User Research"],
    tags: ["UI/UX", "Design", "Mobile"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&h=500",
    url: "#",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A complete redesign of an e-commerce platform focused on simplicity and conversion.",
    role: "Lead Designer & Frontend Developer",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    tags: ["Web", "Frontend", "E-commerce"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500",
    url: "#",
  },
  {
    id: 3,
    title: "Personal Finance Dashboard",
    description: "An intuitive dashboard for tracking personal finances and investments.",
    role: "UX Designer & Frontend Developer",
    tech: ["Vue.js", "D3.js", "Firebase"],
    tags: ["Web", "Dashboard", "Data Visualization"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500",
    url: "#",
  },
  {
    id: 4,
    title: "Health & Wellness App",
    description: "A mobile app designed to help users track their fitness and wellness goals.",
    role: "Product Designer",
    tech: ["React Native", "Redux", "UI/UX Design"],
    tags: ["Mobile", "Health", "UI/UX"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=500",
    url: "#",
  },
  {
    id: 5,
    title: "Smart Home Control System",
    description: "A digital interface for controlling smart home devices with voice and touch.",
    role: "UX Engineer",
    tech: ["IoT", "React", "Node.js"],
    tags: ["IoT", "UI/UX", "Web"],
    image: "https://images.unsplash.com/photo-1558002038-2af93d8527e7?auto=format&fit=crop&w=800&h=500",
    url: "#",
  },
  {
    id: 6,
    title: "Crypto Portfolio Tracker",
    description: "Track and analyze cryptocurrency investments with real-time data.",
    role: "Frontend Developer",
    tech: ["React", "Chart.js", "API Integration"],
    tags: ["Web", "Dashboard", "Finance"],
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&h=500",
    url: "#",
  },
];

export default function Projects() {
  const { toast } = useToast();
  const [projects, setProjects] = useState(projectsData);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [allTags, setAllTags] = useState<string[]>([]);

  useEffect(() => {
    // Extract all unique tags from projects
    const tags = projectsData.flatMap(project => project.tags);
    const uniqueTags = Array.from(new Set(tags));
    setAllTags(uniqueTags);
  }, []);

  useEffect(() => {
    if (selectedTag) {
      const filtered = projectsData.filter(project => 
        project.tags.includes(selectedTag)
      );
      setProjects(filtered);
      toast({
        title: `Filtered by "${selectedTag}"`,
        description: `Showing ${filtered.length} projects with this tag.`,
      });
    } else {
      setProjects(projectsData);
    }
  }, [selectedTag, toast]);

  const clearFilter = () => {
    setSelectedTag(null);
  };

  return (
    <div className="container py-12 space-y-12 md:py-24 animate-fade-in relative overflow-hidden">
      {/* Red blob decorative elements */}
      <div className="red-blob-effect w-[250px] h-[250px] top-20 right-[-100px] animate-float"></div>
      <div className="red-blob-effect w-[300px] h-[300px] bottom-20 left-[-150px] animate-float animation-delay-1000"></div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <SectionHeader
          title="Projects"
          description="Explore my recent work and case studies, showcasing my approach to design and development."
        />
        
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2 items-center">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filter by tag:</span>
            {selectedTag && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={clearFilter}
                className="h-7 px-2 text-xs"
              >
                Clear filter
              </Button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <Badge 
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/10"
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={project.id} 
            className={`hover-lift overflow-hidden layered-card animate-fade-in animation-delay-${(index + 1) * 100}`}
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
                <p className="text-sm font-medium">Tags</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="cursor-pointer hover:bg-secondary/80"
                      onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
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
