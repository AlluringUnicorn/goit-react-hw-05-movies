import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import MoviesList from './MoviesList';
import MoviesSearch from './MoviesSearch';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  // console.log(searchParams);

  const location = useLocation();

  return (
    <>
      <MoviesSearch setMovies={setMovies} setSearchParams={setSearchParams} />
      {movies && <MoviesList movies={movies} location={location} />}
    </>
  );
};

export default Movies;
