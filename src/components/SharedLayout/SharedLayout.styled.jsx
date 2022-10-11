import styled from '@emotion/styled'
import { NavLink } from "react-router-dom";

export const Header = styled.header`
margin-bottom: 15px;
  z-index: 1100;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 15px 0;
  border-bottom: 1px solid #faf0be;
  display:flex;
  background: -webkit-linear-gradient(to right, #1e130c, #9a8478);
  background: linear-gradient(to right, #1e130c, #9a8478);
  

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
  color:#faf0be ;
`;

export const StyledLink = styled(NavLink)`
margin-left: 20px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #faf0be;
  font-weight: 500;

  &.active {
    color: black;
    background-color: #fae7b5 ;
  }
`;