import { useState, useEffect } from "react";
import { getTrendingMovies } from "services/Api";
import { MoviesList } from "components/MoviesList/MoviesList"
import { Container } from "App.styled";


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
            <h1>Trending Movies Today</h1>
            <MoviesList movies={movies}/>

            
     </Container>
 )
}