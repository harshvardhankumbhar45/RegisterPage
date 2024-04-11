import styled from "styled-components";
const Home = () => {
  return (
    <HomeContainer>
      <div>
        <h1>Home Page</h1>
      </div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates sapiente iure, inventore tempora quasi accusamus vitae modi nulla esse rerum doloribus, unde velit dolor placeat, ad delectus quam at ipsum illo a deleniti natus.</p>
    </HomeContainer>
  )
}

export default Home;

const HomeContainer=styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  max-width: 80%;
  min-height: 50vh;
  margin: 0 auto;
  margin-top: 25vh;

  h1{
      font-weight: 500;
      font-size: 40px;
    }
`;
