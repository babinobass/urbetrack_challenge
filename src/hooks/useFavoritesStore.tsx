import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FavoritesStore } from "../types/types";

const useFavoritesStore = create(
  persist<FavoritesStore>(
    (set) => ({
      favorites: {},
      removeFavorite: (favoriteId, userId) => {
        set((state) => ({
          favorites: {
            ...state.favorites,
            [userId]: state.favorites[userId]
              ? state.favorites[userId].filter(
                  (favorite) => favorite.id !== favoriteId
                )
              : [],
          },
        }));
      },
      addFavorite: (favorite, userId) => {
        set((state) => ({
          favorites: {
            ...state.favorites,
            [userId]: state.favorites[userId]
              ? [...state.favorites[userId], favorite]
              : [favorite],
          },
        }));
      },
    }),
    {
      name: "favoritesStatus",
    }
  )
);

export default useFavoritesStore;
