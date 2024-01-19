import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Project from "../Pages/Projects/Project";
import Services from "../Pages/Service/Services";


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
        path:"/project",
        element:<Project/>
    },
    {
        path:"/services",
        element:<Services/>
    },
    {
        path: "*", 
        element: <NotFound /> 
      }
])