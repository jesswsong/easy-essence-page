
import { useLocation } from "react-router-dom";
import { NavItem } from "@/components/nav-item";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MouseBlob } from "@/components/mouse-blob";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  
  const navItems = [
    { href: "/", label: "About", path: "/" },
    { href: "/projects", label: "Projects", path: "/projects" },
    { href: "/resume", label: "Resume", path: "/resume" },
    { href: "/misc", label: "Misc", path: "/misc" },
    { href: "/contact", label: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <MouseBlob />
      <header className="fixed top-0 left-0 right-0 z-40 border-b backdrop-blur-md bg-background/60 transition-all duration-300">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-title font-bold tracking-tighter transition-colors hover:text-primary">
              portfolio
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={location.pathname === item.path}
              />
            ))}
          </nav>
          <div className="md:hidden">
            <MobileNav items={navItems} />
          </div>
        </div>
      </header>
      <ThemeToggle />
      <main className={cn(
        "flex-1 pt-16",
        "animate-fade-in" // Default animation for page transitions
      )}>
        {children}
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col gap-4 md:h-16 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground md:text-base">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground md:text-base">
            Made with precision and care
          </p>
        </div>
      </footer>
    </div>
  );
}

interface MobileNavProps {
  items: {
    href: string;
    label: string;
    path: string;
  }[];
}

function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="p-0 h-9 w-9 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col">
        <nav className="flex flex-col gap-4 mt-8">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary",
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
