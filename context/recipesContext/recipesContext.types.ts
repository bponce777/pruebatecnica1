export interface Recipe {
  id: number;
  name: string;
  cuisine: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  ingredients: string[];
  instructions: string[];
  rating: number;
}

export interface RecipeContextType {
  recipes: Recipe[];
  fetchRecipes: () => Promise<void>;
}
