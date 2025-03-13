import { useParams } from "react-router"
import { useEffect, useState } from "react";
import { Tags } from 'lucide-react';

const SingleProduct = () => {

    const [recipe, setRecipe] =  useState([])
    const { id } = useParams();

    useEffect( () => {
        fetchRecipe(id)
    }, [id])

     const fetchRecipe = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
        const data = await res.json()
        setRecipe(data.meals)
    }

    console.log(recipe, 'recipe')

    const arrOfIngredients = recipe.map((meal) => {
        const ingredientsWithMeasurement = []        

        for(let i = 0; i <= 20; i++){
            const ingredient = meal[`strIngredient${i}`]
            const measurement = meal[`strMeasure${i}`]

            if(ingredient && measurement){
                ingredientsWithMeasurement.push([ingredient,measurement])
            }
        }

        return ingredientsWithMeasurement
    })

    console.log(arrOfIngredients, 'kjhb')
    console.log(recipe, 'recipe')
    
    return (
        <div className="min-h-full min-w-full p-8 lg:px-24">
            <div className="md:flex flex-col gap-3 items-center min-h-full">
                {/* card */}
                <div className="flex flex-col gap-5 lg:flex-row">
                    <div className="flex flex-col gap-5">
                        {/* title */}
                        <div>
                            <h1 className="text-3xl font-bold text-start underline">Teriyaki Chicken</h1>
                        </div>
                        {/* image */}
                        <div className="">
                            <a href="">
                                <img className="w-full rounded-3xl" src="/public/dishImg.png" alt="" />
                            </a>
                        </div>

                        {/* tags */}
                        <div className="flex justify-between md:justify-evenly">
                            <div className="bg-gray-400 btn cursor-default rounded-xl flex ">
                                <span><Tags /></span>
                                <span>Meat, Casserole</span>
                            </div>

                            <div className="bg-gray-400 btn cursor-default rounded-xl flex ">
                                <span><Tags /></span>
                                <span>Japanese Cuisine</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div role="tablist" className="tabs tabs-lifted">
                            <input 
                                type="radio" 
                                name="my_tabs_2" 
                                role="tab" className="tab text-lg md:text-xl" aria-label="Instructions"
                            />
                            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 lg:w-80">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dignissimos, doloribus eligendi nostrum illo sapiente amet odit ipsa sit mollitia! Excepturi sequi ad soluta atque odit harum nisi ex omnis.</p>
                            </div>

                            <input
                                type="radio"
                                name="my_tabs_2"
                                role="tab"
                                className="tab text-lg md:text-xl"
                                aria-label="Measurements"
                                defaultChecked
                            />
                            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 lg:w-80">
                                <ul className=" text-start">
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
    // {recipe && recipe.map(recipe => (
    //     <div className="min-h-full min-w-full bg-red-300 p-20">
    //         <div className="bg-green-400 flex flex-col items-center min-h-screen">
    //             <h1>{recipe[0].strMeal}</h1>
    //         </div>
    //     </div>
    // ))}

}

export default SingleProduct