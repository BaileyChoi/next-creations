"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MovieStore {
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

export const useMovieStore = create<MovieStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (id) => {
        const { favorites } = get();
        const updated = favorites.includes(id)
          ? favorites.filter((m) => m !== id)
          : [...favorites, id];
        set({ favorites: updated });
      },
    }),
    { name: "movie-storage" }
  )
);
