import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const api = axios.create({
  baseURL: process.env.REACT_APP_MOVIE_API_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getPopularMovies = (page) =>
  api.get(`/movie/popular?page=${page}`);
export const getTopRatedMovies = (page) =>
  api.get(`/movie/top_rated?page=${page}`);
export const getUpcomingMovies = (page) =>
  api.get(`/movie/upcoming?page=${page}`);
// export const getMovieDetails = (id) => api.get(`/movie/${id}`);
export const getMovieDetails = (id) =>
  api.get(`/movie/${id}`, { params: { append_to_response: "credits" } });
export const searchMovies = (query, page) =>
  api.get(`/search/movie?query=${query}&page=${page}`);
export const getMovieCredits = (id) => api.get(`/movie/${id}/credits`);
