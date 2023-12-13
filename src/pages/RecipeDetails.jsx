import React,{useEffect, useContext, useState} from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import { useParams } from "react-router-dom";
import "./RecipeDetails.css"



 export const RecipeDetails = ()=>{
const {recipes} = useContext(RecipeContext)
const [targetRecipe, setTargetRecipe] = useState({})    
const {recipe_id} = useParams()

const findRecipe=(recipe_id)=>
{
for (let i=0;i<recipes.length;i++)
{
if(recipes[i].recipe_id==recipe_id)
{
console.log(recipes[i])
setTargetRecipe(recipes[i])    
}
    
}    
}





const pageStart =()=>{
console.clear()
console.log(recipes)
console.log(recipe_id)
findRecipe(recipe_id)

}





useEffect(()=>{pageStart()},[])    
    
    return(
    <div className="recipe_Details">
        <h2 className="recipeTitle">{targetRecipe.recipe_name}</h2>
        <table>
            <tr>
                <th>recipe type</th>
                <th>preparation time</th>
                <th>cooking time</th>
                <th>ingredient list</th>
                <th>instructions</th>
            </tr>

            <tr>
            <td>{targetRecipe.type}</td>    
            <td>{targetRecipe.prep_time}</td>    
            <td>{targetRecipe.cook_time}</td>    
            <td>{targetRecipe.ingredients}</td>
<td>{targetRecipe.instructions}</td>
            </tr>
        </table>
    </div>    
        
    )
}