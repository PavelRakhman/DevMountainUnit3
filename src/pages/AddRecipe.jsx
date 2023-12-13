import React, {useContext, useEffect, useState} from "react";
import "./AddRecipes.css"
import { RecipeContext } from "../contexts/RecipeContext";
import { useAsyncError } from "react-router-dom";
import axios from "axios";
export const AddRecipe = ()=>
{

    const {recipes, setRecipes} = useContext(RecipeContext)
//states
const [ingredientName, setIngredientname] = useState("")
const [ingredientQuantity, setIngredientQuantity] = useState("")
const [recipeId, setRecipeId] = useState("")
const [type,setType] =useState("")
const [recipeName, setRecipeName] = useState("")
const [imageUrl, setImageUrl] = useState("")
const [cookTime, setCookTime] = useState("")
const [prepTime, setPrepTime] =useState("")
const [serves, setServes] = useState("")
const [ingredients, setIngredients] = useState([])
const [instructions, setInstructions] = useState("")
    
//functions and eventhandlers

const pageStart = ()=>{
console.clear()
console.log(recipes)    
}
const generateId =async ()=>
{
    const URL = `https://recipes.devmountain.com`
    const response= await fetch(`${URL}/recipes`)
    const responseJSON= await response.json()
    const newRecipeId=responseJSON.length+1
    console.clear()
    console.log(recipes)
    setRecipeId(newRecipeId)
    console.log(newRecipeId)
    return newRecipeId
}

function assembleIngredient(name, quantity)
{
    const newIngredient = {
    name: name,
    quantity: quantity
    }
    return (newIngredient)
}

const AddIngredient =()=>{
    let IngredientToBeAdded = assembleIngredient(ingredientName, ingredientQuantity)
    let updatedIngredients = [...ingredients, IngredientToBeAdded]
    console.log(updatedIngredients)
    setIngredients(updatedIngredients)
}


function FormInstructions(instructionText)
{
const recipeInstruction = instructions 

return (recipeInstruction)
}

function AddInstructions()
{
const instructionsToBeAdded = FormInstructions(instructions)
let updatedInstructions = [...instructions, instructionsToBeAdded]
setInstructions(updatedInstructions)
console.log(instructions)
}
 
function formRecipe(RecipeData)
{
    let newRecipeObject={
recipe_id:RecipeData.recipe_id,
recipe_name: RecipeData.recipe_name,
image_url:RecipeData.image_url,
recipe_type: RecipeData.recipe_type,
prep_time: RecipeData.prep_time,
cook_time: RecipeData.cook_time,
ingredients: RecipeData.ingredients,
instructions: RecipeData.instructions
}

return newRecipeObject
}


async function postRecipe(recipeObject)
{
await axios.post('https://recipes.devmountain.com/recipes', recipeObject )
.then(res=>{console.log(res)
console.log(res.data)})
}



function AddRecipe(){
AddInstructions()
    const RecipeData={
    recipe_id:recipeId,
    recipe_name: recipeName,
    image_url: imageUrl,
    recipe_type: type,
    prep_time: prepTime,
    cook_time: cookTime,
    ingredients: ingredients,
    instructions: instructions
    }

    let recipeToBePosted ={
        type: type,
        recipeName: recipeName,
        imageURL: imageUrl,
        prepTime: prepTime,
        cookTime: cookTime,
        serves: serves,
        ingredients: ingredients,
        instructions: instructions    
    }

let recipeToBeAdded = formRecipe(RecipeData)

setRecipes([...recipes, recipeToBeAdded])
postRecipe(recipeToBePosted)

}

const submitHandler=(e)=>
{
    console.clear()
e.preventDefault()
AddRecipe()

}


useEffect(()=>{pageStart()},[])
useEffect(()=>{console.log(recipes)}, [recipes])



return(
<section>
<form className="newRecipeForm" onSubmit={(e)=>submitHandler(e)}>

<input type="text" placeholder="Title your recipe" onChange={(e)=>setRecipeName(e.target.value)}></input>

<input type="text" placeholder="Paste an image url" onChange={(e)=>setImageUrl(e.target.value)}></input>

<div className="radio_container">
<span>
<input 
type="radio"
value="Cook"
name="type"
onChange={(e)=>setType(e.target.value)}
></input>
<h5>Cook</h5>
</span>

<span>
<input 
type="radio"
value="Bake"
name="type"
onChange={(e)=>setType(e.target.value)}
></input>
<h5>Bake</h5>    
</span>

<span>
    <input type="radio"
    value="Drink"
    name="type"
    onChange={(e)=>setType(e.target.value)}
    ></input>
    <h5>Drink</h5>
</span>
</div>

<div className="inputContainer">
    <input placeholder="Prep Time"
    name="prepTime" onChange={(e)=>setPrepTime(e.target.value)}>
    </input>
<input type="text" placeholder="Cook Time" onChange={(e)=>setCookTime(e.target.value)}></input>
    <input type="text"
    placeholder="Serves"
    name="serves"
    ></input>
    
</div>

<h3>Ingredients</h3>
<div className="ingredientContainer">

<div className="IngredientInputs">
<input type="text" placeholder="Ingredient" onChange={(e)=>setIngredientname(e.target.value)}></input>
<input type="text" placeholder="Quantity" onChange={(e)=>setIngredientQuantity(e.target.value)}></input>
<button type="button" className="AddIngredientBtn" onClick={()=>AddIngredient()}>Add Ingredient</button>
</div>

<div>
<ul className="IngredientList">
    {ingredients.map((ingredient, index)=>(<li key={index}>{ingredient.name + ingredient.quantity}</li>))}
</ul>
</div>

</div>
<textarea
placeholder="Type your instructions"
rows={5}
name="instructions" onChange={(e)=>setInstructions(e.target.value)}
></textarea>
<input type="submit" value="AddRecipe"></input>
</form>

</section>    
)
}