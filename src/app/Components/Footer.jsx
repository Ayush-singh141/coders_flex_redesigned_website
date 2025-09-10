"use client";

// An SVG icon component for social media links, using standard <a> tags
const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main content grid: stacks on mobile, row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Logo and Brandline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center md:justify-start">
              <img
                src="/coders_flex_new_logo.png" // Using a placeholder URL for the logo
                alt="CodersFlex Logo"
                className="w-14 mr-[-15px]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/80x80/000000/FFFFFF?text=CF";
                }}
              />
              <h2 className="text-2xl font-bold">CodersFlex</h2>
            </div>
            <p className="text-gray-400 mt-2">Build Smart. Defend Strong.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info & Socials */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Get in Touch</h3>
            <p className="text-gray-400">contact@codersflex.com</p>
            <div className="flex justify-center md:justify-start space-x-6 mt-4">
              <SocialIcon href="https://github.com">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12.013c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.013C22 6.477 17.523 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://linkedin.com">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.389 0-1.601 1.086-1.601 2.206v4.248H8.014V8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.718zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.128 0c0 1.14-.931 2.065-2.065 2.065zm1.336 9.905H4.002V8.59h2.671v8.748zM17.668 1H6.332C3.935 1 2 2.936 2 5.332v13.336C2 21.065 3.935 23 6.332 23h11.336c2.398 0 4.332-1.935 4.332-4.332V5.332C22 2.936 20.065 1 17.668 1z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://twitter.com">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} CodersFlex. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
