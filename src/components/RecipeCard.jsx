import React, { useState } from 'react'
import { HeartPulse, HeartIcon, SoupIcon, EyeIcon } from 'lucide-react'
import { Link } from 'react-router'

function RecipeCard({recipe}) {  
  const [includedInFav, setIncludedInFav] = useState(localStorage.getItem('meal')?.includes(recipe.strMeal))

  const addToFav = () => {
    let favourites = JSON.parse(localStorage.getItem('meal')) || []

    const isInFav = favourites.some((fav) => fav.strMeal === recipe.strMeal)

    if(isInFav){
      favourites = favourites.filter(fav => fav.strMeal !== recipe.strMeal)
      setIncludedInFav(false)
    }else{
      favourites.push(recipe)
      setIncludedInFav(true)
    }

    localStorage.setItem('meal', JSON.stringify(favourites))
    console.log(localStorage)
  }

  return (
    <div className='p-4 rounded-md bg-gray-300 w-80 ring-black flex flex-col gap-2 max-h-fit'>
            <div className='relative'>
              <a href={recipe.strYoutube} target='blank'>
                <div className="skeleton h-52 w-full"></div>
                <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className='rounded-md w-full
                    hidden  duration-500'
                    onLoad={(e) => {
                      e.currentTarget.style.display = 'block';
                      e.currentTarget.previousElementSibling.style.display = 'none'
                    }}
                  />
              </a>
                

                <div className='absolute top-2 right-2 cursor-pointer'>
                  <button onClick={addToFav}>
                    {includedInFav && (
                      <HeartIcon fill='red' className='text-red-500'/>
                    )}
                    {!includedInFav && (
                      <HeartIcon fill='white' className='  hover:fill-red-600 hover:text-red-600 transition-all duration-200 ease-in-out' />
                    )}
                    
                  </button>
                  
                </div>
            </div>

            <div>
              {/* Meal Name */}
                <p className='text-start font-bold'>{recipe.strMeal}</p>
                {/* Cuisine origins */}
                <p>{recipe.strArea} Cuisine</p>
            </div>
              
            <div className='flex gap-4 justify-center'>
                <div className='flex gap-1 bg-gray-400 p-[4px] rounded-md'>
                  <Link to={`/products/${recipe.idMeal}`} >
                    <button className='p-2 rounded-md font-bold flex gap-2'>
                      <span>View Recipe Details</span>
                      <EyeIcon></EyeIcon>
                    </button>
                  </Link>
                </div>
            </div>
    </div>
  )
}

export default RecipeCard

