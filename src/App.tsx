import { AppRoutes } from "./routes/routes";
import NavigationBar from "./shell/NavigationBar";

import AppSideBar from "./shell/SideBar";

function App() {
  return (
    <>
      <NavigationBar />
      <div className="app-container">
        <div className="side-nav">
          <AppSideBar />
        </div>
        <div className="main">
          <div className="routes">
            <AppRoutes />
          </div>
        </div>
      </div>

      <div className="footer"></div>
    </>
  );
}

export default App;
