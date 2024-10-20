"use client"

import { usePathname, useRouter } from 'next/navigation'
import React, { memo, useEffect, useRef, useState } from 'react'

type SearchPropsType = {
    searchQuery: string | undefined
    page: number
}

function Search({ searchQuery, page }: SearchPropsType) {
    const [searchText, setSearchText] = useState<string | undefined>(searchQuery);
    const router = useRouter();




    // Debounce user input and perform search
    useEffect(() => {
        if (searchText) {
            const timer = setTimeout(() => {
                console.log('[SEARCH COMP IS CALLING ...]')
                router.push(`/movies?search=${searchText}&page=${page}`)
            }, 700);

            // Cleanup to clear timeout
            return () => clearTimeout(timer)
        } else if (!searchText && ['page', 'search'].every((text)=> window.location.href.includes(text))) {
            console.log("else is running ")
            console.log("[searchText]", searchText)
            console.log("[window.location.href]", window.location.href)

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
