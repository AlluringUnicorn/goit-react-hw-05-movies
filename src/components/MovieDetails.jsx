import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';

const API_KEY = '62c1f197bf5eba282c3324513a13b5fa';

const MovieDetails = () => {
  const [movie, setMovie] = useState('');

  const movieId = useParams().movieId;

  const location = useLocation();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    )
      .then(response => response.json())
      .then(movie => {
        setMovie(movie);
        // console.log(movie);
        if (movie.success === false) {
          throw new Error('API Error, no info');
        }
      })
      .catch(error => {
        console.log(error);
        setMovie(null);
      });
  }, [movieId]);

  if (movie) {
    return (
      <>
        <button className={css.button}>
          <Link to={location.state} className={css.link}>
            Go back
          </Link>
        </button>
        <div className={css.container}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="movie-poster"
            className={css.img}
          />
          <div className={css.info}>
            <h1>{movie.title || movie.name}</h1>
            <p>User score {Math.round(movie.popularity)} %</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>
              {movie.genres.map(genre => (
                <span className={css.span} key={genre.id}>
                  {genre.name}
                </span>
              ))}
            </p>
          </div>
        </div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </>
    );
  }

  if (movie === null)
    return <div>Unfortunately we haven`t found any info about this movie</div>;
};

export default MovieDetails;
