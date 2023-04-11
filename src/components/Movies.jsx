import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesList from './MoviesList';
import MoviesSearch from './MoviesSearch';

const Movies = () => {
  const [movies, setMovies] = useState(null);

  const location = useLocation();

  return (
    <>
      <MoviesSearch setMovies={setMovies} />
      {movies && <MoviesList movies={movies} location={location} />}
    </>
  );
};

export default Movies;
