import { Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "../components/SignIn";
import { CardSearcher } from "../components/CardSearcher";
import { signOut } from "../auth/authService";
import { useAuth } from "../auth/authContext";
export const AppRoutes = () => {
    //should be in a sign out component
    const navigate = useNavigate()
    const isLoggedIn = useAuth()
    const onClick = async () => {
        if (isLoggedIn){
           await signOut()
            navigate("/")
        }
      };
  return (
    <Routes>
      <Route element={<SignIn />} path="/" />
      <Route
        path="/home"
        element={
            <>
            <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            distinctio odio dignissimos ab deleniti corrupti sit quia delectus,
            veritatis amet recusandae beatae dolorem dolorum facilis, quibusdam
            omnis aspernatur blanditiis accusamus.
          </h1>
          <button onClick={onClick}>Sign Out</button>
        </>  
        }
      />
      <Route path="/Search" element={<CardSearcher />} />
    </Routes>
  );
};