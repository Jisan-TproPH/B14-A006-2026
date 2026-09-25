"use client";

import { useWorkout } from "@/contexts/Workout";
import { Workout } from "@/lib/workoutData";
import { Check, Clock, Eye, Flame, Star, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const PlanView = ({ workouts }: { workouts: Workout[] }) => {
    const [selectedTab, setSelectedTab] = useState("today");
    const [sortBy, setSortBy] = useState<"name" | "duration" | "calories">("name");
    const workoutManager = useWorkout();


    const filteredWorkouts = workouts.filter((workout) => {
        if (selectedTab === "today") {
            return workoutManager?.todaysPlan.includes(workout.id + "");
        } else if (selectedTab === "saved") {
            return workoutManager?.savedWorkouts.includes(workout.id + "");
        }
        return false;
    });

    const finalWorkouts = [...filteredWorkouts].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "duration") {
            return a.duration - b.duration;
        } else if (sortBy === "calories") {
            return a.caloriesBurned - b.caloriesBurned;
        }
        return 0;
    });



    return (
        <div className="flex flex-col gap-6">
            <PlanActionBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} sortBy={sortBy} setSortBy={setSortBy} />
            {selectedTab === "today" ? <TodaysList workouts={finalWorkouts} /> : <SavedList workouts={finalWorkouts} />}
        </div>
    )
}


const PlanActionBar = ({ selectedTab, setSelectedTab, sortBy, setSortBy }: { selectedTab: string; setSelectedTab: (tab: string) => void; sortBy: "name" | "duration" | "calories"; setSortBy: (sort: "name" | "duration" | "calories") => void }) => {

    return (
        <div className="w-full flex flex-row justify-between items-center mt-2">
            <div className="flex flex-row gap-1 md:gap-2 bg-[#13161D] p-1 rounded-lg text-[10px] md:text-xs ">
                <button className={`px-4 py-2 bg-[#2B303D] text-[#9CA3AF] font-bold rounded-lg ${selectedTab === "today" ? "bg-[#2B303D] text-white" : "bg-transparent"}`} onClick={() => setSelectedTab("today")}>
                    Today's Plan
                </button>
                <button className={`px-4 py-2  bg-[#2B303D] text-[#9CA3AF] font-bold rounded-lg ${selectedTab === "saved" ? "bg-[#2B303D] text-white" : "bg-transparent"}`} onClick={() => setSelectedTab("saved")}>
                    Saved
                </button>
            </div>
            <div className="flex flex-row gap-1 md:gap-2 p-1 rounded-lg text-xs">
                <span className="px-4 py-2 bg-transparent text-[#9CA3AF] font-bold rounded-lg">Sort by</span>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value as typeof sortBy)} className="px-4 py-2 bg-[#13161D] text-white font-bold rounded-lg">
                    <option value="name">Name</option>
                    <option value="duration">Duration</option>
                    <option value="calories">Calories</option>
                </select>
            </div>
        </div>
    )
}




const TodaysList = ({ workouts }: { workouts: Workout[] }) => {
    const workoutManager = useWorkout();
    return (
        <div className="flex flex-col gap-4">
            {workouts.map((workout: Workout) => (
                <PlanListItem onRemove={() => {
                    workoutManager?.removeFromTodaysPlan(workout.id + "");
                }} onMarkAsDone={() => {
                    workoutManager?.markAsDone(workout.id + "");
                }} key={workout.id} workout={workout} />
            ))}
            {workoutManager?.todaysPlan.length === 0 && <EmptyContent />}
        </div>
    )
}

const SavedList = ({ workouts }: { workouts: Workout[] }) => {
    const workoutManager = useWorkout();
    return (
        <div className="flex flex-col gap-4">
            {workouts.map((workout: Workout) => (
                <PlanListItem onRemove={() => {
                    workoutManager?.removeFromSavedWorkouts(workout.id + "");
                }} key={workout.id} workout={workout} />
            ))}
            {workoutManager?.savedWorkouts.length === 0 && <EmptyContent />}
        </div>
    )
}


const PlanListItem = ({ workout, onRemove, onMarkAsDone }: { workout: Workout; onRemove: () => void; onMarkAsDone?: () => void }) => {
    const workoutManager = useWorkout();
    return (
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center p-4 bg-[#13161D] rounded-2xl">
            <div className="flex flex-row gap-4 items-center">
                <Image className="max-h-20 rounded-lg object-cover" src={workout.image} alt={workout.name} width={145} height={80} />
                <div className="flex flex-col gap-1">
                    <span className="text-sm md:text-base text-white font-bold font-oswald">{workout.name}</span>
                    <span className="text-xs md:text-sm text-[#9CA3AF]">{workout.equipment}</span>
                    <div className="flex items-center justify-between mt-1.5 text-[10px] md:text-xs text-[#9CA3AF]">
                        <span className="flex items-center gap-1"><Clock className="inline-block h-3.5 text-primary" /> {workout.duration} min</span>
                        <span className="flex items-center gap-1"><Flame className="inline-block h-3.5 text-primary" /> {workout.caloriesBurned} kcal</span>
                        <span className="flex items-center gap-1"><Star className="inline-block h-3.5 text-primary" /> {workout.rating}</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Link href={`/workouts/${workout.id}`} className="cursor-pointer px-2 md:px-4 py-2 bg-transparent border text-white text-[10px] border-[#3b4048] font-bold rounded-full"><Eye className="h-4 w-4 inline-block" /> <span className="">View details</span></Link>
                {onMarkAsDone && !workoutManager?.isWorkoutDone(workout.id + "") && <button onClick={onMarkAsDone} className="cursor-pointer px-2 md:px-4 py-2 bg-primary text-black text-[10px] font-bold rounded-full"><Check className="h-4 w-4 inline-block" /> <span className="">Mark as done</span></button>}
                <button onClick={onRemove} className="cursor-pointer p-2 text-red-500 border border-red-400 rounded-full h-8 w-8 flex justify-center items-center"><Trash className="h-4 w-4" /></button>
            </div>
        </div>
    )
}



const EmptyContent = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 bg-[rgba(17,19,23,0.5)] rounded-2xl border border-dashed border-[#3b4048] min-h-80">
            <h3 className="text-lg md:text-xl font-black font-oswald">NOTHING HERE YET</h3>
            <p className="text-xs text-[#9CA3AF]">Browse the library and add a lift to get today moving.</p>
            <Link href="/#library" className="px-6 py-2 bg-primary text-black text-xs font-bold rounded-full mt-6">Go to workouts</Link>
        </div>
    )
}