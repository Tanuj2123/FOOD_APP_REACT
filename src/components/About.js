import User from "./User";
import UserClass from "./UserClass";



const About = ()=>{
    return (
        <div className="about-div">
            <h1>React About us Page</h1>
            <UserClass name={"Tanuj Class"} location={"Vizag Class"} contact={"xyz@gmail.com Class"} />
        </div>
    )
}

export default About;