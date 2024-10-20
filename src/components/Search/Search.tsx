"use client"

import { useRouter } from 'next/navigation'
import React, {useEffect, useState } from 'react'

type SearchPropsType = {
    searchQuery: string | undefined
}

function Search({ searchQuery }: SearchPropsType) {
    const [searchText, setSearchText] = useState<string | undefined>(searchQuery);
    const router = useRouter();




    // Debounce user input and perform search
    useEffect(() => {
        if (searchText) {
            const timer = setTimeout(() => {
                router.push(`/movies?search=${searchText}`)
            }, 700);

            // Cleanup to clear timeout
            return () => clearTimeout(timer)
        } else {
            router.push('/movies')
        }
    }, [searchText])

    return (
        <div className="search-movie">
            <input
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                type="text"
                placeholder='Search Your Favourite Movie ...'
                className='bg-black text-white border border-gray-500 rounded-lg py-2 px-3 w-[400px]' />
        </div>
    )
}

export default Search
