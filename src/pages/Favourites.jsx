import React, { useState } from 'react'
import RecipeCard from '../components/RecipeCard'

function Favourites() {
  const favourites = JSON.parse(localStorage.getItem('meal'))||[]

  const [favEmpty] = useState(() => {
    if(favourites.length === 0){
      return true
    }else{
      return false
    }
  })

  return (
    <div className='h-screen flex flex-1 justify-center p-10 box-border'>

      {favEmpty && (
        <div>
          <div>
            <h2 className='font-bold text-4xl'>Favourite Recipes</h2>
            <p className='font-semibold'>Oops you have no favourites</p>
          </div>
          <div>
            <img src="/404.png" alt="" />
          </div>
        </div>
      )}

      {!favEmpty && (
        
        <div>
          <div className='mb-8'>
            <h2 className='font-bold text-4xl'>Favourite Recipes</h2>
            <p className='font-semibold'>Here are your favourite recipes</p>
          </div>
        
          <div className='grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3'>
          {
            favourites.map((recipe,index) => {
              return (<RecipeCard recipe={recipe} key={index} /> )
            }
              
            )
          }
          
        </div>
        </div>
      )}

        
    </div>
  )
}

export default Favourites