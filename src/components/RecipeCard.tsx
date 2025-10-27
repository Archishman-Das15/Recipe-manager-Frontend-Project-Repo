import { Card } from "@/components/ui/card";
import { UtensilsCrossed } from "lucide-react";

interface RecipeCardProps {
  name: string;
  ingredients: string;
  instructions: string;
  imageUrl?: string;
  createdAt?: string;
}

const RecipeCard = ({ name, ingredients, instructions, imageUrl, createdAt }: RecipeCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-hover)] bg-card border-border">
      {imageUrl && (
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6 space-y-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent group-hover:scale-110 transition-transform">
            <UtensilsCrossed className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
            {createdAt && (
              <p className="text-xs text-muted-foreground mt-1">
                {new Date(createdAt).toLocaleDateString()}
              </p>
            )}
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              Ingredients
            </h4>
            <p className="text-foreground leading-relaxed">{ingredients}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              Instructions
            </h4>
            <p className="text-foreground leading-relaxed">{instructions}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};


export default RecipeCard;
