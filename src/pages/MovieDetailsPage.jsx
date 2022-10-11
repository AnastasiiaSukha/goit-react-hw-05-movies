import { useState, useEffect} from "react";
import { getMovieDetails } from "services/Api";
import { useParams } from "react-router";
import MovieDetails from "components/MoviesDetails/MovieDetails";
import {useLocation, useNavigate } from "react-router-dom";

export function MovieDetailsPage() {
  
   const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

    useEffect(() => {
    getMovieDetails(id)
      .then(details => {
        if (details.length === 0) {
          alert('We are sorry! There is no additional info');
          setMovie(null);
          return;
        }

        setMovie(details);
      })
      .catch(error => {
          console.log(error);
      });
    }, [id]);
  
  
  const backLinkHref = location.state?.from ?? '/movies';

  const GoBack = () => {
    navigate(backLinkHref);
  };


  return (<>
          <button onClick={GoBack}> Go back</button>

      <div>
            {movie && <MovieDetails movie={movie}/> }
                
        </div>
  </>

    )
        
}