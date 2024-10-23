import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../api/tmdb";

const SingleMovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await getMovieDetails(id);
      setMovie(response.data);
      setCast(response.data.credits.cast);
      setLoading(false);
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="single-movie">
      <div className="movie-details-container">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="movie-poster"
        />
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p>{movie.overview}</p>
        </div>
      </div>

      {/* Cast List */}
      <h2>Cast</h2>
      <div className="cast-list">
        {cast.length > 0 ? (
          cast.slice(0, 8).map((member) => (
            <div key={member.cast_id} className="cast-member">
              <img
                src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
                alt={member.name}
                className="cast-photo"
              />
              <p>{member.name}</p>
            </div>
          ))
        ) : (
          <p>No cast information available.</p>
        )}
      </div>
    </div>
  );
};

export default SingleMovieDetailPage;
