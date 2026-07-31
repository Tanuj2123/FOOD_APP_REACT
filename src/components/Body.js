import ResCard from "./ResCard";
import resList from "../utils/seed";
import { useState } from "react";


const Body = ()=>{

    let [listOfRestaurants,setListOfRestaurants] = useState(resList);
    console.log(listOfRestaurants);


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    listOfRestaurants = listOfRestaurants.filter(
                        (res) => res.rating>4.7
                    );
                    console.log(listOfRestaurants);
                    setListOfRestaurants(listOfRestaurants);
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restuarant) =>(
                        <ResCard key={restuarant.id} resData={restuarant}/>
                    ))
                }
            </div>
        </div>
    )    
}

export default Body;