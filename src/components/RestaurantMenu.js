import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

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
    <div className="menu">
      {" "}
      <h1>{name}</h1>
      <h2>{cuisines?.join(", ")}</h2> <h3>{costForTwo}</h3> <h3>Menu</h3>{" "}
      {categories.map((category) => (
        <div key={category.card.card.title}>
          {" "}
          <h4>{category.card.card.title}</h4>{" "}
          <ul>
            {" "}
            {category.card.card.itemCards.map((item) => (
              <li key={item.card.info.id}>
                {" "}
                {item.card.info.name} - Rs.{" "}
                {(item.card.info.price ?? item.card.info.defaultPrice) / 100}{" "}
              </li>
            ))}{" "}
          </ul>{" "}
        </div>
      ))}{" "}
    </div>
  );
};
export default RestaurantMenu;
