import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = ()=>{


    const {resId} = useParams();
    console.log(resId);

    const resInfo = useRestaurantMenu(resId);

    return <h1>{resInfo?.name}</h1>
}


export default RestaurantMenu;
