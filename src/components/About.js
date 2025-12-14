import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return (
        <div>
            <h1>About Us Page</h1>
            <p>This is Namasthe React Course Done by Bhavya </p>
            <User name= {"Bhavya (Function)"} />
            <UserClass name = {"Bhavya (Class)"} location = {"Papayapalem class"}/>
        </div>
    )
}

export default About;