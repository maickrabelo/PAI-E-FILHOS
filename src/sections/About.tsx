import React from 'react';
import { CheckCircle2, Shield, Clock, Truck } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Shield,
      title: 'Segurança Certificada',
      description: 'Operadores qualificados e equipamentos em conformidade com todas as NRs exigidas.'
    },
    {
      icon: Clock,
      title: 'Compromisso com Prazos',
      description: 'Entendemos que tempo é dinheiro na obra. Nossa logística garante entrega pontual.'
    },
    {
      icon: Truck,
      title: 'Logística Própria',
      description: 'Possuímos pranchas próprias para transporte rápido dos equipamentos até o canteiro.'
    }
  ];

  return (
    <section id="empresa" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-brand-yellow font-bold tracking-widest uppercase text-sm mb-2">A Empresa</h2>
              <h3 className="heading-display text-4xl sm:text-5xl text-white mb-6">
                Autoridade em <br />movimentação de terra.
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Com mais de 15 anos de mercado, a LocaFrota se consolidou como parceira estratégica de grandes construtoras e engenheiros. Não apenas alugamos máquinas, entregamos produtividade e tranquilidade para o seu canteiro de obras.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Nossa frota própria e renovada garante que você tenha o equipamento certo, na hora certa, com o suporte técnico necessário para evitar qualquer interrupção no seu cronograma.
              </p>
            </div>

            <div className="space-y-6 mt-10">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center border border-brand-yellow/20">
                    <feature.icon className="text-brand-yellow" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{feature.title}</h4>
                    <p className="text-zinc-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="absolute -inset-4 bg-brand-yellow/5 blur-3xl rounded-full z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1585245347201-f20101850700?auto=format&fit=crop&q=80&w=600" 
              alt="Operação em campo" 
              className="rounded-sm object-cover h-64 w-full relative z-10"
            />
            <img 
              src="https://images.unsplash.com/photo-1572248364240-7f412f1cb1e0?auto=format&fit=crop&q=80&w=600" 
              alt="Frota" 
              className="rounded-sm object-cover h-64 w-full mt-8 relative z-10"
            />
            <div className="col-span-2 bg-brand-black border border-white/10 p-6 rounded-sm relative z-10 flex items-center gap-6">
              <div className="heading-display text-5xl text-brand-yellow">100%</div>
              <div className="text-zinc-300 font-medium leading-snug">
                Frota própria com manutenção em dia e documentação regularizada.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
