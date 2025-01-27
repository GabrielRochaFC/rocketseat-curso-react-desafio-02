import { ReactNode } from "react";
import { SelectContainer } from "./styles";

interface SelectProps {
  children: ReactNode;
  selected?: boolean;
  onClick: () => void;
}

export function Select({ children, selected = false, onClick }: SelectProps) {
  function handleClick() {
    onClick();
  }

  return (
    <SelectContainer $selected={selected} onClick={handleClick}>
      {children}
    </SelectContainer>
  );
}
