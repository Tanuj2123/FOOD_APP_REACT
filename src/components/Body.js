import ResCard from "./ResCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

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

    

    if(listOfRestaurants.length === 0){
        return (
            <Shimmer/>
        )
    }


    return (
        <div className="body">
            <div className="search-filter">
                <input type="text" className="search-input" value={searchValue} onChange={(e)=>{
                    setSearchvalue(e.target.value);
                }}></input>
                <button className="search-btn" onClick={()=>{
                    const filteredRes = listOfRestaurants.filter((res)=>{
                        return res.info.name.toLowerCase().includes(searchValue.toLowerCase());
                    });

                    

                    setFilteredRestaurants(filteredRes);
                }}>Search</button>
            </div>
            <div className="btn-filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredRes = listOfRestaurants.filter(
                        (res) => res.info.avgRating>4.3
                    );

                    setFilteredRestaurants(filteredRes);
                    
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {   
                    
                    filteredRestaurants.map((restaurant) =>{
                        return (
                        <ResCard key={restaurant.info.id} resData={restaurant}/>
                    ) } )
                }
            </div>
        </div>
    )    
}

export default Body;