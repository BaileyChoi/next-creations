import Movie from "../../components/movie";
import { getMovies } from "../../lib/api";

export const metadata = {
  title: "Home",
};

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-[90%] w-full mx-auto">
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
