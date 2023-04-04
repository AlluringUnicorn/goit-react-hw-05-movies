import { Link } from 'react-router-dom';
import css from './MoviesList.module.css';

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link className={css.link} to={`/movies/${movie.id}`} state={location}>
            {movie.title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
