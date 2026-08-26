import React from 'react';

export function ProjectBlock({ 
  id, 
  bgColor, 
  textColor = 'text-white', 
  date, 
  title, 
  description, 
  link, 
  tags = [], 
  stackIndex = 1,
  children 
}) {
  const topOffset = 90 + (stackIndex - 1) * 20;

  return (
    <article 
      id={id} 
      style={{ 
        backgroundColor: bgColor,
        top: `${topOffset}px`,
        zIndex: stackIndex
      }} 
      className={`sticky py-16 px-6 md:px-12 border-t-4 border-b-4 border-black clip-path-trapezoid shadow-2xl mb-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-3xl ${textColor}`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest mb-3 opacity-90">
            <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
            <span>{date}</span>
          </div>

          <h3 className="font-display text-4xl md:text-6xl font-extrabold leading-none mb-4 transition-colors">
            {title}
          </h3>

          <p className="text-lg md:text-xl opacity-90 mb-6 leading-relaxed">
            {description}
          </p>

          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-mono text-xs font-bold uppercase tracking-widest underline underline-offset-4 mb-6 hover:translate-x-2 transition-transform"
          >
            VIEW PROJECT ↗
          </a>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="font-mono text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 bg-black text-white rounded-full transition-transform hover:scale-105"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Right Column (Washi Tape Framed Mockup with 3D Tilt) */}
        <div className="flex justify-center">
          <div className="relative bg-white border-4 border-black p-4 shadow-[8px_8px_0px_#111] rotate-1 hover:rotate-0 hover:scale-[1.03] transition-all duration-300">
            {/* Washi Tape Strips */}
            <div className="absolute -top-3 -left-3 w-16 h-6 bg-blue-400/80 border border-dashed border-black -rotate-45 shadow-sm transition-transform hover:scale-110"></div>
            <div className="absolute -top-3 -right-3 w-16 h-6 bg-yellow-200/80 border border-dashed border-black rotate-45 shadow-sm transition-transform hover:scale-110"></div>
            
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectBlock;
