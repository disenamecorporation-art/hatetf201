import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Navbar, Footer, FloatingWhatsApp, ContactModal } from '../components/Landing';
import { Users, Shield, Award, BookOpen, ChevronRight } from 'lucide-react';

export default function TeamPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Dr. Edwin Camacaro Espinoza",
      role: "Socio Fundador & Asociados",
      description: "Especialista en Derecho Penal y Criminología con más de 20 años de trayectoria. Ha liderado defensas en casos de trascendencia nacional e internacional, destacándose por su rigor técnico y ética inquebrantable.",
      image: "https://i.postimg.cc/g0hpBJzk/image.png",
      specialties: ["Derecho Penal", "Estrategia Procesal", "Casación"]
    },
    {
      name: "Dr. Carlos Solon Morillo Zambrano",
      role: "Socio Senior",
      description: "Destacado jurista con amplia experiencia en litigios complejos y asesoría estratégica. Su compromiso con la excelencia y la justicia refuerza el pilar fundamental de nuestra firma.",
      image: "https://i.postimg.cc/0QdsPBKt/image.png",
      specialties: ["Derecho Civil", "Asesoría Estratégica", "Litigios"]
    },
    {
      name: "Dra. Elena Rodríguez",
      role: "Socia Senior - Derecho Internacional",
      description: "Experta en tratados internacionales y derechos humanos. Su visión global permite a la firma abordar litigios transfronterizos con una precisión estratégica única en la región.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
      specialties: ["Penal Internacional", "Extradiciones", "DDHH"]
    },
    {
      name: "Abg. Ricardo Méndez",
      role: "Director de Litigios Civiles",
      description: "Especialista en derecho mercantil y protección patrimonial. Su enfoque preventivo ha salvaguardado los intereses de importantes grupos corporativos durante la última década.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
      specialties: ["Derecho Mercantil", "Contratos Complejos", "Arbitraje"]
    }
  ];

  return (
    <main className="bg-bone min-h-screen">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      
      {/* Header Section */}
      <section className="pt-48 pb-20 bg-deep-black text-bone relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="Office" 
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
              Capital Intelectual
            </span>
            <h1 className="text-6xl md:text-8xl font-serif tracking-tighter mb-8">
              Nuestro <span className="italic text-gold-dark">Equipo.</span>
            </h1>
            <p className="text-bone/50 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
              Un grupo multidisciplinario de profesionales, consultores e investigadores dedicados a la excelencia jurídica y la defensa estratégica.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members List */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-32">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="aspect-[4/5] overflow-hidden rounded-sm">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  <div className={`absolute -inset-4 border border-gold-dark/20 -z-10 ${index % 2 !== 0 ? 'translate-x-8' : '-translate-x-8'} translate-y-8 hidden lg:block`}></div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <span className="text-gold-dark text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block">
                    {member.role}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif mb-8 tracking-tight">
                    {member.name}
                  </h2>
                  <p className="text-deep-black/70 text-lg font-light leading-relaxed mb-10">
                    {member.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                    {member.specialties.map((spec) => (
                      <div key={spec} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-dark"></div>
                        <p className="text-deep-black/60 text-sm font-medium uppercase tracking-widest">{spec}</p>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="group inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-bold text-deep-black hover:text-gold-dark transition-colors"
                  >
                    Contactar Profesional <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-deep-black text-bone">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <Shield className="text-gold-dark" size={40} />
              <h3 className="text-2xl font-serif">Integridad</h3>
              <p className="text-bone/50 font-light leading-relaxed">Mantenemos los más altos estándares éticos en cada una de nuestras actuaciones procesales.</p>
            </div>
            <div className="space-y-6">
              <Award className="text-gold-dark" size={40} />
              <h3 className="text-2xl font-serif">Excelencia</h3>
              <p className="text-bone/50 font-light leading-relaxed">Nuestra búsqueda de la perfección técnica es lo que nos diferencia de las firmas tradicionales.</p>
            </div>
            <div className="space-y-6">
              <BookOpen className="text-gold-dark" size={40} />
              <h3 className="text-2xl font-serif">Investigación</h3>
              <p className="text-bone/50 font-light leading-relaxed">Cada caso es abordado con un rigor investigativo multidisciplinario para no dejar nada al azar.</p>
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
