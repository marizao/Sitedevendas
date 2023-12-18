import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contatos from './pages/Contatos';
import Listagem from './pages/Listagem';
import NovoRegistro from './pages/NovoRegistro';
import EditarRegistro from './pages/EditarRegistro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/listagem" element={<Listagem />} />
        <Route path="/novo" element={<NovoRegistro />} />
        <Route path="/editar/:id" element={<EditarRegistro />} />
      </Routes>
    </Router>
  );
}

export default App;
