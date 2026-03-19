"use client";
import { useState, useEffect } from "react";

export default function AboutMarquee() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const marqueeKeyframes = `
    @keyframes aboutmarquee {
      0% { transform: translateY(0); }
      100% { transform: translateY(-50%); } 
    }
  `;

  if (!isClient) {
    return (
      <div className="w-1/2 h-auto flex flex-col items-center">
         <div className="h-[400px]"></div>
      </div>
    );
  }

  return (
    <div className="w-1/2 h-auto flex flex-col justify-between items-center">
      <style>{marqueeKeyframes}</style>

      <div className="relative w-max overflow-hidden">
        
        <div 
          className="flex flex-col gap-10 w-max" 
          style={{ 
            animation: 'aboutmarquee 20s linear infinite',
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
                className="w-[300px] h-auto rounded-xl"
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
                className="w-[300px] h-auto rounded-xl"
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