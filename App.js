import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import {lazy , Suspense} from "react";

const Grocery = lazy(() => import("./src/components/Grocery"));

const AppLayout = () => {
   

    return (
        <div className="container">
            <Header/>
            <Outlet/>
        </div>
    );
};

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element:<Body/>
         },
        {
        path: "/about",
        element:<About/>
    },     
    {
        path: "/contact",
        element:<Contact/>
    },
    {
        path: "/grocery",
        element:<Suspense fallback ={<h1>"Loading..."</h1>}><Grocery/></Suspense>
    },
    {
        path: "/restaurants/:resid",
        element:<RestaurantMenu></RestaurantMenu>
    }
],

 errorElement:<Error/>
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);