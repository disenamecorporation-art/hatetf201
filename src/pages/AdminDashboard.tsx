import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { Navbar, Footer } from '../components/Landing';
import { Users, Shield, Star, User, Check, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Profile {
  id: string;
  email: string;
  role: 'admin' | 'premium' | 'normal';
}

export default function AdminDashboard() {
  const { role, loading: authLoading } = useAuth();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && role !== 'admin') {
      navigate('/');
    }
  }, [role, authLoading, navigate]);

  useEffect(() => {
    fetchProfiles();
  }, []);

  async function fetchProfiles() {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('email');
      
      if (error) throw error;
      setProfiles(data || []);
    } catch (err) {
      console.error('Error fetching profiles:', err);
    } finally {
      setLoading(false);
    }
  }

  async function updateRole(userId: string, newRole: 'premium' | 'normal') {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ role: newRole })
        .eq('id', userId);
      
      if (error) throw error;
      setProfiles(profiles.map(p => p.id === userId ? { ...p, role: newRole } : p));
    } catch (err) {
      alert('Error al actualizar rol: ' + (err as any).message);
    }
  }

  if (authLoading || loading) return <div className="min-h-screen bg-bone flex items-center justify-center font-serif italic text-2xl">Cargando sistema...</div>;

  return (
    <main className="bg-bone min-h-screen">
      <Navbar onOpenModal={() => {}} />
      
      <section className="pt-48 pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-gold-dark text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">
              Panel de Control
            </span>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tighter text-deep-black">
              Gestión de <span className="italic">Usuarios.</span>
            </h1>
          </div>

          <div className="bg-white rounded-sm shadow-2xl border border-gold-dark/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-deep-black text-bone uppercase text-[10px] tracking-widest">
                    <th className="px-8 py-6 font-bold">Usuario</th>
                    <th className="px-8 py-6 font-bold">Estado Actual</th>
                    <th className="px-8 py-6 font-bold text-right">Acciones Estratégicas</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gold-dark/10">
                  {profiles.map((profile) => (
                    <tr key={profile.id} className="hover:bg-gold-light/5 transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-bone flex items-center justify-center text-gold-dark border border-gold-dark/20">
                            <User size={20} />
                          </div>
                          <span className="font-light text-deep-black">{profile.email}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest ${
                          profile.role === 'admin' ? 'bg-deep-black text-gold-dark' :
                          profile.role === 'premium' ? 'bg-gold-dark text-deep-black' :
                          'bg-bone text-deep-black/40'
                        }`}>
                          {profile.role === 'admin' && <Shield size={12} />}
                          {profile.role === 'premium' && <Star size={12} />}
                          {profile.role}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        {profile.role !== 'admin' && (
                          <div className="flex justify-end gap-4">
                            <button 
                              onClick={() => updateRole(profile.id, 'premium')}
                              className={`flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest transition-colors ${profile.role === 'premium' ? 'text-gold-dark cursor-default' : 'text-deep-black/40 hover:text-gold-dark'}`}
                            >
                              <Star size={14} /> Hacer Premium
                            </button>
                            <button 
                              onClick={() => updateRole(profile.id, 'normal')}
                              className={`flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest transition-colors ${profile.role === 'normal' ? 'text-deep-black/40 cursor-default' : 'text-deep-black/40 hover:text-red-600'}`}
                            >
                              <X size={14} /> Quitar Premium
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
