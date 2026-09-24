export const workoutData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return res.json();
};

export const getWorkoutById = async (id: number) : Promise<Workout> => {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  return res.json();
}

export interface Workout {
  id: number;
  name: string;
  description: string;
  difficulty: string;
  duration: number;
  equipment: string;
  caloriesBurned: number;
  image: string;
  instructions: string[];
  muscleGroups: string[];
  rating: number;
  reps: string;
  sets: number;
}


// caloriesBurned
// : 
// 150
// description
// : 
// "Strict standing press that builds delts, triceps, and overhead stability without leg drive."
// difficulty
// : 
// "Intermediate"
// duration
// : 
// 20
// equipment
// : 
// "Barbell"
// id
// : 
// 4
// image
// : 
// "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666703.jpg?w=740"
// instructions
// : 
// Array(4)
// 0
// : 
// "Hold the bar at the front rack with a vertical forearm."
// 1
// : 
// "Brace abs and glutes, then press the bar over the crown of the head."
// 2
// : 
// "Lock out with biceps by the ears and a stacked ribcage."
// 3
// : 
// "Lower to the clavicle under control before the next rep."
// length
// : 
// 4
// [[Prototype]]
// : 
// Array(0)
// muscleGroups
// : 
// Array(2)
// 0
// : 
// "Shoulders"
// 1
// : 
// "Arms"
// length
// : 
// 2
// [[Prototype]]
// : 
// Array(0)
// name
// : 
// "Overhead Press"
// rating
// : 
// 4.6
// reps
// : 
// "6-8"
// sets
// : 
// 4