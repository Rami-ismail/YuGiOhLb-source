import { User, onAuthStateChanged } from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import { auth } from "../firebase/fireBase-Init";
import { AuthContext, IAuthContext } from "./authContext";
 
interface IAuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ( props: IAuthProviderProps ) => {
  const [user, setUser] = useState<User | null>(null);
  const [userLoggedin,setIsLoggedin] = useState<Boolean>(false); 
  const [isLoading,setIsLoading] = useState<Boolean>(true); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth ,initializeUser)
    return unsubscribe;
  }, []);

async function initializeUser (user: User | null) {
    if (user) {
        setUser({...user})
        setIsLoggedin(true)
    } else {
        setUser(null)
        setIsLoggedin(false)
    }
    setIsLoading(false)
}
const result: IAuthContext = {
    user,
    userLoggedin,
    isLoading
}
  return (
    <>
        <AuthContext.Provider value={result}>{!isLoading &&  props.children}</AuthContext.Provider>
     </>
  )
};