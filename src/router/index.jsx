import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";


export const routes=createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/contact",
        element:<Contact/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path: "*", 
        element: <NotFound /> 
      }
])