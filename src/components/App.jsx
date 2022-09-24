import { Routes, Route} from "react-router-dom";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import { MovieDetailsPage } from "pages/MovieDetailsPage";
import { Header } from "./Header/Header";




export const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Header/> }/>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetailsPage/>}/>
      </Routes>
    
    </div>
  );
};
