import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = '62c1f197bf5eba282c3324513a13b5fa';

const Reviews = () => {
  const [reviews, setReviews] = useState('');

  const movieId = useParams().movieId;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    )
      .then(response => response.json())
        .then(reviews => {
            if (reviews.results.length < 1) {
            throw new Error('No reviews');
          }
        setReviews(reviews.results);
            // console.log(reviews.results);
            
      }).catch(error => {
          setReviews(null);
          console.log(error)
      })
  }, [movieId]);

  if (reviews) {
    return (
      <ul>
        {reviews.map(review => (
          <li key={review.id} >
            Author: {review.author} <p>{review.content}</p>
          </li>
        ))}
      </ul>
    );
    }
  if(reviews === null) return <div>We don`t have any reviews for this movie</div>
};

export default Reviews;
