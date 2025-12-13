import {CDN_URL} from "../utils/constants";
import resList from "../utils/mockData";
const RestaurantCard = (props) => {
  return (
      <div className="CardContainer" style={{background:"#310A69"}}>
          <img src = {props.info.cloudinaryImageId}/>
          <h3>{props?.info?.name}</h3>
          <h3>{props?.info?.cuisines.join(", ")}</h3>
          <h3>{props?.info?.avgRating}</h3>
          <h3>{props?.info?.sla.deliveryTime}</h3>
          <h3>{props?.info?.costForTwo}</h3>
      </div>
  );
};

export default RestaurantCard;