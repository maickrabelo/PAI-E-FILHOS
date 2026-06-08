import React, { useState, useEffect } from 'react';
import { Truck, Plus, Trash2, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { db, auth, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { fleet as initialFleet } from '../data';

export function AdminPanel() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState('');
  const [fleet, setFleet] = useState<any[]>([]);
  const navigate = useNavigate();

  // New Equipment Form State
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [weight, setWeight] = useState('1');
  const [idealFor, setIdealFor] = useState('');
  const [readyToDeploy, setReadyToDeploy] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchFleet();
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchFleet = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'fleet'));
      const data: any[] = [];
      querySnapshot.forEach((docSnap) => {
        data.push({ id: docSnap.id, ...docSnap.data() });
      });
      
      if (data.length === 0) {
        // Seed initial data if empty
        const promises = initialFleet.map(async (item) => {
          await setDoc(doc(db, 'fleet', item.id), item);
        });
        await Promise.all(promises);
        setFleet(initialFleet);
      } else {
        setFleet(data);
      }
    } catch (err) {
      handleFirestoreError(err, OperationType.LIST, 'fleet');
    }
  };

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      setError('');
    } catch (err) {
       setError('Erro ao fazer login com o Google.');
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = {
      name,
      category,
      image,
      readyToDeploy,
      specs: { weight, brand },
      idealFor
    };
    try {
      const docRef = await addDoc(collection(db, 'fleet'), newItem);
      const updated = [{ id: docRef.id, ...newItem }, ...fleet];
      setFleet(updated);
      
      // Clear form
      setName(''); setCategory(''); setImage(''); setBrand(''); setWeight('1'); setIdealFor('');
    } catch (err) {
       handleFirestoreError(err, OperationType.CREATE, 'fleet');
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Tem certeza que deseja remover esta máquina?')) return;
    try {
      await deleteDoc(doc(db, 'fleet', id));
      const updated = fleet.filter(item => item.id !== id);
      setFleet(updated);
    } catch(err) {
      handleFirestoreError(err, OperationType.DELETE, `fleet/${id}`);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center p-4">
        <div className="bg-brand-dark p-8 rounded-sm shadow-2xl w-full max-w-md border border-white/5 text-center">
          <div className="flex items-center gap-2 justify-center mb-8">
            <Truck className="text-brand-yellow" size={32} />
            <span className="text-white font-bold text-2xl tracking-wider">PORTAL<span className="text-brand-yellow">ADMIN</span></span>
          </div>
          <div className="space-y-6">
            {error && <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-sm text-sm text-center">{error}</div>}
            <button onClick={handleLogin} className="w-full bg-brand-yellow hover:bg-white text-black font-bold uppercase tracking-wider py-4 rounded-sm transition-colors text-sm">
              Entrar com Google
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
          <div>
            <h2 className="heading-display text-3xl text-white">Painel de <span className="text-brand-yellow">Controle</span></h2>
            <p className="text-zinc-400">Gerencie o catálogo de frota e equipamentos disponíveis.</p>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            <LogOut size={18} /> Sair
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Add New Equipment Form */}
          <div className="lg:col-span-1">
            <div className="bg-brand-dark p-6 rounded-sm border border-white/5 sticky top-24">
              <h3 className="text-xl text-white font-bold mb-6 flex items-center gap-2"><Plus className="text-brand-yellow" size={20}/> Adicionar Máquina</h3>
              <form onSubmit={handleAdd} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Nome / Modelo</label>
                  <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full bg-brand-black border border-white/10 rounded-sm px-3 py-2.5 text-white text-sm outline-none focus:border-brand-yellow" required />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Categoria (ex: Escavadeiras)</label>
                  <input type="text" value={category} onChange={e => setCategory(e.target.value)} className="w-full bg-brand-black border border-white/10 rounded-sm px-3 py-2.5 text-white text-sm outline-none focus:border-brand-yellow" required />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Marca</label>
                  <input type="text" value={brand} onChange={e => setBrand(e.target.value)} className="w-full bg-brand-black border border-white/10 rounded-sm px-3 py-2.5 text-white text-sm outline-none focus:border-brand-yellow" required />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Quantidade / Peso</label>
                  <input type="text" value={weight} onChange={e => setWeight(e.target.value)} className="w-full bg-brand-black border border-white/10 rounded-sm px-3 py-2.5 text-white text-sm outline-none focus:border-brand-yellow" required />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">URL da Imagem</label>
                  <input type="url" value={image} onChange={e => setImage(e.target.value)} className="w-full bg-brand-black border border-white/10 rounded-sm px-3 py-2.5 text-white text-sm outline-none focus:border-brand-yellow" placeholder="https://" required />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Ideal Para (Descrição)</label>
                  <textarea value={idealFor} onChange={e => setIdealFor(e.target.value)} rows={3} className="w-full bg-brand-black border border-white/10 rounded-sm px-3 py-2.5 text-white text-sm outline-none focus:border-brand-yellow resize-none" required />
                </div>
                <div className="flex items-center gap-2 mt-2 py-2">
                  <input type="checkbox" id="ready" checked={readyToDeploy} onChange={e => setReadyToDeploy(e.target.checked)} className="accent-brand-yellow h-4 w-4" />
                  <label htmlFor="ready" className="text-zinc-300 text-sm cursor-pointer">Pronta Entrega?</label>
                </div>
                <button type="submit" className="w-full bg-brand-yellow hover:bg-white text-black font-bold uppercase tracking-wider py-3 mt-4 rounded-sm transition-colors text-sm">
                  Salvar Equipamento
                </button>
              </form>
            </div>
          </div>

          {/* Equipment List */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {fleet.map((machine) => (
                <div key={machine.id} className="bg-brand-dark p-4 rounded-sm border border-white/5 flex gap-4 items-center">
                  <div className="w-24 h-24 rounded-sm overflow-hidden flex-shrink-0 bg-brand-black">
                    <img src={machine.image} alt={machine.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <div className="text-xs uppercase tracking-wider text-brand-yellow mb-1">{machine.category}</div>
                    <h4 className="text-white font-bold text-lg">{machine.name}</h4>
                    <p className="text-zinc-500 text-sm truncate max-w-sm mt-1">{machine.idealFor}</p>
                  </div>
                  <button onClick={() => handleDelete(machine.id)} className="bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white p-3 rounded-sm transition-colors" title="Excluir">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
              {fleet.length === 0 && (
                <div className="text-zinc-400 text-center py-10">Nenhum equipamento cadastrado.</div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
