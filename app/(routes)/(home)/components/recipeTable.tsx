"use client"

import { useRecipes } from '@/context/recipesContext/recipesContext'
import Link from 'next/link';
import { useEffect } from 'react';

export default function RecipeTable() {
  const { recipes, fetchRecipes } = useRecipes();

  /**
   * `useEffect` hook that fetches recipes if the `recipes` array is empty.
   * @useEffect
   * @param {Array} recipes - The current list of recipes in the state.
   * @param {Function} fetchRecipes - The function used to fetch recipes from the API.
   * @returns {void} This hook does not return any value. It only triggers side effects (fetching recipes when necessary).
   */
  useEffect(() => {
    if (recipes.length === 0) {
      fetchRecipes();
    }
  }, [recipes, fetchRecipes]);

  return (
    <div className="border rounded-sm overflow-hidden">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-white">
            <th className="border p-2 text-left font-medium">Nombre Receta</th>
            <th className="border p-2 text-left font-medium">Cocina</th>
            <th className="border p-2 text-left font-medium">Tiempo Preparación</th>
            <th className="border p-2 text-left font-medium">Tiempo de cocción</th>
            <th className="border p-2 text-left font-medium">Dificultad</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id} className="hover:bg-gray-50">
              <td className="border p-2">
                <Link href={`/recipes/${recipe.id}`} className="text-blue-500 hover:underline">
                  {recipe.name}
                </Link>
              </td>
              <td className="border p-2">{recipe.cuisine}</td>
              <td className="border p-2">{recipe.prepTimeMinutes + " Minutes"}</td>
              <td className="border p-2">{recipe.cookTimeMinutes + " Minutes"}</td>
              <td className="border p-2">{recipe.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

