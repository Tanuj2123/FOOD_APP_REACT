import { IMAGE_CDN_URL } from "../utils/constants";

const ResCard  = (props)=>{
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData.info;
    const {deliveryTime} = resData.info.sla;
    return (
        <div className="w-60 m-16 p-4 border-gray-200  border-2 rounded-xl shadow-sm">
            <img className="w-full" src={IMAGE_CDN_URL+cloudinaryImageId}></img>
            <h2 className="res-name">{name}</h2>
            <h4 className="res-cuisine">{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4> {deliveryTime+" minutes"} </h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default ResCard;