import Navbar from "./../../Components/Navbar/Navbar.js";
import  "./Home.css"
import homeimg from "./Home.png"

const Home = () =>{
    return (<>
     <Navbar/>
    <h1 className="title"> Home page</h1>
    <img className="img" src={homeimg} />
    </>)
}
export default Home