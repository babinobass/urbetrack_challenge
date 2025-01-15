import { Link } from "react-router-dom";
import { Flex, Box, Text } from "@radix-ui/themes";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { ExitIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import useAuthStore from "../../hooks/useAuthStore";
import { useState } from "react";

const NavBar = () => {
  const { logout, user } = useAuthStore.getState();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav className="sticky w-screen drop-shadow-md top-0 left-0 right-0 z-10 bg-white shadow-nav p-4 flex justify-between items-center">
      <HamburgerMenuIcon
        className="cursor-pointer text-purple-700"
        width="28"
        height="28"
        aria-label="Abrir menú"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      {isMenuOpen && (
        <Box
          className="fixed h-screen top-0 left-0 w-full bg-black bg-opacity-50 z-10"
          onClick={() => setIsMenuOpen(false)}
        ></Box>
      )}

      <Flex
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 z-20 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Flex className="flex flex-col p-4 h-full">
          <Text className="font-semibold text-3xl mb-4">{user}</Text>

          <ul className="flex flex-col gap-4">
            <li>
              <Link
                className={`block font-semibold text-2xl ${
                  isHome ? "text-purple-700" : ""
                }`}
                to="/home"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className={`block font-semibold text-2xl ${
                  isFavorites ? "text-purple-700" : ""
                }`}
                to="/favorites"
                onClick={() => setIsMenuOpen(false)}
              >
                Mis imágenes
              </Link>
            </li>
            <li>
              <Flex
                className="flex items-center text-2xl mt-8 gap-2 font-semibold text-red-600 cursor-pointer"
                onClick={logoutUser}
              >
                <ExitIcon width="20" height="20" />
                Cerrar sesión
              </Flex>
            </li>
          </ul>
        </Flex>
      </Flex>
    </nav>
  );
};

export default NavBar;
