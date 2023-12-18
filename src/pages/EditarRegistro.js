import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditarRegistro() {
  const { id } = useParams();
  const [movie, setMovie] = useState({
    title: '',
    director: '',
    // Outros campos
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    try {
      const response = await fetch(`http://localhost:3000/movies/${id}`);
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error('Erro ao buscar filme:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({
      ...movie,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:3000/movies/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
      });
      navigate('/listagem'); // Navega para a página de listagem após editar o filme
    } catch (error) {
      console.error('Erro ao editar filme:', error);
    }
  };

  return (
    <div>
      <h1>Editar Filme</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={movie.title}
          onChange={handleChange}
          placeholder="Título"
          required
        />
        <input
          type="text"
          name="director"
          value={movie.director}
          onChange={handleChange}
          placeholder="Diretor"
          required
        />
        {/* Outros campos */}
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
}

export default EditarRegistro;
