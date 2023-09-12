
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase/firebase.config";
import { setUser, toggleLoading } from "../features/auth/authSlices";

const PrivateRoute = ({ children }) => {

      const location = useLocation()
      const { isLoading, email } = useSelector(state => state.auth)
      const dispatch = useDispatch()
      useEffect(() => {
            onAuthStateChanged(auth, (user) => {
                  if (user) {
                        dispatch(setUser({
                              email: user.email,
                              name: user.displayName
                        }))
                        dispatch(toggleLoading(false))
                  }
                  else {
                        dispatch(toggleLoading(false))
                  }
            })
      }, [dispatch])

      if (isLoading) {
            return <progress className="progress w-56"></progress>
      }
      if (!isLoading && !email) {
            return <Navigate to="/login" state={{ from: location }} replace></Navigate>
      }
      return children;
};

export default PrivateRoute;