import { create } from "zustand";
import { persist } from "zustand/middleware";
import { logoutUser } from "../utils/utils";
import { AuthStore } from "../types/types";

const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      isLoggedIn: false,
      user: null,
      login: (userId) => {
        localStorage.setItem("activeUser", "");
        set({ isLoggedIn: true, user: userId });
      },
      logout: () => {
        set({ isLoggedIn: false, user: null });
        logoutUser();
      },
    }),
    {
      name: "userLoginStatus",
    }
  )
);

export default useAuthStore;
