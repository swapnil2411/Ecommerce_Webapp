import React from "react"
import ReactDOM from "react-dom/client"
import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import Header from "./src/shared/Header/Header"
import Footer from "./src/shared/Footer/Footer"
import Home from "./src/pages/Home/Home"
import About from "./src/pages/About/About"
import Products from "./src/pages/Products/Products";
import ProductDetails from "./src/pages/ProductDetails/ProductDetails";
import Contact from "./src/pages/Contact/Contact";

const App = () => {
    return(
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/products/:id",
            element: <Products />,
        },
        {
            path: "/product-details",
            element: <ProductDetails />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
      ],
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
