import { FcGoogle } from 'react-icons/fc'
import { useLocation, useNavigate } from 'react-router-dom';
import { socialLogin } from '../../features/auth/authSlices';
import { useDispatch } from 'react-redux';
const SocialLogin = () => {
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";

     const handleGoggle = () =>
     {
        dispatch(socialLogin({navigate,from}))
     }
    return (
        <div>
            <div className='flex items-center pt-4 space-x-1'>
                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                <p className='px-3 text-sm dark:text-gray-400'>
                    Signup with social accounts
                </p>
                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            </div>
            <div onClick={handleGoggle} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                <FcGoogle size={32} />
                <p>Continue with Google</p>
            </div>
        </div>
    );
};

export default SocialLogin;