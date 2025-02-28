
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/card";
import { Book, Coffee, Camera, Headphones, Mountain, Code, Palette, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function Misc() {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [photos, setPhotos] = useState<{ id: number; url: string }[]>([]);
  const [nextId, setNextId] = useState(1);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file.",
        variant: "destructive"
      });
      return;
    }
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 5MB.",
        variant: "destructive"
      });
      return;
    }

    // Create URL for the uploaded image
    const imageUrl = URL.createObjectURL(file);
    
    // Add new photo to the collection
    setPhotos([...photos, { id: nextId, url: imageUrl }]);
    setNextId(nextId + 1);
    
    toast({
      title: "Photo uploaded",
      description: "Your photo has been added to the collection.",
    });
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removePhoto = (id: number) => {
    setPhotos(photos.filter(photo => photo.id !== id));
    toast({
      title: "Photo removed",
      description: "The photo has been removed from your collection.",
    });
  };

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
    <div className="container py-12 space-y-12 md:py-24 animate-fade-in relative overflow-hidden">
      {/* Red blob decorative elements */}
      <div className="red-blob-effect w-[300px] h-[300px] top-[-50px] right-[-150px]"></div>
      <div className="red-blob-effect w-[200px] h-[200px] bottom-40 left-[-100px]"></div>
      
      <SectionHeader
        title="Miscellaneous"
        description="Other interests, hobbies, and things that inspire me outside of my professional work."
      />
      
      <section className="space-y-8">
        <SectionHeader
          title="Photo Collection"
          description="Upload and showcase your favorite photos."
        />
        
        <Card className="layered-card p-6">
          <CardContent className="p-0 space-y-6">
            <div 
              className="border-2 border-dashed border-primary/30 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-primary/5 transition-colors"
              onClick={triggerFileInput}
            >
              <Upload className="h-10 w-10 text-primary mb-3" />
              <p className="text-center text-muted-foreground">
                Click to upload a photo to your collection
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                JPG, PNG, or GIF • Max 5MB
              </p>
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*" 
                onChange={handlePhotoUpload}
              />
            </div>
            
            {photos.length > 0 && (
              <div>
                <h3 className="text-lg font-medium mb-4">Your Photo Collection</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {photos.map((photo) => (
                    <div key={photo.id} className="relative group">
                      <img 
                        src={photo.url} 
                        alt="Collection" 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <button
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removePhoto(photo.id)}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
    </div>
  );
}
