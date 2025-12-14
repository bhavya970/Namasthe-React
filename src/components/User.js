import { useEffect, useState } from "react";

const User = ({ name }) => {
    const [count , setCount] = useState(0);
    const [count2] = useState(1);
    useEffect( () => {
        //API CALL
        console.log("useEffect called");
        const timer = setInterval( () => {
            console.log("Timer");
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, []); //dependency array
    console.log("Rendering User Component");
    return <div className="user-card">
        <h1>Count = {count}</h1>
        <h1>Count2 = {count2}</h1>
        <button onClick={ () => {
             setCount(count + 1);
        }}>Increment Count</button>
        <h2>Name:{name}</h2>
        <h2>Location:PapayaPalem</h2>
        <h3>Contact:bhavyanov5@</h3>
    </div>
}

export default User;