import React, {useState, useContext, useEffect} from "react";
import "./RecipeContainer.css"
import { RecipeCard } from "./RecipeCard";
import { RecipeContext } from "../contexts/RecipeContext";
export const RecipeContainer = ()=>
{

    const {recipes, setRecipes, filteredRecipes, setFilteredRecipes} = useContext(RecipeContext)
const [search, setSearch] = useState("")

const searchRecipe =(recipeName)=>
{
    const matchingRecipes = []
for (let i=0; i<recipes.length;i++)
{
if (recipes[i].recipe_name.toLowerCase().includes(recipeName.toLowerCase()))
{
matchingRecipes.push(recipes[i])    
}
}
if (matchingRecipes.length>0)
{
    setFilteredRecipes(matchingRecipes)
}

}

const searchStart =()=>
{
searchRecipe(search)
console.log(filteredRecipes)

}

const getRecipes = async()=>{
    console.clear()
    setFilteredRecipes([])
    const url=`https://recipes.devmountain.com`
    let response = await fetch(`${url}/recipes`)
    let responseJSON= await response.json()
   setRecipes(responseJSON)
   console.log(recipes) 
   }



useEffect(()=>{getRecipes()},[])
useEffect(()=>searchStart,[search])
return(
<section className="recipe-container">
    <h2>Search a recipe</h2>
<span className="search_bar_container">
<input className="searchInput" value={search} onChange={(e)=>setSearch(e.target.value)}type="text" placeholder="Search for a recipe"></input>
</span>


<div className="recipe-grid">
{filteredRecipes.map((recipe,index)=>(<RecipeCard recipe={recipe} key={index}></RecipeCard>))}
</div>
</section>    
)    
}