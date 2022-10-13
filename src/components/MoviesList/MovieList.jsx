
import { useLocation } from "react-router";
import { MovieItem, MovieList, Poster, Link, MovieTitle } from "./MoviesList.styled";
import noPoster from "img/noPoster.png";
import { PropTypes } from "prop-types";


export const MoviesList = ({ movies }) => {
    const location = useLocation();

    return (
            <MovieList >
            {movies.map(({ id, poster_path, title }) => (
                <MovieItem key={id}>
                    <Link to={`/movies/${id}`} state={{ from: location }}>
                        <Poster src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : noPoster} alt={title} />
                        <MovieTitle>{title ? title : 'No title available'}</MovieTitle>
                    </Link>
                </MovieItem>
            ))}
            </MovieList>
 
    )


}

MoviesList.propTypes = {
movies: PropTypes.array,
}