"use client";

import React from "react";
import Image from "next/image";
import { px } from "motion-dom";

export default function Legacy() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-white">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/legacy.png')" }}
      />
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90 backdrop-blur-sm" />

      {/* Decorative floating blobs */}
      <div className="absolute top-0 left-[-200px] w-[400px] h-[400px] bg-pink-200/50 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-150px] right-[-200px] w-[400px] h-[400px] bg-purple-200/50 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          A Legacy of Evolve AI & A Look to the Future
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-20">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. 
          Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
        </p>

        {/* Cards container */}
        <div className="flex flex-col md:flex-row md:justify-center gap-14">
          {/* Card 1 */}
          <div className="relative max-w-sm mx-auto md:mx-0">
            {/* Pin image */}
            <Image
              src="/bluepin.png"
              alt="Pin"
              width={124.97}
              height={124.97}
              className="absolute -top-6 left-1/2 -translate-x-1/2 drop-shadow-lg"
            />
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <Image src="/vector.svg" alt="Origin" width={28} height={28} />
                <h3 className="text-xl font-semibold">Our Origin</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Evolve AI began its journey as a club consisting of ambitious team
                members within Chitkara University’s Department of Computer
                Science & Engineering (Artificial Intelligence) in 2021.
              </p>
              <p className="text-gray-700 text-sm mt-4 leading-relaxed">
                Guided by visionaries like Dr. Sushil Kumar Narang and driven by
                dedicated individuals like Dr. Kamal Deep Garg and Dr. Vandana
                Sood, Evolve AI aspires to nurture a vibrant community centered
                around Artificial Intelligence.
              </p>
              <p className="text-gray-700 text-sm mt-4 leading-relaxed">
                Our motive is to empower future AI leaders by offering students
                exceptional opportunities for learning, growth, and contribution
                in the dynamic realm of AI.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative max-w-sm mx-auto md:mx-0">
            <Image
              src="/purplepin.png"
              alt="Pin"
              width={124.97}
              height={124.97}
              className="absolute -top-6 left-1/2 -translate-x-1/2 drop-shadow-lg"
            />
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl p-8 shadow-xl border border-pink-100">
              <div className="flex items-center gap-2 mb-6">
                <Image src="/vector.svg" alt="Vision" width={28} height={28} />
                <h3 className="text-xl font-semibold">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                We believe fostering collaboration and innovation in students is
                essential for them to thrive in the AI landscape.
              </p>
              <p className="text-gray-700 text-sm mt-4 leading-relaxed">
                We want to help students achieve it through massive initiatives
                such as technical workshops, hackathons, competitions, and other
                interactive sessions.
              </p>
              <p className="text-gray-700 text-sm mt-4 leading-relaxed">
                Evolve AI aims to cultivate a culture of perpetual learning and
                exploration among AI enthusiasts. With guidance, resources, and
                mentorship, we equip students with the skills, knowledge, and
                connections necessary to emerge proficiently as AI leaders and
                practitioners.
              </p>
              <p className="text-gray-700 text-sm mt-4 leading-relaxed">
                We envision a future where members confidently lead the charge in
                AI research, engineering, and product development — catalyzing
                innovation and imaginative applications for the advancement of
                society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
