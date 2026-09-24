export default function Loading() {
  return (
    <div className="px-6 py-12 flex flex-col gap-8 lg:flex-row lg:gap-14 animate-pulse">

      {/* Image skeleton */}
      <div className="w-full lg:w-1/2 h-75 lg:h-125 rounded-2xl bg-[#1E2330]" />

      {/* Content */}
      <div className="flex flex-col gap-4 w-full lg:w-1/2">

        {/* Title */}
        <div className="h-10 w-3/4 rounded-lg bg-[#1E2330]" />

        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-[#1E2330]" />
          <div className="h-4 w-5/6 rounded bg-[#1E2330]" />
          <div className="h-4 w-2/3 rounded bg-[#1E2330]" />
        </div>

        {/* Muscle tags */}
        <div className="flex gap-2">
          <div className="h-6 w-20 rounded-full bg-[#1E2330]" />
          <div className="h-6 w-24 rounded-full bg-[#1E2330]" />
          <div className="h-6 w-16 rounded-full bg-[#1E2330]" />
        </div>

        {/* Table */}
        <div className="bg-[#1E2330] rounded-2xl overflow-hidden">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex justify-between py-3.5 px-6 border-b border-[#232834] last:border-0"
            >
              <div className="h-3 w-24 rounded bg-[#2A3040]" />
              <div className="h-3 w-16 rounded bg-[#2A3040]" />
            </div>
          ))}
        </div>

        {/* Instructions heading */}
        <div className="h-6 w-32 rounded bg-[#1E2330]" />

        {/* Instructions */}
        <div className="flex flex-col gap-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="h-4 rounded bg-[#1E2330]"
              style={{
                width: `${85 - index * 8}%`,
              }}
            />
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-2">
          <div className="h-10 w-32 rounded-lg bg-[#1E2330]" />
          <div className="h-10 w-24 rounded-lg bg-[#1E2330]" />
        </div>

      </div>
    </div>
  );
}