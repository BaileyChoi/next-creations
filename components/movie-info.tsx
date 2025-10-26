import { API_URL } from "../lib/constant";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`, { cache: "force-cache" });
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 w-4/5 mx-auto">
      <img
        src={movie.poster_path}
        className="rounded-2xl max-w-[70%] place-self-center"
      />
      <div className="flex flex-col mt-5 gap-5">
        <h1 className="text-white text-3xl font-semibold">{movie.title}</h1>
        <h3 className="text-lg">⭐{movie.vote_average.toFixed(1)}</h3>
        <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
