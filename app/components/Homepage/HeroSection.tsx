"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const words = ["Fuels", "Energy", "Valuable Products"];

export default function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const currentWord = words[currentWordIndex];

      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          // Wait a bit before typing the next word
        }
      } else {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
        if (currentText === currentWord) {
          setIsDeleting(true);
          // Pause at the end of the word
        }
      }
    };

    let delay = 150;
    if (isDeleting) {
      delay = 50;
    }
    if (!isDeleting && currentText === words[currentWordIndex]) {
      delay = 2000;
    }
    if (isDeleting && currentText === "") {
      delay = 500;
    }

    const timeout = setTimeout(type, delay);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section className="relative w-full h-screen min-h-[100svh] [min-height:100dvh] flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/homepage/herosection.jpg"
          alt="Sencirc Facility"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Subtle dark gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>

      <div className="relative z-10 px-6 md:pl-[10vw] lg:pl-[10vw] w-full pb-[40vh] md:pr-[30vw]">
        <div className="inline-block bg-[#6fc238] text-white px-4 md:px-5 py-2 text-sm md:text-xl lg:text-2xl font-bold uppercase tracking-wide mb-2 shadow-lg">
          We invest in, build, and own companies that convert
        </div>

        <h1 className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-[90px] font-black tracking-tighter drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] leading-tight flex items-center flex-nowrap whitespace-nowrap">
          Waste to&nbsp;<span className="text-[#6fc238]">{currentText}</span><span className="text-[#6fc238] animate-pulse font-light">|</span>
        </h1>
      </div>
    </section>
  );
}
