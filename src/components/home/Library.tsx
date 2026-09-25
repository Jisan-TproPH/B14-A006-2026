import { Suspense } from "react";
import LibraryCollections from "./LibraryCollections";

export default function Library() {
  return (
    <div id="library" className="flex flex-col gap-6 mt-4 md:mt-16">
      <div>
        <h2 className="text-2xl md:text-3xl font-black font-oswald">THE LIBRARY</h2>
        <p className="text-sm md:text-lg text-[#9CA3AF] mt-0.5">Twelve lifts covering every major muscle group.</p>
      </div>
      <Suspense fallback={<div className="flex items-center justify-center p-10">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
      </div>}>
        <LibraryCollections />
      </Suspense>
    </div>
  )
}
