import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart, decreaseItem, removeFromCart } from "../../../../features/cart/cartSlice";
const CartItems = ({ product }) => {
      const { name, price, quantity, _id } = product
      const dispatch = useDispatch()
      const handleDelete = (id) => {
            dispatch(removeFromCart(id))
      }
      const increaseItem = () => {
            dispatch(addToCart(product))
      }
      const decreaseProduct = () => {
            dispatch(decreaseItem(product))
      }

      return (
            <div>
                  <div className="bg-gray-100 p-4">
                        <div className="flex justify-center items-center gap-10 mt-5">
                              <div>
                                    <button onClick={increaseItem} className="text-lg text-center">+</button>
                                    <p className="text-base text-center">{quantity}</p>
                                    <button onClick={decreaseProduct} className="text-2xl text-center">-</button>
                              </div>
                              <div>
                                    <p className="text-sm mb-1">{name}</p>
                                    <span className="bg-gray-200 text-sm text-slate-400 rounded-md px-1">
                                          256GB
                                    </span>
                              </div>
                              <div>
                                    <p className="text-slate-400 text-sm">${parseFloat(price) * quantity}</p>
                                    <p className="font-bold text-sm mt-1">${price}</p>
                              </div>
                              <div>
                                    <button className="btn btn-sm btn-circle hover:bg-red-500 bg-red-100">
                                          <FaTrashAlt onClick={() => handleDelete(_id)} className="text-red-400 hover:text-white cursor-pointer" />
                                    </button>
                              </div>
                        </div>

                  </div>
            </div>
      );
};

export default CartItems;