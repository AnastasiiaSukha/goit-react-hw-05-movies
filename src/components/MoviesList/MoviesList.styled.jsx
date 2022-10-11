import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";



export const MovieItem = styled.li`
  
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`


export const MovieList = styled.ul`
  display: grid;
  max-width: calc(100vw - 90px);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  
`
export const Poster = styled.img`
  width: 100%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 4px;
`


export const Link = styled(NavLink)`
  border-radius: 4px;
  &hover{
    
  }
  
`;