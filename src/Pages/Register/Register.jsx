// import { useForm } from "react-hook-form";
// import Swal from 'sweetalert2';
// import { useDispatch } from "react-redux";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { createUser } from "../../features/auth/authSlices";
// import { useAddUserMutation } from "../../features/api/apiSlice";

// const Register = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const navigate=useNavigate()
//     const dispatch = useDispatch()
//     const location=useLocation()
//     let from = location.state?.from?.pathname || "/";
//     const [addUser] = useAddUserMutation()

//     const onSubmit = async (data) => {
//         const { email, name, password, photo } = data
//         dispatch(createUser({ email, password, name, photo }))
//         try {
//             const response = await addUser({ email, name })
//             console.log(response)
//             if (response.data.insertedId) {
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'User Added',
//                     text: 'User data has been successfully added!',
//                 });
//                 navigate(from, { replace: true });
//             }
//             else {
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Error',
//                     text: 'An error occurred while adding the user data.',
//                 });
//             }
//         }
//         catch (error) {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Error',
//                 text: error.message || 'An error occurred.',
//             });
//         }
//     };
//     return (

//         <div>
//             <div className="hero bg-base-200">
//                 <div className="hero-content flex w-full gap-20">
//                     <div className="card flex-shrink-0 w-full h-auto max-w-sm shadow-2xl bg-base-100 my-32">
//                         <h1 className="text-3xl text-center font-bold mt-3">Register Now!</h1>
//                         <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-2">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Name</span>
//                                 </label>
//                                 <input type="text" name='name' {...register("name")} placeholder="User Name" className="input input-bordered" />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
//                                 {errors.email && <span className="text-red-500">Email is required</span>}
//                             </div>

//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input type="password" name='password' {...register("password", { required: true, minLength: 6 })} placeholder="password" className="input input-bordered" />
//                                 {errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>}
//                                 {errors.password?.type === 'minLength' && <p className="text-red-500">Password is too Short</p>}
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Photo</span>
//                                 </label>
//                                 <input type="text" name='photo' {...register("photo")} placeholder="photo" className="input input-bordered" />
//                             </div>


//                             <div className="form-control mt-2">
//                                 <button className="btn btn-info text-white">Sign Up</button>
//                             </div>

//                         </form>
//                         <p className='text-center'>Already Have an Account?<Link to="/login"><button className="btn btn-active px-1 py-0 btn-link">Please Login</button></Link></p>

//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Register;

import { useForm, useWatch } from "react-hook-form";
import Swal from 'sweetalert2';
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createUser } from "../../features/auth/authSlices";
import { useAddUserMutation } from "../../features/api/apiSlice";
import { useEffect, useState } from "react";

const imgToken = "99024dcf7d799d929c9d0ce7538940ec"
const Register = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const url = `https://api.imgbb.com/1/upload?key=${imgToken}`
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const [disable, setDisable] = useState(true);
    let from = location.state?.from?.pathname || "/";
    const [addUser] = useAddUserMutation()
    const password = useWatch({ control, name: 'password' });
    const confirmPassword = useWatch({ control, name: 'confirmPassword' });
    useEffect(() => {
        if (
            password !== undefined &&
            password !== '' &&
            confirmPassword !== undefined &&
            confirmPassword !== '' &&
            password === confirmPassword
        ) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }, [password, confirmPassword]);
    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("image", data.photo[0]);
    
        try {
            const response = await fetch(url, {
                method: "POST",
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
    
            const imgResponse = await response.json();
    
            if (imgResponse.success) {
                const imgURL = imgResponse.data.display_url;
                const { email, name, password } = data;
                dispatch(createUser({ email, password, name, photo: imgURL }));
    
                try {
                    const response = await addUser({ email, name });
                    console.log(response);
                    if (response.data?.insertedId) {
                        Swal.fire({
                            icon: 'success',
                            title: 'User Added',
                            text: 'User data has been successfully added!',
                        });
                        navigate(from, { replace: true });
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: `User ${response?.data?.message || 'unknown error'}`,
                        });
                    }
                } catch (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: error.message || 'An error occurred.',
                    });
                }
            } else {
                const errorMessage = imgResponse.message || 'unknown error';
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: `Image upload failed: ${errorMessage}`,
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message || 'An error occurred.',
            });
        }
    };
    

    return (
        <div className="min-h-screen p-12" style={{ backgroundImage: `url("https://i.ibb.co/QQnk118/inventory3.jpg")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name='name' {...register("name")}
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
                                    name='photo' {...register("photo")}
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name='email' {...register("email", { required: true })}
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
                                    name='password' {...register("password", { required: true, minLength: 6 })}
                                    className="input input-bordered w-full max-w-xs"
                                />
                                {errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-500">Password is too Short</p>}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">Confirm Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="input input-bordered w-full max-w-xs"
                                    name='confirmPassword' {...register("confirmPassword", { required: true })}
                                />
                            </div>
                            <div className="label font-semibold">
                                Already Have an Account?
                                <Link className="font-bold" to="/login">
                                    Login
                                </Link>
                            </div>
                            <div className="mt-2">
                                <button disabled={disable} className="btn w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-md text-white text-center font-semibold">
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