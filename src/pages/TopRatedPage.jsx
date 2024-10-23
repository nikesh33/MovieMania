import React, { useState, useEffect } from 'react';
import { getTopRatedMovies } from '../api/tmdb';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const response = await getTopRatedMovies(page);
      setMovies(response.data.results);
      setLoading(false);
    };
    fetchMovies();
  }, [page]);

  return (
    <div>
      <h1>Top Rated Movies</h1>
      {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default TopRatedPage;
