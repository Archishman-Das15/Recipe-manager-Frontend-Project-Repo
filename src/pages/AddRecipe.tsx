import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";


const AddRecipe = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    image_url: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.ingredients.trim() || !formData.instructions.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("https://web-production-76a70.up.railway.app/api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add recipe");
      }

      toast.success("Recipe added successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error adding recipe:", error);
      toast.error("Failed to add recipe. Please make sure the backend server is running.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/30">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Add New Recipe
            </h1>
            <p className="text-lg text-muted-foreground">
              Share your culinary creation with the world
            </p>
          </header>

          <Card className="p-8 shadow-[var(--shadow-card)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-semibold">
                  Recipe Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., Chocolate Chip Cookies"
                  className="h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ingredients" className="text-base font-semibold">
                  Ingredients
                </Label>
                <Textarea
                  id="ingredients"
                  name="ingredients"
                  value={formData.ingredients}
                  onChange={handleChange}
                  placeholder="List all ingredients (e.g., 2 cups flour, 1 cup sugar, 3 eggs...)"
                  className="min-h-32 resize-none"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="instructions" className="text-base font-semibold">
                  Instructions
                </Label>
                <Textarea
                  id="instructions"
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleChange}
                  placeholder="Describe the cooking steps..."
                  className="min-h-40 resize-none"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image_url" className="text-base font-semibold">
                  Image URL (Optional)
                </Label>
                <Input
                  id="image_url"
                  name="image_url"
                  value={formData.image_url}
                  onChange={handleChange}
                  placeholder="https://example.com/recipe-image.jpg"
                  className="h-12"
                  type="url"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg shadow-primary/30"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Adding Recipe...
                  </>
                ) : (
                  "Add Recipe"
                )}
              </Button>
            </form>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AddRecipe;
