import { getMovie } from "../lib/api";
import { IMG_BASE_URL } from "../lib/constant";
import FavoriteButton from "./favorite-button";

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 w-4/5 mx-auto">
      <img
        src={`${IMG_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
        className="rounded-2xl max-w-[70%] place-self-center"
      />
      <div className="flex flex-col mt-5 gap-5">
        <h1 className="text-white text-3xl font-semibold">{movie.title}</h1>
        <h3 className="text-lg">
          {movie.release_date.substring(0, 4)} | ⭐
          {movie.vote_average.toFixed(1)} | {movie.runtime} minutes
        </h3>
        <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
        <a href={`https://www.themoviedb.org/movie/${id}`} target={"_blank"}>
          Show more &rarr;
        </a>

        <FavoriteButton id={movie.id} />
      </div>
    </div>
  );
}
