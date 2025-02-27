
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  label: string;
  isActive: boolean;
}

export function NavItem({ href, label, isActive }: NavItemProps) {
  return (
    <Link
      to={href}
      className={cn(
        "relative px-3 py-2 text-sm transition-all duration-300 hover:text-primary",
        isActive 
          ? "text-primary after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary" 
          : "text-muted-foreground"
      )}
    >
      {label}
    </Link>
  );
}
