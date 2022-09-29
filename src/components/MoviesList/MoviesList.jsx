
import {MovieItem, MovieList, Poster,Link,} from "./MoviesList.styled";

export const MoviesList = ({ movies }) => {

    return (
            <MovieList >
            {movies.map(({ id, poster_path, title }) => (
        
            <MovieItem key={id}>
                    <Link to={`/movies/${id}`}>
                        <Poster src={ `https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
                </Link>
            </MovieItem>
            ))}
            </MovieList>
 
    )


}