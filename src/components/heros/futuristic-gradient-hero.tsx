"use client"

import React from 'react'

export default function FuturisticGradientHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image as the base - using the new provided image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1754553082599-xzuwije61wi.png')`
        }}
      />
      
      {/* Soft gradient overlay to match previous screenshot aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F0F9FF]/40 via-[#EDE9FE]/30 to-[#DDD6FE]/40" />
      
      {/* Additional subtle color wash */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-purple-50/15 to-pink-50/20" />
      
      {/* Large soft circular gradient elements - lighter to blend with image */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-radial from-blue-100/25 via-blue-50/15 to-transparent" />
      <div className="absolute top-10 right-10 w-[400px] h-[400px] rounded-full bg-gradient-radial from-purple-100/20 via-purple-50/10 to-transparent" />
      <div className="absolute bottom-0 left-20 w-[350px] h-[350px] rounded-full bg-gradient-radial from-indigo-100/25 via-indigo-50/15 to-transparent" />
      
      {/* Abstract curved flowing shapes - more transparent to work with image */}
      <div className="absolute top-0 left-0 w-full h-full opacity-15">
        <svg className="absolute top-20 left-10 w-80 h-80" viewBox="0 0 300 300" fill="none">
          <path
            d="M50 50 Q 150 100, 250 50 Q 200 150, 250 250 Q 150 200, 50 250 Q 100 150, 50 50"
            fill="url(#flowGradient1)"
            opacity="0.4"
          />
          <defs>
            <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
        
        <svg className="absolute bottom-20 right-16 w-96 h-96 rotate-12" viewBox="0 0 300 300" fill="none">
          <path
            d="M100 50 Q 200 80, 250 150 Q 200 220, 100 250 Q 50 180, 50 150 Q 80 80, 100 50"
            fill="url(#flowGradient2)"
            opacity="0.3"
          />
          <defs>
            <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.15" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Subtle accent lines - adjusted for image background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-1/3 -left-32 w-[600px] h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent rotate-12" />
        <div className="absolute top-2/3 -right-32 w-[500px] h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent -rotate-12" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-px bg-gradient-to-r from-blue-400/40 to-transparent rotate-45" />
      </div>
      
      {/* Soft geometric overlays - enhanced visibility */}
      <div className="absolute top-24 right-1/3 w-28 h-28 bg-gradient-to-br from-white/40 to-purple-100/30 rounded-3xl rotate-12 backdrop-blur-sm border border-white/50 opacity-70" />
      <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-gradient-to-br from-blue-50/50 to-indigo-100/35 rounded-full backdrop-blur-sm border border-white/40 opacity-60" />
      <div className="absolute top-1/2 left-16 w-12 h-12 bg-gradient-to-br from-purple-100/60 to-pink-100/40 rounded-xl -rotate-45 backdrop-blur-sm border border-white/45 opacity-50" />
      
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