import React from "react";


class UserClass extends React.Component{

    constructor(props){
        super(props);
        //console.log( this.props.name + "constructor");
        this.state = {
        }
    }

    async componentDidMount(){
        //console.log( this.props.name +"Mounted");
        const data = await fetch("https://api.github.com/users/tanuj2123");
        const json = await data.json(); 
        console.log(json);
    }

    render(){
        //console.log("render");
        const {name,location,contact} = this.props;

        return <div className="user-card">
            <h2>Name: {name} </h2>
            <h2>Location: {location} </h2>
            <h2>Contact: {contact} </h2>
        </div>
    }
}

export default UserClass;