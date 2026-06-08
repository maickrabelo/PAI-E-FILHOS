import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Fleet } from './sections/Fleet';
import { Services } from './sections/Services';
import { Maintenance } from './sections/Maintenance';
import { Contact } from './sections/Contact';
import { Careers } from './sections/Careers';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Fleet />
        <Services />
        <Maintenance />
        <Contact />
        <Careers />
      </main>
      <Footer />
    </div>
  );
}

