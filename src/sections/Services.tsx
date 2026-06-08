import React from 'react';
import { services } from '../data';
import { ArrowRight } from 'lucide-react';

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-brand-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-yellow font-bold tracking-widest uppercase text-sm mb-2">Serviços Especializados</h2>
          <h3 className="heading-display text-4xl sm:text-5xl text-white mb-6">
            Soluções completas para o seu canteiro.
          </h3>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Além da locação de equipamentos, oferecemos a execução completa dos serviços de movimentação de terra e demolição, entregando o resultado final que sua obra precisa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="group relative overflow-hidden rounded-sm bg-brand-black border border-white/5 flex flex-col sm:flex-row"
            >
              <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              
              <div className="p-6 sm:p-8 sm:w-3/5 flex flex-col justify-center">
                <div className="w-10 h-10 bg-brand-yellow/10 rounded-sm flex items-center justify-center mb-4 border border-brand-yellow/20">
                  <service.icon className="text-brand-yellow" size={20} />
                </div>
                <h4 className="heading-display text-2xl text-white mb-3">{service.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <a 
                  href="#orcamento" 
                  className="inline-flex items-center gap-2 text-brand-yellow text-sm font-bold uppercase tracking-wider hover:text-white transition-colors mt-auto"
                >
                  Saber mais
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
