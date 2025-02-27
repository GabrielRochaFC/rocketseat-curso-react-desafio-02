import styled, { css } from "styled-components";

interface SelectContainerProps {
  $isSelected: boolean;
}

export const SelectElement = styled.input`
  display: none;
`;

export const SelectContainer = styled.label<SelectContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};
  text-transform: uppercase;
  width: 100%;
  font-size: 0.75rem;
  border-radius: 6px;
  transition: background-color 0.2s;
  cursor: pointer;
  border: 1px solid transparent;

  ${(props) =>
    props.$isSelected &&
    css`
      background-color: ${props.theme["purple-light"]};
      border-color: ${props.theme["purple"]};
    `}

  svg {
    color: ${(props) => props.theme["purple"]};
  }

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }
`;
