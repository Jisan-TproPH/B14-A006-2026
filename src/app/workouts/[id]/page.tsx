import DetailsActions from "@/components/workouts/DetailsActions";
import { getWorkoutById } from "@/lib/workoutData";
import Image from "next/image";

export default async function DetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const workout = await getWorkoutById(Number(id));

  return (
    <div className="px-6 py-12 flex flex-col justify-between gap-4 lg:flex-row lg:gap-14">
      <Image src={workout.image} alt={workout.name} width={400} height={200} className="rounded-2xl object-cover w-full lg:w-1/2 lg:h-full" />
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-black font-oswald">{workout.name}</h1>
        <p className="text-base text-[#9CA3AF]">{workout.description}</p>
        <div>
          {
            workout.muscleGroups.map((muscleGroup, index) => (
              <span key={index} className="text-[11px] text-black font-bold py-1 px-2.5 bg-primary rounded-full mr-2 uppercase">{muscleGroup}</span>
            ))
          }
        </div>
        <table className="table-auto bg-[#1E2330] rounded-2xl [&_td]:py-3.5 [&_td]:px-6">
          <tbody className="divide-y divide-[#232834] text-xs">
            <tr>
              <td className="uppercase text-[#9CA3AF] font-semibold">Equipment</td>
              <td className="text-end">{workout.equipment}</td>
            </tr>
            <tr>
              <td className="uppercase text-[#9CA3AF] font-semibold">DIFFICULTY</td>
              <td className="text-end">{workout.difficulty}</td>
            </tr>
            <tr>
              <td className="uppercase text-[#9CA3AF] font-semibold">reps</td>
              <td className="text-end">{workout.reps}</td>
            </tr>
            <tr>
              <td className="uppercase text-[#9CA3AF] font-semibold">Duration</td>
              <td className="text-end">{workout.duration} min</td>
            </tr>
            <tr>
              <td className="uppercase text-[#9CA3AF] font-semibold">Calories Burned</td>
              <td className="text-end">{workout.caloriesBurned} kcal</td>
            </tr>
            <tr>
              <td className="uppercase text-[#9CA3AF] font-semibold">Rating</td>
              <td className="text-end">{workout.rating}</td>
            </tr>
          </tbody>
        </table>
        <h3 className="text-lg font-black font-oswald uppercase">Instructions</h3>
        <div className="flex flex-col gap-2">
          {
            workout.instructions.map((instruction, index) => (
              <p key={index} className="text-sm text-[#9CA3AF]">{index + 1}. {instruction}</p>
            ))
          }
        </div>
        <DetailsActions />
      </div>
    </div>
  );
}