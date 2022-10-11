import { Outlet } from "react-router-dom";
import {GenresList, Paragraph, SecondTitle, MovieTitle, MovieInfo, StyledLink, Image, MovieContainer, AdditionalContainer } from "./MovieDetails.styled";


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
    <MovieContainer>
        <Image src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
       < MovieInfo>
                    <MovieTitle>{`${title} (${release_date.slice(0, 4)})`}{' '}</MovieTitle>
                    <Paragraph>Vote Average : {vote_average}</Paragraph>
            <SecondTitle>Overview</SecondTitle>
          <Paragraph>{overview}</Paragraph>
          <GenresList>
            <SecondTitle>Genres</SecondTitle>
            {genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
            ))}
            </GenresList>
            </MovieInfo>
      </MovieContainer>
      <AdditionalContainer>
            <SecondTitle>Additional Information</SecondTitle>
            <StyledLink to="cast">Cast</StyledLink>

            <StyledLink to="reviews">Reviews</StyledLink>
      </AdditionalContainer>
      
        <Outlet />
        </>
      
    )
}

export default MovieDetails;