import React, { useState, useEffect } from "react";
import Searchbar from "components/Searchbar/Searchbar";
import { movieSearch } from "services/Api";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Loader } from "components/Loader/Loader";
import { Container } from "App.styled";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from "react-router";



export function Movies() {
  
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [status, setStatus] = useState('idle');
 

  const notify = () => toast("Sorry, there is no images with this name!");

  useEffect(() => {
  
    if (!search) return;

    setStatus('pending');

    movieSearch(search, page).then(
    response => {
      if (response.total_results === 0) {
        notify();
        setMovies([]);
      }
      setMovies(prevState => ([...prevState, ...response.results]));
      setStatus('resolved');
      
    }
  ).catch(error => {
    setError(error);
    setStatus('rejected')
    
  });

  },[search, page])



  const handleSubmit = text => {
    setPage(1);
    setSearch(text);
    setMovies([]);
  };



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