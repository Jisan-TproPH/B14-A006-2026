"use client"

import { useWorkout } from "@/contexts/Workout"
import { Workout } from "@/lib/workoutData"
import { Bookmark, Calendar } from "lucide-react"

export default function DetailsActions({workout}:{workout:Workout}) {

  const workoutManager = useWorkout();

  const alreadyInTodaysPlan = workoutManager?.todaysPlan.includes(workout.id + "");
  const alreadyInSavedWorkouts = workoutManager?.savedWorkouts.includes(workout.id + "");

  return (
    <div className="flex flex-col md:flex-row gap-4 mt-6 text-sm">
        <button
         disabled={alreadyInTodaysPlan}
         onClick={() => workoutManager?.addToTodaysPlan(workout.id + "")}
         className="flex items-center justify-center bg-primary text-black font-bold py-3 px-6 rounded-lg hover:bg-[#F5F5F5] transition-colors duration-300 disabled:bg-[#374151] disabled:text-[#9CA3AF] disabled:cursor-not-allowed">
            <Calendar className="mr-2"/> Add to today's plan
        </button>
        <button
         disabled={alreadyInSavedWorkouts}
         onClick={() => workoutManager?.addToSavedWorkouts(workout.id + "")}
         className="flex items-center justify-center text-white font-semibold py-3 px-6 rounded-lg bg-transparent border-[0.5px] border-[#374151] hover:bg-white hover:text-black transition-colors duration-300 disabled:bg-[#374151] disabled:text-[#9CA3AF] disabled:cursor-not-allowed">
            <Bookmark className="mr-2"/> Save for later
        </button>
    </div>
  )
}
