import { useForm } from "react-hook-form";
import { useDispatch} from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logIn } from "../../features/auth/authSlices";
import SocialLogin from "../SocialLogIn/SocialLogin";


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const onSubmit = data => {
        const { email, password, } = data
        dispatch(logIn({ email, password ,navigate,from}))
    }


    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex w-full gap-20">
                <div className="card flex-shrink-0 w-full h-auto max-w-sm shadow-2xl bg-base-100 my-32">
                    <h1 className="text-3xl text-center font-bold mt-3">Login now!</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-500">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                            {errors.password && <span className="text-red-500">Password is required</span>}
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-info text-white">Login</button>
                        </div>

                    </form>
                    <SocialLogin></SocialLogin>
                    <p className='text-center'>New Member?<Link to="/register"><button className="btn btn-active px-1 py-0 btn-link">Please Register</button></Link></p>

                </div>
            </div>
        </div>
    );
};

export default Login;