import React from "react";


class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/tanuj2123");
        const json = await data.json(); 
    }

    render(){
        
        const {name,location,contact} = this.props;

        return <div className="user-card">
            <h2>Name: {name} </h2>
            <h2>Location: {location} </h2>
            <h2>Contact: {contact} </h2>
        </div>
    }
}

export default UserClass;