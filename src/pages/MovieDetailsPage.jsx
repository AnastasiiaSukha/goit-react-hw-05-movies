import { useState, useEffect} from "react";
import { getMovieDetails } from "services/Api";
import { useParams } from "react-router";
import MovieDetails from "components/MoviesDetails/MovieDetails";

export function MovieDetailsPage() {
    const { id } = useParams();

    const [movie, setMovie] = useState(null);

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


    return (

        <div>
            {movie && <MovieDetails movie={movie}/> }
                
        </div>
    )
        
}