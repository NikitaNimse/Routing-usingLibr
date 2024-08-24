import Navbar from "./../../Components/Navbar/Navbar.js";
import "./Contact.css"
import contactimg from "./contact.png"

const Contact = () =>{
    return (<>
     <Navbar/>
    <h1 className="title"> Contact page</h1>
    <img className="img" src={contactimg} />
    </>)
}
export default Contact