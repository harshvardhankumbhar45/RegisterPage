import { NavLink } from "react-router-dom";
import {styled} from "styled-components"
const PageNotFound = () => {
  return (
    <Container>
      <h1>Something's went wrong</h1>
      <p>We can't seem to find the page you are looking for.</p>
      <NavLink className="navlink" to="/">Home</NavLink>
    </Container>
  )
}

export default PageNotFound;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    max-width: 80%;
    margin: 0 auto;
    padding: 40px 0;
    min-height: 50vh;
    margin-top: 95px;
    h1{
        font-weight: 500;
        font-size: 40px;
    }
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
