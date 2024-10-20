import { MOVIES } from '@/enums'
import Image from 'next/image'
import React from 'react'

interface MovieItem {
    title: string
    year: number
    poster: string
    fullplot: string
}

export default function MovieCard({ title, year, poster, fullplot }: MovieItem) {
    return (
        <div className='w-[250px] border border-gray-500 p-3 rounded-2xl mb-4' >
            <div className='h-[300px] overflow-hidden'>
                <Image
                    src={poster ? poster : MOVIES['SAMPLE_MOVIE_IMG']}
                    alt={title}
                    width={250}
                    height={100}
                    className='w-full'
                />
            </div>
            <h3 className='text-lg font-bold my-3 text-red-500'>{title}</h3>
            <p className='mb-3'>{fullplot?.substring(0, 20)}</p>
            <h5 className='text-end font-extrabold text-red-500'>{year}</h5>
        </div>
    )
}