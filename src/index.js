import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Route, RouterProvider, } from "react-router-dom";
import App from "./App";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import Products from "./Components/Pages/Products";
import OurShops from "./Components/Pages/OurShops";
import CartPage from "./Components/Pages/CartPage";
import New from "./Components/New";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/products",
        element: <Products />
    },
    {
        path: "/shops",
        element: <OurShops />
    },
    {
        path: "/cart",
        element: <CartPage />
    },
<Route path='/New/:id' element={<New/>} />
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);