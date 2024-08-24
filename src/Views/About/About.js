import Navbar from "./../../Components/Navbar/Navbar.js"
import "./About.css"
import aboutimg from "./About.png"

const About = () =>{
    return (<>
    <Navbar/>
    <h1 className="title"> About page</h1>
    <img   className="img" src={aboutimg} />
    </>)
}
export default About