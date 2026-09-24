import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10 px-6 md:px-12 ">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
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
                <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </footer>
    )
}
