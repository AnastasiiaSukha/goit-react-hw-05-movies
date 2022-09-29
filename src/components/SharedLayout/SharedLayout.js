import { Outlet } from "react-router-dom"
import { Header, Logo, Link } from "./SharedLayout.styled"
import { RiMovie2Line } from 'react-icons/ri';



export const SharedLayout = () => {

  return (<>
    <Header>
      <Logo>
          <RiMovie2Line/> MovieTime
      </Logo>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </Header>
    <Outlet />
  </>
  );
      
};
