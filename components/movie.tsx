"use client";

import Link from "next/link";
import { useMovieStore } from "../lib/store";

interface IMovieProps {
  title: string;
  id: number;
  poster_path: string;
}

export default function Movie({ title, id, poster_path }: IMovieProps) {
  const favorites = useMovieStore((s) => s.favorites);
  const isFav = favorites.includes(id);

  return (
    <Link href={`/movies/${id}`} prefetch className="group relative block">
      <img
        src={poster_path}
        alt={title}
        className="rounded-xl transition-opacity duration-300 opacity-80 hover:opacity-100"
      />
      {isFav && (
        <span className="absolute right-3 top-3 bg-red-600/90 text-xs px-2 py-1 rounded-md">
          ⭐
        </span>
      )}
      <h3 className="mt-2 text-center">{title}</h3>
    </Link>
  );
}
