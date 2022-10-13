import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
import { NotFound } from "./NotFound/NotFound";

const Movies = lazy(() => import('../pages/Movies'));
const Home = lazy(() => import('../pages/Home'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));



export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout/> }>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetailsPage />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
