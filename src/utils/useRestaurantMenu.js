import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
import Shimmer from "../components/Shimmer";

const useRestaurantMenu = (resId) =>{

    const [resInfo,setResInfo] = useState(null);


    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(MENU_API+resId);//swiggy api blocked bot requests for thier menus
        console.log(data);
        const json =  await data.json();
        console.log(json);
        setResInfo(json?.data);
    }



    return resInfo;
}

export default useRestaurantMenu;