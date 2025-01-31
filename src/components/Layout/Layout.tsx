import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
