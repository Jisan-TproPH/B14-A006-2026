"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

const WorkoutContext = createContext<{
    todaysPlan: string[];
    savedWorkouts: string[];
    addToTodaysPlan: (workoutId: string) => void;
    removeFromTodaysPlan: (workoutId: string) => void;
    addToSavedWorkouts: (workoutId: string) => void;
    removeFromSavedWorkouts: (workoutId: string) => void;
    markAsDone: (workoutId: string) => void;
    isWorkoutDone: (workoutId: string) => boolean;
} | null>(null);


const MAX_TODAYS_PLAN = 5;

export function WorkoutProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [todaysPlan, setTodaysPlan] = useState<string[]>([]);
    const [savedWorkouts, setSavedWorkouts] = useState<string[]>([]);
    const [doneWorkouts, setDoneWorkouts] = useState<string[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const loaclStoreLoaderHook = () => {
        const storedTodaysPlan = localStorage.getItem("todaysPlan");
        const storedSavedWorkouts = localStorage.getItem("savedWorkouts");
        const storedDoneWorkouts = localStorage.getItem("doneWorkouts");

        if (storedTodaysPlan) {
            setTodaysPlan(JSON.parse(storedTodaysPlan));
        }
        if (storedSavedWorkouts) {
            setSavedWorkouts(JSON.parse(storedSavedWorkouts));
        }
        if (storedDoneWorkouts) {
            setDoneWorkouts(JSON.parse(storedDoneWorkouts));
        }
    };

    const localStoreSaverHook = useCallback(() => {
        localStorage.setItem("todaysPlan", JSON.stringify(todaysPlan));
        localStorage.setItem("savedWorkouts", JSON.stringify(savedWorkouts));
        localStorage.setItem("doneWorkouts", JSON.stringify(doneWorkouts));
    }, [todaysPlan, savedWorkouts, doneWorkouts]);

    useEffect(() => {
        loaclStoreLoaderHook();
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (!isLoaded) return;
        localStoreSaverHook();
    }, [todaysPlan, savedWorkouts, localStoreSaverHook, isLoaded, doneWorkouts]);





    const addToTodaysPlan = (workoutId: string) => {
        if (todaysPlan.length >= MAX_TODAYS_PLAN) {
            toast.error(`You can only add up to ${MAX_TODAYS_PLAN} workouts to today's plan.`);
            return;
        }
        if (todaysPlan.includes(workoutId)) {
            toast.error("Workout already in today's plan.");
            return;
        }
        setTodaysPlan((prev) => [...prev, workoutId]);
        toast.success("Workout added to today's plan.");
    };

    const removeFromTodaysPlan = (workoutId: string) => {
        if (!todaysPlan.includes(workoutId)) {
            toast.error("Workout not found in today's plan.");
            return;
        }
        setTodaysPlan((prev) => prev.filter((id) => id !== workoutId));
        setDoneWorkouts((prev) => prev.filter((id) => id !== workoutId));
        toast.success("Workout removed from today's plan.");
    };

    const markAsDone = useCallback((workoutId: string) => {
        if (!todaysPlan.includes(workoutId)) {
            toast.error("Workout not found in today's plan.");
            return;
        }
        setDoneWorkouts((prev) => [...prev, workoutId]);
        toast.success("Workout marked as done.");
    }, [todaysPlan]);

    const isWorkoutDone = useCallback((workoutId: string) => {
        return doneWorkouts.includes(workoutId);
    }, [doneWorkouts]);

    const addToSavedWorkouts = (workoutId: string) => {
        if (savedWorkouts.includes(workoutId)) {
            toast.error("Workout already saved.");
            return;
        }
        toast.success("Workout added to saved workouts.");
        setSavedWorkouts((prev) => [...prev, workoutId]);
    };

    const removeFromSavedWorkouts = (workoutId: string) => {
        toast.success("Workout removed from saved workouts.");
        setSavedWorkouts((prev) => prev.filter((id) => id !== workoutId));
    };

    return (
        <WorkoutContext
            value={{
                todaysPlan,
                savedWorkouts,
                addToTodaysPlan,
                removeFromTodaysPlan,
                addToSavedWorkouts,
                removeFromSavedWorkouts,
                markAsDone,
                isWorkoutDone,
            }}
        >
            {children}
        </WorkoutContext>
    );
}

export function useWorkout() {
    return useContext(WorkoutContext);
}