"use client"

import { workoutData, type Workout } from "@/lib/workoutData";
import LibraryCard from "./LibraryCard";
import { use } from "react";







const workoutDataPromise = workoutData();

export default function LibraryCollections({ searchTerm }: { searchTerm: string }) {

    const workouts = use(workoutDataPromise);
    const filtered = workouts.filter((workout: Workout) => 
                    workout.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    workout.description.toLowerCase().includes(searchTerm.toLowerCase())
                );
    return (
        <div className="grid
            grid-cols-1
            place-items-center
            md:grid-cols-2
            lg:grid-cols-3
            justify-between
            gap-8"
        >
            {
                filtered.map((workout: Workout) => (
                    <LibraryCard key={workout.id} data={workout} />
                ))
            }
            {
                filtered.length === 0 && (
                    <div className="col-span-full text-center text-[#9CA3AF] text-sm md:text-base min-h-100 flex flex-col items-center justify-center gap-2">
                        <h4 className="font-oswald font-black text-4xl">No Workouts Found</h4>
                        <p>Try adjusting your search or filter to find what you're looking for.</p>
                    </div>
                )
            }

        </div>
    )
}
