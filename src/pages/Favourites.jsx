import React, { useState } from 'react'
import RecipeCard from '../components/RecipeCard'


function Favourites() {

  const [favNotEmpty] = useState(true)

  return (
    <div className='h-screen flex flex-1 justify-center p-10 box-border'>
      {!favNotEmpty && (
        <div>
          <div>
            <h2 className='font-bold text-4xl'>Favourite Recipes</h2>
            <p className='font-semibold'>Oops you have no favourites</p>
          </div>
          <div>
            <img src="/public/404.png" alt="" />
          </div>
        </div>
      )}

      {favNotEmpty && (
        // Grid
        <div>
          <div className='mb-8'>
            <h2 className='font-bold text-4xl'>Favourite Recipes</h2>
            <p className='font-semibold'>Here are your favourite recipes</p>
          </div>
          <div className='grid grid-cols-1 gap-5 lg:grid-cols-3'>
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
        </div>
      )}

        
    </div>
  )
}

export default Favourites