import { ShoppingCart } from "phosphor-react";
import { CardComponent, CardTags, Price, PriceContainer } from "./styles";
import { Button } from "../Button";
import { InputNumber } from "../InputNumber";
import { useContext, useState } from "react";
import { OrderContext } from "../../contexts/OrderContext";

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

  const context = useContext(OrderContext);

  const [quantity, setQuantity] = useState(1);

  function handleQuantity(value: number) {
    setQuantity(value);
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
        <InputNumber id={id} onChange={handleQuantity} />
        <Button
          variant="icon"
          onClick={() =>
            context?.addOrder({ id, product: title, quantity: quantity, price })
          }
        >
          <ShoppingCart size={22} weight="fill" />
        </Button>
      </PriceContainer>
    </CardComponent>
  );
}
