import { Routes, Route} from "react-router-dom";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import { MovieDetails } from "pages/MovieDetails";
import { Header, Logo, Link} from "App.styled";



export const App = () => {
  return (
    <div>
          <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoMerch Store
        </Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies:/id" element={<MovieDetails/>}/>
      </Routes>
    
    </div>
  );
};
