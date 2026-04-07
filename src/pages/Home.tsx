import { Navbar, Hero, Services, Team, Footer, FloatingWhatsApp, ContactModal } from '../components/Landing';
import { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <Hero />
      <Services />
      <Team />
      <Footer />
      <FloatingWhatsApp />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
