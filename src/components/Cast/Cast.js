import { getCast } from "services/Api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Cast = () => {


    const { id } = useParams();
    const [cast, setCast] = useState([]);

useEffect(() => {
    getCast(id).then(data => {
            if (data.lenght === 0) {
                return
            }
            setCast(data.cast);
        }).catch(error => console.log(error))
}, [id]);
    
    console.log(cast);
    
    
    return (
        <div>
            <h1> Cast </h1>
            <div>
            {cast.map(({id, name, profile_path, character }) => (
                       <ul key={id}>
                        <img src={profile_path && `https://image.tmdb.org/t/p/w500${profile_path}`} alt={name}/>
                    <h2>{name}</h2>
                    <h3>As {character }</h3>
            
            </ul>
            ))}
 
            </div>
        </div>
    )
}