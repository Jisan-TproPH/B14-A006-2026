"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"

export const NavState = ()=>{
    return ( 
            <> 
                <div className="flex items-center gap-2">Plan <div className="text-black bg-primary rounded-full flex items-center justify-center h-5 w-5">0</div></div>
                <div className="flex items-center gap-2">Saved <div className="text-black bg-primary rounded-full flex items-center justify-center h-5 w-5">0</div></div>
            </>
    )
}

export const NavLinks = () => {
    const pathname = usePathname()
    return (
        <>
            <Link className={`px-4 py-1.5 rounded-full ${pathname === '/' ? 'bg-[#1A2312] text-primary' : ''}`} href="/">Workouts</Link>
            <Link className={`px-4 py-1.5 rounded-full ${pathname === '/plan' ? 'bg-[#1A2312] text-primary' : ''}`} href="/plan">My Plan</Link>
        </>
    )
}