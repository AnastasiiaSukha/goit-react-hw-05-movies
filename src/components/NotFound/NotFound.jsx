import React from "react";
import { NotFoundContainer, NotFoundTitle } from "./NotFound.styled"; 


export const NotFound = () => {
    return (
        <NotFoundContainer>
            <NotFoundTitle>404</NotFoundTitle>
            <h2>Ooops Page Not Found!</h2>
        </NotFoundContainer>
        )
}