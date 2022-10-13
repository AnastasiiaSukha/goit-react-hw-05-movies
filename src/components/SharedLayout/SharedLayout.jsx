import { Outlet, Link } from "react-router-dom"
import { Header, Logo, StyledLink } from "./SharedLayout.styled"
import { RiMovie2Line } from 'react-icons/ri';
import { Suspense } from "react";
import { Loader } from "components/Loader/Loader";



export const SharedLayout = () => {

  return (<>
    <Header>
      <Link to="/" style={{ textDecoration: 'none' }}>
      <Logo>
          <RiMovie2Line/> MovieTime
      </Logo>
      </Link>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
    </Header>
    <Suspense fallback={<Loader/>}>
     <Outlet />
    </Suspense>
   
  </>
  );
      
};
