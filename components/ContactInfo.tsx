import React from 'react';

export default function ContactInfo() {
  return (
    // REMOVED: 'absolute', 'top', 'left', '-translate-y-1/2'
    // ADDED: 'w-full max-w-[260px]' to keep it a nice compact size
    <div className="w-full max-w-[280px] bg-white/40 backdrop-blur-md border border-white/40 shadow-2xl rounded-2xl px-6 py-5 flex flex-col items-center text-center">
      
      <h2 className="text-xl font-serif text-gray-900 mb-2 drop-shadow-sm">
        Get in Touch
      </h2>

      <div className="mb-2 text-[#c5a028] drop-shadow-sm">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          <path d="M14.05 2a9 9 0 0 1 8 7.94" />
          <path d="M14.05 6A5 5 0 0 1 18 10" />
        </svg>
      </div> 

      <div className="space-y-1 w-full">
        <div className="text-gray-900 font-bold text-xs">Phone:</div>
        <div className="text-gray-950 font-bold text-sm leading-tight">0776875248</div>

        <div className="text-gray-900 font-bold text-xs mt-2">Email:</div>
        <div className="text-gray-950 font-bold text-xs break-all w-full px-1">
          kaikedeolo@gmail.com
        </div>
      </div>
    </div>
  );
}