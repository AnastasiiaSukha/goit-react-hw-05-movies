import React, { useState, useEffect } from "react";
import Searchbar from "components/Searchbar/Searchbar";
import { movieSearch } from "services/Api";
import { MoviesList } from "components/MoviesList/MovieList";
import { Loader } from "components/Loader/Loader";
import { Container } from "App.styled";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from "react-router";
import { useSearchParams } from "react-router-dom";



export function Movies() {
  
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
 
  const query = searchParams.get('query') ?? '';

  const notify = () => toast("Sorry, there is no images with this name!");

  useEffect(() => {
  
    if (!query) return;

    setStatus('pending');

    movieSearch(query).then(
      response => {
        if (response.total_results === 0) {
          notify();
          setMovies([]);
        }
        setMovies(response.results);
        setStatus('resolved');
      
      }
    ).catch(error => {
      setError(error);
      setStatus('rejected')
    
    });

  }, [query]);



  function handleSubmit(value) {
    setMovies([]);
    setSearchParams(value !== '' ? { query: value } : {});
  }



    if (status === 'idle') {
      return <Searchbar onSubmit={handleSubmit} />
    }
    
    if (status === 'pending') {
      return <Loader/>
    }
 
    if (status === 'rejected') {
      return console.log(error)
    }

    if (status === 'resolved') {
      return (<Container>
        <Searchbar onSubmit={handleSubmit}/>
        <MoviesList movies={movies}/>
        <ToastContainer
          position="top-center" />
        <Outlet/>
      </Container>
      
        
      );
    }


};