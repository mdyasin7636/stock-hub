import { PiPlusThin } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../features/cart/cartSlice";
const CreatePurchaseCard = ({ product }) => {
      const { photo ,name ,price} = product
      const dispatch = useDispatch()
      const handleCart = (product) => {
            dispatch(addToCart(product))
      }
      return (
            <div onClick={() => handleCart(product)} className="w-48 group shadow-2xl mt-5 ml-3 rounded-md overflow-hidden">
                  <div className="relative">
                        <img
                              className="p-4"
                              src={photo}
                              alt=""
                        />
                        <div className="absolute h-full w-full bg-black/40 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-md ">
                              <PiPlusThin className="text-8xl text-white" />
                        </div>
                        <div className="p-2">
                              <h1 className="text-lg font-bold">{name}</h1>
                              <p className="text-xl font-semibold">${price}</p>
                        </div>
                  </div>
            </div>
      );
};

export default CreatePurchaseCard;