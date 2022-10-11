import { getCast } from "services/Api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CastContainer, CastList, CastItem, CastPhoto } from "./Cast.styled";
import noImage from 'img/images.png'

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
        <CastContainer>
            <CastList>
            {cast.map(({id, name, profile_path, character }) => (
                       <CastItem key={id}>
                    <CastPhoto src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : noImage} alt={name}/>
                    <h2>{name}</h2>
                    <h3>As {character }</h3>
                    </CastItem>
            
           
            ))}
             </CastList>
        </CastContainer>
    )
}