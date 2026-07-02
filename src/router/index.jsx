import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";

// Home stays eagerly bundled — it is the LCP-critical route. Every other
// route is code-split so the first paint doesn't pay for Blog content,
// service pages and case studies the visitor may never open.
// NOTE: do NOT vendor-split react/mui in vite.config.js (circular ESM deps
// crash production); route-level dynamic imports like these are safe.
const NotFound = lazy(() => import("../Pages/NotFound/NotFound"));
const Contact = lazy(() => import("../Pages/Contact/Contact"));
const About = lazy(() => import("../Pages/About/About"));
const Project = lazy(() => import("../Pages/Projects/Project"));
const Services = lazy(() => import("../Pages/Service/Services"));
const AiDevelopment = lazy(() => import("../Pages/Service/AiDevelopment"));
const RagDevelopment = lazy(() => import("../Pages/Service/RagDevelopment"));
const WebDevelopment = lazy(() => import("../Pages/Service/WebDevelopment"));
const MobileDevelopment = lazy(() => import("../Pages/Service/MobileDevelopment"));
const MvpDevelopment = lazy(() => import("../Pages/Service/MvpDevelopment"));
const UiUxDesign = lazy(() => import("../Pages/Service/UiUxDesign"));
const DevOps = lazy(() => import("../Pages/Service/DevOps"));
const Blog = lazy(() => import("../Pages/Blog/Blog"));
const Industries = lazy(() => import("../Pages/Industries/Industries"));

// Match the site background so route transitions never flash white.
const routeFallback = <div className="min-h-screen bg-black" aria-busy="true" />;

const wrap = (element) => <Suspense fallback={routeFallback}>{element}</Suspense>;

export const routes = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/contact", element: wrap(<Contact />) },
    { path: "/about", element: wrap(<About />) },
    { path: "/project", element: wrap(<Project />) },
    { path: "/industries", element: wrap(<Industries />) },
    { path: "/services", element: wrap(<Services />) },
    { path: "/services/ai-development-nepal", element: wrap(<AiDevelopment />) },
    { path: "/services/rag-chatbot-development", element: wrap(<RagDevelopment />) },
    { path: "/services/web-development-nepal", element: wrap(<WebDevelopment />) },
    { path: "/services/mobile-app-development-nepal", element: wrap(<MobileDevelopment />) },
    { path: "/services/mvp-development", element: wrap(<MvpDevelopment />) },
    { path: "/services/ui-ux-design-nepal", element: wrap(<UiUxDesign />) },
    { path: "/services/devops-cloud-nepal", element: wrap(<DevOps />) },
    { path: "/blog", element: wrap(<Blog />) },
    { path: "/blog/category/:category", element: wrap(<Blog />) },
    { path: "/blog/:slug", element: wrap(<Blog />) },
    { path: "*", element: wrap(<NotFound />) },
])
