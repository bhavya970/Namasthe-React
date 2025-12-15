import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [btnName, setBtnName] = useState("login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo">
                <img src= {LOGO_URL} alt = "logo_url"/>
            </div>
            <ul>
                <li>Online Status:{onlineStatus ? "✅" : "🔴" }</li>
                <li><Link to = "/" ><button>Home</button></Link></li>
                <li><Link to = "/about"><button>About us</button></Link></li>
                <li><Link to = "/contact"><button>Contact us</button></Link></li>
                <li><Link to = "/" ><button>Cart</button></Link></li>
                <li><Link to = "/"><button onClick={() => {
                    btnName == "login" ? setBtnName("logout") : setBtnName("login");
                }}>{btnName}</button></Link></li>
            </ul>
        </div>
    );
};

export default Header;