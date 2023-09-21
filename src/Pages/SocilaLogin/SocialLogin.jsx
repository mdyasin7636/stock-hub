import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { socialLogin } from "../../features/auth/authSlices";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useAddUserMutation } from "../../features/api/apiSlice";
const SocialLogin = ({ buttonText }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [addUser] = useAddUserMutation();
  let from = location.state?.from?.pathname || "/dashboard";
  const { email, name } = useSelector((state) => state.auth);
  const handleGoggle = async () => {
    try {
      dispatch(socialLogin({ navigate, from }));
      const response = await addUser({ email,name,role:"user"});
      if (response.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "User Added",
          text: "User data has been successfully added!",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "An error occurred.",
      });
    }
  };
  return (
    <div>
      <button
        onClick={handleGoggle}
        className="border py-3 w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-md text-white text-center font-semibold flex justify-center items-center"
      >
        <span className="mr-1">
          <FcGoogle size="18px" />
        </span>
        {buttonText}
      </button>
    </div>
  );
};

export default SocialLogin;
