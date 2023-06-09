import { Routes, Route } from 'react-router-dom';
import { lazy } from "react";
import SharedLayout from './SharedLayout';

const Home = lazy(() => import("./Home"));
const MovieDetails = lazy(() => import("./MovieDetails"));
const Movies = lazy(() => import("./Movies"));
const Reviews = lazy(() => import("./Reviews"));
const Cast = lazy(() => import("./Cast"));



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
