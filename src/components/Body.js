import ResCard from "./ResCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = ()=>{

    let [listOfRestaurants,setListOfRestaurants] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7429567&lng=83.3192061&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(listOfRestaurants.length === 0){
        return (
            <Shimmer/>
        )
    }

    return (
        <div className="body">
            <div className="search-filter">
                <input type="text" className="search-input"></input>
                <button className="search-btn">Search</button>
            </div>
            <div className="btn-filter">
                <button className="filter-btn" onClick={()=>{
                    listOfRestaurants = listOfRestaurants.filter(
                        (res) => res.info.avgRating>4.3
                    );

                    setListOfRestaurants(listOfRestaurants);
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) =>{
                        return (
                        <ResCard key={restaurant.info.id} resData={restaurant}/>
                    ) } )
                }
            </div>
        </div>
    )    
}

export default Body;