import { InputHTMLAttributes } from "react";
import { InputComponent, InputContainer, OptionalText } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean;
  name?: string; // Adicionamos a prop "name" para facilitar o uso no grid
}
export function Input({ optional = false, name, ...props }: InputProps) {
  return (
    <InputContainer data-name={name}>
      <InputComponent {...props} />
      {optional && <OptionalText>Opcional</OptionalText>}
    </InputContainer>
  );
}
