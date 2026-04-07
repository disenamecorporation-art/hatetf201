import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Navbar, Footer, FloatingWhatsApp, ContactModal, servicesData } from '../components/Landing';

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-bone min-h-screen">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      
      {/* Header Section */}
      <section className="pt-48 pb-20 bg-deep-black text-bone relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Architecture" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-dark text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">
              Nuestra Experiencia
            </span>
            <h1 className="text-6xl md:text-8xl font-serif tracking-tighter mb-8">
              Servicios <span className="italic text-gold-dark">Detallados.</span>
            </h1>
            <p className="text-bone/50 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
              Cada área de nuestra firma Juridico Camacaro & Asociados está liderada por especialistas de élite, garantizando una defensa técnica y una asesoría estratégica sin precedentes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-32">
            {servicesData.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="aspect-[4/5] overflow-hidden rounded-sm">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  {/* Decorative Frame */}
                  <div className={`absolute -inset-4 border border-gold-dark/20 -z-10 translate-x-8 translate-y-8 hidden lg:block`}></div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className="mb-8">
                    {service.icon}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif mb-8 tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-deep-black/70 text-lg font-light leading-relaxed mb-10">
                    {service.detailedDescription}
                  </p>
                  
                  <div className="space-y-6 mb-12">
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-dark mt-2.5"></div>
                      <p className="text-deep-black/60 font-light">Análisis técnico exhaustivo de cada caso.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-dark mt-2.5"></div>
                      <p className="text-deep-black/60 font-light">Representación ante las más altas instancias judiciales.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-dark mt-2.5"></div>
                      <p className="text-deep-black/60 font-light">Estrategias personalizadas según la complejidad del asunto.</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="group inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-bold text-deep-black hover:text-gold-dark transition-colors"
                  >
                    Solicitar Información <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
