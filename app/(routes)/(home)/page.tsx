"use client"

import { RecipeProvider } from '@/context/recipesContext/recipesContext';
import RecipeMain from './components/recipeMain';

export default function Home() {

  return (
    <RecipeProvider>
      <RecipeMain />
    </RecipeProvider>
  )
}