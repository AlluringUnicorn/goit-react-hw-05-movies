import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = '62c1f197bf5eba282c3324513a13b5fa';

const Cast = () => {
  const [castArr, setCastArr] = useState(null);

  const movieId = useParams().movieId;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
      .then(response => response.json())
      .then(response => {
        setCastArr(response.cast);
        // console.log(response.cast);
      });
  }, [movieId]);

  if (castArr) {
    return (
      <>
        {castArr.map(cast => (
          <li key={cast.cast_id} >
            <img src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} alt="actor" width="300px" />
            <p>{cast.name}</p>
            <p>Character {cast.character} </p>
          </li>
        ))}
      </>
    );
  }
};

export default Cast;

