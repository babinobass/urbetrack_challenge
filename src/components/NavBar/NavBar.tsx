import { Link } from "react-router-dom";
import { Box } from "@radix-ui/themes";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { ExitIcon } from "@radix-ui/react-icons";
import useAuthStore from "../../hooks/useAuthStore";

const NavBar = () => {
  const { logout, user } = useAuthStore.getState();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const logoutUser = () => {
    logout();
    navigate("/login");
  };
  const isHome = pathname === "/" || pathname === "/home";
  const isFavorites = pathname === "/favorites";
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <nav className="sticky w-screen drop-shadow-md top-0 left-0 right-0 z-10 bg-white shadow-nav flex p-4 justify-between items-center">
      <ul className="flex gap-4 p-4">
        <li className="font-semibold">{user}</li>
        <li>
          <Link
            className={`font-semibold ${isHome ? "text-purple-700" : ""}`}
            to="/home"
          >
            inicio
          </Link>
        </li>
        <li>
          <Link
            className={`font-semibold ${isFavorites ? "text-purple-700" : ""}`}
            to="/favorites"
          >
            mis imagenes
          </Link>
        </li>
      </ul>
      <Box>
        <ExitIcon
          className="mr-4 cursor-pointer"
          aria-label="cerrar sesión"
          width="28"
          height="28"
          onClick={logoutUser}
        />
      </Box>
    </nav>
  );
};

export default NavBar;
