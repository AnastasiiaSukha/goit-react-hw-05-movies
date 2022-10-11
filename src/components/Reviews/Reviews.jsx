import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "services/Api";
import { Title, AuthorName, Review, ReviewsList } from "./Reviews.styled";

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
            {reviews.length===0 ? <Title>We don't have any reviews for this movie yet! </Title>:
                <div>
            <ReviewsList key={id}>
            {reviews.map(({id, author, content }) => (
                
                    <li>
                    <AuthorName>{author ? author : 'Author is Unknown'}</AuthorName>
                        <Review>{content ? content : 'No review'} </Review>
                        </li>
            
           
            ))}
                    </ReviewsList>
                 </div>}
        </div>
    )
}