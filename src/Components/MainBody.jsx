import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import SkeletonLoading from "./SkeletonLoading"
import { getRecipeFromMistral } from "../mistral_ai"

function MainBody() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)

    async function generateRecipe() {
        setIsLoading(true)
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }
   
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        const button = document.querySelector('button')
    
        if (newIngredient) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        } else {
            button.classList.add('shake', 'error')
            setTimeout(() => {
                button.classList.remove('shake', 'error')
            }, 400);
        }
    }

    function startOver() {
        setIngredients([])
        setRecipe("")
        setIsLoading(false)
    }
    

    return (
        <main className='px-8 py-16 sm:px-16'>
            <form action={addIngredient} className='flex flex-col justify-center items-center gap-y-3 sm:gap-3 sm:flex-row' >
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    className="rounded-md border-solid border-2 px-4 py-2 mr-1.5 w-96 grow min-w-fit max-w-lg"
                    name="ingredient"
                />
                <button className="bg-black text-gray-200 rounded-md px-6 py-2.5 ml-1.5 font-medium text-sm sm:w-48 md:max-w-72" disabled={recipe ? true : false}>
                    + Add ingredient
                </button>
            </form>
            {ingredients.length > 0 && <IngredientsList toggle={generateRecipe} ingArray={ingredients}/>}
            {recipe && <ClaudeRecipe recipe={recipe}/>}
            {isLoading && !recipe ? <SkeletonLoading /> : ""}
            {recipe && <div className="flex justify-center mt-8 sm:mt-16">
                <button onClick={startOver} className="bg-orange-500 text-white rounded-md px-6 py-2.5 ml-1.5 font-medium">
                    New Recipe
                </button>
            </div>}
        </main>
    )
}

export default MainBody