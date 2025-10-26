import { getVideos } from "../lib/api";

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);

  return (
    <div className="w-4/5 mx-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 mt-24 pb-24">
      {videos.map((video) => (
        <iframe
          className="rounded-lg opacity-80 transition-opacity duration-200 ease-in-out hover:opacity-100"
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
