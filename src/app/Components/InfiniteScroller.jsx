"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function InfiniteTextScroller() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    // If the scroller element isn't available yet, do nothing.
    if (!scrollerRef.current) return;

    // Use GSAP context for proper cleanup.
    const ctx = gsap.context(() => {
      const scroller = scrollerRef.current;

      // Calculate the distance the scroller needs to move.
      // Since the content is duplicated, we move it by half of its total width
      // to create a seamless loop.
      const scrollWidth = scroller.offsetWidth / 2;

      // Animate the scroller.
      gsap.to(scroller, {
        x: -scrollWidth, // Move left by the width of the original content
        duration: 20, // Controls the speed of the scroll (higher value is slower)
        ease: "none", // Ensures a constant, linear speed
        repeat: -1, // Loop the animation infinitely
      });
    }, scrollerRef); // Scope the GSAP animations to this component

    // Cleanup function to revert all GSAP animations when the component unmounts.
    return () => ctx.revert();
  }, []);

  return (
    <div
      // This outer container hides the overflowing content.
      className="w-screen overflow-hidden bg-black py-6 mt-10"
    >
      <div
        ref={scrollerRef}
        // This inner container holds the text and will be animated.
        className="flex whitespace-nowrap text-2xl font-bold"
      >
        {/* Original Content */}
        <span className="scroll-text text-yellow-400 px-8">
          ⚡ Secure • Fast • Reliable
        </span>
        <span className="scroll-text text-white px-8">
          ⚡ Deployment • Defense • Operations
        </span>

        {/* Duplicated Content (for the seamless loop effect) */}
        <span className="scroll-text text-yellow-400 px-8">
          ⚡ Secure • Fast • Reliable
        </span>
        <span className="scroll-text text-white px-8">
          ⚡ Deployment • Defense • Operations
        </span>
      </div>
    </div>
  );
}
