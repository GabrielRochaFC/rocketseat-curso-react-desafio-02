import styled from "styled-components";

interface SelectProps {
  $selected: boolean;
}

export const SelectContainer = styled.div<SelectProps>`
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
  svg {
    color: ${(props) => props.theme["purple"]};
  }

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }

  ${(props) =>
    props.$selected &&
    `
    background-color: ${props.theme["purple-light"]};
    border: 1px solid ${props.theme["purple"]};
  `}
`;
