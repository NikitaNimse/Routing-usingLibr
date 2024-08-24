import Navbar from "./../../Components/Navbar/Navbar.js";
import  "./Home.css"
import homeimg from "./Home.png"
import toast, { Toaster } from "react-hot-toast";

const Home = () =>{
    return (<>
     <Navbar/>
    <h1 className="title"> Home page</h1>
    <img className="img" src={homeimg} /> 

    <button type="button" onClick={()=>{
        toast.loading("please wait...")
    }}> loading
    </button>

    <button type="button" onClick={()=>{
            toast.dismiss()
    toast.success("Welcome to Home page")
    }}> Finish
        </button>
    <Toaster/>
    </>)
}
export default Home