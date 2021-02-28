import styled from "styled-components";

export const HomeStyle = styled.div`
  color: antiquewhite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 10%;
  p {
    width: 58%;
    font-family: "Roboto", sans-serif;
  }
  mg {
    padding: 3%;
    background-color: black;
    border: 3px solid grey;
  }
  mg:hover {
    width: 90%;
  }
  button {
    font-size: 2rem;
    color: white;
    text-decoration: none;
  }
  button:hover {
    color: black;
    font-size: 2.3rem;
  }
  @media (max-width: 800px) {
    p {
      font-size: 0.9rem;
      width: 70%;
    }
    img {
      width: 60%;
    }
    img:hover {
      width: 70%;
    }
    .button {
      font-size: 1.5rem;
      color: white;
    }
    .button:hover {
      font-size: 1.8rem;
    }
    @media (max-width: 500px) {
      p {
        width: 90%;
        font-size: 0.8rem;
      }
      img {
        width: 80%;
      }
      .button {
        font-size: 1rem;
      }
      .button:hover {
        font-size: 1.3rem;
      }
    }
  }
`;
