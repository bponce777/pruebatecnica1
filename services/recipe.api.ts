import axios from "axios";

interface Recipe {
  id: number;
  title: string;
  category: string;
  difficulty: string;
}

const API_URL = "https://dummyjson.com/recipes";

/**
 * Obtiene todas las recetas desde la API.
 * @returns Las recetas obtenidas desde la API.
 * @throws Error si la petición falla.
 */
export const getAllRecipes = async (): Promise<Recipe[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data.recipes;
  } catch (error) {
    console.error('Error al obtener las recetas:', error);
    throw new Error('No se pudieron cargar las recetas.');
  }
};
