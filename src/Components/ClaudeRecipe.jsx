import React from "react"
import ReactMarkdown from "react-markdown"

function ClaudeRecipe(props) {
    return(
        <section className="suggested-recipe-container" aria-live="polite">
            <ReactMarkdown>
                {props.recipe}
            </ReactMarkdown>
        </section>
    )
}

export default ClaudeRecipe