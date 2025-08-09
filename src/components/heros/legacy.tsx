"use client";

import React from "react";

export default function Legacy() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('legacy.png')"
          }}
        />
      </div>
    </section>
  );
}
