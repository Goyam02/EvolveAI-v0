"use client"

import React from 'react'

export default function FuturisticGradientHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image as the base - using the new provided image */}
<div className="absolute inset-0 w-full h-full">
  {/* Bottom layer - Gradient bubble background */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
      style={{
        backgroundImage: `url('/bgimg.jpg')`
      }}
    />

    {/* Top layer - soft white abstract pattern */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10 opacity-60"
      style={{
        backgroundImage: `url('/im1.png')`
      }}
    />
  </div>      
      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main title with enhanced contrast for image background */}
          <h1 className="font-display text-7xl md:text-8xl lg:text-[10rem] xl:text-[11rem] leading-[0.85] tracking-tight mb-8 text-[#2D1B69] font-black select-none drop-shadow-lg">
            Evolve AI
          </h1>
          
          {/* Subtitle with enhanced readability */}
          <p className="font-body text-xl md:text-2xl lg:text-3xl text-gray-800 font-medium tracking-wide leading-relaxed drop-shadow-sm">
            Where Innovation Meets Evolution
          </p>
        </div>
      </div>
      
      {/* Subtle floating dots - adjusted for visibility */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-purple-500/60 rounded-full animate-pulse opacity-70" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-blue-500/50 rounded-full animate-pulse delay-300 opacity-60" />
      <div className="absolute bottom-1/3 left-16 w-1.5 h-1.5 bg-pink-500/70 rounded-full animate-pulse delay-700 opacity-50" />
      <div className="absolute bottom-20 right-1/4 w-2.5 h-2.5 bg-indigo-500/55 rounded-full animate-pulse delay-500 opacity-65" />
      
      {/* Overall cohesive overlay that blends the image with gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-purple-50/20 mix-blend-soft-light" />
      
      {/* Additional overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10" />
    </section>
  )
}