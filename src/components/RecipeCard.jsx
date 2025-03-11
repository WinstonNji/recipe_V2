import React from 'react'
import { HeartPulse, HeartIcon, SoupIcon } from 'lucide-react'

function RecipeCard() {
  return (
    <div className='p-4 rounded-md bg-gray-300 flex flex-col gap-2 '>
            <div className='relative'>
                <img 
                  src="/dishImg.png" 
                  alt=""
                  className='rounded-md
                  w-full'
                />

                <div className='absolute top-2 right-2 cursor-pointer'>
                  <HeartIcon fill='white' className='hover:fill-red-600 hover:text-red-600 transition-all duration-200 ease-in-out' />
                </div>
              
                <div className='flex gap-2 absolute bottom-2 left-2 text-black p-2 rounded-md font-bold bg-gray-100'>
                  <SoupIcon />
                  <span>2 Servings</span>
                </div>
            </div>

              
              
            <div>
                <p className='text-start font-bold'>Roasted Chicken</p>
                <p>Turkish Cuisine</p>
            </div>
              
            <div className='flex gap-4 justify-start'>
                <div className='flex gap-1 bg-gray-400 p-[4px] rounded-md'>
                  <HeartPulse/>
                  <span>Gluten-free</span>
                </div>
                <div className='flex gap-1 bg-gray-400 p-[4px] rounded-md'>
                  <HeartPulse/>
                  <span>Heart-healty</span>
                </div>
            </div>
    </div>
  )
}

export default RecipeCard