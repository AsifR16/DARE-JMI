"use client";
import { useState, useEffect } from "react";

export default function ProjectMarquee() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const marqueeKeyframes = `
    @keyframes projectmarquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); } 
    }
  `;

  if (!isClient) {
    return (
      <div className="w-full h-auto flex flex-col items-center mt-50">
         <h1 className="text-[#00E5FF] text-6xl tracking-wide">Projects</h1>
         <div className="h-[400px]"></div>
      </div>
    );
  }

  return (
    <div className="w-full h-auto flex flex-col justify-between items-center mt-50">
      <style>{marqueeKeyframes}</style>
      
      <h1 className="text-[#00E5FF] text-6xl tracking-wide">Projects</h1>

      <div className="relative w-full overflow-hidden mt-20 py-10">
        
        <div 
          className="flex flex-row gap-15 w-max" 
          style={{ 
            animation: 'projectmarquee 20s linear infinite',
            animationPlayState: 'running' 
          }}
          onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
        >

          {[...Array(4)].map((_, i) => (
            <div
              key={`set1-${i}`}
              className="bg-[#131313] p-8 rounded-xl transition-all duration-500 ease-in-out
                         hover:bg-[#1a1a1a] hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,229,255,0.2)]"
            >
              <img
                src="/project.png"
                alt="Project Thumbnail"
                className="w-[250px] h-auto rounded-xl"
              />
            </div>
          ))}

          {[...Array(4)].map((_, i) => (
            <div
              key={`set2-${i}`}
              className="bg-[#131313] p-8 rounded-xl transition-all duration-500 ease-in-out
                         hover:bg-[#1a1a1a] hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,229,255,0.2)]"
            >
              <img
                src="/project.png"
                alt="Project Thumbnail"
                className="w-[250px] h-auto rounded-xl"
              />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-linear-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-linear-to-l from-[#0a0a0a] to-transparent z-10" />
      </div>
    </div>
  );
}