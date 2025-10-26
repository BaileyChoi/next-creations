"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}

export default function Movie({ title, id, poster_path }: IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };

  return (
    <div className="grid grid-rows-[1fr_auto] gap-5 place-items-center cursor-pointer">
      <img
        src={poster_path}
        alt={title}
        onClick={onClick}
        className="max-w-full min-h-full rounded-xl transition-opacity duration-300 opacity-70 hover:opacity-100"
      />
      <Link prefetch href={`/movies/${id}`} className="text-center">
        {title}
      </Link>
    </div>
  );
}
