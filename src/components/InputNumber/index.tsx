import { useState } from "react";
import { InputNumberContainer } from "./styles";
import { Minus, Plus } from "phosphor-react";

interface InputNumberProps {
  id?: string;
  height?: "2rem" | "2.375rem";
}

export function InputNumber({ id, height = "2.375rem" }: InputNumberProps) {
  const [inputValue, setInputValue] = useState(1);

  function handlePriceInput(type: "plus" | "minus") {
    if (type === "plus") {
      setInputValue(inputValue + 1);
    } else {
      if (inputValue > 1) {
        setInputValue(inputValue - 1);
      }
    }
  }
  return (
    <InputNumberContainer $height={height}>
      <span onClick={() => handlePriceInput("minus")}>
        <Minus weight="bold" size={16} />
      </span>
      <input
        type="number"
        min={1}
        step={1}
        value={inputValue}
        disabled
        id={id ? `coffee-card-${id}` : undefined}
      />
      <span onClick={() => handlePriceInput("plus")}>
        <Plus weight="bold" size={16} />
      </span>
    </InputNumberContainer>
  );
}
