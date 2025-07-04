
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/contexts/AuthContext';
import Index from '@/pages/Index';
import Medicamentos from '@/pages/Medicamentos';
import Mapa from '@/pages/Mapa';
import Unidades from '@/pages/Unidades';
import Comunidade from '@/pages/Comunidade';
import Blog from '@/pages/Blog';
import Contatos from '@/pages/Contatos';
import Perfil from '@/pages/Perfil';
import NotFound from '@/pages/NotFound';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/medicamentos" element={<Medicamentos />} />
            <Route path="/mapa" element={<Mapa />} />
            <Route path="/unidades" element={<Unidades />} />
            <Route path="/comunidade" element={<Comunidade />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contatos" element={<Contatos />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
