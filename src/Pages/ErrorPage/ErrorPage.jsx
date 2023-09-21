import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import errorPage from "../../assets/error.json";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container text-center">
        <Lottie
          className="mx-auto w-4/12"
          animationData={errorPage}
          loop={true}
        />
        <div className="mt-10">
          <Link
            to="/"
            className="text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-md p-4 font-semibold "
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
