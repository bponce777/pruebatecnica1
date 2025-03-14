'use client';

import Footer from '@/components/Shared/Footer';
import { useRecipes } from '@/context/recipesContext/recipesContext';
import React, { useEffect } from 'react';

export default function RecipeDetailClient({ recipeId }: { recipeId: string }) {
  const { recipes, fetchRecipes } = useRecipes();

  useEffect(() => {
    if (recipes.length === 0) {
      fetchRecipes();
    }
  }, [recipes, fetchRecipes]);

  const recipe = recipes.find((r) => r.id.toString() === recipeId);

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
