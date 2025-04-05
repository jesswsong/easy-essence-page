
import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { Card } from "@/components/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Send, MessageSquare, Linkedin, Twitter, Github } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="container py-12 space-y-12 md:py-24 animate-fade-in relative overflow-hidden">
      <SectionHeader
        title="Contact"
        description="Get in touch with me for collaborations, inquiries, or just to say hello."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <Card className="animate-fade-in animation-delay-100 minimalist-card">
            <div className="flex items-center space-x-4 p-6">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-muted-foreground">hello@yourname.com</p>
              </div>
            </div>
          </Card>
          
          <Card className="animate-fade-in animation-delay-200 minimalist-card">
            <div className="flex items-center space-x-4 p-6">
              <MessageSquare className="h-6 w-6 text-primary" />
              <div>
                <h3 className="text-lg font-medium">Message</h3>
                <p className="text-muted-foreground">Send me a message using the form</p>
              </div>
            </div>
          </Card>
          
          <div className="space-y-4 animate-fade-in animation-delay-300">
            <h3 className="text-lg font-medium">Connect</h3>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </div>
          </div>
        </div>
        
        <Card className="animate-fade-in animation-delay-400 minimalist-card">
          <form onSubmit={handleSubmit} className="space-y-6 p-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full flex items-center justify-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
