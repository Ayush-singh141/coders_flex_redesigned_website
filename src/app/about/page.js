"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

// Data for the sections to keep the JSX clean
const services = [
  {
    icon: "M3 15.75c0-1.42.316-2.772.899-4.002m16.202 4.002c.583-1.23.899-2.582.899-4.002m-18 4.002a21.75 21.75 0 004.23-10.435M18.899 5.315a21.75 21.75 0 01-4.23 10.435m-4.23-10.435a21.75 21.75 0 00-4.23 10.435M12 2.25c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z",
    title: "Custom Web Application Development",
    description:
      "Using Java Spring Boot, modern frameworks, and best practices to build scalable, high-performance apps.",
  },
  {
    icon: "M8.25 7.5h7.5v7.5h-7.5V7.5z M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z",
    title: "Backend Systems & API Development",
    description:
      "Strong, efficient backend architectures that handle real-world scale and performance.",
  },
  {
    icon: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
    title: "Cybersecurity Services",
    description:
      "Including penetration testing, vulnerability assessments, security audits, compliance checks, and real-time threat monitoring.",
  },
  {
    icon: "M8.288 15.038a5.25 5.25 0 017.424 0M5.136 11.962a8.25 8.25 0 0113.728 0M1.984 8.886a11.25 11.25 0 0119.032 0M12 18.75a.75.75 0 100-1.5.75.75 0 000 1.5z",
    title: "IoT Security Consulting",
    description:
      "Securing connected devices and networks with Govind's IoT and cybersecurity expertise.",
  },
];

const usps = [
  {
    title: "Two Experts, One Vision",
    description:
      "You get both development and security under one roof—no need to juggle multiple vendors.",
  },
  {
    title: "Tailored Solutions",
    description:
      "We don't offer cookie-cutter services. Everything we do is customized to your business goals.",
  },
  {
    title: "Built to Scale, Secured to Last",
    description:
      "We build systems designed for growth and lock them down with battle-tested security practices.",
  },
  {
    title: "Tech That Talks Business",
    description:
      "We speak your language—whether it's performance, ROI, or risk mitigation.",
  },
];

const founders = [
  {
    name: "Govind Sharma",
    title: "Founder – Security First, Always",
    bio: "Govind serves as our cybersecurity expert. Holding a BCA in IoT and a Post Graduate degree in Cyber Security and Digital Forensics, along with an ISO 27001 certification for IT audits, he guarantees clients' peace of mind. He has authored research papers and proficiently manages all aspects of cybersecurity, from penetration testing to comprehensive audits. With a sharp focus on vulnerabilities, Govind is adept at implementing effective solutions.",
    image:
      "https://static.wixstatic.com/media/e23116_3fb1eada49c941c5ac605f588736e46b~mv2.png/v1/crop/x_0,y_0,w_1500,h_1244/fill/w_806,h_668,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/govind-Photoroom_edited.png",
  },
  {
    name: "Ankur Joshi",
    title: "Founder – Code, Coffee & Clean Architecture",
    bio: "Ankur is the kind of developer who sees structure in chaos. With solid experience in Java Spring Boot, full-stack development, and building scalable systems, he focuses on delivering clean, efficient, and high-performance solutions. He's the guy who turns complex problems into simple, elegant code that just works. If it's about building something solid from the ground up—he's your man.",
    image:
      "https://static.wixstatic.com/media/e23116_67446cee4bcd4fa39628997ef12dcc09~mv2.png/v1/crop/x_0,y_683,w_720,h_597/fill/w_720,h_597,al_c,q_90,enc_avif,quality_auto/Ankur-Photoroom.png",
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    // Only load GSAP on non-mobile devices for better performance
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return;
    }

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
      // Animate each element with the .animate-in class as it enters the viewport
      gsapCore.utils.toArray(".animate-in").forEach((elem) => {
        gsapCore.from(elem, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Only apply these animations on larger screens
      if (window.innerWidth >= 768) {
        gsapCore.to(".decorative-svg-1", {
          y: "-150px",
          rotation: 25,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
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
            scrub: 1,
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, [scriptsLoaded]);

  return (
    <div ref={sectionRef} className="bg-white text-gray-800 overflow-hidden">
      {/* Decorative SVG Shapes - Hidden on mobile */}
      <div
        className="hidden md:block absolute top-1/4 -left-40 opacity-20 decorative-svg-1"
        style={{ zIndex: 1 }}
      >
        <svg
          width="500"
          height="500"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#1f2937"
            strokeWidth="1"
          />
        </svg>
      </div>
      <div
        className="hidden md:block absolute bottom-1/4 -right-40 opacity-20 decorative-svg-2"
        style={{ zIndex: 1 }}
      >
        <svg
          width="500"
          height="500"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 12.79C21 10.33 20.18 8.01998 18.73 6.13998C14.49 0.44998 5.51001 0.44998 1.27001 6.13998C-2.96999 11.83 0.850012 20.55 7.42001 22.58C9.45001 23.23 11.63 23.5 13.79 23.5C16.73 23.5 19.49 22.53 21.79 20.89"
            stroke="#1f2937"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-54 md:pb-20 text-center relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-gray-900 animate-in">
            We Build <span className="text-yellow-500">Secure</span> &{" "}
            <span className="text-yellow-500">Future-Proof</span> Digital
            Solutions
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-in px-2">
            At CodersFlex, we are a duo of tech enthusiasts who have teamed up
            to make great things happen in the world of development and
            cybersecurity.
          </p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-12 md:py-20 bg-gray-50 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 animate-in">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-sm sm:text-base animate-in">
              From idea to execution—and protection—we are there at every step.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 animate-in"
              >
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-yellow-500 mb-3 md:mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={service.icon}
                  />
                </svg>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 animate-in">
              Why Choose CodersFlex?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-sm sm:text-base animate-in">
              Our Unique Selling Proposition
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {usps.map((usp, index) => (
              <div
                key={index}
                className="bg-gray-100 p-5 md:p-6 rounded-lg border border-gray-200 animate-in"
              >
                <h3 className="text-lg md:text-xl font-bold text-yellow-500 mb-2">
                  {usp.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  {usp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founders Section */}
      <section className="py-12 md:py-20 bg-gray-50 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 animate-in">
              Meet the Founders
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-sm sm:text-base animate-in">
              Welcome to CodersFlex, where expertise meets innovation. Founded
              by Govind Sharma and Ankur Joshi, our team delivers tailored
              solutions for your success.
            </p>
          </div>
          <div className="space-y-12 md:space-y-16">
            {founders.map((founder, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-8 md:gap-12 animate-in`}
              >
                <div className="md:w-1/3 w-2/3">
                  <Image
                    width={300}
                    height={300}
                    src={founder.image}
                    alt={founder.name}
                    className="rounded-xl md:rounded-2xl w-full h-auto shadow-lg md:shadow-2xl shadow-gray-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/500x500/e2e8f0/4a5568?text=??";
                    }}
                  />
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {founder.name}
                  </h3>
                  <p className="text-yellow-500 text-base md:text-lg mb-3 md:mb-4">
                    {founder.title}
                  </p>
                  <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                    {founder.bio}
                  </p>
                  <button className="bg-yellow-400 text-black font-bold py-2 px-6 md:py-3 md:px-8 rounded-lg hover:bg-yellow-500 transition-colors transform hover:scale-105 active:scale-95">
                    Lets Talk
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
