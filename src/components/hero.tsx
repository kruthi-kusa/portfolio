"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        <div 
          className={`max-w-2xl transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-primary font-mono text-lg mb-2">Hello, I&apos;m</p>
          <h1 className="mb-4">Kruthi Kusa</h1>
          <h2 className="text-2xl md:text-3xl font-normal mb-6 text-foreground/80">
            Software Engineer & AI Enthusiast
          </h2>
          <p className="text-lg mb-8 text-foreground/80">
            I build full-stack applications with Next.js, React, and Python.
            Passionate about creating AI-driven solutions and healthcare technology.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="#projects" 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              View My Work
            </Link>
            <Link 
              href="#contact" 
              className="px-6 py-3 border border-gray-200 dark:border-gray-700 rounded-lg font-medium hover:bg-foreground/5 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div 
          className={`transition-all duration-1000 transform ${
            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
          }`}
        >
          <div className="relative bg-gradient-to-br from-primary to-secondary p-1 rounded-2xl">
            <div className="bg-background rounded-xl p-4">
              <div className="w-full aspect-square relative overflow-hidden rounded-lg shadow-xl">
                {/* You would replace this with an actual image of yourself */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 flex items-center justify-center text-4xl font-semibold">
                  KK
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <SocialLink href="https://linkedin.com/in/kruthi-kusa-1bb93022b" icon="linkedin" label="LinkedIn" />
            <SocialLink href="https://github.com/kruthi-kusa" icon="github" label="GitHub" />
            <SocialLink href="mailto:kruthireddy8888@mail.fresnostate.edu" icon="mail" label="Email" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

interface SocialLinkProps {
  href: string;
  icon: 'github' | 'linkedin' | 'mail';
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-foreground/5 hover:bg-primary/10 hover:text-primary transition-colors"
      aria-label={label}
    >
      {icon === 'github' && (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )}
      {icon === 'linkedin' && (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )}
      {icon === 'mail' && (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )}
    </a>
  );
};

export default Hero;