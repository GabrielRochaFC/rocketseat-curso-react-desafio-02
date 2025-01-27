import { useState } from "react";
import { InputNumberContainer } from "./styles";
import { Minus, Plus } from "phosphor-react";

interface InputNumberProps {
  id: string;
}

export function InputNumber({ id }: InputNumberProps) {
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
    <InputNumberContainer>
      <span onClick={() => handlePriceInput("minus")}>
        <Minus weight="bold" size={16} />
      </span>
      <input
        type="number"
        min={1}
        step={1}
        value={inputValue}
        disabled
        id={"coffee-card-" + id}
      />
      <span onClick={() => handlePriceInput("plus")}>
        <Plus weight="bold" size={16} />
      </span>
    </InputNumberContainer>
  );
}
