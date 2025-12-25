import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resid } = useParams();
  // useEffect(() => {
  //   fetchMenu();
  // }, [resid]);
  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_URL + resid);
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };
  const resInfo = useRestaurantMenu(resid);
  if (resInfo === null) {
    return <Shimmer />;
  }
  const restaurantCard = resInfo?.cards?.find((c) => c?.card?.card?.info);
  const { name, costForTwo, cuisines } = restaurantCard?.card?.card?.info || {};
  const regular = resInfo?.cards?.find((c) => c?.groupedCard)?.groupedCard
    ?.cardGroupMap?.REGULAR;
  const categories =
    regular?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];
  return (
    <div className="p-4">
      <h1 className="p-2 text-center text-2xl font-bold">{name}</h1>
      <h2 className="py-2 text-center text-red-600 font-bold">{cuisines?.join(", ")} - Rs.{costForTwo}</h2> 
      {categories.map((category) => (
        //categories
        <RestaurantCategory key={category.card.card.title} data={category.card.card} />
      ))}
    </div>
  );
};
export default RestaurantMenu;
