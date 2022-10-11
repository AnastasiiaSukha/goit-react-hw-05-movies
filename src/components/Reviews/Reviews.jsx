import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "services/Api";

export const Reviews = () => {
  
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);

useEffect(() => {
    getReviews(id).then(data => {
            if (data.lenght === 0) {
                return
            }
            setReviews(data.results);
        }).catch(error => console.log(error))
}, [id]);
    
    
    return (
        <div>
            {reviews.length===0 ? "We don't have any reviews for this movie yet" : 
                <div>
            <h1> Reviews </h1>
            <ul key={id}>
            {reviews.map(({id, author, content }) => (
                
                    <li>
                    <h2>{author ? author : 'Author is Unknown'}</h2>
                        <p>{content ? content : 'No review'} </p>
                        </li>
            
           
            ))}
                    </ul>
                 </div>}
        </div>
    )
}