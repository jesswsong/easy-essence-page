import { SectionHeader } from "@/components/section-header";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/card";
import { Book, Coffee, Camera, Headphones, Mountain, Code, Palette } from "lucide-react";

// Stock photos collection
const stockPhotos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
    caption: "Woman working on laptop"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    caption: "Laptop computer"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    caption: "Circuit board macro"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    caption: "Programming monitor"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    caption: "Person using MacBook"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    caption: "Woman using laptop"
  }
];

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
    <div className="container py-6 space-y-8 animate-fade-in relative overflow-hidden">
      <SectionHeader
        title="Miscellaneous"
        description="Other interests, hobbies, and things that inspire me outside of my professional work."
      />
      
      <section className="space-y-6">
        <SectionHeader
          title="Photo Collection"
          description="A collection of inspirational photography from my travels and projects."
        />
        
        <Card className="layered-card">
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {stockPhotos.map((photo) => (
                <div key={photo.id} className="relative group">
                  <img 
                    src={photo.url} 
                    alt={photo.caption} 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm rounded-b-lg">
                    {photo.caption}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
      
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
      
      <section className="space-y-6">
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
    </div>
  );
}
