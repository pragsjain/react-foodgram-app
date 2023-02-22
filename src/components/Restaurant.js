const Restaurant = ({name,cuisines,cloudinaryImageId,lastMileTravelString,locality})=>{
    //console.log(props);
    //name-> props.restaurant.data?.name
    return (
            <div className="card">
                <img
                    src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                    cloudinaryImageId}/>
                <h2>{name}</h2>
                <h3>{locality}</h3>
                <h3>{cuisines.join(", ")}</h3>
                <h4>{lastMileTravelString} minutes</h4>
            </div>
    )
}

export default Restaurant;