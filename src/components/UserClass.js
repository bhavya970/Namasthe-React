import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count : 0,
            count2 : 1,
            userInfo : {
                name : "Dummy Name",
                location : "Dummy Location"
            },
            }
        };
    async componentDidMount() {
        this.timer =  setInterval( () => {
            console.log("Timer");
        }, 1000);
        const data =  await  fetch("https://api.github.com/users/akshay");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo : json,
        });

    }
    componentDidUpdate(){
        console.log("For every subsequent render it is called");
        console.log("to behave as only once callled like when we used dependency array [] in useEffect in functional component we can use condition inside componentDidUpdate");
        console.log("Example: if(this.state.count !== prevState.count) { // do something }");
        if(this.state.count !== this.prevState?.count){
            //do something when count changes then only this block will be executed
        }
    }
    componentWillUnmount(){
        console.log("Executed before the component is removed from the DOM" );
        //used for cleanup activities
        //like clearing timers, cancelling network requests or removing event listeners
        clearInterval(this.timer);
    } 
    render() {  
        const {count , count2} = this.state;
        const {name , location , avatar_url} = this.state.userInfo;
        return <div className="user-card">
        <h1>Count = {count}</h1>
        <h1>Count2 = {count2}</h1>
        <button onClick={ () => {
            this.setState({
                count : this.state.count + 1,
                count2 : count2 + 1
            })
        }}>Increment Count</button>
        <img src={avatar_url} />
        <h2>Name:{name}</h2>
        <h2>Location:{location}</h2>
        <h3>Contact:bhavyanov5@</h3>
    </div>
    }
}

export default UserClass;