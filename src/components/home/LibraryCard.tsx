import Image from "next/image";
import { type Workout } from "@/lib/workoutData";
import { Clock, Flame, Star } from "lucide-react";
import Link from "next/link";


export default function LibraryCard({ data }: { data: Workout }) {
  return (
    <Link href={`/workouts/${data.id}`}
    className="w-full">
    
    <div 
        className="bg-[#15171D] md:max-w-96 lg:max-w-100 w-full rounded-2xl flex flex-col overflow-hidden"
    >
        <div className="">
            <Image className="w-full h-auto max-h-50 object-cover" src={data.image} alt={data.name} width={400} height={200} />
        </div>
        <div className="flex flex-col gap-2 p-6">
            <div>
            {
                data.muscleGroups.map((muscleGroup, index) => (
                    <span key={index} className="text-[11px] text-black font-bold py-1 px-2.5 bg-primary rounded-full mr-2 uppercase">{muscleGroup}</span>
                ))
            }
            </div>
            <h3 className="text-lg font-black font-oswald">{data.name}</h3>
            <p className="text-sm md:text-base text-[#9CA3AF]">{data.equipment}</p>

            <div className="flex items-center justify-between mt-4">
                <span className="text-sm md:text-base text-[#9CA3AF] flex items-center gap-2"><Clock className="inline-block"/> {data.duration} min</span>
                <span className="text-sm md:text-base text-[#9CA3AF] flex items-center gap-2"><Flame className="inline-block"/> {data.caloriesBurned} kcal</span>
                <span className="text-sm md:text-base text-[#9CA3AF] flex items-center gap-2"><Star className="inline-block"/> {data.rating}</span>
            </div>
        </div>
    </div>
    </Link>
  )
}
