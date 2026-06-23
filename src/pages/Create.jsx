import React, { useContext } from 'react'
import { nanoid } from 'nanoid'
import { useForm } from 'react-hook-form'  
import { recipecontext } from '../context/RecipeContext'

const Create = () => {

   const {data, setdata} = useContext(recipecontext)

        const {register, handleSubmit, reset} = useForm()

        const submitHandler= (recipe )=>{
            recipe.id = nanoid();

            // const copydata={...data}
            // copydata.push(recipe)
            // setdata(copydata)

         setdata([...data, recipe])
            reset()
        }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
        <input 
        className="border-b outline-0 p-2 block"
         {...register('img')} 
         type="url" 
         placeholder="Enter Image Url "
          />
          
          <small className="text-red-400 ">
            this is how the erroe well be show
         </small>

          <input 
        className="border-b outline-0 p-2 block"
         {...register('title')} 
         type="text" placeholder="Recioe Title"
          />

         {/* <small className="text-red-400 ">
            this is how the erroe well be show
         </small>   */}

          <input 
        className="border-b outline-0 p-2 block"
         {...register('ched')} 
         type="chef" placeholder="Chef Name"
          />



         <textarea 
        className="border-b outline-0 p-2 block"
         {...register('description')} 
          placeholder="start from here"
          ></textarea>

         {/* <small className="text-red-400 ">
            this is how the erroe well be show
         </small>   */}

          <textarea 
        className="border-b outline-0 p-2 block"
         {...register('ingredients')} 
          placeholder="write ingredients seperated by comma"
          ></textarea>

         {/* <small className="text-red-400 ">
            this is how the erroe well be show
         </small>  */}


         <textarea 
        className="border-b outline-0 p-2 block"
         {...register('instruction ')} 
          placeholder="write instruction  seperated by comma"
          ></textarea>

         {/* <small className="text-red-400 ">
            this is how the erroe well be show
         </small>  */}


          <select 
        className="border-b outline-0 p-2 block"
         {...register('catrgoey')} 
          >
            <option value="cat-1">Category 1</option>
            <option value="cat-2">Category 2</option>
            <option value="cat-3">Category 3  </option>
          </select>

         <button className="mt-5 block bg-gray-900 px-4 py-2 rounded ">
            Save Recipe
         </button>
    </form>

  )
}

export default Create