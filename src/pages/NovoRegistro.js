import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NovoRegistro() {
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    // Adicione mais campos conforme necessário
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:3000/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      navigate('/listagem'); // Redirecionar para a lista após adicionar o filme
    } catch (error) {
      console.error('Erro ao adicionar filme:', error);
    }
  };

  return (
    <div>
      <h1>Adicionar Novo Filme</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Título"
          required
        />
        <input
          type="text"
          name="director"
          value={formData.director}
          onChange={handleChange}
          placeholder="Diretor"
          required
        />
        {/* Adicione mais campos conforme necessário */}
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default NovoRegistro;

