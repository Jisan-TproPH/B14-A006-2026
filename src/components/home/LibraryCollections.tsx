"use client"

import { workoutData, type Workout } from "@/lib/workoutData";
import LibraryCard from "./LibraryCard";
import { use } from "react";







const workoutDataPromise = workoutData();

export default function LibraryCollections() {

    const workouts = use(workoutDataPromise);

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
                workouts.map((workout: Workout) => (
                    <LibraryCard key={workout.id} data={workout} />
                ))
            }

        </div>
    )
}
