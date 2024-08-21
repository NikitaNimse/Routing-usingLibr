import ReactDOM from "react-dom/client";
import "./index.css"

import Home from "./Views/Home/Home"
import About from "./Views/About/About"
import Contact from "./Views/Contact/Contact"

import{
    createBrowserRouter,
    RouterProvider,
   } from "react-router-dom"
   
   const root = ReactDOM.createRoot(document.getElementById("root"))
   const router =  createBrowserRouter([
       {
           path:"/",
           element:< Home/>
       },
       {
           path:"/about",
           element:<About/>
      },
       {
           path:"/contact",
           element:<Contact/>
       }
   ])
   root.render(<RouterProvider router={router}/>)