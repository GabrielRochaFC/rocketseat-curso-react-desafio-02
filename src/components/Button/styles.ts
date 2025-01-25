import styled, { css } from "styled-components";

interface ButtonBaseProps {
  $variant: "primary" | "secondary" | "icon";
}

export const ButtonBase = styled.button<ButtonBaseProps>`
  border: none;
  border-radius: 6px;
  padding: 0.75rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  gap: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s;

  ${(props) =>
    props.$variant === "primary" &&
    css`
      width: 100%;
      background-color: ${(props) => props.theme["yellow"]};
      color: ${(props) => props.theme["white"]};
      font-size: 0.875rem;
      line-height: 160%;
      font-weight: 700;

      &:hover {
        background-color: ${(props) => props.theme["yellow-dark"]};
      }
    `}

  ${(props) =>
    props.$variant === "secondary" &&
    css`
      justify-content: start;
      background-color: ${(props) => props.theme["base-button"]};
      color: ${(props) => props.theme["base-text"]};
      font-size: 0.75rem;
      line-height: 160%;
      padding: 0 0.5rem;
      height: 2rem;

      &:hover {
        background-color: ${(props) => props.theme["base-hover"]};
      }

      &:focus {
        box-shadow: 0 0 0 1px ${(props) => props.theme["purple"]};
      }

      svg {
        color: ${(props) => props.theme["purple"]};
      }
    `}

    ${(props) =>
    props.$variant === "icon" &&
    css`
      background-color: ${(props) => props.theme["purple-dark"]};
      color: ${(props) => props.theme["base-card"]};
      font-size: 0.75rem;
      line-height: 160%;
      padding: 0.5rem;
      gap: 0.5rem;

      &:hover {
        background-color: ${(props) => props.theme["purple"]};
      }

      &:focus {
        box-shadow: 0 0 0 1px ${(props) => props.theme["purple-light"]};
      }
    `}
`;
