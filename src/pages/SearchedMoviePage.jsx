import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchMovies } from '../api/tmdb';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchedMoviePage = () => {
  const query = useQuery().get('query'); // Get search query from URL
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const response = await searchMovies(query, page);
      setMovies(response.data.results);
      setLoading(false);
    };
    fetchMovies();
  }, [query, page]);

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default SearchedMoviePage;
