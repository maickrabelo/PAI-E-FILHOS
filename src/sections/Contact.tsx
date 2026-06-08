import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="orcamento" className="py-24 bg-brand-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-5 gap-16">
          
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="text-brand-yellow font-bold tracking-widest uppercase text-sm mb-2">Orçamento Rápido</h2>
            <h3 className="heading-display text-4xl sm:text-5xl text-white mb-6">
              Pronto para iniciar sua obra?
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Fale com nossos especialistas e receba um orçamento detalhado para locação ou serviços em até 2 horas úteis.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center border border-white/10 flex-shrink-0">
                  <Phone className="text-brand-yellow" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Central de Atendimento</h4>
                  <p className="text-zinc-400 mb-2">Seg a Sex, das 07h às 18h</p>
                  <a href="tel:+553433167103" className="text-brand-yellow font-mono text-lg hover:underline">(34) 3316-7103</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center border border-white/10 flex-shrink-0">
                  <Mail className="text-brand-yellow" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">E-mail Comercial</h4>
                  <a href="mailto:comercial@locafrota.com.br" className="text-zinc-400 hover:text-white transition-colors">comercial@locafrota.com.br</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center border border-white/10 flex-shrink-0">
                  <MapPin className="text-brand-yellow" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Pátio e Sede</h4>
                  <p className="text-zinc-400">Av. Maria Ilídia Pereira Antunes, 192<br />Jardim Alvorada, Uberaba - MG, 38041-200</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-brand-black p-8 sm:p-10 rounded-sm border border-white/5 shadow-2xl">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Nome / Empresa</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-brand-dark border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors"
                      placeholder="Sua construtora ou nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-2">Telefone / WhatsApp</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-brand-dark border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-zinc-400 mb-2">Qual sua necessidade?</label>
                  <select 
                    id="interest" 
                    className="w-full bg-brand-dark border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors appearance-none"
                  >
                    <option value="">Selecione uma opção...</option>
                    <option value="locacao">Locação de Equipamentos</option>
                    <option value="terraplanagem">Serviço de Terraplanagem</option>
                    <option value="demolicao">Serviço de Demolição</option>
                    <option value="manutencao">Suporte / Manutenção (Cliente Atual)</option>
                    <option value="outro">Outros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Detalhes da Obra (Opcional)</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-brand-dark border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors resize-none"
                    placeholder="Descreva brevemente o local, prazo estimado ou equipamento específico que procura."
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-black px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Solicitar Orçamento
                </button>
                
                <p className="text-center text-zinc-500 text-xs mt-4">
                  Ao enviar, você concorda em ser contatado por nossa equipe comercial.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
