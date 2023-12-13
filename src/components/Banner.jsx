import React from "react";
import {Link} from "react-router-dom"
import salmon from "./salmon.jpg"
import "./Banner.css"

export const Banner = ()=>{
return(
    <div className="banner">
        <div className="banner-text">
            <h3>New Recipe</h3>
            <h1>Pineapple Salmon</h1>
            <h3>This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
          brown sugar rub, baked for 25 minutes on a bed of pineapple, and garnished in butter, garlic, and chives. You won’t want to miss it!</h3>
          <Link>
          <button className="BannerBtn">Check it out</button>
          </Link>
        </div>
    </div>
)    
}