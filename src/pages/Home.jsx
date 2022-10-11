import { useState, useEffect } from "react";
import { getTrendingMovies } from "services/Api";
import { MoviesList } from "components/MoviesList/MovieList";
import { Container, MainTitle } from "App.styled";



export function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(data => {
            if (data.lenght === 0) {
                return
            }
            setMovies(data);
        }).catch(error => console.log(error))
    }, []);
    

            
        
    
    
    return (
        <Container>
            <MainTitle>Trending Movies Today</MainTitle>
            <MoviesList movies={movies}/>

            
     </Container>
 )
}

