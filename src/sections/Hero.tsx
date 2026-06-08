import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { stats } from '../data';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1572248364240-7f412f1cb1e0?auto=format&fit=crop&q=80&w=2000"
          alt="Máquinas pesadas em operação"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse"></span>
            <span className="text-xs font-medium tracking-wider uppercase text-zinc-300">Equipamentos a Pronta Entrega</span>
          </div>
          
          <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
            Força bruta para <br />
            <span className="text-brand-yellow">grandes obras.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl font-light leading-relaxed">
            Locação de frota pesada, serviços de terraplanagem e demolição com foco em produtividade e zero tempo de máquina parada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#frota"
              className="bg-brand-yellow hover:bg-brand-yellow-hover text-black px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm transition-all flex items-center justify-center gap-2 group"
            >
              Ver Catálogo de Frota
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#orcamento"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm transition-all flex items-center justify-center gap-2"
            >
              Falar com Consultor
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 border-t border-white/10 pt-10">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col">
              <span className="heading-display text-4xl text-brand-yellow mb-1">{stat.value}</span>
              <span className="text-sm font-medium text-zinc-400 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
