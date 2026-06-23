import React, { useContext } from 'react'
import {recipecontext} from "../context/RecipeContext"
import RecipeCard from '../componentes/RecipeCard'

const Recipes = () => {

  const {data} = useContext(recipecontext)


  const  renderrecipe = data.map(recipe => (
      <RecipeCard key={recipe.id} recipe={recipe} />
    )
  )


  return (
    <div className="flex flex-wrap gap-6 ">
      {/* {data.lenght > 0 ? renderrecipe: "No recipes found"} */}
      {renderrecipe}
    </div>
  )
}

export default Recipes