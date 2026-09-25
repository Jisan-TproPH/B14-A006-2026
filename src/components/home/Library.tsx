"use client";

import { Suspense, useState } from "react";
import LibraryCollections from "./LibraryCollections";

export default function Library() {


  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div id="library" className="flex flex-col gap-6 mt-4 md:mt-16">
      <div className="flex flex-row gap-2 md:gap-4 items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-black font-oswald">THE LIBRARY</h2>
          <p className="text-sm md:text-lg text-[#9CA3AF] mt-0.5">Twelve lifts covering every major muscle group.</p>
        </div>
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Search workouts..." className="text-sm bg-[#13161D] text-[#9CA3AF] placeholder:text-[#9CA3AF] border border-[#374151] focus:outline-none focus:ring-2 focus:ring-primary rounded-xl py-1 px-2" />
      </div>
      <Suspense fallback={<div className="flex items-center justify-center p-10">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
      </div>}>
        <LibraryCollections searchTerm={searchTerm} />
      </Suspense>
    </div>
  )
}
