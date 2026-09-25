"use client";

import { useWorkout } from "@/contexts/Workout";
import { Workout } from "@/lib/workoutData";

export default function PlanState({ workouts }: { workouts: Workout[] }) {
    const workoutManager = useWorkout();
    const filteredWorkouts = workouts.filter((workout) => workoutManager?.todaysPlan.includes(workout.id + ""));



  return (
    <div className="mt-6 p-6 bg-[#13161D] rounded-2xl grid grid-cols-3 gap-6 text-xs">
        <div className="w-full">
          <span className="text-[#8A92A0]">Exercises</span>
          <span className="block text-primary font-bold font-oswald text-4xl p-0.5">{workoutManager?.todaysPlan.length || 0}</span>
        </div>
        <div className="w-full">
          <span className="text-[#8A92A0]">Minutes</span>
          <span className="block text-white font-bold font-oswald text-4xl p-0.5">{filteredWorkouts.reduce((total, workout) => total + workout.duration, 0)}</span>
        </div>
        <div className="w-full">
          <span className="text-[#8A92A0]">Calories</span>
          <span className="block text-white font-bold font-oswald text-4xl p-0.5">{filteredWorkouts.reduce((total, workout) => total + workout.caloriesBurned, 0)}</span>
        </div>
      </div>
  )
}
