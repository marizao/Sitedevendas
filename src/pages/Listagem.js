import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Listagem() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('http://localhost:3000/movies'); // Use a URL correta do seu JSON Server
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    }
  };

  const deleteMovie = async (id) => {
    try {
      await fetch(`http://localhost:3000/movies/${id}`, {
        method: 'DELETE',
      });
      // Atualizar a lista de filmes após a exclusão
      fetchMovies();
    } catch (error) {
      console.error('Erro ao excluir filme:', error);
    }
  };

  return (
    <div>
      <h1>Lista de Filmes</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title}{' '}
            <Link to={`/editar/${movie.id}`}>Editar</Link>{' '}
            <button onClick={() => deleteMovie(movie.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      <Link to="/novo">Adicionar Novo Filme</Link>
    </div>
  );
}

export default Listagem;
