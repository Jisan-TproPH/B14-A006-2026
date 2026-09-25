import Image from "next/image";

const Hero = () => {
    return <div className="flex flex-col md:flex-row p-8 md:p-14 bg-[#222630] rounded-xl gap-6">
        <div className="flex-1 flex flex-col justify-center  gap-6 md:gap-8 ">
            <span className="text-primary text-xs font-bold">WORKOUT LIBRARY</span>
            <h1 className="text-4xl md:text-6xl font-black font-oswald">TRAIN WITH INTENT. LOG <br/>EVERY SET.</h1>
            <p className="text-sm md:text-xl text-[#9CA3AF]">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>
            <div className="flex gap-4">
                <a href="#library" className="bg-primary text-black px-6 py-3 rounded-md font-semibold">BROWSE WORKOUTS</a>
            </div>
        </div>
        <div className="flex-1 flex justify-center items-center mt-4 md:mt-0">
            <Image src="/assets/banner.png" alt="Hero Image" width={600} height={600} />
        </div>
    </div>
}

export default Hero;