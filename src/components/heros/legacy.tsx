"use client";

import React from "react";
import Image from "next/image";
import { color } from "motion-dom";

export default function Legacy() {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-[#F6F8FF]">
      {/* Background */}
      <div
        className="absolute"
        style={{
          backgroundImage: "url('/legacy1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "640.06px",
          height: "534.86px",
          top: "180px",
          left: "420px",
          transform: "rotate(-51deg)",
          zIndex: 0,

        }}
      />

      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#262626]">
          A Legacy of Evolve AI & A look to the future
        </h2>
        <p className="max-w-3xl mx-auto text-[#59595A] mb-16">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>

        {/* Cards */}
        <div className="flex flex-col md:flex-row md:justify-center gap-10">
          {/* Card Component */}
          {[
            {
              title: "Our Origin",
              pin: "/bluepin.png",
              bg: "bg-gradient-to-b from-[#DDE4FF] to-[#E7ECFF]-5",
              text: `Evolve AI began its journey as a club consisting of ambitious team members within Chitkara University’s Department of Computer Science & Engineering (Artificial Intelligence) in 2021.

Guided by visionaries like Dr. Sushil Kumar Narang and driven by dedicated individuals like Dr. Kamal Deep Garg and Dr. Vandana Sood, Evolve AI aspires to nurture a vibrant community centered around Artificial Intelligence.

Our motive is to empower future AI leaders by offering students exceptional opportunities for learning, growth, and contribution in the dynamic realm of AI.`,
            },
            {
              title: "Our Vision",
              pin: "/purplepin.png",
              bg: "bg-gradient-to-b from-[#E4BBFF] to-[#F8E9FE]-5",
              text: `We believe fostering collaboration and innovation in students is essential for them to thrive in the AI landscape.

We want to help students achieve it through massive initiatives such as technical workshops, hackathons, competitions, and other interactive sessions.

Evolve AI aims to cultivate a culture of perpetual learning and exploration among AI enthusiasts. With guidance, resources, and mentorship, we equip students with the skills, knowledge, and connections necessary to emerge proficiently as AI leaders and practitioners.

We envision a future where members confidently lead the charge in AI research, engineering, and product development — catalyzing innovation and imaginative applications for the advancement of society.`,
            },
            {
              title: "Future Goals",
              pin: "/bluepin.png",
              bg: "bg-gradient-to-b from-[#DDE4FF] to-[#E7ECFF]-5",
              text: `Looking ahead, Evolve AI is committed to expanding its influence through partnerships with industry leaders, fostering cross-disciplinary projects, and empowering students to turn innovative ideas into impactful AI solutions.

By continuously embracing cutting-edge advancements, we aim to position our community at the forefront of AI research and application, making meaningful contributions to global technology and society.`,
            },
          ].map((card, index) => (
            <div
              key={index}
              className="relative max-w-sm w-full mx-auto md:mx-0"
            >
              {/* Pin */}
              <Image
                src={card.pin}
                alt="Pin"
                width={125}
                height={125}
                className="absolute -top-12 left-1/2 -translate-x-1/2 drop-shadow-lg z-20"
              />

              {/* Card */}
              <div
                className={`relative ${card.bg} backdrop-blur-md rounded-[20px] border border-white/10 p-8 pt-16 shadow-lg min-h-[420px]`}
              >
                <div className="flex items-center gap-2 mb-6 justify-center">
                  <Image
                    src="/Frame.png"
                    alt={card.title}
                    width={28}
                    height={28}
                  />
                  <h3 className="text-xl font-semibold text-[#000000]">
                    {card.title}
                  </h3>
                </div>
                {card.text.split("\n").map((para, i) => (
                  <p
                    key={i}
                    className="text-[#4F4E5B] text-sm mt-4 leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
