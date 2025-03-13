import { useParams } from "react-router"
import { useEffect, useState } from "react";
import { Tags } from 'lucide-react';

const SingleProduct = () => {

    const [recipe, setRecipe] =  useState([])
    const { id } = useParams();
    const [loading, setLoading] = useState(false)
    const [measurementForIngredient, setMeasurementForIngredient] = useState([])

    useEffect( () => {
        const fetchRecipe = async (recipeId) => {
            setLoading(true)
            try {
                const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
                const data = await res.json()
                setRecipe(data.meals[0])
            } catch (error) {
                console.error(error)
            }finally{
                setLoading(false)
            }
            
        }
        fetchRecipe(id)
    }, [id])

    useEffect(() => {
        const getMeasurement = (recipe) => {

            const ingredientsWithMeasurement = []
    
            for(let i = 1; i <= 20; i++){    
                let ingredient = recipe[`strIngredient${i}`]
                let measurement = recipe[`strMeasure${i}`]
    
                if(ingredient && measurement){
                    ingredientsWithMeasurement.push([ingredient,measurement])
                }
            }

            setMeasurementForIngredient( ingredientsWithMeasurement)
        }

        console.log(measurementForIngredient, 'measurementForIngredient')

        getMeasurement(recipe)
    }, [recipe])
   
return (
    <>
        {loading && (
            <div className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center">
                <span className="loading loading-spinner loading-lg text-9xl"></span>
                <span className="pl-2 font-bold text-2xl">Fetching Recipe...</span>
            </div>
            
        )}

        {!loading && (
                <div className="min-h-fit min-w-full p-8 lg:px-24 bg-blue-400">
                <div className="md:flex flex-col gap-3 items-center min-h-fit bg-pink-700">
                    {/* card */}
                    <div className="flex flex-col gap-5 lg:flex-row md:flex-row">
                        <div className="flex flex-col gap-5">
                            {/* title */}
                            <div>
                                <h1 className="text-3xl font-bold text-start underline">{recipe.strMeal}</h1>
                            </div>
                            {/* image */}
                            <div className="md:w-80 lg:w-full">
                                <a href={recipe.strYoutube} target="blank">
                                    <div className="skeleton h-60 rounded-xl w-full"></div>
                                    <img 
                                        className="w-full rounded-3xl hidden" 
                                        src={recipe.strMealThumb} alt=""
                                        onLoad={(e) => {
                                            e.currentTarget.style.display = 'block'
                                            e.currentTarget.previousElementSibling.style.display = 'none'}
                                        }
                                        />
                                </a>
                            </div>

                            {/* tags */}
                            <div className="flex justify-between md:justify-evenly">
                                {recipe.strTags && (
                                    <div className="bg-gray-400 btn cursor-default rounded-xl flex ">
                                        <span><Tags /></span>
                                        <span>{recipe.strTags}</span>
                                    </div>
                                )}

                                <div className="bg-gray-400 btn cursor-default rounded-xl flex ">
                                    <span><Tags /></span>
                                    <span>{recipe.strArea} Cuisine</span>
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
                                {/* instructions */}
                                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 max-h-48 lg:w-96  overflow-y-scroll overflow-hidden">
                                    <p>{recipe.strInstructions}</p>
                                </div>

                                <input
                                    type="radio"
                                    name="my_tabs_2"
                                    role="tab"
                                    className="tab text-lg md:text-xl"
                                    aria-label="Measurements"
                                    defaultChecked
                                />

                                {/* Measurements */}
                                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 lg:w-96 max-h-48 overflow-y-auto overflow-hidden lg:h-56 ">
                                    <ul className=" list-disc pl-4 text-start">
                                        {measurementForIngredient.map(([ingredient, measurement], index) =>
                                            (
                                                <li key={index}>
                                                    <span>{ingredient} </span>
                                                    <span className="font-bold">{measurement}</span>
                                                    </li>
                                            )
                                        )}
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )}
    </>
    

)
}

export default SingleProduct