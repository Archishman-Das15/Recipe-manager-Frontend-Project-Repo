import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { ChefHat } from "lucide-react";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email.trim() || !formData.password.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    // Mock login - placeholder functionality
    toast.success("Login feature coming soon!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/30">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <header className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-accent">
                <ChefHat className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-lg text-muted-foreground">
              Sign in to manage your recipes
            </p>
          </header>

          <Card className="p-8 shadow-[var(--shadow-card)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-semibold">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="chef@example.com"
                  className="h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-base font-semibold">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="h-12"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg shadow-primary/30"
              >
                Sign In
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <span className="text-primary font-semibold cursor-pointer hover:underline">
                  Sign up
                </span>
              </p>
            </form>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
