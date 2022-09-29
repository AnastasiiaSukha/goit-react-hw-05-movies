import { Link, Outlet } from "react-router-dom";

const MovieDetails = ({ movie }) => {

    const {
    overview = 'No description',
    poster_path,
    title = 'No title',
    vote_average = 'No votes yet',
    genres = 'In process...',
    release_date = 'Release date is missing',
  } = movie;
    

    return (
          <>
                 <img src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                    <h1>{`${title} (${release_date.slice(0, 4)})`}{' '}</h1>
                    <p>Vote Average : {vote_average}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            {genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
            <h2>Additional Information</h2>
            <ul>
          <li>
            <Link to="cast">Cast</Link>
                </li>
          <li>
            <Link to="reviews">Reviews</Link></li>
        </ul>
        <Outlet/>
                </>
    )
}

export default MovieDetails;