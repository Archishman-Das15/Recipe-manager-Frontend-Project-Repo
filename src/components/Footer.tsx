import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 fill-primary text-primary animate-pulse" />
            <span>for food lovers</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Recipe Management System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
