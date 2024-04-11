import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLink className="navlink" to="/">Home</NavLink>
      <NavLink className="navlink" to="/login">Login</NavLink>
      <NavLink className="navlink" to="/register">Signup</NavLink>
    </NavbarContainer>
  )
}

export default Navbar;

const NavbarContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
    padding: 8px 8px;
    min-height: 40px;

    .navlink {
        text-decoration: none;
        color: white;
    }

    .navlink:active,:focus {
        text-decoration: underline;
    }

    .navlink:hover{
        color: red;
        cursor: pointer;
    }
`;
