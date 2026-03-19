'use client';
import { useState } from 'react';

const faqData = [
  { id: 1, title: "Hardware Specifications", content: "Our drones utilize custom carbon fiber frames and STM32-based flight controllers for maximum precision." },
  { id: 2, title: "Software Architecture", content: "We implement Nonlinear Model Predictive Control (NMPC) for real-time trajectory optimization in complex environments." },
  { id: 3, title: "Software Architecture", content: "We implement Nonlinear Model Predictive Control (NMPC) for real-time trajectory optimization in complex environments." },
  { id: 4, title: "Software Architecture", content: "We implement Nonlinear Model Predictive Control (NMPC) for real-time trajectory optimization in complex environments." }
];

export default function Accordion() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <div className="w-auto mx-auto space-y-2 p-4">
      {faqData.map((item) => (
        <div key={item.id} className="border border-slate-800 bg-[#191919] rounded-lg overflow-hidden">

          <button
            onClick={() => toggle(item.id)}
            className="w-full flex justify-between items-center p-4 text-left hover:bg-slate-800 transition-colors"
          >
            <span className="font-medium text-white tracking-tight text-xl">{item.title}</span>

            <span className={`transform transition-transform duration-300 ${openId === item.id ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`grid transition-all duration-300 ease-in-out ${
            openId === item.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}>
            <div className="overflow-hidden">
              <div className="p-4 pt-0 text-[#6b6b6b] leading-relaxed border-t border-slate-800/50 text-lg">
                {item.content}
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}