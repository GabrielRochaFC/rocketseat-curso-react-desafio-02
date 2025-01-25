import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  CardComponent,
  CardTags,
  CartButton,
  Price,
  PriceContainer,
  PriceInput,
} from "./styles";
import { useState } from "react";

interface CardProps {
  coffee: {
    id: string;
    image: string;
    tags: string[];
    title: string;
    description: string;
    price: number;
  };
}

export function Card({ coffee }: CardProps) {
  const { id, image, tags, title, description, price } = coffee;

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
    <CardComponent key={id}>
      <img src={image} alt={title} />
      <CardTags>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </CardTags>
      <h3>{title}</h3>
      <p>{description}</p>
      <PriceContainer>
        <Price>
          R$ <span>{price}</span>
        </Price>
        <PriceInput>
          <span onClick={() => handlePriceInput("minus")}>
            <Minus weight="bold" size={16} />
          </span>
          <input type="number" min={1} step={1} value={inputValue} disabled />
          <span onClick={() => handlePriceInput("plus")}>
            <Plus weight="bold" size={16} />
          </span>
        </PriceInput>
        <CartButton>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </PriceContainer>
    </CardComponent>
  );
}
