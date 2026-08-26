import React from 'react';

export function ClosingCTA({ 
  email = "adarshk.work.0801@gmail.com", 
  whatsapp = "https://wa.me/916390790801" 
}) {
  return (
    <section className="bg-black text-white py-20 px-6 text-center relative">
      {/* Two-Tone Mascot */}
      <div className="w-16 h-16 mx-auto mb-6 rounded-full border-4 border-white bg-gradient-to-r from-[#FFC93C] 50% to-[#FF3D7F] 50% flex items-center justify-center text-3xl shadow-lg relative">
        <span>😊</span>
        <div className="absolute -top-1 left-1 w-3 h-3 bg-[#FFC93C] border border-black rounded-full"></div>
        <div className="absolute -top-1 right-1 w-3 h-3 bg-[#FF3D7F] border border-black rounded-full"></div>
      </div>

      <h2 className="font-pixel text-3xl md:text-5xl font-black uppercase tracking-widest text-white mb-6">
        LET'S TALK
      </h2>

      <p className="text-xl max-w-xl mx-auto mb-8 opacity-90 leading-relaxed">
        Have an iOS App project, video editing contract, or creative collaboration in mind? Let's connect!
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a 
          href={`mailto:${email}`} 
          className="font-mono text-sm font-bold uppercase tracking-wider px-8 py-4 bg-[#FFC93C] text-black border-3 border-black shadow-[4px_4px_0px_#FFF] hover:-translate-y-1 transition-transform"
        >
          Email Me: {email} ✉️
        </a>
        <a 
          href={whatsapp} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-mono text-sm font-bold uppercase tracking-wider px-8 py-4 bg-[#00E676] text-black border-3 border-black shadow-[4px_4px_0px_#FFF] hover:-translate-y-1 transition-transform"
        >
          WhatsApp Direct: +91 6390790801 💬
        </a>
      </div>
    </section>
  );
}

export default ClosingCTA;
