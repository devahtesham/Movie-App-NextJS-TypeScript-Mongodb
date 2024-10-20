import Link from 'next/link'
import React, { ReactNode } from 'react'

type ButtonProps = {
    children?: ReactNode,
    href: {
        pathname: string,
        query: {
            [key: string]: string | number
        }
    }
    className?: string
}

export default function Button({ children, href, className }: ButtonProps) {
    return (
        <Link href={href} className={`bg-blue-700 text-white font-semibold border-none outline-0 p-2 px-3 rounded-md ${className}`}>{children}</Link>
    )
}