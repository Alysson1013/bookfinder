import { IBook } from "@/types/IBooks";
import axios from "axios";

interface IResponse {
  kind: string;
  totalItems: number;
  items: IBook[];
}

export async function fetchBooks(query: string) {
  const { data } = await axios.get<IResponse>(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12`
  );

  return data.items;
}
