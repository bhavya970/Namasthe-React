const ItemList = ({items}) => {
    console.log(items);
    return <div>
        {items.map((item) => <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-300 flex justify-between">
            <div className="w-9/12">
            <div className="py-2 flex justify-between">
                <span>{item.card.info.name}</span>
                <span> - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice}</span>
            </div>
            <p className="py-2 text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
                <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + item.card.info.imageId} alt={item.card.info.name} className="w-full"/>
                <button className="bg-black text-white p-1 mt-2 w-full rounded">
                    Add +
                </button>
            </div>
        </div>
    )}
    </div>;
}
export default ItemList;