import React from 'react'
import { HeartPulse, HeartIcon, SoupIcon } from 'lucide-react'

function RecipeCard({recipe}) {
  console.log(recipe,'dd')
  return (
    <div className='p-4 rounded-md bg-gray-300 flex flex-col gap-2 max-h-fit'>
            <div className='relative'>
              <a href={recipe.strYoutube} target='blank'>
                <img 
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className='rounded-md
                    w-full'
                  />
              </a>
                

                <div className='absolute top-2 right-2 cursor-pointer'>
                  <HeartIcon fill='white' className=' active:fill-red-500 hover:fill-red-600 hover:text-red-600 transition-all duration-200 ease-in-out' />
                </div>
              
                {/* <div className='flex gap-2 absolute bottom-2 left-2 text-black p-2 rounded-md font-bold bg-gray-100 cursor-default'>
                  <SoupIcon />
                  <span>2 Servings</span>
                </div> */}
            </div>

              
              
            <div>
                <p className='text-start font-bold'>{recipe.strMeal}</p>
                <p>{recipe.strArea} Cuisine</p>
            </div>
              
            {/* <div className='flex gap-4 justify-start'>
                <div className='flex gap-1 bg-gray-400 p-[4px] rounded-md'>
                  <HeartPulse/>
                  <span>{recipe.strCategory}</span>
                </div>
            </div> */}
    </div>
  )
}

export default RecipeCard