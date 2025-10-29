import { TMDB_BASE_URL, LANGUAGE } from "./constant";
import { useMovieStore } from "./store";

// 상영 중 영화 목록
export async function getMovies(page: number = 1) {
  const url = `${TMDB_BASE_URL}/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=${LANGUAGE}&page=${page}`;
  const response = await fetch(url, { cache: "force-cache" });
  const data = await response.json();
  return data.results;
}

// 영화 상세
export async function getMovie(id: string) {
  const url = `${TMDB_BASE_URL}/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=${LANGUAGE}`;
  const response = await fetch(url, { cache: "force-cache" });
  return response.json();
}

// 영상 정보
export async function getVideos(id: string) {
  const url = `${TMDB_BASE_URL}/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=${LANGUAGE}`;
  const response = await fetch(url, { cache: "force-cache" });
  const data = await response.json();
  return data.results;
}

// 즐겨찾기 목록
export async function getFavorites() {
  const favorites = useMovieStore.getState().favorites;
  if (!favorites.length) return [];

  const moviePromises = favorites.map((id) =>
    fetch(
      `${TMDB_BASE_URL}/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=${LANGUAGE}`,
      { cache: "force-cache" }
    )
      .then((res) => (res.ok ? res.json() : null))
      .catch(() => null)
  );

  const movies = await Promise.all(moviePromises);
  return movies.filter((movie) => movie && movie.id);
}
