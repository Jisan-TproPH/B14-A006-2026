import LibraryCollections from "./LibraryCollections";

export default function Library() {
  return (
    <div className="flex flex-col gap-6 mt-4 md:mt-16">
        <div>
            <h2 className="text-2xl md:text-3xl font-black font-oswald">THE LIBRARY</h2>
            <p className="text-sm md:text-lg text-[#9CA3AF] mt-0.5">Twelve lifts covering every major muscle group.</p>
        </div>
        <LibraryCollections />
    </div>
  )
}
