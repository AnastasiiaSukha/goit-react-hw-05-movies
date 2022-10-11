
import { useLocation } from "react-router";
import {MovieItem, MovieList, Poster,Link,} from "./MoviesList.styled";

export const MoviesList = ({ movies }) => {
    const location = useLocation();

    return (
            <MovieList >
            {movies.map(({ id, poster_path, title }) => (
                <MovieItem key={id}>
                    <Link to={`/movies/${id}`} state={{ from: location }}>
                        <Poster src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                    </Link>
                </MovieItem>
            ))}
            </MovieList>
 
    )


}