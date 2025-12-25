const RestaurantCategory = ({data}) => {
    return (
    <div>
        <div className="w-8/12 bg-gray-200 p-2 mx-auto my-2 justify-between flex cursor-pointer">
            <span className="font-bold text-xl">{data.title}({data.itemCards?.length})</span>
            <span>⬇️</span>
        </div>
        {/* items -accordion*/}
    </div>
    );
}
export default RestaurantCategory;