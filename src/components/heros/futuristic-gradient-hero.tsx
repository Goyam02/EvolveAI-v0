"use client"

import React from "react"

export default function FuturisticGradientHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Bottom layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url('/bgimg.jpg')`
          }}
        />
        {/* Top layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10 opacity-60"
          style={{
            backgroundImage: `url('/im1.png')`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 sm:px-8">
        <div className="text-center max-w-6xl mx-auto">
          {/* Responsive Heading */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] leading-[0.9] tracking-tight mb-6 text-[#35103C] font-black select-none drop-shadow-lg">
            Evolve AI
          </h1>

          {/* Responsive Subtitle */}
          <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#35103C] font-medium tracking-wide leading-relaxed drop-shadow-sm">
            Where Innovation Meets Evolution
          </p>
        </div>
      </div>

      {/* Floating dots */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-purple-500/60 rounded-full animate-pulse opacity-70" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-blue-500/50 rounded-full animate-pulse delay-300 opacity-60" />
      <div className="absolute bottom-1/3 left-16 w-1.5 h-1.5 bg-pink-500/70 rounded-full animate-pulse delay-700 opacity-50" />
      <div className="absolute bottom-20 right-1/4 w-2.5 h-2.5 bg-indigo-500/55 rounded-full animate-pulse delay-500 opacity-65" />
    </section>
  )
}
