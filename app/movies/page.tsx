import Button from '@/components/Button'
import MovieListing from '@/components/MovieListing/MovieListing';
import Search from '@/components/Search/Search';
import Skeleton from '@/components/Skeleton/Skeleton';
import React, { Suspense } from 'react'
import { v4 as uuid } from 'uuid';


export default async function MoviesPage({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {

    // for setting page and limit values
    const page = searchParams.page ? Number(searchParams.page) : 1
    const limit = searchParams.limit ? Number(searchParams.limit) : 10

    // for searching movies
    const searchQuery = searchParams.search ? searchParams.search : undefined
    console.log('[searchQuery]',searchQuery)

    return (
        <section key={Math.random()}>

            <div className="movie-toolbar max-w-7xl m-auto flex justify-between my-[5rem] ">
                {/* filters dropdown */}
                <div className="dropdown-filter">
                    <select className='bg-black text-white border border-gray-500 rounded-lg py-2 px-3'>
                        <option value="One">One</option>
                        <option value="Two">Two</option>
                        <option value="Three">Three</option>

                    </select>
                </div>

                <Search searchQuery={searchQuery} page={page}/>

                {/* pagination button */}
                <div className="pagination-btns flex items-center gap-5">
                    <Button
                        // href={`/movies?page=${page > 1 ? page - 1 : 1}`}
                        href={{
                            pathname: '/movies',
                            query: {
                                ...(searchQuery ? { search: searchQuery } : {}),
                                ...(page > 1 ? { page: page - 1 } : { page: 1 })
                            }
                        }}
                        className={`${page < 2 && 'pointer-events-none opacity-70'}`}
                    >
                        Previous
                    </Button>

                    <Button
                        // href={`/movies?page=${page + 1}`}
                        href={{
                            pathname: '/movies',
                            // query: !searchQuery ? { page: page + 1 } : { search: searchQuery, page: page + 1 }
                            query: {
                                ...(searchQuery ? { search: searchQuery } : {}),
                                page: page + 1
                            }
                        }}
                    >
                        Next
                    </Button>
                </div>
            </div>

            <Suspense fallback={<Skeleton />}>
                <MovieListing page={page} limit={limit} searchQuery={searchQuery} />
            </Suspense>

        </section>
    )
}