import { Routes, Route} from "react-router-dom";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import { MovieDetailsPage } from "pages/MovieDetailsPage";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";



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
      </Routes>
    </div>
  );
};
