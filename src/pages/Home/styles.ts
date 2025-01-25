import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  padding: 2rem 0;

  h2 {
    font-size: 2rem;
    margin-bottom: 3.5rem;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  row-gap: 2.5rem;
  column-gap: 2rem;
`;
