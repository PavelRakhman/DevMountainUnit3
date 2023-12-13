import React, {useEffect, useState, useContext} from "react";
import { Banner } from "../components/Banner";
import { RecipeContainer } from "../components/RecipeContainer";
import { RecipeContext } from "../contexts/RecipeContext";
import { RecipeDetails } from "./RecipeDetails";
export const Home =()=>{
const {recipes, setRecipes} = useContext(RecipeContext)
const pageStart=()=>{
console.clear()
console.log(recipes)    
}

useEffect(()=>{pageStart()},[])
return(
<>
<Banner></Banner>
<RecipeContainer></RecipeContainer>
</>
)    
}