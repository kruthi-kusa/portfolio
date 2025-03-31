"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-xl font-bold tracking-tight"
        >
          Kruthi.Kusa
        </Link>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</MobileNavLink>
            <MobileNavLink href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</MobileNavLink>
            <MobileNavLink href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-foreground hover:text-primary font-medium transition-colors duration-200"
    >
      {children}
    </a>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
  return (
    <a
      href={href}
      className="text-foreground hover:text-primary font-medium transition-colors duration-200 block py-2 text-lg"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Navbar;