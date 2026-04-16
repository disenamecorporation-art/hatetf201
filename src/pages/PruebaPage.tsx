import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { Navbar, Footer } from '../components/Landing';
import { Star, Shield, Lock, ArrowRight } from 'lucide-react';
import { Navigate } from 'react-router-dom';

export default function PruebaPage() {
  const { role, loading } = useAuth();

  // Route protection: Only premium or admin
  if (!loading && role !== 'premium' && role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-bone flex items-center justify-center font-serif italic text-2xl">
        Verificando credenciales de élite...
      </div>
    );
  }

  return (
    <main className="bg-bone min-h-screen">
      <Navbar onOpenModal={() => {}} />
      
      {/* Hero Section */}
      <section className="pt-48 pb-20 bg-deep-black text-bone relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" 
            alt="Premium Background" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Star className="text-gold-dark fill-gold-dark" size={20} />
              <span className="text-gold-dark text-[10px] uppercase tracking-[0.5em] font-bold block">
                Contenido Exclusivo Premium
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif tracking-tighter mb-8">
              Área de <span className="italic text-gold-dark">Prueba.</span>
            </h1>
            <p className="text-bone/50 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
              Esta sección es un privilegio reservado únicamente para nuestros miembros con estatus Premium y Administradores.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gold-dark/10 border border-gold-dark/20 rounded-full">
                <Shield size={16} className="text-gold-dark" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-gold-dark">Acceso Verificado</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-deep-black">
                Información <span className="italic">Confidencial</span> de Prueba
              </h2>
              <p className="text-deep-black/70 text-lg font-light leading-relaxed">
                Aquí es donde se colocarán las herramientas exclusivas, documentos de alta prioridad o servicios personalizados que solo los usuarios Premium pueden visualizar.
              </p>
              <div className="space-y-4">
                {[
                  "Reportes de jurisprudencia avanzada",
                  "Acceso a consultoría prioritaria",
                  "Documentación legal descargable",
                  "Webinars exclusivos con socios"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-gold-dark"></div>
                    <p className="text-deep-black/60 font-light">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-deep-black rounded-sm overflow-hidden group"
            >
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" 
                alt="Premium Asset" 
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                <Lock className="text-gold-dark mb-6" size={48} />
                <h3 className="text-2xl font-serif text-bone mb-4">Módulo Protegido</h3>
                <p className="text-bone/50 text-sm font-light">Este es un marcador de posición para un componente exclusivo.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
