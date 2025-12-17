import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [btnName, setBtnName] = useState("login");
    const onlineStatus = useOnlineStatus();
    return (  
        <div className="flex justify-between shadow-lg bg-pink-200 mx-2 sm:bg-yellow-100 lg:bg-orange-500 text-white">
            <div className = "logo-container">
                <img className = "w-26" src= {LOGO_URL} alt = "logo_url"/>
            </div>
            <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold p-2 mx-2 rounded-2xl cursor-pointer">Online Status:{onlineStatus ? "✅" : "🔴" }</li>
                <li className="px-4"><Link to = "/" ><button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold p-2 mx-2 rounded-2xl cursor-pointer">Home</button></Link></li>
                <li className="px-4"><Link to = "/about"><button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold p-2 mx-2 rounded-2xl cursor-pointer">About us</button></Link></li>
                <li className="px-4"><Link to = "/contact"><button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold p-2 mx-2 rounded-2xl cursor-pointer">Contact us</button></Link></li>
                <li className="px-4"><Link to = "/grocery"><button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold p-2 mx-2 rounded-2xl cursor-pointer">Grocery</button></Link></li>
                <li className="px-4"><Link to = "/" ><button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold p-2 mx-2 rounded-2xl cursor-pointer">Cart</button></Link></li>
                <li><Link to = "/"><button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold p-2 mx-2 rounded-2xl cursor-pointer" onClick={() => {
                    btnName == "login" ? setBtnName("logout") : setBtnName("login");
                }}>{btnName}</button></Link></li>
            </ul>
            </div>
        </div>
    );
};

export default Header;