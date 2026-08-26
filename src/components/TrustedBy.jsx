import React from 'react';

export function TrustedBy({ brands = ["RK CONSTRUCTION", "MALLOY MEDIA", "SANGEETSTREAM", "SWIFT COMMUNITY"] }) {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <div className="relative bg-white border-4 border-black p-10 text-center shadow-[8px_8px_0px_#111] lined-paper-bg">
        {/* Washi Tape Corners */}
        <div className="absolute -top-3 -left-3 w-16 h-6 bg-blue-300/80 border border-dashed border-black -rotate-45"></div>
        <div className="absolute -top-3 -right-3 w-16 h-6 bg-yellow-200/80 border border-dashed border-black rotate-45"></div>

        <p className="font-hand text-3xl mb-2 text-black">trusted by</p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-6">
          {brands.map((brand, idx) => (
            <span 
              key={idx} 
              className="font-display text-xl font-extrabold uppercase text-gray-500 hover:text-black grayscale hover:grayscale-0 hover:scale-105 transition-all"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;
