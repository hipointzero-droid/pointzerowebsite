import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Project from "../Pages/Projects/Project";
import Services from "../Pages/Service/Services";
import AiDevelopment from "../Pages/Service/AiDevelopment";
import RagDevelopment from "../Pages/Service/RagDevelopment";
import WebDevelopment from "../Pages/Service/WebDevelopment";
import MobileDevelopment from "../Pages/Service/MobileDevelopment";
import MvpDevelopment from "../Pages/Service/MvpDevelopment";
import UiUxDesign from "../Pages/Service/UiUxDesign";
import DevOps from "../Pages/Service/DevOps";
import Blog from "../Pages/Blog/Blog";
import Industries from "../Pages/Industries/Industries";


export const routes = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/contact", element: <Contact /> },
    { path: "/about", element: <About /> },
    { path: "/project", element: <Project /> },
    { path: "/industries", element: <Industries /> },
    { path: "/services", element: <Services /> },
    { path: "/services/ai-development-nepal", element: <AiDevelopment /> },
    { path: "/services/rag-chatbot-development", element: <RagDevelopment /> },
    { path: "/services/web-development-nepal", element: <WebDevelopment /> },
    { path: "/services/mobile-app-development-nepal", element: <MobileDevelopment /> },
    { path: "/services/mvp-development", element: <MvpDevelopment /> },
    { path: "/services/ui-ux-design-nepal", element: <UiUxDesign /> },
    { path: "/services/devops-cloud-nepal", element: <DevOps /> },
    { path: "/blog", element: <Blog /> },
    { path: "/blog/category/:category", element: <Blog /> },
    { path: "/blog/:slug", element: <Blog /> },
    { path: "*", element: <NotFound /> },
])
