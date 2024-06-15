
import React, { useContext } from "react";
import { User } from "firebase/auth";

export interface IAuthContext {
    user: User | null
    userLoggedin: Boolean
    isLoading:Boolean
}
export const AuthContext = React.createContext<IAuthContext | null>(null);
export function useAuth () {
    return useContext(AuthContext)
}