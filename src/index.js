import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Route, RouterProvider, } from "react-router-dom";
import App from "./App";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import Products from "./Components/Pages/Products";
import CartPage from "./Components/Pages/CartPage";
import New from "./Components/New";
import SignSuccess from "./Components/Pages/SignSuccess";

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
        path: "/cart",
        element: <CartPage />
    },
    {
        path: "/sign-success",
        element: <SignSuccess />
    },
    <Route path='/New/:id' element={<New />} />
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);