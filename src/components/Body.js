import ResCard from "./ResCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = ()=>{

    let [listOfRestaurants,setListOfRestaurants] = useState([]);
    let [filteredRestaurants,setFilteredRestaurants] = useState([]);
    let [searchValue,setSearchvalue] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7429567&lng=83.3192061&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return <h1>You are offline! Please Check Your Internet Connection</h1>
    }
    

    if(listOfRestaurants.length === 0){
        return (
            <Shimmer/>
        )
    }


    return (
        <div className="bg-gray-50 text-gray-900">
            <div className="flex justify-center">
                <input type="text" className="w-96 m-3 p-1 rounded-xl border-2 border-black border-solid" value={searchValue} onChange={(e)=>{
                    setSearchvalue(e.target.value);
                }}></input>
                <button className="rounded-xl px-4 cursor-pointer bg-black text-white" onClick={()=>{
                    const filteredRes = listOfRestaurants.filter((res)=>{
                        return res.info.name.toLowerCase().includes(searchValue.toLowerCase());
                    });

                    

                    setFilteredRestaurants(filteredRes);
                }}>Search</button>
            </div>
            <div className="flex justify-center">
                <button className="m-4 rounded-xl p-2 text-white bg-black" onClick={()=>{
                    const filteredRes = listOfRestaurants.filter(
                        (res) => res.info.avgRating>4.3
                    );

                    setFilteredRestaurants(filteredRes);
                    
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="flex flex-wrap">
                {   
                    
                    filteredRestaurants.map((restaurant) =>{
                        return (
                        <Link className="res-card-link" key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><ResCard resData={restaurant}/></Link>
                    ) } )
                }
            </div>
        </div>
    )
}

export default Body;