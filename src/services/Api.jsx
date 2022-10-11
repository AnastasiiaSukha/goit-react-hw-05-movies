import axios from 'axios';

const API_KEY = 'cdc2a82cb075bb326325ebe85535c708';




export const getTrendingMovies = async () => {
  const response = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY }`
  );
  return response.data.results;
};

export const movieSearch = async (search, page) => {
  const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&&query=${search}&page=${page}&include_adult=false
`);
  return response.data;
}

export const getMovieDetails = async movie_id => {
  const response = await axios.get(`
    https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`);

  return response.data;
};

export const getCast = async movie_id => {
  const response = await axios.get(`
    https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`);

  return response.data;
};

export const getReviews = async movie_id => {
  const response = await axios.get(`
    https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);

  return response.data;
};
