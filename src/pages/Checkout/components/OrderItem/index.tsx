import { Trash } from "phosphor-react";
import { Button } from "../../../../components/Button";
import { InputNumber } from "../../../../components/InputNumber";
import {
  OrderButtons,
  OrderContent,
  OrderItemContainer,
  OrderItemImageAndText,
  OrderTexts,
} from "./styles";

interface OrderItemProps {
  name: string;
  price: number;
  image: string;
}

export function OrderItem({ name, price, image }: OrderItemProps) {
  return (
    <OrderItemContainer>
      <OrderItemImageAndText>
        <img src={image} alt={name} />
        <OrderContent>
          <OrderTexts>
            <p>{name}</p>
            <p>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(price)}
            </p>
          </OrderTexts>
          <OrderButtons>
            <InputNumber height="2rem" />
            <Button variant="secondary">
              <Trash size={16} />
              REMOVER
            </Button>
          </OrderButtons>
        </OrderContent>
      </OrderItemImageAndText>
      <hr />
    </OrderItemContainer>
  );
}
