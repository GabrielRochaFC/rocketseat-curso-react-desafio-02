import styled from "styled-components";

export const CardComponent = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  justify-items: center;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 7rem 1.5rem 1.375rem 1.5rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;

  img {
    width: 7.5rem;
    height: 7.5rem;
    position: absolute;
    top: -20px;
  }

  h3 {
    font-size: 20px;
    color: ${(props) => props.theme["base-subtitle"]};
    padding-top: 1rem;
    padding-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-label"]};
    padding-bottom: 2.0625rem;
  }
`;

export const CardTags = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
  text-transform: uppercase;
  font-size: 0.625rem;
  font-weight: bold;

  span {
    background-color: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
  }
`;

export const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const Price = styled.div`
  font-size: 0.875rem;
  flex: 1;
  text-align: left;

  span {
    font-size: 1.5rem;
    font-weight: 800;
    font-family: "Baloo 2", cursive;
    color: ${(props) => props.theme["base-text"]};
  }
`;
