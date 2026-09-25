import PlanState from "@/components/myplan/PlanState";
import { PlanView } from "@/components/myplan/PlanView";
import { workoutData } from "@/lib/workoutData";


const PlanPage = async () => {

  const workouts = await workoutData();

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-2xl md:text-3xl font-black font-oswald">MY PLAN</h2>
        <p className="text-sm md:text-lg text-[#9CA3AF] mt-0.5">Cap of five lifts for today. Finish them, then load more.</p>
      </div>
      <PlanState workouts={workouts} />
      <PlanView workouts={workouts} />
    </div>
  )
}

export default PlanPage;


