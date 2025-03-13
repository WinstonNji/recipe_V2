import React from 'react'
import { Link, Search} from 'lucide-react'
import RecipeCard from '../components/RecipeCard'
import { useState, useEffect } from 'react'

function Homepage() {
  const [userInput, setUserInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [recipe, setRecipe] = useState([])

  useEffect(() => {
    fetchRecipe('chicken')
  },[])

  const recipeInput = (event) => {
    setUserInput(event.target.value)
  }

  const searchRecipe = (event)=> {
    event.preventDefault()
    setUserInput('')
    fetchRecipe(userInput)
  }

  const fetchRecipe = async (query) => {
    try {
      setLoading(true)
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      console.log(res)
      const data = await res.json()
      setRecipe(data.meals)
      console.log(recipe)
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className=' flex p-10  px-12'>
      <div className='min-h-screen  w-full '>
        <form onSubmit={searchRecipe} action="" className='flex gap-2 bg-white p-3 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out' >
          <button type='submit'>
            <Search />
          </button >
          <input 
            type="text"
            className='w-full focus:outline-none'
            placeholder='Enter a recipe'
            onChange={recipeInput}
            value={userInput}
            />
        </form>

        <div className='mt-4'>
          <h1 className='text-3xl font-bold'>Recommended Recipes</h1>
          <span className='font-light'>Popular choices</span>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-5 box-border mt-10 w-full justify-center items-center place-items-center'>
          {/* Card */}

          {loading && [...Array(9)].map(() => (
            <div className="flex flex-col gap-4 w-72">
              <div className="skeleton h-32 w-full bg-gray-200"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          ))}

          {!loading && recipe.map(meal => (
              <RecipeCard recipe={meal} className='mx-auto'/>
          ))}

          
        </div>
      </div>
    </div>
  )
}

export default Homepage

