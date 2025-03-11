import React from 'react'
import { Search, HeartPulse, HeartIcon, SoupIcon } from 'lucide-react'
import RecipeCard from '../components/RecipeCard'

function Homepage() {
  return (
    <div className=' flex flex-1  p-10'>
      <div className='h-screen'>
        <form action="" className='flex gap-2 bg-white p-3 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out'>
          <button type='submit'>
            <Search />
          </button >
          <input 
            type="text"
            className='w-full focus:outline-none'
            placeholder='Enter a recipe'
            />
        </form>

        <div className='mt-4'>
          <h1 className='text-3xl font-bold'>Recommended Recipes</h1>
          <span className='font-light'>Popular choices</span>
        </div>

        {/* Grid */}
        <div className='grid md:grid-cols-1 lg:grid-cols-3  content-center justify-center gap-8 mt-10 '>
          {/* Card */}

          <RecipeCard />
          <RecipeCard />
          <RecipeCard />

        
        </div>
      </div>
    </div>
  )
}

export default Homepage