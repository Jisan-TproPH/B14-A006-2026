import { getWorkoutById } from "@/lib/workoutData";

export default async function DetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const workout = await getWorkoutById(Number(id));

  return (
    <div>
      <h1>{workout.name}</h1>
      <p>{workout.description}</p>
    </div>
  )
}
