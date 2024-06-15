import { Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "../components/SignIn";
import { CardSearcher } from "../components/CardSearcher";
import { signOut } from "../auth/authService";
import { useAuth } from "../auth/authContext";
export const AppRoutes = () => {
  //should be in a sign out component
  const navigate = useNavigate();
  const isLoggedIn = useAuth();
  const onClick = async () => {
    if (isLoggedIn) {
      await signOut();
      navigate("/");
    }
  };
  return (
    <Routes>
      <Route element={<SignIn />} path="/" />
      <Route
        path="/home"
        element={
            <CardSearcher/>
        }
      />
      <Route path="/search" element={<CardSearcher />} />
    </Routes>
  );
};
