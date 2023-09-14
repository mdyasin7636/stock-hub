import { signOut } from "firebase/auth";
import auth from "../../../firebase/firebase.config";
import { useDispatch } from "react-redux";
import { logOut } from "../../../features/auth/authSlices";
import { useNavigate } from "react-router";

const Home = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const handleLogout = () => {
        signOut(auth)
        dispatch(logOut())
        navigate("/login")
    }
    return (
        <div>
            <h3>My HomePage</h3>
            <button onClick={handleLogout}  className="btn btn-primary mt-5">Logout</button>
        </div>
    );
};

export default Home;