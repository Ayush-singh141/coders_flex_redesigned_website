"use client";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

// Data for the service cards
const serviceOfferings = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
      />
    ),
    title: "Web Development Services",
    description:
      "Codersflex builds fast, modern, and scalable websites tailored to your goals. With top-tier developers and the latest tech, we deliver clean, high-performing sites that stand out.",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286z"
      />
    ),
    title: "Cybersecurity Services",
    description:
      "Protect your business with Codersflex. We offer smart, reliable security solutions to safeguard your data, systems, and reputation—before threats even get close.",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    ),
    title: "All-In-One Dev & Security Solution",
    description:
      "Get the best of both worlds with integrated development and cybersecurity, ensuring your project is both innovative and invulnerable from the ground up.",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    ),
    title: "Comprehensive Customer Support",
    description:
      "From onboarding to incident response, our expert team is here 24/7 to support you with tailored solutions and real-time assistance.",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We will be in touch shortly.");
    setFormData({ fullName: "", phone: "", email: "" });
  };

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
    }, sectionRef);
    return () => ctx.revert();
  }, [scriptsLoaded]);

  return (
    <div ref={sectionRef} className="bg-white text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24 bg-gray-50 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 animate-in">
                CodersFlex <span className="text-yellow-500">Services</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0 mt-4 animate-in">
                Empowering your business with cutting-edge cybersecurity and
                seamless deployment solutions.
              </p>
              <div className="mt-6 md:mt-8 animate-in">
                <button
                  onClick={() => {
                    redirect("/contact");
                  }}
                  className="bg-yellow-400 text-black font-bold py-2 px-6 md:py-3 md:px-8 rounded-lg hover:bg-yellow-500 transition-all transform hover:scale-105 active:scale-95 cursor-pointer duration-300"
                >
                  Get a Free Consultation
                </button>
              </div>
            </div>
            {/* Image Content */}
            <div className="relative animate-in">
              <div className="hidden md:block absolute -top-4 -right-4 w-full h-full bg-gray-200 rounded-2xl transform rotate-3"></div>
              <Image
                width={600}
                height={400}
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
                alt="Web Development and Cybersecurity Services"
                className="rounded-xl md:rounded-2xl w-full h-auto relative shadow-lg md:shadow-2xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/e2e8f0/4a5568?text=Services";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-12 md:py-16 lg:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 animate-in">
              What We Offer
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {serviceOfferings.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 animate-in flex items-start gap-4 md:gap-6"
              >
                <div className="bg-yellow-100 text-yellow-600 p-2 md:p-3 rounded-full mt-1 flex-shrink-0">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {service.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-900 text-white relative z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold animate-in">
            Lets Build Together
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mt-2 mb-6 md:mb-8 text-sm md:text-base animate-in">
            Ready to start a project or have a question? Fill out the form below
            and we will be in touch.
          </p>
          <div className="max-w-md mx-auto animate-in">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800/50 p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-700 space-y-4"
            >
              <div>
                <label htmlFor="fullName" className="sr-only">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 transition text-white text-sm md:text-base"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number (Optional)"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 transition text-white text-sm md:text-base"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 transition text-white text-sm md:text-base"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-all transform hover:scale-105 active:scale-95 duration-300 cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
