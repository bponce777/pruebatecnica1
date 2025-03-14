'use client';

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { getAllRecipes } from '@/services/recipe.api';
import { Recipe, RecipeContextType } from './recipesContext.types';

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider = ({ children }: { children: ReactNode }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  /**
   * Asynchronous function that fetches recipes from the API and updates the recipes state.
   * It makes an HTTP request to the API using `getAllRecipes` to retrieve all available recipes.
   * If the request is successful, it updates the `recipes` state with the fetched list of recipes.
   * If an error occurs during the request, it is caught and an error message is logged to the console.
   * @returns {Promise<void>} This function does not return any value, it only updates the `recipes` state.
   * @throws {Error} If an error occurs while fetching the recipes, it will be caught and logged to the console.
   */
  const fetchRecipes = async () => {
    try {
      const fetchedRecipes = await getAllRecipes();
      setRecipes(fetchedRecipes);
    } catch (error) {
      console.error("Error al obtener las recetas", error);
    }
  };

  /**
   * `useEffect` hook that triggers the `fetchRecipes` function when the component mounts.
   * This effect runs only once, when the component is first rendered, because the dependency array is empty (`[]`).
   * It invokes the `fetchRecipes` function to fetch recipes from the API and updates the component's state.
   * @useEffect
   * @returns {void} This hook does not return a value, it only runs side effects.
   */
  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <RecipeContext.Provider value={{ recipes, fetchRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipes = (): RecipeContextType => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipes debe ser usado dentro de un RecipeProvider");
  }
  return context;
};
