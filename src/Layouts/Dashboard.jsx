import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineLibraryAdd, MdOutlineLibraryAddCheck } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { BiCategory } from "react-icons/bi";
import { TbReportAnalytics } from "react-icons/tb";
import { CiSaveDown2, CiMoneyCheck1 } from "react-icons/ci";
import { Link, Outlet } from "react-router-dom";
import React from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { logOut } from "../features/auth/authSlices";
import auth from "../firebase/firebase.config";
import { FaSignOutAlt } from "react-icons/fa";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth);
    dispatch(logOut());
    navigate("/");
  };

  const menus = [
    { name: "Add Product", link: "/dashboard/addProduct", icon: MdOutlineLibraryAdd },
    { name: "All Products", link: "/dashboard/allProducts", icon: MdOutlineLibraryAddCheck },
    { name: "Category", link: "/dashboard/category", icon: BiCategory },
    { name: "Users", link: "", icon: HiOutlineUsers, margin: true },
    { name: "Analytics", link: "", icon: TbReportAnalytics },
    { name: "Payment", link: "", icon: CiMoneyCheck1 },
    { name: "Saved", link: "", icon: CiSaveDown2, margin: true },
  ];

  const [open, setOpen] = useState(true);

  return (
    <div>
      <section className="flex gap-6">
        <div
          className={`text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black min-h-screen ${open ? "w-72" : "w-16"} duration-500 text-gray-100 px-4`}
        >
          <div className="py-3 flex justify-end">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={` ${menu?.margin && "mt-5"} group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${open && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}

            <Link
              onClick={handleLogout}
              className={`mt-5 group flex items-center text-sm gap-3.5 font-medium p-3.5 hover:bg-gray-800 rounded-md transition-all duration-500`}
            >
              <div>{React.createElement(FaSignOutAlt, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${menus.length + 3}00ms`,
                }}
                className={`whitespace-pre duration-500`}
              >
                SignOut
              </h2>
              <h2
                className={`${open && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
              >
                SignOut
              </h2>
            </Link>
          </div>
        </div>

        <div className="m-3 text-xl text-gray-900 font-semibold">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
