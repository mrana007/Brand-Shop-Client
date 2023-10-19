import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddProduct from "../pages/AddProduct/AddProduct";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivetRoutes from "./PrivateRoutes";
import MyCart from "../pages/MyCart/MyCart";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
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
        element: <PrivetRoutes><Products /></PrivetRoutes>,
        loader: ({params})=> fetch(`http://localhost:5000/products/${params.brandName}`)
    },
    {
        path:'/product/:_id',
        element: <PrivetRoutes><ProductDetails /></PrivetRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params._id}`)
    },
    {
        path:'/update/:_id',
        element: <PrivetRoutes><UpdateProduct /></PrivetRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params._id}`)
    },
    {
        path:'/cart',
        element: <MyCart></MyCart>
    }
    ],
  },
]);

export default router;
