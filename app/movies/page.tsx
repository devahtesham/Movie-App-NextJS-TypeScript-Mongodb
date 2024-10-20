import InfiniteScrolling from '@/components/InfiniteScrolling/InfiniteScrolling';
import Search from '@/components/Search/Search';
import { fetchMoviesAction } from '@/utils/actions/actions';
import React from 'react'
import { v4 as uuid } from 'uuid';


export default async function MoviesPage({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {

    // for searching movies
    const searchQuery = searchParams.search ? searchParams.search : undefined

    // calling a server action for fetching movies
    const movies = await fetchMoviesAction({ searchQuery })

    return (
        <section key={uuid()}>
            <div className="movie-toolbar max-w-7xl m-auto flex justify-center gap-10 my-[5rem] ">
                {/* filters dropdown */}
                <div className="dropdown-filter">
                    <select className='bg-black text-white border border-gray-500 rounded-lg py-2 px-3'>
                        <option value="One">One</option>
                        <option value="Two">Two</option>
                        <option value="Three">Three</option>

                    </select>
                </div>

                <Search searchQuery={searchQuery} />
            </div>

            <InfiniteScrolling movies={movies} searchQuery={searchQuery} />

        </section>
    )
}