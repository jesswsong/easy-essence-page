
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ 
  title, 
  description, 
  className 
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <h2 className="text-3xl font-bold tracking-tight text-balance animate-fade-in">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-balance max-w-[60ch] animate-fade-in animation-delay-100">
          {description}
        </p>
      )}
    </div>
  );
}
