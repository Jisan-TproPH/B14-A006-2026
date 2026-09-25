"use client"

import { Bookmark, Calendar } from "lucide-react"

export default function DetailsActions() {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-6 text-sm">
        <button className="flex items-center justify-center bg-primary text-black font-bold py-3 px-6 rounded-lg hover:bg-[#F5F5F5] transition-colors duration-300">
            <Calendar className="mr-2"/> Add to today's plan
        </button>
        <button className="flex items-center justify-center text-white font-semibold py-3 px-6 rounded-lg bg-transparent border-[0.5px] border-[#374151] hover:bg-white hover:text-black transition-colors duration-300">
            <Bookmark className="mr-2"/> Save for later
        </button>
    </div>
  )
}
