import { PiPlusThin } from "react-icons/pi";

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
          {/* Card */}
          <div className="">
          <div className="w-48 group shadow-2xl mt-5 ml-3">
            <div className="relative overflow-hidden">
              <img src="https://i.ibb.co/QbKT5Zn/redmi-note-13-pro.png" alt="" />
              <div className="absolute h-full w-full bg-black/40 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <PiPlusThin className="text-8xl text-white"/>
              </div>
              <div className="ml-2 my-2">
            <h1 className="text-lg font-bold">Redmi Note 13 Pro</h1>
            <p className="text-xl font-semibold">$300</p>
            </div>
            </div>
            
          </div>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="bg-blue-200 p-4 h-screen">Place Order</div>
      </div>
    </div>
  );
};

export default CreatePurchase;
