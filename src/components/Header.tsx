"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


export default function Header() {
    const path = usePathname();
    // console.log(path)
    return (
        <header className="max-w-5xl px-7 flex items-center justify-between pt-5">
            <div className="logo">
                <h1 className="text-4xl font-extrabold">NE<span className='text-red-600'>X</span>TFLI<span className='text-red-600'>X</span></h1>
            </div>
            <nav className="flex gap-5 ">
                <Link href={"/"} className={`font-bold ${path === '/' && 'text-blue-500'}`}>Home</Link>
                <Link href={"/movies"} className={`font-bold ${path === '/movies' && 'text-blue-500'}`}>Movies</Link>
            </nav>
        </header>
    )
}