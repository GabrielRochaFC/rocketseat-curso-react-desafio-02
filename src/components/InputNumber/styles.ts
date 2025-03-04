import styled from "styled-components";

interface InputNumberContainerProps {
  $height: "2rem" | "2.375rem";
}

export const InputNumberContainer = styled.div<InputNumberContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  background-color: ${(props) => props.theme["base-button"]};
  padding: 0.5rem;
  border-radius: 6px;

  width: 4.5rem;
  height: ${(props) => props.$height};

  input {
    width: 1.25rem;
    background: none;
    border: none;
    text-align: center;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type="number"] {
      -moz-appearance: textfield;
      appearance: textfield;
    }
  }

  span {
    color: ${(props) => props.theme["purple"]};
    cursor: pointer;
  }
`;
