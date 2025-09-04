import {CDN_URL} from "../utils/constants";
const RestaurantCard = (props) => {
  return (
      <div className="CardContainer" style={{background:"#310A69"}}>
          <img src = {CDN_URL + props.imgId }/>
          <h3>{props.resName}</h3>
          <h3>{props.cusines}</h3>
          <h3>{props.rating}</h3>
          <h3>{props.timeTaken}</h3>
          <h3>{props.price}</h3>
      </div>
  );
};

export default RestaurantCard;