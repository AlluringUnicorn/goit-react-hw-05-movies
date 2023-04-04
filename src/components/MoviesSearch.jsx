import { useState } from 'react';

const API_KEY = '62c1f197bf5eba282c3324513a13b5fa';

const MoviesSearch = ({ setMovies, setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
      setQuery(event.target.value);
      setSearchParams({query: event.target.value});
  };

  const onSubmit = event => {
    event.preventDefault();

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    )
      .then(response => response.json())
      .then(movies => {
        console.log(movies.results);
        setMovies(movies.results);
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={handleChange} value={query} />
      <button type="submit">Search</button>
    </form>
  );
};

export default MoviesSearch;
