import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const MovieContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 1400px;
  margin: 0px auto;
  padding-bottom: 50px;
`;

export const MovieInfo = styled.div`
  padding: 20px;
  margin-left: 100px;
  margin-right: 150px;
  padding-right: 50px;
  height: 410px;
  border-radius: 10px;
`;

export const Image = styled.img`
  margin-left: 50px;
  border-radius: 10px;
  box-shadow: rgb(247,233,142) 5px 15px 15px -2px;
`;

export const AdditionalContainer = styled.div`
  margin-left: 50px;
  margin-bottom: 50px;
  padding: 20px;
  margin-right: 100px;
  height: 80px;
  border-radius: 10px;
`;

export const StyledLink = styled(NavLink)`
  margin-left: 20px;
  padding: 6px 12px;
  text-decoration: none;
  color: #faf0be;
  font-weight: 500;
  font-size:25px;

  &.active {
    border-radius: 4px;
    color: black;
    background-color: #fae7b5 ;
  }
  &:hover:not(.active) {
    color: rgb(229,183,59);
  }
`;
export const MovieTitle = styled.h1`
    color: #fceabb;
    font-family: 'Playfair Display', serif;
    position: relative;
	text-transform: uppercase;	
	font-size: 50px;
  padding: 15px;
	font-weight: 500;
    text-shadow: 2px 2px #a28557;`;
 
export const SecondTitle = styled.h2`
 color: #faf0be;
    font-family: 'Playfair Display', serif;
    position: relative;
	text-transform: uppercase;	
	font-size: 30px;
	font-weight: 400;`

export const Paragraph = styled.p`
    color: #f5deb3;
    font-family: 'Playfair Display', serif;
    position: relative;
	font-size: 20px;
	font-weight: 400;`

export const GenresList = styled.ul`
    color: #f5deb3;
    font-size: 20px;
    list-style: none;
    
    `

export const BackButton = styled.button`
border: solid 2px #f5deb3;
border-radius: 50%;
padding: 15px;
margin-left: 40px;
margin-top: 10px;
margin-bottom: 15px;
color: #f5deb3;
background-image: linear-gradient(to right, #1e130c, #9a8478);
  &:hover{
    border: solid 2px #5F4939;
    color: #5F4939;
    background: #f5deb3; 
  }
`