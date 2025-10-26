"use client";

import { useMovieStore } from "../lib/store";

export default function FavoriteButton({ id }: { id: number }) {
  const favorites = useMovieStore((s) => s.favorites);
  const toggle = useMovieStore((s) => s.toggleFavorite);
  const isFav = favorites.includes(id);

  return (
    <button
      onClick={() => toggle(id)}
      className={`mt-4 w-fit px-8 py-2 rounded-md text-white transition
        ${
          isFav
            ? "bg-[#4B4B4B] hover:bg-[#2e2e2e]"
            : "bg-[#888888] hover:bg-[#6A6A6A]"
        }`}
    >
      {isFav ? "★ Saved" : "☆ Save"}
    </button>
  );
}
