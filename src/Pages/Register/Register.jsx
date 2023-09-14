import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div className="min-h-screen p-12" style={{backgroundImage: `url("https://i.ibb.co/QQnk118/inventory3.jpg")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',  backgroundPosition: 'center' }}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-full lg:w-8/12 bg-white rounded-xl mx-auto my-3 shadow-2xl overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center px-9 text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black">
            <h1 className="text-3xl mb-3 font-bold">Welcome to StockHub</h1>
            <div>
              <p className="font-thin">
                Join our inventory revolution and experience the future of
                product management. It&apos;s time to organize, optimize, and
                elevate your business. Start your StockHub journey today!
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-12 py-12">
            <h1 className="text-3xl mb-2 font-bold">Register</h1>
            <p className="font-thin ">Streamline Your Inventory - Join Today</p>
            <form>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold">Upload Image</span>
                </label>
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  className="file-input file-input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="label font-semibold">
                Already Have an Account?
                <Link className="font-bold" to="/login">
                  Login
                </Link>
              </div>
              <div className="mt-2">
                <button className="btn w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-md text-white text-center font-semibold">
                  Register Now
                </button>
              </div>
              <div className="divider mt-3 mb-3 font-semibold">OR</div>
              <button className="btn w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-md text-white text-center font-semibold">
                Register With Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
