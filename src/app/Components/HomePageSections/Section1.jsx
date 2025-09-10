"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import DotGrid from "../DotGrid";
import { redirect } from "next/navigation";

export default function Section1() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    const ctx = gsap.context(() => {
      const scroller = scrollerRef.current;
      const scrollWidth = scroller.offsetWidth / 2;

      gsap.to(scroller, {
        x: -scrollWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    }, scrollerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="bg-gray-100 w-screen pt-10 md:pt-20 lg:pt-28">
        {/* Trusted By Section */}
        <div className="w-screen flex justify-center items-center text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-600 to-black px-4 text-center">
          Trusted By
        </div>

        {/* Client Scroller */}
        <div className="w-full overflow-hidden mt-5 md:mt-7 border-2 border-gray-200">
          <div ref={scrollerRef} className="flex whitespace-nowrap">
            {[
              { name: "ByteBloom Solutions" },
              { name: "MedStack HealthTech" },
              { name: "RetailEdge Solutions" },
              { name: "AlphaVision Edutech" },
              { name: "FinLogix FinTech" },
              // Duplicate the array for the infinite scroll effect
              { name: "ByteBloom Solutions" },
              { name: "MedStack HealthTech" },
              { name: "RetailEdge Solutions" },
              { name: "AlphaVision Edutech" },
              { name: "FinLogix FinTech" },
            ].map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-x-2 md:gap-x-3 px-4 sm:px-8 md:px-[60px] lg:px-[100px] py-6 md:py-8 lg:py-12 text-gray-400 border-r-2 border-gray-200"
              >
                {/* Placeholder Icon */}
                <div className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-md"></div>
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-tight">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Content Section with DotGrid */}
        <div className="w-screen flex justify-center items-center h-auto lg:h-[90vh] pt-8 md:pt-10 pb-0 px-4">
          <div className="w-full md:w-[90%] lg:w-[80%] h-full rounded-xl relative overflow-hidden">
            {/* DotGrid Background */}
            <div className="absolute w-[100%] h-[100%] inset-0 z-0">
              <DotGrid
                dotSize={5}
                gap={15}
                baseColor="#ebcc34"
                activeColor="#f5ce0a"
                proximity={120}
                shockRadius={250}
                shockStrength={5}
                resistance={750}
                returnDuration={1.5}
              />
            </div>

            {/* Foreground Content */}
            <div className="relative z-[8] w-[100%] h-[100%] flex flex-col justify-start items-center pointer-events-none py-8 md:py-10 lg:py-12 text-black px-4 md:px-8">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold capitalize text-center">
                We are <span className="text-yellow-400">dynamic</span>
              </div>
              <span className="capitalize text-sm md:text-base mt-2 text-center">
                a dynamic team of developers and Designers
              </span>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center w-full md:w-[90%] lg:w-[80%] pt-6 md:pt-8 lg:pt-10">
                At Coders <span className="text-yellow-600">Flex</span>, we
                enable businesses to succeed in the digital world with our
                tailored services. Our Web Development team designs seamless
                websites that cater to your unique needs, while our
                Cybersecurity Services defend your online presence against
                potential. Count on us to elevate and safeguard your digital
                journey.
              </p>
              <button
                onClick={() => {
                  redirect("/about");
                }}
                className="mt-6 md:mt-8 lg:mt-10 px-6 py-3 md:px-10 md:py-4 lg:px-12 lg:py-5 bg-yellow-400 rounded-full pointer-events-auto cursor-pointer hover:bg-yellow-500 transition-all duration-500 flex items-center text-sm md:text-base"
              >
                Know More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
