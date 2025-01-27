import styled from "styled-components";

export const TotalPriceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: repeat(3, auto);
  gap: 0.75rem;

  & > :nth-child(5),
  & > :nth-child(6) {
    font-weight: bold;
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;
