import { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsTriangle } from "react-icons/bs";
import { MdOutlineLibraryAdd, MdOutlineLibraryAddCheck } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { CiSaveDown2, CiMoneyCheck1 } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { BsChevronDown } from "react-icons/bs";
import { RiSettings4Line } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { logOut } from "../features/auth/authSlices";
import auth from "../firebase/firebase.config";

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  const [submenuOpen, setSubmenuOpen] = useState({
    1: false,
    2: false,
  });

  const toggleSubMenu = (index) => {
    setSubmenuOpen((prevSubmenuOpen) => ({
      ...prevSubmenuOpen,
      [index]: !prevSubmenuOpen[index],
    }));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth);
    dispatch(logOut());
    navigate("/");
  };

  const menus = [
    { title: "Dashboard", link: "/dashboard", icon: <MdOutlineLibraryAdd /> },
    {
      title: "Products",
      link: "/dashboard",
      icon: <MdOutlineLibraryAddCheck />,
      submenu: true,
      submenuItems: [
        { title: "Add Product", link: "/dashboard/addProduct" },
        { title: "All Products", link: "/dashboard/allProducts" },
        { title: "Category", link: "/dashboard/category" },
      ],
    },
    {
      title: "Purchases",
      link: "",
      icon: <HiOutlineUsers />,
      spacing: true,
      submenu: true,
      submenuItems: [
        { title: "Create Purchase", link: "/dashboard/createPurchase" },
        { title: "Purchase History", link: "/dashboard/purchaseHistory" },
      ],
    },
    { title: "Analytics", link: "", icon: <TbReportAnalytics /> },
    { title: "Payment", link: "", icon: <CiMoneyCheck1 /> },
    { title: "Saved", link: "", icon: <CiSaveDown2 />, spacing: true },
  ];

  return (
    <div className="flex">
      <div
        className={`text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black min-h-screen p-5 pt-8 relative duration-300 ${
          open ? "w-60" : "w-20"
        }`}
      >
        <BsArrowLeftCircle
          className={`text-2xl bg-white text-black rounded-full absolute -right-2.5 to-9 border border-black cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <BsTriangle
            className={`text-3xl cursor-pointer block float-left mr-2 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`origin-left font-medium text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            StockHub
          </h1>
        </div>
        <div>
          {menus.map((menu, index) => (
            <div key={index}>
              <Link
                to={menu?.link}
                className={`flex items-center text-sm gap-x-4 font-medium p-2 mt-3 hover:bg-gray-800 rounded-md ${
                  menu.spacing ? "mt-8" : "mt-2"
                }`}
                onClick={() => menu.submenu && toggleSubMenu(index)}
              >
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <RxDashboard />}
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-300 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <BsChevronDown
                    className={`text-xl ${
                      submenuOpen[index] ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>
              {menu.submenu && submenuOpen[index] && open && (
                <div>
                  {menu.submenuItems.map((submenuItem, submenuIndex) => (
                    <Link
                      to={submenuItem?.link}
                      key={submenuIndex}
                      className="flex items-center text-sm gap-x-4 font-medium p-2 mt-2 px-5 hover:bg-gray-800 rounded-md cursor-pointer "
                    >
                      {submenuItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            className="flex items-center text-sm gap-x-4 font-medium p-2 mt-3 hover:bg-gray-800 rounded-md"
            onClick={handleLogout}
          >
            <span className="text-2xl block float-left">
              <RiSettings4Line />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-300 ${
                !open && "hidden"
              }`}
            >
              Logout
            </span>
          </Link>
        </div>
      </div>
      <div className="p-7">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
