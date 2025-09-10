"use client";
import GridDistortion from "./GridDistortion";
import InfiniteTextScroller from "./InfiniteScroller";

export default function HeroSection() {
  return (
    <div className="relative w-screen h-screen shadow-black shadow-2xl">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <GridDistortion
          imageSrc="/hero.png"
          grid={10}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
          className="custom-class"
        />
      </div>

      <div className="relative z-10 w-full h-full flex justify-center items-end pointer-events-none">
        <div className="flex flex-col items-center gap-4 w-[95%] h-[85%] md:h-[80%] justify-center md:justify-center">
          {/* Tagline */}
          <div className="text-xs md:text-sm text-yellow-200 bg-black px-4 py-2 md:px-6 md:py-2 rounded-full mt-4 md:mt-0">
            Build Smart, Defend Strong
          </div>

          {/* Main Heading */}
          <div
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center w-full md:w-[90%] lg:w-[80%] xl:w-[60%]
                bg-gradient-to-b from-gray-400 via-white to-gray-400 
                text-transparent bg-clip-text capitalize px-4"
          >
            From{" "}
            <span className="bg-gradient-to-b from-yellow-700 via-yellow-400 to-yellow-700 bg-clip-text text-transparent">
              deployment
            </span>{" "}
            to{" "}
            <span className="bg-gradient-to-b from-yellow-700 via-yellow-400 to-yellow-700 bg-clip-text text-transparent">
              defense
            </span>{" "}
            Streamline and secure your digital operations
          </div>

          {/* Subheading */}
          <p className="text-white text-sm md:text-base text-center px-4">
            Build, Scale, and Secure — Without Compromise
          </p>

          {/* CTA Button */}
          <button className="text-lg md:text-xl text-black cursor-pointer font-bold bg-yellow-400 px-6 py-3 md:px-10 md:py-4 rounded-full pointer-events-auto shadow-md shadow-black hover:bg-yellow-300 hover:shadow-lg hover:shadow-black transition-all duration-500 mt-2 md:mt-0">
            Request A Meeting
          </button>

          {/* Infinite Scroller */}
          <div className="w-screen mt-4 md:mt-0">
            <InfiniteTextScroller />
          </div>
        </div>
      </div>
    </div>
  );
}
