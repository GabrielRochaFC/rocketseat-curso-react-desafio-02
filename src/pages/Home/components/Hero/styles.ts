import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3.5rem;
  margin: 5.75rem 0px;

  img {
    width: 30rem;
  }
`;

export const HeroTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;

  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme["base-title"]};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
  }

  ul {
    list-style-type: none;
    display: grid;
    row-gap: 1.25rem;
    column-gap: 2.5rem;
    grid-template-columns: repeat(2, auto);
  }
`;

interface listProps {
  backgroundSpanColor: "purple" | "yellow-dark" | "yellow" | "base-text";
}

export const HeroList = styled.li<listProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    color: ${(props) => props.theme["background"]};
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme[props.backgroundSpanColor]};
    border-radius: 50%;
  }
`;
