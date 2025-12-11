import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
    const [btnName, setBtnName] = useState("login");
    return (
        <div className="header">
            <div className="logo">
                <img src= {LOGO_URL} alt = "logo_url"/>
            </div>
            <ul>
                <li><button>Home</button></li>
                <li><button>About us</button></li>
                <li><button>Contact us</button></li>
                <li><button>Cart</button></li>
                <li><button onClick={() => {
                    btnName == "login" ? setBtnName("logout") : setBtnName("login");
                }}>{btnName}</button></li>
            </ul>
        </div>
    );
};

export default Header;