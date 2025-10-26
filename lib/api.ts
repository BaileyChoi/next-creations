import { API_URL } from "./constant";
import { useMovieStore } from "./store";

export async function getMovies() {
  const response = await fetch(`${API_URL}`, { cache: "force-cache" });
  return response.json();
}

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`, { cache: "force-cache" });
  return response.json();
}

export async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`, {
    cache: "force-cache",
  });
  return response.json();
}

export async function getFavorites() {
  const favorites = useMovieStore.getState().favorites;
  const res = await fetch(`${API_URL}`);
  const allMovies = await res.json();
  return allMovies.filter((movie: any) => favorites.includes(movie.id));
}
