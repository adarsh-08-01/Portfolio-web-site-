import React, { useState } from 'react';
import ProjectBlock from './ProjectBlock';
import ClosingCTA from './ClosingCTA';

export function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState('p1-justsip');

  const scrollToProject = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F3EC] text-[#111111] font-sans lined-paper-bg relative overflow-x-hidden">
      {/* Header */}
      <header className="pt-20 pb-10 px-6 text-center">
        <p className="font-hand text-3xl mb-1">explore my work!</p>
        <svg className="w-36 h-3 mx-auto mb-3" viewBox="0 0 140 12" fill="none" stroke="#111111" strokeWidth="2">
          <path d="M3 6 Q 35 0, 70 6 T 137 6" />
        </svg>
        <h1 className="font-pixel text-3xl md:text-5xl font-black uppercase tracking-tight text-black mb-6">
          FEATURED WORKS
        </h1>
        <div className="inline-block bg-[#FFC93C] border-3 border-black px-6 py-3 font-semibold text-lg shadow-[4px_4px_0px_#111] -rotate-2 max-w-xl">
          A few products I helped make simpler, calmer, and easier to trust.
        </div>
      </header>

      {/* Project Tabs (Reference Image 2 Trapezoid Tabs) */}
      <div className="sticky top-16 z-40 flex justify-center items-end max-w-4xl mx-auto px-4 overflow-x-auto">
        <button 
          onClick={() => scrollToProject('p1-justsip')}
          className={`font-mono text-xs md:text-sm font-extrabold uppercase px-6 py-3 border-3 border-b-0 border-black transition-all ${activeTab === 'p1-justsip' ? 'bg-[#3B5BFF] text-white -translate-y-2.5 z-30 shadow-lg' : 'bg-[#3B5BFF]/90 text-white'}`}
          style={{ clipPath: 'polygon(12% 0%, 88% 0%, 100% 100%, 0% 100%)' }}
        >
          ✦ PROJECT 01
        </button>

        <button 
          onClick={() => scrollToProject('p2-travelsathi')}
          className={`font-mono text-xs md:text-sm font-extrabold uppercase px-6 py-3 border-3 border-b-0 border-black transition-all -ml-3 ${activeTab === 'p2-travelsathi' ? 'bg-[#111111] text-white -translate-y-2.5 z-30 shadow-lg' : 'bg-[#111111]/90 text-white'}`}
          style={{ clipPath: 'polygon(12% 0%, 88% 0%, 100% 100%, 0% 100%)' }}
        >
          ✦ PROJECT 02
        </button>

        <button 
          onClick={() => scrollToProject('p3-sangeetstream')}
          className={`font-mono text-xs md:text-sm font-extrabold uppercase px-6 py-3 border-3 border-b-0 border-black transition-all -ml-3 ${activeTab === 'p3-sangeetstream' ? 'bg-[#FF3D7F] text-white -translate-y-2.5 z-30 shadow-lg' : 'bg-[#FF3D7F]/90 text-white'}`}
          style={{ clipPath: 'polygon(12% 0%, 88% 0%, 100% 100%, 0% 100%)' }}
        >
          ✦ PROJECT 03
        </button>

        <button 
          onClick={() => scrollToProject('p4-rkconstruction')}
          className={`font-mono text-xs md:text-sm font-extrabold uppercase px-6 py-3 border-3 border-b-0 border-black transition-all -ml-3 ${activeTab === 'p4-rkconstruction' ? 'bg-[#FFC93C] text-black -translate-y-2.5 z-30 shadow-lg' : 'bg-[#FFC93C]/90 text-black'}`}
          style={{ clipPath: 'polygon(12% 0%, 88% 0%, 100% 100%, 0% 100%)' }}
        >
          ✦ PROJECT 04
        </button>
      </div>

      {/* Stacked Project Blocks */}
      <div className="relative">
        {/* Project 01 - JustSip (Blue #3B5BFF Block) */}
        <ProjectBlock
          id="p1-justsip"
          stackIndex={1}
          bgColor="#3B5BFF"
          textColor="text-white"
          date="MAR 19, 2026"
          title="JustSip — Hydration Tracker"
          description="Making daily water intake logging effortless with 3D avatar animations, weekly history analytics, and smart reminders."
          link="https://github.com/adarsh-08-01/JustSip"
          tags={["IOS APP", "SWIFTUI", "3D AVATAR"]}
        >
          <div className="grid grid-cols-3 gap-2 w-72 md:w-96">
            <img src="assets/images/justsip/HomeView2.png" alt="JustSip Screen 1" className="rounded border border-black aspect-[9/19.5] object-cover" />
            <img src="assets/images/justsip/HistroyView.png" alt="JustSip Screen 2" className="rounded border border-black aspect-[9/19.5] object-cover" />
            <img src="assets/images/justsip/NotificationView.png" alt="JustSip Screen 3" className="rounded border border-black aspect-[9/19.5] object-cover" />
          </div>
        </ProjectBlock>

        {/* Project 02 - Travel Sathi (Black #111111 Block) */}
        <ProjectBlock
          id="p2-travelsathi"
          stackIndex={2}
          bgColor="#111111"
          textColor="text-white"
          date="FEATURED IOS APP"
          title="Travel Sathi — Travel Budget Guide"
          description="Your personal travel budget guide & destination planner, allowing travelers to discover top spots based on custom budget tiers and persona profiles."
          link="https://github.com/adarsh-08-01/Travel-Sathi-"
          tags={["IOS APP", "SWIFTUI", "TRAVEL PLANNER"]}
        >
          <div className="grid grid-cols-3 gap-2 w-72 md:w-96">
            <img src="assets/images/travelsathi/TravelSathi_Destinations.png" alt="Travel Sathi 1" className="rounded border border-black aspect-[9/19.5] object-cover" />
            <img src="assets/images/travelsathi/TravelSathi_Role.png" alt="Travel Sathi 2" className="rounded border border-black aspect-[9/19.5] object-cover" />
            <img src="assets/images/travelsathi/TravelSathi_Budget.png" alt="Travel Sathi 3" className="rounded border border-black aspect-[9/19.5] object-cover" />
          </div>
        </ProjectBlock>

        {/* Project 03 - SangeetStream (Pink #FF3D7F Block) */}
        <ProjectBlock
          id="p3-sangeetstream"
          stackIndex={3}
          bgColor="#FF3D7F"
          textColor="text-white"
          date="FEATURED WEB APP"
          title="SangeetStream — Music Player"
          description="Interactive web music player with real-time stream search, dynamic play queues, and custom player controls."
          link="https://mysangeetstream.netlify.app/#Yo%20Yo%20Honey%20Singh"
          tags={["AUDIO WEB APP", "JAVASCRIPT", "UI UX"]}
        >
          <div className="w-72 md:w-96 bg-[#F5F3EC] text-black p-4 border border-black rounded">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold">Desi Kalakar</span>
              <span>🎧</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 bg-[#FF3D7F] text-white font-bold border border-black rounded">▶</button>
              <div className="flex-1 bg-gray-300 h-2 rounded">
                <div className="bg-[#FF3D7F] h-2 w-1/3 rounded"></div>
              </div>
            </div>
          </div>
        </ProjectBlock>

        {/* Project 04 - RK Construction (Yellow #FFC93C Block) */}
        <ProjectBlock
          id="p4-rkconstruction"
          stackIndex={4}
          bgColor="#FFC93C"
          textColor="text-black"
          date="ACTIVE CLIENT SITE"
          title="RK Construction"
          description="Full-stack corporate platform for premier commercial engineering & construction services featuring project portfolios and inquiry forms."
          link="https://rkconstruction11.in/"
          tags={["COMMERCIAL WEB", "CLIENT SITE", "JAVASCRIPT"]}
        >
          <div className="w-72 md:w-96">
            <img src="assets/images/rk_construction.png" alt="RK Construction" className="border border-black w-full rounded" />
          </div>
        </ProjectBlock>
      </div>

      {/* Closing CTA */}
      <ClosingCTA />
    </div>
  );
}

export default ProjectShowcase;
