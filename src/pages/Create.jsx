import React, { useContext } from 'react'
import { nanoid } from 'nanoid'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { recipecontext } from '../context/RecipeContext'
import { toast } from 'react-toastify'

const Create = () => {
  const navigate = useNavigate()
  const { data, setdata } = useContext(recipecontext)
  const { register, handleSubmit, reset } = useForm()

  const submitHandler = (recipe) => {
    recipe.id = nanoid()
    const copyData = [...data]
    copyData.push(recipe)
    setdata(copyData)
    localStorage.setItem("recipes", JSON.stringify(copyData))
    toast.success("New recipe created!")
    reset()
    navigate("/recipes")
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="max-w-md mx-auto space-y-3">
      <input 
        className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
        {...register('image')} 
        type="url" 
        placeholder="Image URL"
        required
      />
      
      <input 
        className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
        {...register('title')} 
        type="text" 
        placeholder="Recipe Title"
        required
      />

      <input 
        className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
        {...register('chef')} 
        type="text" 
        placeholder="Chef Name"
        required
      />

      <textarea 
        className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
        {...register('desc')} 
        placeholder="Description"
        rows="2"
        required
      />

      <textarea 
        className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
        {...register('ingr')} 
        placeholder="Ingredients (separated by comma)"
        rows="2"
        required
      />

      <textarea 
        className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
        {...register('inst')} 
        placeholder="Instructions (separated by comma)"
        rows="2"
        required
      />

      <select 
        className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
        {...register('category')}
      >
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="supper">Supper</option>
        <option value="dinner">Dinner</option>
      </select>

      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition">
        Save Recipe
      </button>
    </form>
  )
}

export default Create