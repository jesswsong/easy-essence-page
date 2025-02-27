
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center py-12 animate-fade-in">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-8xl font-bold mb-6">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="flex items-center gap-2">
          <Link to="/">
            <Home className="h-4 w-4" /> Go back home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
