import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./RecipeCard.css"

export const RecipeCard = ({recipe})=>{

const navigate = useNavigate()

const hadleClick=()=>
{
navigate(`/recipeDetails/${recipe.recipe_id}`)    
}

return(
<div>
<div className="recipe-card">
<div className="image-container">
    <img src={recipe.image_url}></img>
    </div>

    <h3>{recipe.recipe_name}</h3>
    <button className="RecipeCardBtn" onClick={hadleClick}>See more</button>    
</div>

</div>    
)    

}