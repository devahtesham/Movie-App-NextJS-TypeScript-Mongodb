"use server"

import { getMovies } from "..";

export async function fetchMoviesAction({ searchQuery, page }: { searchQuery?: string, page?: number }) {
    const movies = await getMovies({ query: searchQuery, page });
    return movies
}