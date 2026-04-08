import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight, Scale, Globe, Briefcase, Shield, Users, ArrowRight, Instagram, Linkedin, Mail, Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

// --- Services Data ---
export const servicesData = [
  {
    id: "penal",
    title: "Derecho Penal",
    description: "Defensa estratégica en procesos complejos, garantizando la protección absoluta de sus derechos fundamentales.",
    detailedDescription: "Nuestra práctica en Derecho Penal se distingue por una defensa técnica rigurosa y una estrategia procesal agresiva. Representamos a individuos y corporaciones en casos de alta complejidad, desde delitos económicos hasta defensas criminales de alto perfil. Entendemos que la libertad y la reputación son los activos más valiosos, por lo que cada caso se maneja con la máxima discreción y precisión jurídica.",
    icon: <Scale className="text-gold-dark" size={32} />,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "internacional",
    title: "Derecho Penal Internacional",
    description: "Asesoría especializada en jurisdicciones transfronterizas y tratados internacionales de alta complejidad.",
    detailedDescription: "En un mundo globalizado, los desafíos legales no conocen fronteras. Brindamos asesoría en extradiciones, cooperación judicial internacional y defensa ante tribunales internacionales. Nuestro equipo domina los tratados y convenios que rigen la materia penal transfronteriza, ofreciendo una protección integral a clientes con intereses o procesos en múltiples jurisdicciones.",
    icon: <Globe className="text-gold-dark" size={32} />,
    image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "civil",
    title: "Civil y Mercantil",
    description: "Soluciones corporativas y litigios civiles diseñados para preservar el patrimonio y la continuidad de su negocio.",
    detailedDescription: "Protegemos sus intereses comerciales y patrimoniales mediante una asesoría preventiva robusta y una representación litigiosa de excelencia. Desde la redacción de contratos complejos hasta la resolución de disputas societarias y mercantiles, nuestro enfoque está orientado a minimizar riesgos y maximizar la seguridad jurídica de sus operaciones y activos.",
    icon: <Briefcase className="text-gold-dark" size={32} />,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "adolescente",
    title: "Responsabilidad del Adolescente",
    description: "Enfoque especializado en la protección jurídica y reinserción, manejando con sensibilidad casos de menores.",
    detailedDescription: "El sistema de responsabilidad penal del adolescente requiere un conocimiento profundo y una sensibilidad especial. Nuestra firma cuenta con expertos dedicados exclusivamente a esta área, asegurando que el proceso se lleve a cabo bajo los más estrictos estándares de protección integral, buscando siempre soluciones que prioricen el interés superior del menor y su futuro.",
    icon: <Shield className="text-gold-dark" size={32} />,
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop"
  }
];

// --- Navbar Component ---
const Navbar = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'El Equipo', href: '/equipo' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-bone/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="https://i.postimg.cc/BnMwBXLw/logoweb.png" 
            alt="Juridico Camacaro Logo" 
            className="h-10 md:h-12 w-auto transition-all duration-500 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className={`text-xl md:text-2xl font-serif font-bold tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-deep-black' : 'text-bone'}`}>
              JURIDICO CAMACARO
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold-dark font-medium -mt-1">
              ASOCIADOS
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={`text-sm font-medium uppercase tracking-widest transition-colors duration-500 relative group ${isScrolled ? 'text-deep-black/70 hover:text-gold-dark' : 'text-bone/70 hover:text-gold-dark'}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-dark transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <button 
            onClick={onOpenModal}
            className={`px-6 py-2.5 text-xs uppercase tracking-widest font-bold transition-all duration-500 rounded-sm ${isScrolled ? 'bg-deep-black text-bone hover:bg-gold-dark' : 'bg-bone text-deep-black hover:bg-gold-dark hover:text-bone'}`}
          >
            Consulta
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden transition-colors duration-500 ${isScrolled ? 'text-deep-black' : 'text-bone'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bone border-t border-gold-light/20 shadow-xl md:hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif text-deep-black hover:text-gold-dark transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="w-full py-4 bg-deep-black text-bone uppercase tracking-widest font-bold"
              >
                Agendar Consulta
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Hero Section (Static Version - Backup) ---
const HeroStatic = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover opacity-10 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bone via-transparent to-bone"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium leading-[0.9] tracking-tighter text-deep-black mb-8">
              Defensa <br /> 
              <span className="italic text-gold-dark">Sofisticada.</span>
            </h1>
            <p className="text-lg md:text-xl text-deep-black/60 font-light leading-relaxed max-w-2xl mb-12 tracking-wide">
              Somos un grupo exclusivo de expertos dedicados a la protección de sus intereses con un enfoque técnico, pulido y multidisciplinario. En Juridico Camacaro & Asociados, la justicia es una obra de precisión.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/servicios">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-10 py-5 bg-deep-black text-bone overflow-hidden rounded-sm w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold">
                    Nuestros Servicios <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gold-dark translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </motion.button>
              </Link>
              
              <Link to="/equipo">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  className="px-10 py-5 border border-deep-black/10 text-deep-black text-xs uppercase tracking-[0.2em] font-bold hover:bg-deep-black/5 transition-colors rounded-sm w-full sm:w-auto"
                >
                  Conocer al Equipo
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Side Decorative Text */}
      <div className="absolute right-0 bottom-24 hidden xl:block rotate-90 origin-right translate-x-12 opacity-5">
        <span className="text-9xl font-serif font-bold whitespace-nowrap tracking-tighter">
          EST. 2024 • INTEGRIDAD • PODER
        </span>
      </div>
    </section>
  );
};

// --- Hero Section (Carousel Version) ---
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
      title: "Defensa Estratégica",
      subtitle: "Protegemos su legado con el rigor técnico que solo una firma de élite puede ofrecer."
    },
    {
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop",
      title: "Justicia de Precisión",
      subtitle: "En Juridico Camacaro & Asociados, cada movimiento es una obra de ingeniería legal."
    },
    {
      image: "https://images.unsplash.com/photo-1453722758971-560201049511?q=80&w=2070&auto=format&fit=crop",
      title: "Poder e Integridad",
      subtitle: "Un equipo multidisciplinario dedicado a la excelencia y la protección de sus intereses."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-deep-black">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img 
              src={slides[currentSlide].image} 
              alt="Lawyer Background" 
              className="w-full h-full object-cover grayscale"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black/60 via-transparent to-deep-black/60"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium leading-[0.9] tracking-tighter text-bone mb-8">
              {slides[currentSlide].title.split(' ')[0]} <br /> 
              <span className="italic text-gold-dark">{slides[currentSlide].title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-lg md:text-xl text-bone/60 font-light leading-relaxed max-w-2xl mx-auto mb-12 tracking-wide">
              {slides[currentSlide].subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/servicios">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-10 py-5 bg-bone text-deep-black overflow-hidden rounded-sm w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold">
                    Nuestros Servicios <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gold-dark translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </motion.button>
              </Link>
              
              <Link to="/equipo">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  className="px-10 py-5 border border-bone/20 text-bone text-xs uppercase tracking-[0.2em] font-bold hover:bg-bone/5 transition-colors rounded-sm w-full sm:w-auto"
                >
                  Conocer al Equipo
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all duration-500 rounded-full ${
              currentSlide === index ? 'w-12 bg-gold-dark' : 'w-4 bg-bone/20 hover:bg-bone/40'
            }`}
          />
        ))}
      </div>

      {/* Side Decorative Text */}
      <div className="absolute right-0 bottom-24 hidden xl:block rotate-90 origin-right translate-x-12 opacity-5 text-bone">
        <span className="text-9xl font-serif font-bold whitespace-nowrap tracking-tighter">
          EST. 2024 • INTEGRIDAD • PODER
        </span>
      </div>
    </section>
  );
};

// --- Services Section ---
const Services = () => {
  return (
    <section id="servicios" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 tracking-tight">
              Áreas de <span className="italic">Especialización</span>
            </h2>
            <p className="text-deep-black/50 text-lg font-light leading-relaxed">
              Ofrecemos una gama de servicios legales diseñados para clientes que exigen el más alto nivel de competencia y discreción.
            </p>
          </div>
          <div className="hidden md:block h-px flex-grow bg-gold-light/30 mx-12 mb-4"></div>
          <div className="text-right">
            <span className="text-gold-dark font-serif italic text-2xl">01 — 04</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold-light/20 border border-gold-light/20">
          {servicesData.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white p-12 md:p-16 overflow-hidden transition-all duration-700"
            >
              <div className="relative z-10">
                <div className="mb-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-serif mb-6 group-hover:text-gold-dark transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-deep-black/60 font-light leading-relaxed mb-8">
                  {service.description}
                </p>
                <Link to="/servicios" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-deep-black hover:text-gold-dark transition-colors">
                  Ver Detalles <ChevronRight size={14} />
                </Link>
              </div>
              
              {/* Hover Image Reveal */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Team Section (Bento Grid) ---
const Team = () => {
  return (
    <section id="equipo" className="py-32 bg-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <span className="text-gold-dark text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">
            Capital Humano
          </span>
          <h2 className="text-5xl md:text-7xl font-serif tracking-tight">
            El <span className="italic">Equipo</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          {/* Main Profile */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-sm"
          >
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
              alt="Edwin Camacaro" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-12">
              <h3 className="text-3xl md:text-5xl font-serif text-bone mb-2">Juridico Camacaro</h3>
              <p className="text-gold-light uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-4 md:group-hover:mb-6 transition-all">Socio Fundador & Asociados</p>
              <p className="text-bone/70 max-w-lg text-sm md:text-base font-light leading-relaxed line-clamp-3 md:line-clamp-none">
                Líder visionario con más de dos décadas de experiencia en litigios de alto perfil. Su enfoque combina la agresividad procesal con una sofisticación técnica inigualable.
              </p>
            </div>
          </motion.div>

          {/* Multidisciplinary Info */}
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-1 bg-deep-black p-10 flex flex-col justify-center rounded-sm"
          >
            <Users className="text-gold-dark mb-6" size={40} />
            <h4 className="text-2xl font-serif text-bone mb-4">Grupo Multidisciplinario</h4>
            <p className="text-bone/50 text-sm font-light leading-relaxed">
              No somos solo abogados. Somos investigadores, consultores y estrategas trabajando en perfecta sincronía.
            </p>
          </motion.div>

          {/* Stats/Values */}
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-1 bg-gold-dark p-10 flex flex-col justify-center rounded-sm"
          >
            <div className="text-5xl font-serif text-deep-black mb-2">98%</div>
            <p className="text-deep-black/80 text-xs uppercase tracking-widest font-bold mb-6">Casos de Éxito</p>
            <p className="text-deep-black/70 text-sm font-light italic">
              "La excelencia no es un acto, sino un hábito que define cada uno de nuestros movimientos."
            </p>
          </motion.div>

          {/* Secondary Team Members Grid */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="md:col-span-12 md:row-span-1 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative group overflow-hidden h-full rounded-sm">
                <img 
                  src={`https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&sig=${i}`} 
                  alt="Team Member" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-deep-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="text-bone">
                    <p className="text-xs font-bold uppercase tracking-widest">Asociado Senior</p>
                    <p className="font-serif italic">Consultor Jurídico</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/equipo">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-bold text-deep-black hover:text-gold-dark transition-colors"
            >
              Ver Equipo Completo <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const phone = "584143330663";
    const text = `Hola, mi nombre es ${formData.nombre}. Mi correo es ${formData.email}. Mensaje: ${formData.mensaje}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <footer id="contacto" className="bg-deep-black pt-24 pb-12 text-bone overflow-hidden relative">
      {/* Decorative Background Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.02] pointer-events-none select-none">
        <span className="text-[20vw] font-serif font-bold whitespace-nowrap">JURIDICO</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif mb-12 tracking-tighter">
              Inicie su <br /> <span className="italic text-gold-dark">Estrategia.</span>
            </h2>
            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-bone/20 flex items-center justify-center group-hover:border-gold-dark transition-colors">
                  <Mail size={20} className="group-hover:text-gold-dark transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-bone/40 font-bold">Email</p>
                  <p className="text-lg font-light">contacto@juridicocamacaro.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-bone/20 flex items-center justify-center group-hover:border-gold-dark transition-colors">
                  <Phone size={20} className="group-hover:text-gold-dark transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-bone/40 font-bold">Teléfono</p>
                  <p className="text-lg font-light">+58 414-3330663</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-12 rounded-sm border border-white/10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-bone/60">Nombre</label>
                  <input 
                    type="text" 
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    className="w-full bg-transparent border-b border-bone/20 py-3 focus:border-gold-dark outline-none transition-colors font-light" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-bone/60">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-b border-bone/20 py-3 focus:border-gold-dark outline-none transition-colors font-light" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-bone/60">Mensaje</label>
                <textarea 
                  rows={4} 
                  required
                  value={formData.mensaje}
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  className="w-full bg-transparent border-b border-bone/20 py-3 focus:border-gold-dark outline-none transition-colors font-light resize-none"
                ></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-gold-dark text-deep-black uppercase tracking-[0.3em] font-bold hover:bg-gold-light transition-all duration-500">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-bone/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <img src="https://i.postimg.cc/BnMwBXLw/logoweb.png" alt="Logo" className="h-8 opacity-50" />
            <p className="text-[10px] text-bone/30 tracking-widest uppercase">
              © 2026 Juridico Camacaro & Asociados. Diseñada y Desarrollada por <a href="https://instagram.com/legaint.ve" target="_blank" rel="noopener noreferrer" className="text-gold-light/60 hover:text-gold-dark transition-colors font-bold">Legaint Corporation</a>
            </p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-bone/40 hover:text-gold-dark transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-bone/40 hover:text-gold-dark transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Floating WhatsApp Button ---
const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/584143330663"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20ba5a] transition-colors"
    >
      <MessageCircle size={32} fill="currentColor" />
      <span className="absolute -top-2 -right-2 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white/20"></span>
      </span>
    </motion.a>
  );
};

// --- Contact Modal ---
const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const phone = "584143330663";
    const text = `Hola, mi nombre es ${formData.nombre}. Mi correo es ${formData.email}. Mensaje: ${formData.mensaje}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-deep-black/80 backdrop-blur-sm"
          ></motion.div>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-xl bg-bone p-8 md:p-12 rounded-sm shadow-2xl overflow-hidden"
          >
            {/* Decorative Background Text */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none select-none">
              <span className="text-9xl font-serif font-bold whitespace-nowrap">CONSULTA</span>
            </div>

            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-deep-black/40 hover:text-deep-black transition-colors"
            >
              <X size={24} />
            </button>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif mb-2 tracking-tight">Agendar <span className="italic">Consulta</span></h2>
              <p className="text-deep-black/50 text-sm font-light mb-8">Complete el formulario para iniciar su defensa estratégica.</p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-deep-black/40">Nombre Completo</label>
                  <input 
                    type="text" 
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    className="w-full bg-transparent border-b border-deep-black/10 py-3 focus:border-gold-dark outline-none transition-colors font-light text-deep-black" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-deep-black/40">Email de Contacto</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-b border-deep-black/10 py-3 focus:border-gold-dark outline-none transition-colors font-light text-deep-black" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-deep-black/40">Asunto / Mensaje</label>
                  <textarea 
                    rows={3} 
                    required
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                    className="w-full bg-transparent border-b border-deep-black/10 py-3 focus:border-gold-dark outline-none transition-colors font-light text-deep-black resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-deep-black text-bone uppercase tracking-[0.3em] font-bold hover:bg-gold-dark transition-all duration-500">
                  Iniciar Consulta vía WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export { Navbar, Hero, Services, Team, Footer, FloatingWhatsApp, ContactModal, MapPin, Clock };
