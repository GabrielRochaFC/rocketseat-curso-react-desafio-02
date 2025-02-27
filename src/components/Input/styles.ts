import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const InputComponent = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme["base-button"]};
  background-color: ${(props) => props.theme["base-input"]};
  border-radius: 6px;
  display: flex;
  align-items: center;

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const OptionalText = styled.span`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) => props.theme["base-label"]};
  font-size: 0.875rem;
  pointer-events: none; /* Impede que o texto interfira com o input */

  /* Oculta o texto "Opcional" quando o placeholder não está visível */
  ${InputComponent}:not(:placeholder-shown) + & {
    display: none;
  }
`;

export const ErrorText = styled.span`
  color: #ff4d4f;
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;
