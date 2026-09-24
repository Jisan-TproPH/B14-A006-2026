"use client"

// honestly mobile version idea I got from chat gpt

import Image from "next/image"
import { useState } from "react"
import { NavLinks, NavState } from "./NavUtils"

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full p-6">

      {/* Top row */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2.5">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={28}
            height={28}
          />

          <span className="text-[18px] font-black font-oswald">
            FITLOG
          </span>
        </div>

        {/* Desktop  */}
        <div className="hidden md:flex items-center gap-2.5 text-[#9CA3AF] text-[12px] font-semibold">
          <NavLinks />
        </div>

        <div className="hidden md:flex items-center gap-6 text-xs">
          <NavState />
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-6 flex flex-col gap-6">

          {/* Links */}
          <div className="flex flex-col gap-4 text-[#9CA3AF] text-[12px] font-semibold">
            <NavLinks />
          </div>

        
          <div className="flex flex-col gap-4 text-xs border-t border-[#6d747f] pt-4 px-3">
            <NavState />
          </div>

        </div>
      )}

    </nav>
  )
}