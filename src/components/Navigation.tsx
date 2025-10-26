import { Link, useLocation } from "react-router-dom";
import { ChefHat } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent transition-transform group-hover:scale-110">
              <ChefHat className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Recipe Manager
            </span>
          </Link>
          
          <div className="flex gap-2">
            <Link
              to="/"
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                isActive("/")
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "hover:bg-secondary"
              }`}
            >
              Home
            </Link>
            <Link
              to="/add-recipe"
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                isActive("/add-recipe")
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "hover:bg-secondary"
              }`}
            >
              Add Recipe
            </Link>
            <Link
              to="/login"
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                isActive("/login")
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "hover:bg-secondary"
              }`}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
