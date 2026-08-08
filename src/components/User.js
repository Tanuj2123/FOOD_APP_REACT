import { useState } from "react";

const User = (props)=>{
    const {name,location,contact} = props;
    
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(1);
    return <div className="user-card">
            <h2>Count:{count}</h2>
            <h2>Count2:{count2}</h2>
            <h2>Name:{name} </h2>
            <h2>Location: {location} </h2>
            <h2>Contact: {contact} </h2>
    </div>
}

export default User;