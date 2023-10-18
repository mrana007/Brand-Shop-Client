import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddProduct from "../pages/AddProduct/AddProduct";
import Products from "../pages/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:5000/brands')
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/addProduct",
        element: <AddProduct />
      },
      {
        path: '/products/:brandName',
        element: <Products />,
        loader: ({params})=> fetch(`http://localhost:5000/products/${params.brandName}`)
    },
    ],
  },
]);

export default router;
