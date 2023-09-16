import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layouts/Dashboard";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register/>
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Main/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "Main",
        element: <Dashboard/>
      },
    ],
  },
]);
