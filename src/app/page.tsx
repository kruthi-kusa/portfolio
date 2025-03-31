'use client';

import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import dynamic from 'next/dynamic';
import About from '@/components/about';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Experience from '@/components/experience';
import Contact from '@/components/contact';
import Footer from '@/components/footer';


// Dynamic import for the client component with scroll event listeners
const ScrollToTop = dynamic(() => import('@/components/scrolltotop'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}