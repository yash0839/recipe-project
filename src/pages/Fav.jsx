import React, { useContext, useState, useEffect } from 'react'
import RecipeCard from '../componentes/RecipeCard'

const Fav = () => {
  const [favorites, setFavorites] = useState([])
  
  useEffect(() => {
    const favData = JSON.parse(localStorage.getItem('fav') || '[]')
    setFavorites(favData)
  }, [])

  return (
    <div className="flex flex-wrap gap-6">
      {favorites.length > 0 ? (
        favorites.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))
      ) : (
        <p className="text-gray-400">No favorites found</p>
      )}
    </div>
  )
}

export default Fav