import { PiPlusThin } from "react-icons/pi";
import { FaTrashAlt } from "react-icons/fa";

const CreatePurchase = () => {
  return (
    <div className="grid grid-cols-7 bg-gray-200 h-screen">
      <div className="col-span-5 ">
        <div className="p-4 bg-gray-200">
          <div className="flex justify-between text-center">
            <div className="w-full">
              <input
                type="text"
                placeholder="Search by Product Name"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="w-full">
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  All Categories
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
          </div>
          {/* Card */}
          <div className="grid grid-cols-3">
            <div className="w-48 group shadow-2xl mt-5 ml-3 rounded-md overflow-hidden">
              <div className="relative">
                <img
                  className="p-4"
                  src="https://i.ibb.co/QbKT5Zn/redmi-note-13-pro.png"
                  alt=""
                />
                <div className="absolute h-full w-full bg-black/40 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-md ">
                  <PiPlusThin className="text-8xl text-white" />
                </div>
                <div className="p-2">
                  <h1 className="text-lg font-bold">Redmi Note 13 Pro</h1>
                  <p className="text-xl font-semibold">$300</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="bg-gray-100 p-4 h-screen">
          <hr className="mt-8" />
          <div className="flex justify-center items-center gap-4 mt-12">
            <div>
              <p className="text-lg text-center">+</p>
              <p className="text-base text-center">0</p>
              <p className="text-2xl text-center">-</p>
            </div>
            <div>
              <p className="text-sm mb-1">Redmi Note 13 Pro</p>
              <span className="bg-gray-200 text-sm text-slate-400 rounded-md px-1">
                256GB
              </span>
            </div>
            <div>
              <p className="text-slate-400 text-sm">$300.00 x 1</p>
              <p className="font-bold text-sm mt-1">$300.00</p>
            </div>
            <div>
              <button className="btn btn-sm btn-circle hover:bg-red-500 bg-red-100">
                <FaTrashAlt className="text-red-400 hover:text-white" />
              </button>
            </div>
          </div>
          <div className="flex justify-center items-end gap-40 mt-28">
            <p className="text-slate-400 font-medium text-sm">Sub Total</p>
            <p className="text-slate-400 font-medium text-sm">$300.00</p>
          </div>
          <div className="flex justify-evenly items-end gap-48 mt-2">
            <p className="text-slate-400 font-medium text-sm">Tax</p>
            <p className="text-slate-400 font-medium text-sm">$0.00</p>
          </div>
          <hr className="mt-2" />
          <div className="flex justify-evenly items-end gap-48 mt-2">
            <p className="text-lg font-bold">Total</p>
            <p className="text-lg font-bold">$300.00</p>
          </div>
          <div className="text-end mt-4">
            <button className="btn btn-sm text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black font-semibold">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePurchase;
