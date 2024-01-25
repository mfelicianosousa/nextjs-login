'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function NavLink( { href, children }:any){
   
    const pathname = usePathname();
   
    return(
        <Link href={href}>{children}</Link>

    )
}