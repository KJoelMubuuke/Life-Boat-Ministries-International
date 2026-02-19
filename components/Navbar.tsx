"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={`relative py-2 text-base font-medium transition-colors duration-300 group ${isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'
          }`}
      >
        {children}
        <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
          }`} />
      </Link>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen ? 'glass shadow-sm py-3' : 'bg-transparent py-5'
      }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary transition-all duration-300">
            <Image src="/church/logo.png" alt="Life Boat Ministries Logo" fill className="object-cover" />
          </div>
          <span className="font-serif font-bold text-lg md:text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
            Life Boat Ministries
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/ministries">Ministries</NavLink>
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          <Link
            href="/give"
            className="bg-primary hover:bg-primary/90 text-white font-medium py-2.5 px-6 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            Give
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground/80 hover:text-primary transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
            <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`} />
            <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2.5' : 'w-5'}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[400px] opacity-100 shadow-xl' : 'max-h-0 opacity-0'
        }`}>
        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
          <Link href="/" onClick={() => setIsOpen(false)} className={`text-lg font-medium p-2 hover:bg-muted/50 rounded-lg transition-colors ${pathname === '/' ? 'text-primary' : 'text-foreground'}`}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className={`text-lg font-medium p-2 hover:bg-muted/50 rounded-lg transition-colors ${pathname === '/about' ? 'text-primary' : 'text-foreground'}`}>About Us</Link>
          <Link href="/ministries" onClick={() => setIsOpen(false)} className={`text-lg font-medium p-2 hover:bg-muted/50 rounded-lg transition-colors ${pathname === '/ministries' ? 'text-primary' : 'text-foreground'}`}>Ministries</Link>
          <Link href="/events" onClick={() => setIsOpen(false)} className={`text-lg font-medium p-2 hover:bg-muted/50 rounded-lg transition-colors ${pathname === '/events' ? 'text-primary' : 'text-foreground'}`}>Events</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className={`text-lg font-medium p-2 hover:bg-muted/50 rounded-lg transition-colors ${pathname === '/contact' ? 'text-primary' : 'text-foreground'}`}>Contact</Link>
          <Link href="/give" onClick={() => setIsOpen(false)} className="bg-primary text-white text-center font-medium py-3 rounded-xl shadow-md mt-2">Give Now</Link>
        </div>
      </div>
    </nav>
  );
}