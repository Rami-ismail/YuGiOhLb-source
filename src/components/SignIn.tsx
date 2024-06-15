import { useState } from "react";
import { signInWithGoogle } from "../auth/authService";
import {useAuth} from "../auth/authContext"
import { Navigate } from "react-router-dom";

const SignIn = () => {

const [isSigningin, setIsSigningIn] = useState(false);
const isLoggedIn = useAuth()
  const onClick = () => {
    if (!isSigningin) {
      setIsSigningIn(true);
      signInWithGoogle().catch((error) => {
        console.log(error);
        setIsSigningIn(false);
      });
    }
  };
  return  (
    <>
    {isLoggedIn?.userLoggedin &&  <Navigate to={"/home"} replace={true}/>}
    <button onClick={onClick}> Sign in with Google</button>
    </>
  )
};

export default SignIn;
