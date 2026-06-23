import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipecontext } from '../context/RecipeContext'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const SingleRecipe = () => {
   const {data, setdata} = useContext(recipecontext)
   const params = useParams()
   const recipe = data.find(recipe => params.id == recipe.id)      
   const navigate = useNavigate()

   const {register, handleSubmit, reset} = useForm({
    dafaultValues:{
           title: recipe.title,
           chef: recipe.chef,
           image: recipe.image,
           inst: recipe.inst,
           desc: recipe.desc,
           ingr: recipe.ingr,
   }})

   const submitHandler= (recipe )=>{
  
       const index = data.findIndex((recipe)=> params.id == recipe.id)
       const copyrecipe = [...data]
       copydata[index]= {...copydata[index], ...recipe}

            // const copydata={...data}
            // copydata.push(recipe)
       setdata(copydata)
       toast.success("Recipe updated!")
   }
        
 

  const DeleteHandler = ()=>{
    const filterdata = data.filter(r => r.id != params.id)
    setdata(filterdata)
    toast.success("recipe delete!")
    navigate("/recipes")
  }




  return recipe ? 
  <div className='w-full flex '>
    <div className="left w-1/2 p-2">
      <h1 className='text-5xl font-black'>{recipe.title}</h1>
      <img className='h-[20vh] '  src={recipe.image} alt="" />
      <h1>{recipe.chef}</h1>
      <p>{recipe.desc} </p>
    </div>


    <div className="right w-1/2 p-2">

        <form className='w-1/2 p-2 ' onSubmit={handleSubmit(submitHandler)}>
        <input 
        className="border-b outline-0 p-2 block"
         {...register('image')} 
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
         {...register('desc')}
          placeholder="start from here"
          ></textarea>

         {/* <small className="text-red-400 ">
            this is how the erroe well be show
         </small>   */}

          <textarea 
        className="border-b outline-0 p-2 block"
         {...register('ingr')} 
          placeholder="write ingredients seperated by comma"
          ></textarea>

         {/* <small className="text-red-400 ">
            this is how the erroe well be show
         </small>  */}


         <textarea 
        className="border-b outline-0 p-2 block"
         {...register('inst ')} 
          placeholder="write instruction  seperated by comma"
          ></textarea>

         {/* <small className="text-red-400 ">
            this is how the erroe well be show
         </small>  */}


          <select 
        className="block border-b outline-0 p-2 "
         {...register('catrgoey')} 
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="supper">Supper </option>
            <option value="dinner">Dinner</option>
          
          </select>

         <button className="mt-5 block bg-blue-900 px-4 py-2 rounded ">
            Update Recipe
         </button>
         <button onClick={DeleteHandler} className='mt-5 block bg-red-900 px-4 py-2 rounded'>
            Delete Recipe
         </button>
    </form>


    </div>
    

  </div> : "Loading..."
  }

export default SingleRecipe