import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants , setFilteredRestaurants] = useState([]);
  const fetchData = async () => {
    const data = await fetch("https://corsproxy.io/https://pastebin.com/raw/0QcdEDBL");
    const json = await data.json();
     const restaurantsCard = json?.data?.cards?.find(
      (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    
    const restaurants =
      restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    console.log("Fetched restaurants:", restaurants);
    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  }
  //Shimmer.js UI
  useEffect(() => {
    fetchData();
  },[]);
if(listOfRestaurants.length === 0) {
  return <Shimmer/>;
}
  return (
    <div className="container">
      <div className="search">
        <input type="text" className="search-box" placeholder="Search"
         value={searchText} 
         onChange={(e) => 
         setSearchText(e.target.value)}/>
        <button className="search-btn" onClick={() => {
          const filtered = listOfRestaurants.filter((res) => {
           return res.info.name.toLowerCase().includes(searchText.toLowerCase());
          })
          console.log(filtered);
          setFilteredRestaurants(filtered);
        }}>Search</button>
      </div>
      <div className = "filter">
        <button className = "filter-btn"
         onClick={()=>{
            const filtered = listOfRestaurants.filter((res) => (res?.info?.avgRating >= 4.4))
            console.log(filtered);
            setFilteredRestaurants(filtered);
         }}>Top-Rating Restaurants</button>
      </div>
      <div className="RestaurantContainer">
            {filteredRestaurants.map((res , index) => (
            <RestaurantCard key={index} {...res} />
      ))}
      </div>
    </div>
  );
};

export default Body;