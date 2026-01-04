import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({data , showItems, setShowIndex}) => {
    // const [showItems ,setShowItems] = useState(false);
    const handleClick = () => {
        setShowIndex();
    }
    return (
    <div>
        <div className="w-8/12 bg-gray-200 p-2 mx-auto my-2 shadow-lg">
        <div className="flex justify-between cursor-pointer" onClick = {handleClick}>
            <span className="font-bold text-xl">{data?.title}({data?.itemCards?.length})</span>
            <span>⬇️</span>
        </div>  
            {showItems && <ItemList items={data.itemCards} />}
        </div>
        {/* items -accordion*/}
    </div>
    );
}
export default RestaurantCategory;