"use client";

import { useWorkout } from "@/contexts/Workout";
import Link from "next/link"
import { usePathname } from "next/navigation"

export const NavState = ()=>{
    const workoutManager = useWorkout();

    return ( 
            <> 
                <div className="flex items-center gap-2">Plan <div className="text-black bg-primary rounded-full flex items-center justify-center h-5 w-5">{workoutManager?.todaysPlan?.length}</div></div>
                <div className="flex items-center gap-2">Saved <div className=" border border-[#2D313B] rounded-full flex items-center justify-center h-5 w-5">{workoutManager?.savedWorkouts?.length}</div></div>
            </>
    )
}

export const NavLinks = () => {
    const pathname = usePathname()
    return (
        <>
            <Link className={`px-4 py-1.5 rounded-full ${pathname === '/' ? 'bg-[#1A2312] text-primary' : ''}`} href="/">Workouts</Link>
            <Link className={`px-4 py-1.5 rounded-full ${pathname === '/myplan' ? 'bg-[#1A2312] text-primary' : ''}`} href="/myplan">My Plan</Link>
        </>
    )
}