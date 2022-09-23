import { useState, useEffect, useParams } from "react";
import { movieDetails } from "services/Api";

export function MovieDetails() {
    const { id } = useParams();
    console.log(id);


    const [details, getDetails] = useState([]);

    useEffect(() => {
    
        movieDetails(id).then(getDetails);


    }, [id]);
    return (
        <div>`${id} ${details}` </div>
    )
        
}