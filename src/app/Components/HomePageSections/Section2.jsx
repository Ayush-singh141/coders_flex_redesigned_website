"use client";
import { redirect } from "next/navigation";
import FaultyTerminal from "../PixelBlast";
export default function Section2() {
  return (
    <div className="bg-gray-100 w-screen pt-10 md:pt-20 lg:pt-28">
      <div className="w-screen flex justify-center items-center h-auto lg:h-[90vh] pt-8 md:pt-10 pb-0 px-4">
        <div className="w-full md:w-[90%] lg:w-[80%] h-full rounded-xl relative overflow-hidden">
          {/* PixelBlast Background - Full coverage */}
          <div className="absolute w-full h-full inset-0 z-0">
            <FaultyTerminal
              scale={1.5}
              gridMul={[2, 1]}
              digitSize={1.2}
              timeScale={1}
              pause={false}
              scanlineIntensity={1}
              glitchAmount={1}
              flickerAmount={1}
              noiseAmp={1}
              chromaticAberration={0}
              dither={0}
              curvature={0}
              tint="#f5ce0a"
              mouseReact={true}
              mouseStrength={0.5}
              pageLoadAnimation={false}
              brightness={1}
            />
          </div>

          {/* Foreground Content */}
          <div className="relative z-[8] w-full h-full flex flex-col justify-center items-center pointer-events-none py-8 md:py-10 lg:py-12 text-black px-4 md:px-8">
            <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold capitalize text-center text-white text-shadow-md text-shadow-black">
              <span className="text-yellow-400">CyberSecurity</span>, Designed
              for You
            </div>
            <span className="capitalize text-sm md:text-base mt-2 text-center text-white text-shadow-md text-shadow-black">
              a dynamic team of developers and Designers
            </span>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center w-full md:w-[90%] lg:w-[80%] pt-6 md:pt-8 lg:pt-10 text-white text-shadow-black text-shadow-md">
              At Coders <span className="text-yellow-600">Flex</span>,we blend
              expert knowledge with creative strategies to protect your digital
              space. From threat detection to data protection, our security
              solutions are built with your unique needs in mind.
            </p>
            <button
              onClick={() => {
                redirect("/contact");
              }}
              className="mt-6 md:mt-8 lg:mt-10 px-6 py-3 md:px-10 md:py-4 lg:px-12 lg:py-5 bg-yellow-400 rounded-full pointer-events-auto cursor-pointer hover:bg-yellow-500 transition-all duration-500 flex items-center text-sm md:text-base"
            >
              Secure Your Site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
