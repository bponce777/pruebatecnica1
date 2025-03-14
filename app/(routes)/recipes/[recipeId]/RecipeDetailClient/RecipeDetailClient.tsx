'use client';

import Footer from '@/components/Shared/Footer';
import { useRecipes } from '@/context/recipesContext/recipesContext';
import React, { useEffect } from 'react';

export default function RecipeDetailClient({ recipeId }: { recipeId: string }) {
  const { recipes, fetchRecipes } = useRecipes();

  /**
   * `useEffect` hook that triggers the `fetchRecipes` function when the `recipes` array is empty. 
   * @param {Array} recipes - The current list of recipes stored in state.
   * @param {function} fetchRecipes - Function that fetches recipes from the API.
   * @returns {void} This hook does not return a value, it only performs side effects.
   */
  useEffect(() => {
    if (recipes.length === 0) {
      fetchRecipes();
    }
  }, [recipes, fetchRecipes]);

  /**
   * Finds a recipe by its ID in the `recipes` array. 
   * This function searches the `recipes` array to find a single recipe whose `id` matches the provided `recipeId`. 
   * @param {string} recipeId - The ID of the recipe to search for.
   * @returns {Recipe | undefined} The recipe object if found, or `undefined` if no recipe matches the provided `recipeId`.
   */
  const recipe = recipes.find((singleRecipe) => singleRecipe.id.toString() === recipeId);

  /**
   * Conditional rendering to display a loading message if the recipe is not found.
   * @returns {JSX.Element} A loading message if no recipe is found, otherwise renders the recipe details (not shown in this snippet).
   */
  if (!recipe) {
    return <div className="text-center">Cargando receta...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f5] p-4">
      <header className="w-full p-4 mb-6 border-2 bg-white">
        <h1 className="text-center text-xl font-medium">Descripción de la receta</h1>
      </header>
      <main className="flex-1 max-w-3xl mx-auto w-full border-2 border-gray-800 p-6 bg-white">
        <div className="mb-8 border-2 border-gray-800 p-2">
          <h2 className="text-center text-2xl font-semibold">{recipe.name}</h2>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Ingredientes:</h3>
          <ul className="list-disc pl-5">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Instrucciones:</h3>
          <ol className="list-decimal pl-5">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
        <div className="mb-6">
          <p><strong>Valoración:</strong> {recipe.rating} ⭐</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
