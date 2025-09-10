"use client";

import { redirect } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

// Testimonial data with added image placeholders
const testimonials = [
  {
    text: "CodersFlex delivered precisely what we were looking for — an exceptionally robust backend architecture with an unwavering focus on security. Their expert team conducted a comprehensive audit of our existing application, uncovering and remedying multiple critical vulnerabilities that had previously gone undetected. What truly set them apart was their remarkable turn-around time; they delivered complex security solutions without compromising on quality or attention to detail. Their technical depth was evident in every interaction, from their thorough initial assessment to their meticulous implementation of security protocols. The peace of mind we've gained knowing our infrastructure is now fortified against potential threats is invaluable. Their collaborative approach and clear communication throughout the process made what could have been a stressful security overhaul into a smooth, educational experience for our entire team.",
    author: "Ankita Sharma",
    role: "Founder, ByteBloom Solutions",
    avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=AS",
  },
  {
    text: "CodersFlex helped us implement two-factor authentication and role-based access control for our patient portal. Their understanding of HIPAA compliance and secure development practices was evident. They're the kind of team you want when your product handles sensitive data.",
    author: "Vikram Patel",
    role: "CTO, MedStack Healthtech",
    avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=VP",
  },
  {
    text: "From initial consultation to final delivery, CodersFlex exceeded our expectations. They built a secure admin dashboard and integrated real-time analytics with zero downtime. We're looking forward to working with them again.",
    author: "Priya Soni",
    role: "Product Manager, RetailEdge Solutions",
    avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=PS",
  },
  {
    text: "We found ourselves grappling with significant API performance bottlenecks and concerning security vulnerabilities that were threatening our platform's stability and user trust. The CodersFlex team stepped in with a systematic approach, first conducting a thorough diagnostic analysis to identify the root causes of our performance degradation. They then meticulously optimized our backend infrastructure, implementing advanced caching strategies and database query refinements that dramatically improved response times. Beyond performance, they completely refactored our core services with security-first principles, implementing robust authentication protocols, input validation mechanisms, and encryption standards. Their expertise was particularly invaluable when they guided us through a rigorous external security audit, preparing comprehensive documentation and ensuring every vulnerability was addressed proactively. Remarkably, they accomplished this comprehensive transformation within just a few weeks, minimizing our downtime while maximizing the security and efficiency of our systems. The results were transformative—our API latency decreased by 68%, and we achieved a perfect score on our security audit, something we hadn't thought possible in such a short timeframe.",
    author: "Rahul Mehta",
    role: "Tech Lead, AlphaVision Edutech",
    avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=RM",
  },
  {
    text: "CodersFlex turned our idea into a functional MVP in just a month. The backend was secure, scalable, and easy to extend. They even guided us on server hardening and best practices for AWS deployment. Great experience!",
    author: "Nitin Verma",
    role: "Startup Founder",
    avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=NV",
  },
  {
    text: "Their security experts conducted a thorough penetration test on our core banking APIs. Their report was clear, actionable, and professional. We plugged 5 critical issues thanks to their help.",
    author: "Karan Malhotra",
    role: "Security Head, Finlogix FinTech",
    avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=KM",
  },
];

// Classes for the bento grid layout. Some items will span multiple columns or rows.
const bentoClasses = [
  "lg:col-span-2 lg:row-span-2", // First testimonial is a large feature
  "",
  "",
  "lg:col-span-3",
  "",
  "lg:col-span-4",
];

export default function TestimonialSection() {
  const sectionRef = useRef(null);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    // This effect handles loading the GSAP scripts from a CDN
    const gsapUrl =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    const scrollTriggerUrl =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";

    const loadScript = (src, onLoad) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        if (onLoad) onLoad();
        return;
      }
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = onLoad;
      script.onerror = () => console.error(`Failed to load script: ${src}`);
      document.head.appendChild(script);
    };

    loadScript(gsapUrl, () => {
      loadScript(scrollTriggerUrl, () => {
        if (window.gsap && window.ScrollTrigger) {
          window.gsap.registerPlugin(window.ScrollTrigger);
          setScriptsLoaded(true);
        }
      });
    });
  }, []);

  useEffect(() => {
    if (!scriptsLoaded) return;

    const gsapCore = window.gsap;

    const ctx = gsapCore.context(() => {
      // Animate all grid items (header and testimonials)
      const gridItems = gsapCore.utils.toArray(".bento-item");
      gridItems.forEach((item, i) => {
        gsapCore.from(item, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: i * 0.1, // Stagger the animation of each grid item
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Parallax for decorative SVGs
      gsapCore.to(".decorative-svg-1", {
        y: "-150px",
        rotation: 25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsapCore.to(".decorative-svg-2", {
        y: "150px",
        rotation: -25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [scriptsLoaded]);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-gray-100 relative overflow-hidden"
    >
      <div className="w-screen text-center text-4xl md:text-7xl mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-black">
        Testimonials
      </div>
      {/* Decorative SVG Shapes */}
      <div
        className="absolute top-20 -left-20 opacity-5 decorative-svg-1"
        style={{ zIndex: 1 }}
      >
        <svg
          width="300"
          height="300"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#FBBF24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-0 -right-24 opacity-5 decorative-svg-2"
        style={{ zIndex: 1 }}
      >
        <svg
          width="400"
          height="400"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 12.79C21 10.33 20.18 8.01998 18.73 6.13998C14.49 0.44998 5.51001 0.44998 1.27001 6.13998C-2.96999 11.83 0.850012 20.55 7.42001 22.58C9.45001 23.23 11.63 23.5 13.79 23.5C16.73 23.5 19.49 22.53 21.79 20.89"
            stroke="#FBBF24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative" style={{ zIndex: 2 }}>
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Grid Item 1: Header */}
          <div className="bento-item lg:col-span-2 bg-gray-900 rounded-2xl p-8 border border-gray-800 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Loved by <span className="text-yellow-400">Teams</span> Worldwide
            </h2>
            <p className="text-gray-300 max-w-2xl text-lg">
              Our commitment to security and performance has made us a trusted
              partner for businesses of all sizes.
            </p>
            <div className="mt-8">
              <button
                onClick={() => {
                  redirect("/contact");
                }}
                className="cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/20"
              >
                Let's Build Something Secure
              </button>
            </div>
          </div>

          {/* Map through testimonials and apply bento classes */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bento-item testimonial-card break-inside-avoid bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-yellow-400 transition-colors duration-300 ease-in-out group flex flex-col ${
                bentoClasses[index] || ""
              }`}
            >
              <p className="text-gray-300 mb-6 relative flex-grow">
                <span className="absolute -top-4 -left-5 text-6xl text-gray-800 font-serif z-0">
                  “
                </span>
                <span className="relative z-10">"{testimonial.text}"</span>
              </p>

              <div className="flex items-center mt-auto">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full mr-4 border-2 border-gray-800 group-hover:border-yellow-400 transition-colors"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/100x100/E2E8F0/4A5568?text=??";
                  }}
                />
                <div>
                  <h3 className="text-white font-bold">{testimonial.author}</h3>
                  <p className="text-yellow-400 text-sm font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
