

const ResCard  = (props)=>{
    const {resData} = props;
    const {imgSrc,resName,cuisine,rating,deliveryTime,price} = resData;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={imgSrc}></img>
            <h2>{resName}</h2>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4> {deliveryTime} </h4>
            <h4>{price}</h4>
        </div>
    )
}

export default ResCard;