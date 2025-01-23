import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import SkeletonLoading from "./SkeletonLoading"
import { getRecipeFromMistral } from "../mistral_ai"

function MainBody() {
    const [ingredients, setIngredients]=React.useState([])
    const [recipe, setRecipe] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)

    async function generateRecipe() {
        setIsLoading(true)
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }
   
    function addIngredient(formData) {
        setIngredients(
            prevIngredients => [...prevIngredients, newIngredient]
        )

        const newIngredient = formData.get("ingredient")
    }

    return (
        <main className='px-16 py-16'>
            <form action={addIngredient} className='flex justify-center items-center g-3'>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    className="rounded-md border-solid border-2 px-4 py-2 mr-1.5 w-96 grow min-w-fit max-w-lg"
                    name="ingredient"
                />
                <button className="bg-black text-gray-200 rounded-md px-12 py-2.5 ml-1.5 font-medium text-sm">+ Add ingredient</button>
            </form>
            
            {ingredients.length > 0 && <IngredientsList toggle={generateRecipe} ingArray={ingredients}/>}
            {recipe && <ClaudeRecipe recipe={recipe}/>}
            {isLoading && !recipe ? <SkeletonLoading /> : ""} 
        </main>
    )
}

export default MainBody