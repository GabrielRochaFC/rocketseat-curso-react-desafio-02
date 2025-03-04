import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem 0;

  img {
    height: 2.5rem;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  gap: 0.75rem;

  button {
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.5rem 0.5rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme["purple-light"]};
    color: ${(props) => props.theme["purple-dark"]};
    border: none;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.5rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    border: none;
    text-decoration: none;

    position: relative;

    span {
      position: absolute;
      width: 1.25rem;
      height: 1.25rem;
      background-color: ${(props) => props.theme["yellow-dark"]};
      border-radius: 50%;
      color: ${(props) => props.theme["white"]};
      font-size: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      top: -0.5rem;
      right: -0.5rem;
      font-weight: 700;
    }
  }
`;
