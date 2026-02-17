"use client"; // 1. Required for Active State & Mobile Toggle

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // 2. Hook to check current page

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const pathname = usePathname(); // Get current URL

  // 3. Helper Component for Links
  // This automatically checks if the link is active and adds the Red Border
  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href;
    return (
      <Link 
        href={href} 
        className={`pb-1 transition-colors duration-300 hover:text-red-600 ${
          isActive 
            ? 'text-red-600 border-b-4 border-red-600 font-bold' // ACTIVE: Red Text + Red Line
            : 'text-gray-800 font-bold' // INACTIVE: Standard Gray
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md flex flex-wrap items-center justify-start gap-8 px-8 py-4 sticky top-0 z-50 relative">
      
      {/* --- LOGO SECTION --- */}
      <div className="flex items-center space-x-3 mr-8">
        {/* Fixed image class: w-15 is not standard, changed to w-12 or w-16 for safety */}
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image src="/church/logo.png" alt="Church Logo" fill className="object-cover" />
        </div>
        <span className="font-bold text-lg tracking-wide text-yellow-700">
          LIFE BOAT MINISTRIES INTERNATIONAL
        </span>
      </div>

      {/* --- MOBILE HAMBURGER BUTTON --- */}
      {/* Only visible on small screens (lg:hidden) */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="lg:hidden text-gray-800 focus:outline-none p-2"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* --- DESKTOP MENU --- */}
      {/* Hidden on mobile, Flex on Large screens */}
      <div className="hidden lg:flex items-center space-x-8">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About Us</NavLink>
        <NavLink href="/ministries">Ministries</NavLink>
        <NavLink href="/events">Events</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        
        <Link 
          href="/give" 
          className="bg-yellow-600 hover:bg-red-500 transition-colors duration-300 text-white font-semibold py-2 px-4 rounded"
        >
          Give
        </Link>
      </div>

      {/* --- MOBILE DROPDOWN MENU --- */}
      {/* Visible only when isOpen is true */}
      {isOpen && (
        <div className="absolute right-4 top-full mt-2 w-56 lg:hidden bg-white/95 border border-gray-200 rounded-xl shadow-lg px-4 py-3 space-y-3 animate-fade-in-down">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block text-gray-800 hover:text-red-600 font-bold text-right"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block text-gray-800 hover:text-red-600 font-bold text-right"
          >
            About Us
          </Link>
          <Link
            href="/ministries"
            onClick={() => setIsOpen(false)}
            className="block text-gray-800 hover:text-red-600 font-bold text-right"
          >
            Ministries
          </Link>
          <Link
            href="/events"
            onClick={() => setIsOpen(false)}
            className="block text-gray-800 hover:text-red-600 font-bold text-right"
          >
            Events
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-gray-800 hover:text-red-600 font-bold text-right"
          >
            Contact
          </Link>
          <Link
            href="/give"
            onClick={() => setIsOpen(false)}
            className="block bg-yellow-600 text-white text-center font-bold py-2 rounded"
          >
            Give
          </Link>
        </div>
      )}

    </nav>
  );
}