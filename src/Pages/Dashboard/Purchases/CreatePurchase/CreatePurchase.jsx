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
        <div className="bg-blue-200 p-4 h-screen">Place Order</div>
      </div>
    </div>
  );
};

export default CreatePurchase;
