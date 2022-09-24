import { HeaderStyle, Logo, Link  } from "./Header.styled"



export const Header = () => {
       <HeaderStyle>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoMerch Store
        </Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </HeaderStyle>
   } 
