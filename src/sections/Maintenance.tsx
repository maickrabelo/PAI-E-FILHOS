import React from 'react';
import { AlertTriangle, Wrench, Clock, ShieldCheck } from 'lucide-react';

export function Maintenance() {
  return (
    <section id="manutencao" className="py-24 bg-brand-black relative border-t border-white/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-yellow/5 skew-x-12 translate-x-32 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <AlertTriangle size={14} className="text-red-500" />
              <span className="text-xs font-bold tracking-wider uppercase text-red-500">O Diferencial de Confiança</span>
            </div>
            
            <h2 className="heading-display text-4xl sm:text-5xl text-white mb-6">
              Locatários têm pavor de <span className="text-brand-yellow">máquina parada.</span> Nós também.
            </h2>
            
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Sabemos que um equipamento quebrado pode atrasar toda a obra. Por isso, investimos pesadamente em manutenção preventiva e possuímos uma equipe de resposta rápida para assistência no local.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-brand-dark p-6 rounded-sm border border-white/5">
                <Wrench className="text-brand-yellow mb-4" size={28} />
                <h4 className="text-white font-bold text-lg mb-2">Assistência no Local</h4>
                <p className="text-zinc-400 text-sm">Equipe de manutenção móvel que vai até a sua obra em caso de pane, equipada para resolver problemas rapidamente.</p>
              </div>
              <div className="bg-brand-dark p-6 rounded-sm border border-white/5">
                <ShieldCheck className="text-brand-yellow mb-4" size={28} />
                <h4 className="text-white font-bold text-lg mb-2">Frota Renovada</h4>
                <p className="text-zinc-400 text-sm">Renovação constante da frota e rigoroso checklist de liberação antes de cada locação.</p>
              </div>
            </div>

            <div className="bg-brand-yellow p-6 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-black font-bold text-lg mb-1">Máquina parada na obra?</h4>
                <p className="text-black/80 text-sm font-medium">Solicite substituição ou manutenção imediata.</p>
              </div>
              <a 
                href="#orcamento" 
                className="bg-black text-white px-6 py-3 rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-zinc-900 transition-colors whitespace-nowrap flex items-center gap-2"
              >
                <Clock size={16} />
                Acionar Suporte
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden relative">
              <img 
                src="https://demolidoradesmontec.com.br/wp-content/uploads/414.jpg" 
                alt="Manutenção de equipamentos" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-brand-dark border border-white/10 p-6 rounded-sm shadow-2xl max-w-xs">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-full flex items-center justify-center">
                  <Clock className="text-brand-yellow" size={24} />
                </div>
                <div>
                  <div className="text-white font-bold text-xl">SLA Rápido</div>
                  <div className="text-zinc-400 text-sm">Atendimento prioritário</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
