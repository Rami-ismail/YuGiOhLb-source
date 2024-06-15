import NavigationBar from "./shell/NavigationBar";
import { AppRoutes } from "./routes/routes";
import { useAuth } from "./auth/authContext";

function App() {
  const isLoggedIn = useAuth()
  return (
    <>
     {isLoggedIn?.userLoggedin && <div className="header">
        <NavigationBar />
      </div>} 
      <AppRoutes />
    </>
  );
}

export default App;
