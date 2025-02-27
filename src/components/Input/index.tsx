import {
  ErrorText,
  InputComponent,
  InputContainer,
  OptionalText,
} from "./styles";
import { useController, UseControllerProps } from "react-hook-form";
import { CheckoutFormData } from "../../pages/Checkout";

interface InputProps extends UseControllerProps<CheckoutFormData> {
  label?: string;
}

export function Input({ label, ...props }: InputProps) {
  const { field, fieldState } = useController(props);

  return (
    <InputContainer data-name={props.name}>
      {props.rules?.required === false && <OptionalText>Opcional</OptionalText>}
      <InputComponent {...field} placeholder={label} />
      {fieldState.error && <ErrorText>{fieldState.error.message}</ErrorText>}
    </InputContainer>
  );
}
