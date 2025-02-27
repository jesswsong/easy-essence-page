
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed top-6 right-6 z-50 rounded-full glass w-12 h-12 flex items-center justify-center transition-all duration-500 hover:scale-110"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 transition-all duration-500 rotate-0" />
      ) : (
        <Sun className="h-5 w-5 transition-all duration-500 rotate-90" />
      )}
    </Button>
  );
}
