import { useState, useEffect, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Navbar, Footer, FloatingWhatsApp, ContactModal } from '../components/Landing';

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const phone = "584143330663";
    const text = `Hola, mi nombre es ${formData.nombre}. Mi correo es ${formData.email}. Teléfono: ${formData.telefono}. Asunto: ${formData.asunto}. Mensaje: ${formData.mensaje}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

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
              Canales de Comunicación
            </span>
            <h1 className="text-6xl md:text-8xl font-serif tracking-tighter mb-8">
              Contacto <span className="italic text-gold-dark">Directo.</span>
            </h1>
            <p className="text-bone/50 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
              Estamos a su entera disposición para atender sus requerimientos legales con la celeridad y el rigor que su caso amerita.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Contact Info Side */}
            <div className="lg:col-span-5">
              <div className="space-y-16">
                <div>
                  <h2 className="text-3xl font-serif mb-10 tracking-tight">Información de <span className="italic">Contacto</span></h2>
                  <div className="space-y-10">
                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 rounded-full border border-deep-black/10 flex items-center justify-center group-hover:border-gold-dark transition-colors">
                        <Mail size={20} className="group-hover:text-gold-dark transition-colors" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-deep-black/40 font-bold mb-1">Email Corporativo</p>
                        <p className="text-lg font-light">contacto@juridicocamacaro.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 rounded-full border border-deep-black/10 flex items-center justify-center group-hover:border-gold-dark transition-colors">
                        <Phone size={20} className="group-hover:text-gold-dark transition-colors" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-deep-black/40 font-bold mb-1">Teléfono Directo</p>
                        <p className="text-lg font-light">+58 414-3330663</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 rounded-full border border-deep-black/10 flex items-center justify-center group-hover:border-gold-dark transition-colors">
                        <MapPin size={20} className="group-hover:text-gold-dark transition-colors" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-deep-black/40 font-bold mb-1">Ubicación</p>
                        <p className="text-lg font-light">Torre Financiera, Piso 12, Oficina 1204. Caracas, Venezuela.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 rounded-full border border-deep-black/10 flex items-center justify-center group-hover:border-gold-dark transition-colors">
                        <Clock size={20} className="group-hover:text-gold-dark transition-colors" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-deep-black/40 font-bold mb-1">Horario de Atención</p>
                        <p className="text-lg font-light">Lunes a Viernes: 8:00 AM — 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-serif mb-6 tracking-tight">Redes <span className="italic">Sociales</span></h3>
                  <div className="flex gap-6">
                    <a href="https://instagram.com/legaint.ve" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-deep-black/10 flex items-center justify-center hover:border-gold-dark hover:text-gold-dark transition-all">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full border border-deep-black/10 flex items-center justify-center hover:border-gold-dark hover:text-gold-dark transition-all">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Extensive Form Side */}
            <div className="lg:col-span-7">
              <div className="bg-white p-10 md:p-16 rounded-sm shadow-sm border border-deep-black/5">
                <h2 className="text-3xl font-serif mb-10 tracking-tight">Formulario de <span className="italic">Consulta</span></h2>
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-deep-black/40">Nombre Completo</label>
                      <input 
                        type="text" 
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                        className="w-full bg-transparent border-b border-deep-black/10 py-4 focus:border-gold-dark outline-none transition-colors font-light text-deep-black" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-deep-black/40">Email Corporativo</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-transparent border-b border-deep-black/10 py-4 focus:border-gold-dark outline-none transition-colors font-light text-deep-black" 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-deep-black/40">Teléfono de Contacto</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.telefono}
                        onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                        className="w-full bg-transparent border-b border-deep-black/10 py-4 focus:border-gold-dark outline-none transition-colors font-light text-deep-black" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-deep-black/40">Asunto del Caso</label>
                      <input 
                        type="text" 
                        required
                        value={formData.asunto}
                        onChange={(e) => setFormData({...formData, asunto: e.target.value})}
                        className="w-full bg-transparent border-b border-deep-black/10 py-4 focus:border-gold-dark outline-none transition-colors font-light text-deep-black" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-deep-black/40">Descripción Detallada</label>
                    <textarea 
                      rows={6} 
                      required
                      value={formData.mensaje}
                      onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                      className="w-full bg-transparent border-b border-deep-black/10 py-4 focus:border-gold-dark outline-none transition-colors font-light text-deep-black resize-none"
                      placeholder="Por favor, describa brevemente los hechos de su caso..."
                    ></textarea>
                  </div>
                  <button type="submit" className="group w-full py-6 bg-deep-black text-bone uppercase tracking-[0.4em] font-bold hover:bg-gold-dark transition-all duration-500 rounded-sm flex items-center justify-center gap-4">
                    Enviar Consulta Estratégica <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
