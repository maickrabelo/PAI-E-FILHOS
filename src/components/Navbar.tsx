import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'A Empresa', href: '#empresa' },
    { name: 'Frota', href: '#frota' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Manutenção', href: '#manutencao' },
    { name: 'Trabalhe Conosco', href: '#trabalhe-conosco' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-black/95 backdrop-blur-md py-4 shadow-lg shadow-black/50 border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="https://i.ibb.co/SDp59X3m/LOGO-PF.png" 
              alt="LocaFrota" 
              className="h-12 w-auto" 
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-brand-yellow transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#orcamento"
              className="bg-brand-yellow hover:bg-brand-yellow-hover text-black px-6 py-2.5 rounded-sm font-bold uppercase tracking-wider text-sm transition-colors flex items-center gap-2"
            >
              <Phone size={16} />
              Orçamento Rápido
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-zinc-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-zinc-300 hover:text-brand-yellow hover:bg-white/5 rounded-md uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#orcamento"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 w-full bg-brand-yellow text-black px-3 py-3 rounded-sm font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Orçamento Rápido
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
