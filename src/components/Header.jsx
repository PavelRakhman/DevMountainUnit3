import React from "react";
import {Link} from "react-router-dom"
import "./Header.css"
export const Header = ()=>{
return(
    <header>
<h2 className="header-title">DevMountain Eatery</h2>
<nav>
    <ul className="Links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/addrecipe">Add Recipe</Link></li>
    </ul>
</nav>

    </header>
)    
}