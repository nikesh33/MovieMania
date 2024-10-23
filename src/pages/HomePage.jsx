import React, { useState, useEffect } from 'react';
import { getPopularMovies } from '../api/tmdb';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const response = await getPopularMovies(page);
      setMovies(response.data.results);
      setLoading(false);
    };
    fetchMovies();
  }, [page]);

  return (
    <div>
      <h1>Popular Movies</h1>
      {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default HomePage;
