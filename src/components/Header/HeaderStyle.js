import styled from "styled-components";

export const HeaderStyle = styled.div`
  margin-bottom: 5%;
  text-align: center;
  h1 {
    text-decoration: none;
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 1.5rem;
    }
    blockquote {
      font-size: 0.8rem;
    }
  }
`;
