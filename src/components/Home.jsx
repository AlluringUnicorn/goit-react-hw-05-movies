import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState(null);

  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/all/day?api_key=62c1f197bf5eba282c3324513a13b5fa'
    )
      .then(response => response.json())
      .then(movies => {
        setMovies(movies.results);
      });
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
      <ul>
        {movies?.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location} className={css.link} >{movie.title || movie.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
