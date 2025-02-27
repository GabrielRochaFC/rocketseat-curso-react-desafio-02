import { useController, UseControllerProps } from "react-hook-form";
import { SelectElement, SelectContainer } from "./styles";
import { CheckoutFormData } from "../../pages/Checkout";
import { CreditCard, CurrencyDollar, Money } from "phosphor-react";

interface Props extends UseControllerProps<CheckoutFormData> {
  label?: string;
  value: "credit-card" | "debit-card" | "money";
}

export function Select({ value, ...props }: Props) {
  const { field } = useController(props);

  return (
    <SelectContainer $isSelected={field.value === value}>
      <SelectElement
        type="radio"
        value={value}
        checked={field.value === value}
        onChange={(e) => field.onChange(e.target.value)}
      />
      {value === "credit-card" && <CreditCard size={16} />}
      {value === "debit-card" && <CurrencyDollar size={16} />}
      {value === "money" && <Money size={16} />}
      {props.label}
    </SelectContainer>
  );
}
