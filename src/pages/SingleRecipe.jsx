import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipecontext } from '../context/RecipeContext'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext)
  const params = useParams()
  const recipe = data.find(recipe => params.id == recipe.id)
  const navigate = useNavigate()
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const favData = JSON.parse(localStorage.getItem('fav') || '[]')
    setFavorites(favData)
  }, [])

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: recipe?.title || '',
      chef: recipe?.chef || '',
      image: recipe?.image || '',
      inst: recipe?.inst || '',
      desc: recipe?.desc || '',
      ingr: recipe?.ingr || '',
      category: recipe?.category || 'breakfast'
    }
  })

  const UpdateHandler = (updatedRecipe) => {
    const index = data.findIndex((r) => params.id == r.id)
    if (index !== -1) {
      const copyData = [...data]
      copyData[index] = { ...copyData[index], ...updatedRecipe }
      setdata(copyData)
      localStorage.setItem("recipes", JSON.stringify(copyData))
      toast.success("Recipe updated!")
    }
  }

  const DeleteHandler = () => {
    const filterdata = data.filter(r => r.id != params.id)
    setdata(filterdata)
    localStorage.setItem("recipes", JSON.stringify(filterdata))
    toast.success("Recipe deleted!")
    navigate("/recipes")
  }

  const FavHandler = () => {
    if (!favorites.find(f => f.id === recipe?.id)) {
      const copyFav = [...favorites, recipe]
      setFavorites(copyFav)
      localStorage.setItem('fav', JSON.stringify(copyFav))
      toast.success("Added to favorites!")
    }
  }

  const UnFavHandler = () => {
    const filterFav = favorites.filter(f => f.id != recipe?.id)
    setFavorites(filterFav)
    localStorage.setItem('fav', JSON.stringify(filterFav))
    toast.info("Removed from favorites!")
  }

  if (!recipe) return <div className="text-center text-2xl">Loading...</div>

  return (
    <div className='w-full flex flex-col md:flex-row gap-8'>
      <div className="relative w-full md:w-1/2 p-4 bg-gray-700 rounded-lg">
        <button 
          onClick={favorites.find((f) => f.id == recipe?.id) ? UnFavHandler : FavHandler}
          className="absolute top-4 right-4 text-3xl"
        >
          {favorites.find((f) => f.id == recipe?.id) ? 
            <i className="ri-heart-fill text-red-500"></i> : 
            <i className="ri-heart-line text-white"></i>
          }
        </button>
        
        <img className='w-full h-[30vh] object-cover rounded-lg' src={recipe.image} alt={recipe.title} />
        <h1 className='text-3xl font-bold mt-4'>{recipe.title}</h1>
        <h2 className='text-xl text-red-400'>Chef: {recipe.chef}</h2>
        <p className='mt-2'>{recipe.desc}</p>
        
        {recipe.ingr && (
          <div className="mt-4">
            <h3 className="font-bold">Ingredients:</h3>
            <ul className="list-disc pl-5">
              {recipe.ingr.split(',').map((item, i) => (
                <li key={i}>{item.trim()}</li>
              ))}
            </ul>
          </div>
        )}
        
        {recipe.inst && (
          <div className="mt-4">
            <h3 className="font-bold">Instructions:</h3>
            <ol className="list-decimal pl-5">
              {recipe.inst.split(',').map((item, i) => (
                <li key={i}>{item.trim()}</li>
              ))}
            </ol>
          </div>
        )}
      </div>

      <div className="w-full md:w-1/2 p-4 bg-gray-700 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Recipe</h2>
        <form onSubmit={handleSubmit(UpdateHandler)} className="space-y-3">
          <input 
            className="w-full p-2 rounded bg-gray-600 text-white border border-gray-500 focus:outline-none focus:border-blue-500"
            {...register('image')} 
            type="url" 
            placeholder="Image URL"
          />
          
          <input 
            className="w-full p-2 rounded bg-gray-600 text-white border border-gray-500 focus:outline-none focus:border-blue-500"
            {...register('title')} 
            type="text" 
            placeholder="Recipe Title"
          />
          
          <input 
            className="w-full p-2 rounded bg-gray-600 text-white border border-gray-500 focus:outline-none focus:border-blue-500"
            {...register('chef')} 
            type="text" 
            placeholder="Chef Name"
          />

          <textarea 
            className="w-full p-2 rounded bg-gray-600 text-white border border-gray-500 focus:outline-none focus:border-blue-500"
            {...register('desc')}
            placeholder="Description"
            rows="2"
          />

          <textarea 
            className="w-full p-2 rounded bg-gray-600 text-white border border-gray-500 focus:outline-none focus:border-blue-500"
            {...register('ingr')} 
            placeholder="Ingredients (separated by comma)"
            rows="2"
          />

          <textarea 
            className="w-full p-2 rounded bg-gray-600 text-white border border-gray-500 focus:outline-none focus:border-blue-500"
            {...register('inst')} 
            placeholder="Instructions (separated by comma)"
            rows="2"
          />

          <select 
            className="w-full p-2 rounded bg-gray-600 text-white border border-gray-500 focus:outline-none focus:border-blue-500"
            {...register('category')}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="supper">Supper</option>
            <option value="dinner">Dinner</option>
          </select>

          <div className="flex gap-3">
            <button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition">
              Update Recipe
            </button>
            <button type="button" onClick={DeleteHandler} className="flex-1 bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition">
              Delete Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SingleRecipe