"use client";
import React, { useEffect, useRef, useState } from "react";

// Reusable component for each contact information item
const ContactInfoItem = ({ icon, title, children }) => (
  <div className="flex items-start gap-4 animate-in">
    <div className="bg-yellow-100 text-yellow-600 p-2 sm:p-3 rounded-full">
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {icon}
      </svg>
    </div>
    <div>
      <h3 className="font-bold text-gray-900 text-sm sm:text-base">{title}</h3>
      <div className="text-gray-600 text-sm sm:text-base">{children}</div>
    </div>
  </div>
);

export default function Contact() {
  const sectionRef = useRef(null);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server or API
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    // Reset form after submission
    setFormData({ name: "", email: "", subject: "", message: "" });
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
    <div
      ref={sectionRef}
      className="bg-white text-gray-800 overflow-hidden pt-16 sm:pt-20 md:pt-24"
    >
      {/* Decorative SVG Shapes - Hidden on mobile for better performance */}
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

      <section className="py-12 sm:py-16 md:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-gray-900 animate-in">
              Get In <span className="text-yellow-500">Touch</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto animate-in px-2">
              Have a project in mind or just want to say hello? We would love to
              hear from you.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-10 sm:gap-14 md:gap-16 items-start max-w-6xl mx-auto">
            {/* Left Column: Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <ContactInfoItem
                title="Our Email"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                }
              >
                <a
                  href="mailto:contact@codersflex.com"
                  className="hover:text-yellow-600 transition-colors"
                >
                  contact@codersflex.com
                </a>
              </ContactInfoItem>

              <ContactInfoItem
                title="Office Location"
                icon={
                  <>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </>
                }
              >
                <p>Jaipur, Rajasthan</p>
                <p>India</p>
              </ContactInfoItem>

              <ContactInfoItem
                title="Let's Connect"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.186 2.25 2.25 0 00-3.933 2.186z"
                  />
                }
              >
                <p>Follow us on social media!</p>
                {/* Add social links here if needed */}
              </ContactInfoItem>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-200 shadow-lg animate-in">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 transition"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-colors transform hover:scale-105 active:scale-95"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
