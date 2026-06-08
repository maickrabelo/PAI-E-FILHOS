import React, { useState, useEffect } from 'react';
import { CheckCircle2, Info, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { fleet as initialFleet } from '../data';

const ITEMS_PER_PAGE = 6;

export function Fleet() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [fleet, setFleet] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFleet = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'fleet'));
        const data: any[] = [];
        querySnapshot.forEach((docSnap) => {
          data.push({ id: docSnap.id, ...docSnap.data() });
        });
        
        if (data.length > 0) {
          setFleet(data);
        } else {
          // Fallback if not seeded yet
          setFleet(initialFleet);
        }
      } catch (err) {
        handleFirestoreError(err, OperationType.LIST, 'fleet');
      } finally {
        setLoading(false);
      }
    };
    
    loadFleet();
  }, []);

  const categories = ['Todos', ...Array.from(new Set(fleet.map(item => item.category)))];

  const filteredFleet = activeFilter === 'Todos' 
    ? fleet 
    : fleet.filter(item => item.category === activeFilter);

  const totalPages = Math.ceil(filteredFleet.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredFleet.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section id="frota" className="py-24 bg-brand-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-brand-yellow font-bold tracking-widest uppercase text-sm mb-2">Catálogo de Frota</h2>
            <h3 className="heading-display text-4xl sm:text-5xl text-white">
              Equipamentos de <br />alta performance.
            </h3>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => {
                  setActiveFilter(category);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-sm text-sm font-medium transition-all ${
                  activeFilter === category 
                    ? 'bg-brand-yellow text-black' 
                    : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="text-center py-24 text-zinc-500">Aguarde, carregando frota disponível...</div>
        ) : (
          <>
            {/* Fleet Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
              {currentItems.map((machine) => (
                <div key={machine.id} className="group bg-brand-dark border border-white/5 rounded-sm overflow-hidden hover:border-brand-yellow/30 transition-colors">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={machine.image} 
                  alt={machine.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {machine.readyToDeploy && (
                  <div className="absolute top-4 right-4 bg-brand-yellow text-black px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
                    <CheckCircle2 size={14} />
                    Pronta Entrega
                  </div>
                )}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-brand-dark to-transparent h-24"></div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <span className="text-brand-yellow text-xs font-bold uppercase tracking-wider mb-2 block">{machine.category}</span>
                  <h4 className="heading-display text-2xl text-white">{machine.name}</h4>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  {machine.specs && Object.entries(machine.specs).map(([key, value]) => (
                    <div key={key} className="bg-brand-black p-3 rounded-sm border border-white/5">
                      <span className="text-zinc-500 text-xs uppercase tracking-wider block mb-1">
                        {key === 'weight' ? 'Quantidade' : key === 'brand' ? 'Marca' : key}
                      </span>
                      <span className="text-white font-mono text-sm">{value as string}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-start gap-3 mb-8 p-4 bg-brand-yellow/5 border border-brand-yellow/10 rounded-sm">
                  <Info className="text-brand-yellow flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <span className="text-zinc-300 text-sm block">
                      <strong className="text-white font-medium">Ideal para:</strong> {machine.idealFor}
                    </span>
                  </div>
                </div>

                <a 
                  href={`#orcamento?maquina=${machine.id}`}
                  className="w-full bg-white/5 hover:bg-brand-yellow hover:text-black text-white px-6 py-3 rounded-sm font-bold uppercase tracking-wider text-sm transition-all flex items-center justify-center gap-2 group/btn"
                >
                  Solicitar Orçamento
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-sm bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-sm text-sm font-medium transition-colors ${
                  currentPage === i + 1
                    ? 'bg-brand-yellow text-black'
                    : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-sm bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
          </>
        )}

      </div>
    </section>
  );
}
