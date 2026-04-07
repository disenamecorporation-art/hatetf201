/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';

export default function App() {
  return (
    <Router>
      <main className="relative overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/equipo" element={<TeamPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </main>
    </Router>
  );
}
