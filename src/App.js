import React from "react";
import { Header } from "./components/Header";
import { Home } from "./pages/HomePage";
import { AddRecipe } from "./pages/AddRecipe";
import { RecipeDetails } from "./pages/RecipeDetails";
import { Route, Routes } from "react-router-dom";
import { RecipeContextProvider } from "./contexts/RecipeContext";

function App() {
  return(
<>
<RecipeContextProvider>
<Header></Header>
<Routes>
<Route path="/" element={<Home></Home>}></Route>
<Route path="/addrecipe" element={<AddRecipe></AddRecipe>}></Route>
<Route path = "/recipeDetails/:recipe_id" element={<RecipeDetails></RecipeDetails>}></Route>

</Routes>
</RecipeContextProvider>
</>


)
}

export default App;
