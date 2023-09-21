import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Login from "../Pages/Login/Login";

const Main = () => {
  const location = useLocation();

  const isRootPath = location.pathname === "/";

  return <div>{isRootPath ? <Login /> : <Outlet />}</div>;
};

export default Main;
