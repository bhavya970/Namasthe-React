import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants , setFilteredRestaurants] = useState([]);
  console.log(listOfRestaurants);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const fetchData = async () => {
    const data = await fetch("https://corsproxy.io/https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();
    //  const restaurantsCard = json?.data?.cards?.find(
    //   (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    
    // const restaurants =
    //   restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    // console.log("Fetched restaurants:", restaurants);
    // setListOfRestaurants(restaurants);
    // setFilteredRestaurants(restaurants);
    setListOfRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    setFilteredRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  //Shimmer.js UI
  useEffect(() => {
    fetchData();
  },[]);

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) {
    return <h1>🔴 You are offline! Please check your internet connection.</h1>
  }
if(listOfRestaurants.length === 0) {
  return <Shimmer/>;
}
  return (
    <div className="container">
    <div className = "flex">
      <div className="search m-4 p-4 ">
        <input type="text" className="border-solid black rounded-lg" placeholder="Search"
         value={searchText} 
         onChange={(e) => 
         setSearchText(e.target.value)}/>
        <button className="px-4 py-1 bg-green-100 m-4 border-1.5 rounded-lg" onClick={() => {
          const filtered = listOfRestaurants.filter((res) => {
           return res.info.name.toLowerCase().includes(searchText.toLowerCase());
          })
          console.log(filtered);
          setFilteredRestaurants(filtered);
        }}>Search</button>
        <button className = "px-4 py-1 bg-gray-100 m-4 rounded-lg border-1.5"
         onClick={()=>{
            const filtered = listOfRestaurants.filter((res) => (res?.info?.avgRating >= 4.4))
            console.log(filtered);
            setFilteredRestaurants(filtered);
         }}>Top-Rating Restaurants</button>
      </div>
      </div>
      <div className="flex flex-wrap">
  {filteredRestaurants.map((res) => (
    <Link
      key={res.info.id}
      to={`/restaurants/${res.info.id}`}
    >
      {/* Conditional Rendering for Promoted Label */}
      {res.info.promoted ? <RestaurantCardPromoted info={res.info} /> : <RestaurantCard info={res.info} />}
    </Link>
  ))}
</div>

    </div>
  );
};

export default Body;