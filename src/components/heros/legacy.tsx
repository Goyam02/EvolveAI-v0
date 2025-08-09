// "use client";

// import React from "react";
// import Image from "next/image";
// import { px } from "motion-dom";

// export default function Legacy() {
//   return (
//     <section className="relative w-full py-24 overflow-hidden bg-white">
//       {/* Background image */}
//       <div
//         className="absolute inset-0 w-full h-full bg-cover bg-center"
//         style={{ backgroundImage: "url('/legacy.png')" }}

//       />
//       {/* Soft gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90 backdrop-blur-sm" />

//       {/* Decorative floating blobs */}
//       <div className="absolute top-0 left-[-200px] w-[400px] h-[400px] bg-pink-200/50 rounded-full blur-[120px]" />
//       <div className="absolute bottom-[-150px] right-[-200px] w-[400px] h-[400px] bg-purple-200/50 rounded-full blur-[120px]" />

//       {/* Content */}
//       <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
//         {/* Title */}
//         <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
//           A Legacy of Evolve AI & A Look to the Future
//         </h2>
//         <p className="max-w-3xl mx-auto text-gray-600 mb-20">
//           Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. 
//           Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
//         </p>

//         {/* Cards container */}
//         <div className="flex flex-col md:flex-row md:justify-center gap-14">
//           {/* Card 1 */}
//           <div className="relative max-w-sm mx-auto md:mx-0">
//             {/* Pin image */}
//             <Image
//               src="/bluepin.png"
//               alt="Pin"
//               width={124.97}
//               height={124.97}
//               className="absolute -top-6 left-1/2 -translate-x-1/2 drop-shadow-lg"
//             />
//             <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100">
//               <div className="flex items-center gap-2 mb-6">
//                 <Image src="/vector.svg" alt="Origin" width={28} height={28} />
//                 <h3 className="text-xl font-semibold">Our Origin</h3>
//               </div>
//               <p className="text-gray-700 text-sm leading-relaxed">
//                 Evolve AI began its journey as a club consisting of ambitious team
//                 members within Chitkara University’s Department of Computer
//                 Science & Engineering (Artificial Intelligence) in 2021.
//               </p>
//               <p className="text-gray-700 text-sm mt-4 leading-relaxed">
//                 Guided by visionaries like Dr. Sushil Kumar Narang and driven by
//                 dedicated individuals like Dr. Kamal Deep Garg and Dr. Vandana
//                 Sood, Evolve AI aspires to nurture a vibrant community centered
//                 around Artificial Intelligence.
//               </p>
//               <p className="text-gray-700 text-sm mt-4 leading-relaxed">
//                 Our motive is to empower future AI leaders by offering students
//                 exceptional opportunities for learning, growth, and contribution
//                 in the dynamic realm of AI.
//               </p>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="relative max-w-sm mx-auto md:mx-0">
//             <Image
//               src="/purplepin.png"
//               alt="Pin"
//               width={124.97}
//               height={124.97}
//               className="absolute -top-6 left-1/2 -translate-x-1/2 drop-shadow-lg"
//             />
//             <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl p-8 shadow-xl border border-pink-100">
//               <div className="flex items-center gap-2 mb-6">
//                 <Image src="/vector.svg" alt="Vision" width={28} height={28} />
//                 <h3 className="text-xl font-semibold">Our Vision</h3>
//               </div>
//               <p className="text-gray-700 text-sm leading-relaxed">
//                 We believe fostering collaboration and innovation in students is
//                 essential for them to thrive in the AI landscape.
//               </p>
//               <p className="text-gray-700 text-sm mt-4 leading-relaxed">
//                 We want to help students achieve it through massive initiatives
//                 such as technical workshops, hackathons, competitions, and other
//                 interactive sessions.
//               </p>
//               <p className="text-gray-700 text-sm mt-4 leading-relaxed">
//                 Evolve AI aims to cultivate a culture of perpetual learning and
//                 exploration among AI enthusiasts. With guidance, resources, and
//                 mentorship, we equip students with the skills, knowledge, and
//                 connections necessary to emerge proficiently as AI leaders and
//                 practitioners.
//               </p>
//               <p className="text-gray-700 text-sm mt-4 leading-relaxed">
//                 We envision a future where members confidently lead the charge in
//                 AI research, engineering, and product development — catalyzing
//                 innovation and imaginative applications for the advancement of
//                 society.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import React from "react";
// import Image from "next/image";

// export default function Legacy() {
//   return (
//     <section className="relative w-full py-20 overflow-hidden bg-white">
//       {/* Background */}
//         <div
//         className="absolute"
//         style={{
//           backgroundImage: "url('/legacy.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           width: "640.06px",
//           height: "534.86px",
//           top: "180px", // adjust to match screenshot vertical position
//           left: "420px", // adjust for horizontal position
//           transform: "rotate(-19.96deg)",
//           zIndex: 0,
//         }}
//       />

//       {/* Content container */}
//       <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
//         {/* Title */}
//         <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#262626]-600">
//           A Legacy of Evolve AI & A look to the future
//         </h2>
//         <p className="max-w-3xl mx-auto text-[#59595A]-400 mb-16">
//           Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
//           elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
//           habitasse in velit fringilla feugiat senectus in.
//         </p>

//         {/* Cards */}
//         <div className="flex flex-col md:flex-row md:justify-center gap-10">
//           {/* Our Origin */}
//           <div className="relative max-w-sm mx-auto md:mx-0">
//             <Image
//               src="/bluepin.png"
//               alt="Pin"
//               width={125}
//               height={125}
//               className="absolute -top-8 left-1/2 -translate-x-1/2 drop-shadow-lg z-20"
//             />
//             <div className="relative bg-black/40 backdrop-blur-md rounded-[20px] border border-white/10 p-8 shadow-lg">
//               <div className="flex items-center gap-2 mb-6">
//                 <Image src="/vector.svg" alt="Origin" width={28} height={28} />
//                 <h3 className="text-xl font-semibold text-white">Our Origin</h3>
//               </div>
//               <p className="text-gray-200 text-sm leading-relaxed">
//                 Evolve AI began its journey as a club consisting of ambitious team
//                 members within Chitkara University’s Department of Computer
//                 Science & Engineering (Artificial Intelligence) in 2021.
//               </p>
//               <p className="text-gray-200 text-sm mt-4 leading-relaxed">
//                 Guided by visionaries like Dr. Sushil Kumar Narang and driven by
//                 dedicated individuals like Dr. Kamal Deep Garg and Dr. Vandana
//                 Sood, Evolve AI aspires to nurture a vibrant community centered
//                 around Artificial Intelligence.
//               </p>
//               <p className="text-gray-200 text-sm mt-4 leading-relaxed">
//                 Our motive is to empower future AI leaders by offering students
//                 exceptional opportunities for learning, growth, and contribution in
//                 the dynamic realm of AI.
//               </p>
//             </div>
//           </div>

//           {/* Our Vision */}
//           <div className="relative max-w-sm mx-auto md:mx-0">
//             <Image
//               src="/purplepin.png"
//               alt="Pin"
//               width={125}
//               height={125}
//               className="absolute -top-8 left-1/2 -translate-x-1/2 drop-shadow-lg z-20"
//             />
//             <div className="relative bg-gradient-to-b from-purple-500/60 to-purple-700/60 backdrop-blur-md rounded-[20px] border border-white/10 p-8 shadow-lg">
//               <div className="flex items-center gap-2 mb-6">
//                 <Image src="/vector.svg" alt="Vision" width={28} height={28} />
//                 <h3 className="text-xl font-semibold text-white">Our Vision</h3>
//               </div>
//               <p className="text-sm text-gray-100 leading-relaxed">
//                 We believe fostering collaboration and innovation in students is
//                 essential for them to thrive in the AI landscape.
//               </p>
//               <p className="text-sm text-gray-100 mt-4 leading-relaxed">
//                 We want to help students achieve it through massive initiatives
//                 such as technical workshops, hackathons, competitions, and other
//                 interactive sessions.
//               </p>
//               <p className="text-sm text-gray-100 mt-4 leading-relaxed">
//                 Evolve AI aims to cultivate a culture of perpetual learning and
//                 exploration among AI enthusiasts. With guidance, resources, and
//                 mentorship, we equip students with the skills, knowledge, and
//                 connections necessary to emerge proficiently as AI leaders and
//                 practitioners.
//               </p>
//               <p className="text-sm text-gray-100 mt-4 leading-relaxed">
//                 We envision a future where members confidently lead the charge in
//                 AI research, engineering, and product development — catalyzing
//                 innovation and imaginative applications for the advancement of
//                 society.
//               </p>
//             </div>
//           </div>

//           {/* Future Goals */}
//           <div className="relative max-w-sm mx-auto md:mx-0">
//             <Image
//               src="/bluepin.png"
//               alt="Pin"
//               width={125}
//               height={125}
//               className="absolute -top-8 left-1/2 -translate-x-1/2 drop-shadow-lg z-20"
//             />
//             <div className="relative bg-black/40 backdrop-blur-md rounded-[20px] border border-white/10 p-8 shadow-lg">
//               <div className="flex items-center gap-2 mb-6">
//                 <Image src="/vector.svg" alt="Future" width={28} height={28} />
//                 <h3 className="text-xl font-semibold text-white">Future Goals</h3>
//               </div>
//               <p className="text-gray-200 text-sm leading-relaxed">
//                 Looking ahead, Evolve AI is committed to expanding its influence
//                 through partnerships with industry leaders, fostering
//                 cross-disciplinary projects, and empowering students to turn
//                 innovative ideas into impactful AI solutions.
//               </p>
//               <p className="text-gray-200 text-sm mt-4 leading-relaxed">
//                 By continuously embracing cutting-edge advancements, we aim to
//                 position our community at the forefront of AI research and
//                 application, making meaningful contributions to global technology
//                 and society.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import React from "react";
// import Image from "next/image";

// export default function Legacy() {
//   return (
//     <section className="relative w-full py-20 overflow-hidden bg-white">
//       {/* Background image */}
//       <div
//         className="absolute"
//         style={{
//           backgroundImage: "url('/legacy.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           width: "640.06px",
//           height: "534.86px",
//           top: "180px",
//           left: "420px",
//           transform: "rotate(-19.96deg)",
//           zIndex: 0, // behind cards
//           pointerEvents: "none",
//         }}
//       />

//       {/* Main container */}
//       <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#262626]">
//           A Legacy of Evolve AI & A look to the future
//         </h2>
//         <p className="max-w-3xl mx-auto text-[#59595A] mb-16">
//           Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id
//           imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse
//           in velit fringilla feugiat senectus in.
//         </p>

//         {/* Card row */}
//         <div className="flex flex-col md:flex-row md:justify-center gap-10 relative z-10">
//           {[
//             {
//               pin: "/bluepin.png",
//               gradient: "from-[#00C2FF] to-[#0066FF]",
//               title: "Our Origin",
//               text: [
//                 "Evolve AI began its journey as a club consisting of ambitious team members within Chitkara University’s Department of Computer Science & Engineering (Artificial Intelligence) in 2021.",
//                 "Guided by visionaries like Dr. Sushil Kumar Narang and driven by dedicated individuals like Dr. Kamal Deep Garg and Dr. Vandana Sood, Evolve AI aspires to nurture a vibrant community centered around AI.",
//                 "Our motive is to empower future AI leaders by offering students exceptional opportunities for learning, growth, and contribution in the dynamic realm of AI.",
//               ],
//             },
//             {
//               pin: "/purplepin.png",
//               gradient: "from-[#9D4EDD] to-[#5A189A]",
//               title: "Our Vision",
//               text: [
//                 "We believe fostering collaboration and innovation in students is essential for them to thrive in the AI landscape.",
//                 "We want to help students achieve it through massive initiatives such as technical workshops, hackathons, competitions, and other interactive sessions.",
//                 "Evolve AI aims to cultivate a culture of perpetual learning and exploration among AI enthusiasts. With guidance, resources, and mentorship, we equip students with the skills, knowledge, and connections necessary to emerge proficiently as AI leaders and practitioners.",
//                 "We envision a future where members confidently lead the charge in AI research, engineering, and product development — catalyzing innovation and imaginative applications for the advancement of society.",
//               ],
//             },
//             {
//               pin: "/bluepin.png",
//               gradient: "from-[#00C2FF] to-[#0066FF]",
//               title: "Future Goals",
//               text: [
//                 "Looking ahead, Evolve AI is committed to expanding its influence through partnerships with industry leaders, fostering cross-disciplinary projects, and empowering students to turn innovative ideas into impactful AI solutions.",
//                 "By continuously embracing cutting-edge advancements, we aim to position our community at the forefront of AI research and application, making meaningful contributions to global technology and society.",
//               ],
//             },
//           ].map((card, idx) => (
//             <div
//               key={idx}
//               className="relative max-w-sm mx-auto md:mx-0"
//               style={{ filter: "drop-shadow(0px 4px 60px rgba(0, 0, 0, 0.08))" }}
//             >
//               {/* Pin */}
//               <Image
//                 src={card.pin}
//                 alt="Pin"
//                 width={125}
//                 height={125}
//                 className="absolute -top-8 left-1/2 -translate-x-1/2 z-20"
//               />
//               {/* Card */}
//               <div
//                 className="relative overflow-hidden border border-[#E0E0E0] bg-white"
//                 style={{
//                   borderRadius: "24px",
//                 }}
//               >
//                 {/* Top gradient bar */}
//                 <div
//                   className={`h-[10px] w-full bg-gradient-to-r ${card.gradient}`}
//                 />
//                 {/* Content */}
//                 <div className="p-8 text-left">
//                   <div className="flex items-center gap-2 mb-6">
//                     <Image src="/vector.svg" alt="icon" width={28} height={28} />
//                     <h3 className="text-xl font-semibold text-[#262626]">
//                       {card.title}
//                     </h3>
//                   </div>
//                   {card.text.map((para, pIdx) => (
//                     <p
//                       key={pIdx}
//                       className={`text-[#59595A] text-sm leading-relaxed ${
//                         pIdx > 0 ? "mt-4" : ""
//                       }`}
//                     >
//                       {para}
//                     </p>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import React from "react";
import Image from "next/image";
import { color } from "motion-dom";

export default function Legacy() {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-white">
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
                    src="/vector.svg"
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
