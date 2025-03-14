"use client"

import { RecipeProvider } from '@/context/recipesContext/recipesContext';
import RecipeMain from './components/recipe-main';

export default function Home() {

  return (
    <RecipeProvider>
      <RecipeMain />
    </RecipeProvider>
  )
}