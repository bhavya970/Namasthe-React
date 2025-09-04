import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
const Body = () => {
  return (
    <div className="container">
      <div className="search">
        <h1>Search</h1>
      </div>
      <div className="RestaurantContainer">
            {resList.map((res , index) => (
            <RestaurantCard key={index} {...res} />
      ))}
            {/* <RestaurantCard {...resList[0]} />
            <RestaurantCard {...resList[1]}/>
            <RestaurantCard {...resList[2]}/>
            <RestaurantCard {...resList[3]}/>
            <RestaurantCard {...resList[4]}/>
            <RestaurantCard {...resList[5]}/>
            <RestaurantCard {...resList[6]}/>
            <RestaurantCard {...resList[7]}/>
            <RestaurantCard {...resList[8]}/>
            <RestaurantCard {...resList[9]}/>
            <RestaurantCard {...resList[10]}/>
            <RestaurantCard {...resList[11]}/>
            <RestaurantCard {...resList[12]}/>
            <RestaurantCard {...resList[13]}/>
            <RestaurantCard {...resList[14]}/>
            <RestaurantCard {...resList[15]}/>
            {/* <RestaurantCard {...resList[16]}/> */}
            {/* <RestaurantCard {...resList[17]}/> */} */
      </div>
    </div>
  );
};

export default Body;