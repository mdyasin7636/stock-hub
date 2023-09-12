import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createUser } from "../../features/auth/authSlices";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch=useDispatch()

    const onSubmit = data => {
        const {email,name,password,photo}=data
        dispatch(createUser({email,password,name,photo}))
    };
    return (
        
                <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex w-full gap-20">
                    <div className="card flex-shrink-0 w-full h-auto max-w-sm shadow-2xl bg-base-100 my-32">
                        <h1 className="text-3xl text-center font-bold mt-3">Register Now!</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' {...register("name")} placeholder="User Name" className="input input-bordered" />
                            </div>
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
                                <input type="password" name='password' {...register("password", { required: true, minLength: 6 })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-500">Password is too Short</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name='photo' {...register("photo")} placeholder="photo" className="input input-bordered" />
                            </div>


                            <div className="form-control mt-2">
                                <button className="btn btn-info text-white">Sign Up</button>
                            </div>

                        </form>
                        <p className='text-center'>Already Have an Account?<Link to="/login"><button className="btn btn-active px-1 py-0 btn-link">Please Login</button></Link></p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;