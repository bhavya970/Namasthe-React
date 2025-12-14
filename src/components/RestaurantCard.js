import {CDN_URL} from "../utils/constants";
const RestaurantCard = ({ info }) => {
  return (
    <div className="CardContainer" style={{ background: "#310A69" }}>
      <img src={CDN_URL + info.cloudinaryImageId} />
      <h3>{info.name}</h3>
      <h3>{info.cuisines?.join(", ")}</h3>
      <h3>{info.avgRating}</h3>
      <h3>{info.sla?.deliveryTime} mins</h3>
      <h3>{info.costForTwo}</h3>
    </div>
  );
};

export default RestaurantCard;