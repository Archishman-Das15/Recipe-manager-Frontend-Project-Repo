import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RecipeCard from "@/components/RecipeCard";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

interface Recipe {
  id: number;
  name: string;
  ingredients: string;
  instructions: string;
  image_url?: string;
  created_at?: string;
}

const Index = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://web-production-76a70.up.railway.app/api/recipes");
      
      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }
      
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      toast.error("Failed to load recipes. Please make sure the backend server is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/30">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <header className="text-center mb-12 space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Recipe Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover and explore delicious recipes from around the world
          </p>
        </header>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-12 h-12 animate-spin text-primary" />
            <p className="text-muted-foreground">Loading recipes...</p>
          </div>
        ) : recipes.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground mb-4">
              No recipes found. Start by adding your first recipe!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                name={recipe.name}
                ingredients={recipe.ingredients}
                instructions={recipe.instructions}
                imageUrl={recipe.image_url}
                createdAt={recipe.created_at}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
