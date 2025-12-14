import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {name , location} = this.props;   
        return <div className="user-card">
        <h2>Name:{name}</h2>
        <h2>Location:{location}</h2>
        <h3>Contact:bhavyanov5@</h3>
    </div>
    }
}

export default UserClass;