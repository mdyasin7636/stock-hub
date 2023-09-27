import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layouts/Dashboard";
import Category from "../Pages/Dashboard/Products/Category/Category";
import AllProducts from './../Pages/Dashboard/Products/All Products/AllProducts';
import AddProduct from "../Pages/Dashboard/Products/Add Prouct/AddProduct";
import CreatePurchase from "../Pages/Dashboard/Purchases/CreatePurchase/CreatePurchase";
import PurchaseHistory from "../Pages/Dashboard/Purchases/PurchaseHistory/PurchaseHistory";
import EditProductModal from "../Pages/Dashboard/Products/All Products/EditProductModal";
import ViewProduct from "../Pages/Dashboard/Products/All Products/ViewProduct";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Login/>
      },
      {
        path: "register",
        element: <Register/>
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path:"addProduct",
        element: <AddProduct/>
      },
      {
        path:"allProducts",
        element: <AllProducts/>
      },
      {
        path:"editProduct/:id",
        element:<EditProductModal></EditProductModal>
      },
      {
        path:"viewProduct/:id",
        element:<ViewProduct></ViewProduct>

      },
      {
        path:"category",
        element: <Category/>
      },
      {
        path: "createPurchase",
        element: <CreatePurchase/>
      },
      {
        path: "purchaseHistory",
        element: <PurchaseHistory/>
      },
      {
        path: 'viewProduct',
        element: <ViewProduct></ViewProduct>
      }
    ],
  },
]);
