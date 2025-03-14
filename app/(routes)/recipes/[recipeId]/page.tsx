import { RecipeProvider } from "@/context/recipesContext/recipesContext";
import RecipeDetailClient from "./RecipeDetailClient/RecipeDetailClient";

export default function Page({ params }: { params: { recipeId: string } }) {
  const recipeId = params.recipeId;

  return (
    <RecipeProvider>
      <RecipeDetailClient recipeId={recipeId} />
    </RecipeProvider>
  )
}