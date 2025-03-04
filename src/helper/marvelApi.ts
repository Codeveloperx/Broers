import { generateMarvelHash } from "./generateHash";

const BASE_URL = "http://gateway.marvel.com/v1/public/characters";
const PUBLIC_KEY = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
const PRIVATE_KEY = import.meta.env.VITE_MARVEL_PRIVATE_KEY;

const timestamp = Date.now().toString();

export async function fetchMarvelCharacters(
  limit: number = 30,
  offset: number = 0
) {
  const hash = await generateMarvelHash(timestamp, PRIVATE_KEY, PUBLIC_KEY);

  const url = `${BASE_URL}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}&limit=${limit}&offset=${offset}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching Marvel characters:", error);
    return null;
  }
}

export async function fetchCharacterById(id: number) {
  const hash = await generateMarvelHash(timestamp, PRIVATE_KEY, PUBLIC_KEY);

  const url = `${BASE_URL}/${id}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data.data.results[0];
  } catch (error) {
    console.error("Error fetching Marvel character:", error);
    return null;
  }
}
