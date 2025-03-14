import React, { useEffect } from 'react'
import { Search } from "lucide-react"
import { useRecipes } from '@/context/recipesContext/recipesContext'
import Sidebar from "@/components/Shared/Sidebar"
import Link from "next/link"
import RecipeTable from './recipe-tables'
import Footer from '@/components/Shared/Footer'

export default function RecipeMain() {
  const { recipes, fetchRecipes } = useRecipes();

  /**
   * `useEffect` hook that fetches recipes if the `recipes` array is empty.
   * This effect runs whenever the `recipes` state or the `fetchRecipes` function changes. 
   * If the `recipes` array is empty, it triggers the `fetchRecipes` function to fetch recipes from the API.
   * This ensures that recipes are only fetched when necessary (i.e., when the `recipes` state is empty).
   * @param {Array} recipes - The current list of recipes.
   * @param {function} fetchRecipes - Function that fetches recipes from the API.
   * @returns {void} This hook does not return a value, it only runs side effects.
   */
  useEffect(() => {
    if (recipes.length === 0) {
      fetchRecipes();
    }
  }, [recipes, fetchRecipes]);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b p-4 flex justify-between items-center">
        <div className="border w-24 h-10 flex items-center justify-center font-bold">BP_RECETA</div>
        <div className="hidden md:block">
          <Link href="#" className="text-sm">
            Iniciar Sesión
          </Link>
        </div>
        <div className="relative">
          <input type="text" placeholder="Buscar..." className="border px-2 py-1 pr-8 text-sm" />
          <button className="absolute right-2 top-1/2 -translate-y-1/2">
            <Search className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      </header>
      <div className="border-b p-4">
        <h1 className="text-xl font-medium text-center">Recetas de cocina</h1>
      </div>
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <RecipeTable />
        </main>
      </div>
      <Footer />
    </div>
  )
}
