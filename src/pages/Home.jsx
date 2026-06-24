import React, { useContext, useEffect, useState } from 'react'
import { recipecontext } from '../context/RecipeContext'
import RecipeCard from '../componentes/RecipeCard'
import { Link } from 'react-router-dom'

const Home = () => {
  const { data } = useContext(recipecontext)
  const [featuredRecipes, setFeaturedRecipes] = useState([])
  const [stats, setStats] = useState({
    total: 0,
    breakfast: 0,
    lunch: 0,
    dinner: 0,
    supper: 0
  })

  useEffect(() => {
    if (data && data.length > 0) {
      const featured = data.slice(0, 10)
      setFeaturedRecipes(featured)
      
      const breakfast = data.filter(r => r.category === 'breakfast').length
      const lunch = data.filter(r => r.category === 'lunch').length
      const dinner = data.filter(r => r.category === 'dinner').length
      const supper = data.filter(r => r.category === 'supper').length
      
      setStats({
        total: data.length,
        breakfast,
        lunch,
        dinner,
        supper
      })
    }
  }, [data])

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-3 text-blue-400">
           Recipe Book
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Discover, create, and share amazing recipes from around the world.
        </p>
        
        <div className="mt-4 flex gap-3 justify-center flex-wrap">
          <Link 
            to="/recipes" 
            className="bg-cyan-500 hover:bg-orange-600 px-5 py-2 rounded font-semibold"
          >
            All Recipes
          </Link>
          <Link 
            to="/create-recipe" 
            className="bg-green-500 hover:bg-green-700 px-5 py-2 rounded font-semibold"
          >
            + Add Recipe
          </Link>
        </div>
      </div>

      {stats.total > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <div className="bg-gray-700 rounded p-3 text-center">
            <div className="text-2xl font-bold text-blue-400">{stats.total}</div>
            <div className="text-gray-400 text-sm">Total</div>
          </div>
          <div className="bg-gray-700 rounded p-3 text-center">
            <div className="text-2xl font-bold text-yellow-400">{stats.breakfast}</div>
            <div className="text-gray-400 text-sm">Breakfast</div>
          </div>
          <div className="bg-gray-700 rounded p-3 text-center">
            <div className="text-2xl font-bold text-cyan-400">{stats.lunch}</div>
            <div className="text-gray-400 text-sm">Lunch</div>
          </div>
          <div className="bg-gray-700 rounded p-3 text-center">
            <div className="text-2xl font-bold text-amber-600">{stats.dinner + stats.supper}</div>
            <div className="text-gray-400 text-sm">Dinner</div>
          </div>
        </div>
      )}

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
              <i className="ri-star-line mr-2 text-yellow-400"></i>
              Featured Recipes
          </h2>
          {data && data.length > 4 && (
            <Link to="/recipes" className="text-blue-400 hover:underline text-sm">
              View All →
            </Link>
          )}
        </div>

        {featuredRecipes.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-4">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="bg-gray-700 rounded p-8 text-center">
            <p className="text-gray-400 mb-3">No recipes yet!</p>
            <Link 
              to="/create-recipe" 
              className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded inline-block"
            >
              Create Your First Recipe
            </Link>
          </div>
        )}
      </div>

        <div>
        <h2 className="text-xl font-bold mb-3">
          <i className="ri-folder-2-line mr-2 text-blue-400"></i>
          Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link
            to="/recipes"
            className="bg-gray-700 hover:bg-gray-600 p-3 rounded text-center"
          >
            <div className="text-2xl"><i className="ri-sun-line"></i></div>
            <div className="font-semibold text-sm">Breakfast</div>
            <div className="text-xs text-gray-400">{stats.breakfast} recipes</div>
          </Link>
          <Link
            to="/recipes"
            className="bg-gray-700 hover:bg-gray-600 p-3 rounded text-center"
          >
            <div className="text-2xl"><i className="ri-restaurant-line"></i></div>
            <div className="font-semibold text-sm">Lunch</div>
            <div className="text-xs text-gray-400">{stats.lunch} recipes</div>
          </Link>
          <Link
            to="/recipes"
            className="bg-gray-700 hover:bg-gray-600 p-3 rounded text-center"
          >
            <div className="text-2xl"><i className="ri-moon-line"></i></div>
            <div className="font-semibold text-sm">Dinner</div>
            <div className="text-xs text-gray-400">{stats.dinner} recipes</div>
          </Link>
          <Link
            to="/recipes"
            className="bg-gray-700 hover:bg-gray-600 p-3 rounded text-center"
          >
            <div className="text-2xl"><i className="ri-moon-foggy-line"></i></div>
            <div className="font-semibold text-sm">Supper</div>
            <div className="text-xs text-gray-400">{stats.supper} recipes</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home