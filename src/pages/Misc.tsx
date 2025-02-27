
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/card";
import { Book, Coffee, Camera, Headphones, Mountain, Code, Palette } from "lucide-react";

export default function Misc() {
  const interests = [
    {
      icon: <Book className="h-6 w-6 text-primary" />,
      title: "Books & Reading",
      description: "I enjoy reading non-fiction books about design, psychology, and philosophy. Some of my favorite authors include Don Norman, Daniel Kahneman, and Alan Watts."
    },
    {
      icon: <Coffee className="h-6 w-6 text-primary" />,
      title: "Coffee",
      description: "I'm passionate about specialty coffee, from sourcing beans to different brewing methods. My favorite is a well-prepared pour-over that highlights the bean's origin characteristics."
    },
    {
      icon: <Camera className="h-6 w-6 text-primary" />,
      title: "Photography",
      description: "I enjoy capturing minimalist compositions, urban landscapes, and abstract patterns. Photography helps me develop a better eye for design and composition."
    },
    {
      icon: <Headphones className="h-6 w-6 text-primary" />,
      title: "Music",
      description: "I have a diverse taste in music, but particularly enjoy ambient, jazz, and electronic genres. Music is a constant companion during my creative process."
    },
    {
      icon: <Mountain className="h-6 w-6 text-primary" />,
      title: "Hiking",
      description: "When I need to clear my mind, I enjoy exploring trails and connecting with nature. The change in perspective often leads to fresh ideas."
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Side Projects",
      description: "I always have a couple of side projects going on, experimenting with new technologies or design approaches that I might not get to use in my day-to-day work."
    },
    {
      icon: <Palette className="h-6 w-6 text-primary" />,
      title: "Art & Museums",
      description: "I draw inspiration from visiting art galleries and museums, studying how different artists and movements approach composition, color, and form."
    }
  ];

  return (
    <div className="container py-12 space-y-12 md:py-24 animate-fade-in relative">
      {/* Background decorative elements */}
      <div className="blob-effect bg-primary/30 top-20 right-20 animate-float"></div>
      <div className="blob-effect bg-accent/30 bottom-40 left-20 animate-float animation-delay-1000"></div>
      
      <SectionHeader
        title="Miscellaneous"
        description="Other interests, hobbies, and things that inspire me outside of my professional work."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {interests.map((item, index) => (
          <Card 
            key={item.title} 
            className={`hover-lift layered-card animate-fade-in animation-delay-${(index + 1) * 100}`}
          >
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <CardTitle>{item.title}</CardTitle>
            <CardContent>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <section className="space-y-8">
        <SectionHeader
          title="Reading List"
          description="Some books I've enjoyed recently and would recommend."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="animate-fade-in animation-delay-100 layered-card">
            <CardTitle>Design</CardTitle>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                  <span><strong>The Design of Everyday Things</strong> by Don Norman</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                  <span><strong>Thinking with Type</strong> by Ellen Lupton</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                  <span><strong>Grid Systems</strong> by Josef Müller-Brockmann</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                  <span><strong>Change by Design</strong> by Tim Brown</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="animate-fade-in animation-delay-200 layered-card">
            <CardTitle>Technology & Culture</CardTitle>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                  <span><strong>Digital Minimalism</strong> by Cal Newport</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                  <span><strong>Atomic Habits</strong> by James Clear</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                  <span><strong>How to Do Nothing</strong> by Jenny Odell</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                  <span><strong>Range</strong> by David Epstein</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="space-y-8">
        <SectionHeader
          title="Tools I Use"
          description="Some of my favorite tools and equipment for work and hobbies."
        />
        
        <Card className="animate-fade-in animation-delay-300 layered-card">
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Design</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Figma</li>
                  <li>Adobe Creative Suite</li>
                  <li>iPad Pro & Apple Pencil</li>
                  <li>Notion for notes</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Development</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>VS Code with custom theme</li>
                  <li>MacBook Pro</li>
                  <li>GitHub Copilot</li>
                  <li>iTerm with Oh My Zsh</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Photography</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Fujifilm X-T4</li>
                  <li>35mm f/1.4 lens</li>
                  <li>16mm f/1.4 lens</li>
                  <li>Lightweight tripod</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
