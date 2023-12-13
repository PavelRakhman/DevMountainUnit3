import React, {createContext, useState} from "react";

export const RecipeContext = createContext()
export const RecipeContextProvider = (props)=>
{
    const [recipes, setRecipes] = useState([])
    const [ing, setIng] = useState([])
const [filteredRecipes, setFilteredRecipes] = useState([])
    return(
        <RecipeContext.Provider value={{recipes, setRecipes, ing, setIng, filteredRecipes, setFilteredRecipes}}>{props.children}</RecipeContext.Provider>
    )
}

