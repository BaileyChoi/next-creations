import { API_URL } from "./constant";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`, { cache: "force-cache" });
  return response.json();
}
