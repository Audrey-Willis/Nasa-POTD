import styled from "styled-components";

export const PotdDataStyle = styled.div`
  .datePicker {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 3%;
  }
  @media (max-width: 800px) {
    .datePicker {
      font-size: 1rem;
    }
  }
`;
