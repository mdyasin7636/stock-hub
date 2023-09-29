
import CreatePurchaseCard from "./CreatePurchaseCard";
import { useGetProductsQuery } from "../../../../features/api/apiSlice";
import { FadeLoader } from 'react-spinners';
import CartItems from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartTotal } from "../../../../features/cart/cartSlice";

const CreatePurchase = () => {
  const { data, isError, isLoading, error } = useGetProductsQuery()
  const { cartItems, quantityAmount } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch, cartItems])
  const override = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "red",
  };
  let content = null
  if (isLoading) content = <FadeLoader cssOverride={override}
    size={100}
    aria-label="Loading Spinner"
    data-testid="loader" color="#36d7b7" />
  if (!isLoading && isError) {
    content = <h3 className="text-red-500">{error}</h3>
  }
  if (!isLoading && !isError && data.length === 0) {
    content = <h3 className="text-red-500">There is no Product</h3>
  }
  if (!isLoading && !isError && data.length > 0) {
    content = data?.map(item => <CreatePurchaseCard key={item._id} product={item}></CreatePurchaseCard>)
  }


  return (
    <div className="grid grid-cols-7 bg-gray-200">
      <div className="col-span-5">
        <div className="p-4">
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
            {content}
          </div>
        </div>
      </div>
      <div className="col-span-2 bg-gray-100">
        {cartItems.length > 0 ? cartItems?.map(item => <CartItems key={item._id} product={item}></CartItems>) : <h3>There is no product</h3>}
        <div className="md:flex justify-center items-end gap-4 mt-2">
          <p className="text-slate-400 font-medium text-sm">Sub Total</p>
          <p className="text-slate-400 font-medium text-sm">${quantityAmount}</p>
        </div>
        <div className="md:flex justify-evenly items-end gap-4 mt-2">
          <p className="text-slate-400 font-medium text-sm">Tax</p>
          <p className="text-slate-400 font-medium text-sm">$0.00</p>
        </div>
        <div className="md:flex justify-evenly items-end gap-4 mt-2">
          <p className="text-slate-400 font-medium text-sm">Shipping</p>
          <p className="text-slate-400 font-medium text-sm">$0.00</p>
        </div>
        <div className="md:flex justify-evenly items-end gap-4 mt-2">
          <p className="text-slate-400 font-medium text-sm">Discount</p>
          <p className="text-slate-400 font-medium text-sm">$0.00</p>
        </div>
        <hr className="mt-2" />
        <div className="md:flex justify-evenly items-end gap-4 mt-2">
          <p className="text-lg font-bold">Total</p>
          <p className="text-lg font-bold">${quantityAmount}</p>
        </div>
        <div className="md:flex justify-center gap-2 px-2 mt-4">
          <div className="md:flex gap-2">
            <div className="dropdown dropdown-top">
              <label tabIndex={0} className="btn btn-sm hover:text-white bg-white hover:bg-gradient-to-r from-gray-700 via-gray-900 to-black font-semibold">Shipping</label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded w-48">
                <div className="md:flex justify-center text-center items-center me-2 mt-1">
                <input type="text" style={{ width: '130px' }} placeholder="Amount" className="bg-white p-2 mx-2" />
                <input className='btn-xs text-slate-400 bg-white text-sm font-semibold' type="submit" value="Flat" />
                </div>
              </ul>
            </div>
            <div className="dropdown dropdown-top">
              <label tabIndex={0} className="btn btn-sm hover:text-white bg-white hover:bg-gradient-to-r from-gray-700 via-gray-900 to-black font-semibold">Discount</label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded w-48">
                <div className="md:flex justify-center text-center items-center me-2 mt-1">
                <input type="text" style={{ width: '130px' }} placeholder="Amount" className="bg-white p-2 mx-2" />
                <input className='btn-xs text-slate-400 bg-white text-sm font-semibold' type="submit" value="Flat" />
                </div>
              </ul>
            </div>
          </div>
          <button className="btn btn-sm text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black font-semibold">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePurchase;
