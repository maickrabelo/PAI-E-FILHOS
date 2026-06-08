import React from 'react';

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center">
            <img 
              src="https://i.ibb.co/SDp59X3m/LOGO-PF.png" 
              alt="LocaFrota" 
              className="h-10 w-auto" 
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="text-zinc-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} LocaFrota Máquinas Pesadas. Todos os direitos reservados.
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-zinc-500 hover:text-brand-yellow transition-colors text-sm font-medium uppercase tracking-wider">Instagram</a>
            <a href="#" className="text-zinc-500 hover:text-brand-yellow transition-colors text-sm font-medium uppercase tracking-wider">LinkedIn</a>
          </div>

        </div>
      </div>
    </footer>
  );
}
