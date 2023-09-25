import { FaTrashAlt } from "react-icons/fa";

const CreatePurchase = () => {
  return (
    <div className="grid grid-cols-7 gap-4">
      <div className="col-span-5">
        <div className="bg-gray-200 p-4 h-screen">
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
          Show Products Here
        </div>
      </div>
      <div className="col-span-2">
        <div className="bg-gray-50 p-4 h-screen">
          <hr className="mt-8" />
          <div className="flex justify-center items-center gap-4 mt-12">
            <div>
              <p className="text-lg text-center">+</p>
              <p className="text-base text-center">0</p>
              <p className="text-2xl text-center">-</p>
            </div>
            <div>
              <p className="text-sm mb-1">Apple iPhone 14 Pro ,</p>
              <span className="bg-gray-200 text-sm text-slate-400 rounded-md px-1">512GB</span>
            </div>
            <div>
              <p className="text-slate-400 text-sm">$1,299.000 x 1</p>
              <p className="font-bold text-sm mt-1">$1,299.000</p>
            </div>
            <div>
              <button className="btn btn-sm btn-circle hover:bg-red-500 bg-red-100">
                <FaTrashAlt className="text-red-400 hover:text-white" />
              </button>
            </div>
          </div>
          <div className="flex justify-center items-end gap-48 mt-28">
            <p className="text-slate-400  font-medium text-sm">Sub Total</p>
            <p className="text-slate-400 font-medium text-sm">$1,299.000</p>
          </div>
          <div className="flex justify-evenly items-end gap-48 mt-2">
            <p className="text-slate-400 font-medium text-sm">Tax</p>
            <p className="text-slate-400 font-medium text-sm">$0.000</p>
          </div>
          <hr className="mt-2" />
          <div className="flex justify-evenly items-end gap-48">
            <p className="text-lg font-bold">Total</p>
            <p className="text-lg font-bold">$1,299.000</p>
          </div>
          <div className="text-end mt-4">
            <input type="submit" className="btn-sm px-2 bg-blue-500 text-white font-semibold" value="Place Order" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePurchase;
