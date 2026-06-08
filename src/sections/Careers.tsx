import React from 'react';
import { Send } from 'lucide-react';

export function Careers() {
  return (
    <section id="trabalhe-conosco" className="py-24 bg-brand-yellow relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          
          {/* Info */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h2 className="text-brand-dark font-bold tracking-widest uppercase text-sm mb-2">Trabalhe Conosco</h2>
            <h3 className="heading-display text-4xl sm:text-5xl text-black mb-6">
              Faça parte da <span className="text-white drop-shadow-sm">nossa equipe.</span>
            </h3>
            <p className="text-black/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Estamos sempre em busca de profissionais qualificados e apaixonados pelo que fazem. Se você tem responsabilidade, experiência no setor de máquinas pesadas ou quer construir uma carreira sólida, venha trabalhar conosco.
            </p>

            <img 
              src="https://static.vecteezy.com/system/resources/thumbnails/058/027/648/small/driver-confidently-stands-by-truck-png.png" 
              alt="Motorista / Operador" 
              className="w-full max-w-sm mx-auto object-contain drop-shadow-2xl -mb-10 lg:-mb-24"
            />
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-brand-dark p-8 sm:p-10 rounded-sm shadow-2xl relative overflow-hidden ring-4 ring-black/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-bl-full z-0 pointer-events-none"></div>
              
              <form className="relative z-10 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="career-name" className="block text-sm font-medium text-zinc-400 mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      id="career-name" 
                      className="w-full bg-brand-black border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="career-phone" className="block text-sm font-medium text-zinc-400 mb-2">Telefone / WhatsApp</label>
                    <input 
                      type="tel" 
                      id="career-phone" 
                      className="w-full bg-brand-black border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="career-email" className="block text-sm font-medium text-zinc-400 mb-2">E-mail</label>
                    <input 
                      type="email" 
                      id="career-email" 
                      className="w-full bg-brand-black border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="career-position" className="block text-sm font-medium text-zinc-400 mb-2">Área de Interesse</label>
                    <select 
                      id="career-position" 
                      className="w-full bg-brand-black border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors appearance-none"
                    >
                      <option value="">Selecione uma área...</option>
                      <option value="operador">Operador de Máquinas</option>
                      <option value="motorista">Motorista / Transporte</option>
                      <option value="mecanico">Mecânico / Manutenção</option>
                      <option value="administrativo">Administrativo / Vendas</option>
                      <option value="estagio">Estágio / Jovem Aprendiz</option>
                      <option value="outro">Outros</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="career-message" className="block text-sm font-medium text-zinc-400 mb-2">Mensagem (Resumo Profissional)</label>
                  <textarea 
                    id="career-message" 
                    rows={4}
                    className="w-full bg-brand-black border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors resize-none"
                    placeholder="Conte-nos um pouco sobre sua experiência, habilitações (CNH, cursos) e porque gostaria de trabalhar conosco."
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="w-full bg-brand-yellow hover:bg-white text-black px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Enviar Candidatura
                </button>
                
                <p className="text-center text-zinc-400 text-xs mt-4">
                  Suas informações serão mantidas em sigilo e nosso setor de RH entrará em contato caso haja uma vaga compatível com seu perfil.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
