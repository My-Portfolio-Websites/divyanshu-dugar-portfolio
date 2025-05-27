"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function HomeHero() {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current!, {
      strings: [
        "Web Developer",
        "Data Analyst",
        "Content Creator",
        "Teacher",
        "Learner"
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy(); // Clean up on unmount
    };
  }, []);

  return (
    <section className="hero min-h-screen bg-base-100">
      <div className="hero-content p-0 flex-col lg:flex-row-reverse justify-between items-center w-full">
        {/* Right Section Image */}
        <img
          src="/mickey.jpeg"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Hero"
        />

        {/* Left Section Text */}
        <div>
          <h1 className="text-5xl font-bold">
            Hi! My name is <span className="text-purple-500">Divyanshu</span>
          </h1>
          <p className="py-3 text-xl">and I am a passionate</p>

          {/* Typed JS element */}
          <span
            ref={el}
            className="text-purple-500 text-lg font-semibold inline-block leading-tight"
          />


          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            
            <a
              className="btn btn-secondary"
              href="https://github.com/divyanshu-dugar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a
              className="btn btn-secondary"
              href="https://www.linkedin.com/in/divyanshu-dugar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
