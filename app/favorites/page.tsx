"use client";

import { useEffect, useState } from "react";
import Movie from "../../components/movie";
import { getFavorites } from "../../lib/api";

export default function FavoritesPage() {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFavorites() {
      const movies = await getFavorites();
      setMovies(movies);
      setLoading(false);
    }
    loadFavorites();
  }, []);

  if (loading)
    return (
      <h2 className="text-center mt-20 text-gray-400">Loading favorites...</h2>
    );

  if (movies.length === 0)
    return (
      <p className="text-center mt-20 text-gray-400">
        You have no favorite movies.
      </p>
    );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 p-8">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
