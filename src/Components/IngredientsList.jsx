import React from "react"

function IngredientsList(props) {
    const ingredientsListItems = props.ingArray.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return (
       <section className="my-6">
            <h2 className="font-bold text-2xl">Ingredients on hand:</h2>
            <ul className="list-disc text-gray-600 mx-10 my-4">{ingredientsListItems}</ul>
            {props.ingArray.length >= 4 && <div className="flex flex-col gap-y-3 my-8 py-4 px-8 bg-recipeContainer rounded-lg justify-between items-start sm:flex-row sm:items-center">
                <div>
                    <h3 className="font-semibold py-2 text-md">Ready for a recipe?</h3>
                    <p className="py-2 text-sm text-gray-500">Generate a recipe from your list of ingredients</p>
                </div>
                <button onClick={props.toggle} className="rounded-md bg-orange-500 text-white px-6 py-2">Get a recipe</button>
            </div>}
        </section>
    )
}

export default IngredientsList