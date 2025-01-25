import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonBase } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "icon";
}

export function Button({
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <ButtonBase $variant={variant} {...props}>
      {children}
    </ButtonBase>
  );
}
