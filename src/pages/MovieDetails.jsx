import { useState, useEffect} from "react";
import { getMovieDetails } from "services/Api";
import { useParams } from "react-router";

export function MovieDetails() {
    const { id } = useParams();


    const [movie, setMovie] = useState([]);

    useEffect(() => {
        if (id) {
            return;

        
        }

        getMovieDetails(id).then(response => {
            setMovie(response);
            console.log(response);
        })
        // (async () => {
        //     try {
        //         getMovieDetails(id).then(data => setMovie(data));
        //         console.log(movie);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // })();

    }, [id]);

    


    return (

        <div>
            {movie && (
                <>
                 <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
            {/* <h1>{`${movie.original_title} (${movie.release_date.slice(0, 4)})`}{' '}</h1> */}
            <p>`Vote Average : ${movie.vote_average}`</p>
            <h2>Overview</h2>
            <p>`${movie.overview}`</p>
            <h2>Genres</h2>
            {/* {movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))} */}
            <h2>Additional Information</h2>
            <ul>
                <li>Cast</li>
                <li>Reviews</li>
                    </ul>
                </>)}
                
        </div>
    )
        
}