import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Fleet } from './sections/Fleet';
import { Services } from './sections/Services';
import { Maintenance } from './sections/Maintenance';
import { Contact } from './sections/Contact';
import { Careers } from './sections/Careers';
import { Footer } from './components/Footer';
import { AdminPanel } from './sections/AdminPanel';

function HomePage() {
  return (
    <>
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
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-brand-black">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

