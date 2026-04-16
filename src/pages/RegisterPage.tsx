import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Navbar, Footer } from '../components/Landing';
import { Mail, Lock, ArrowRight, AlertCircle, User } from 'lucide-react';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      alert('Registro exitoso. Por favor verifique su correo electrónico.');
      navigate('/login');
    }
  };

  return (
    <main className="bg-bone min-h-screen">
      <Navbar onOpenModal={() => {}} />
      
      <section className="pt-48 pb-32 flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-white p-12 rounded-sm shadow-xl border border-gold-dark/10"
        >
          <div className="text-center mb-12">
            <span className="text-gold-dark text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">
              Membresía de Élite
            </span>
            <h1 className="text-4xl font-serif tracking-tight text-deep-black">
              Crear <span className="italic">Cuenta</span>
            </h1>
          </div>

          {error && (
            <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-500 flex items-center gap-3 text-red-700 text-sm">
              <AlertCircle size={18} />
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-deep-black/40">Email Corporativo</label>
              <div className="relative">
                <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-gold-dark" size={18} />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-deep-black/10 py-3 pl-8 focus:border-gold-dark outline-none transition-colors font-light" 
                  placeholder="ejemplo@firma.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-deep-black/40">Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-0 top-1/2 -translate-y-1/2 text-gold-dark" size={18} />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-b border-deep-black/10 py-3 pl-8 focus:border-gold-dark outline-none transition-colors font-light" 
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-5 bg-gold-dark text-deep-black uppercase tracking-[0.3em] font-bold hover:bg-deep-black hover:text-bone transition-all duration-500 disabled:opacity-50 group flex items-center justify-center gap-3"
            >
              {loading ? 'Procesando...' : 'Solicitar Acceso'} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-sm text-deep-black/40 font-light">
              ¿Ya tiene una cuenta?{' '}
              <Link to="/login" className="text-gold-dark font-bold hover:underline">Iniciar Sesión</Link>
            </p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
