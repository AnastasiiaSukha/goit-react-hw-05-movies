import { Link } from "react-router-dom"

export const MoviesList = ({ movies }) => {

    return (
        <div>
            {movies.map(({ id, poster_path, title, name }) => (
                       <ul key={id}>
                    <Link to={`/movies/${id}`}>
                        <img src={ `https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
                        <h1>{title ? title : name}</h1>
                </Link>
            
            </ul>
            ))}
 
            </div>
    )


}