import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import menu from "../utils/restaurantMenuSeed";
import MenuItems from "./MenuItems";


const RestaurantMenu = ()=>{

    return (
        <div className="text-center flex flex-col items-center">
            <h1 className="pb-10 font-bold text-lg">Restaurant Menu</h1>
            <MenuItems menu={menu}/>
        </div>
);

  
}



export default RestaurantMenu;
