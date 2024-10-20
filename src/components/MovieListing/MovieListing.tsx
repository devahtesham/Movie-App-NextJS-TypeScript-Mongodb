import React from 'react'
import MovieCard from '../MovieCard'
import { getMovies } from '@/global';





export default async function MovieListing({ page, limit, searchQuery }: { page: number, limit: number, searchQuery: string | undefined}) {
    console.log('[MOVIE LISTING RENDER]')
    const movies = await getMovies({ page, limit, query: searchQuery });
    return (
        <section
            className='movies-section max-w-7xl m-auto flex justify-center gap-10 mt-[5rem] flex-wrap'
           
        >
            {
                movies && movies.length > 0 ? movies?.map((movie) => (
                    <MovieCard
                        key={movie._id.toString()}
                        title={movie.title}
                        year={movie.year}
                        poster={movie.poster}
                        fullplot={movie.fullplot}

                    />
                )) : <h1 className='text-4xl font-extrabold'>No Data !</h1>
            }


        </section>
    )
}