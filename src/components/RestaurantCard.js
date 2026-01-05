import {CDN_URL} from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestaurantCard = ({ info }) => {

  const {loggedInUser} = useContext(UserContext);
  return (
    <div className="m-4 p-4 w-80 bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-300" >
      <img className="w-48 m-4 p-4 border-solid border-black rounded" src={CDN_URL + info.cloudinaryImageId} alt="Image"/>
      <h3 className="font-bold py-2 text-xl">{info.name}</h3>
      <h3 className="text-lg py-2">{info.cuisines?.join(", ")}</h3>
      <h3 className="text-lg py-2">{info.avgRating}</h3>
      <h3 className="text-lg py-2">{info.sla?.deliveryTime} mins</h3>
      <h3 className="text-lg py-2">{info.costForTwo}</h3>
      <h4 className="text-2xl font-bold py-2">{loggedInUser}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}
export default RestaurantCard;