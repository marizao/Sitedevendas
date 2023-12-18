import React, { useState, useEffect } from 'react';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Lógica para buscar filmes da API ao carregar a página
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('http://localhost:3000/movies'); // Substitua pela sua URL da API
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    }
  };

  return (
    <div>
      <h1>Lista de Filmes</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
