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
import { useContext } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";

interface OrderItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  onChange?: (value: number) => void;
}

export function OrderItem({
  id,
  name,
  price,
  image,
  quantity,
  onChange,
}: OrderItemProps) {
  const context = useContext(OrderContext);

  function handleQuantity(value: number) {
    if (onChange) {
      onChange(value);
    }
  }

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
            <InputNumber
              height="2rem"
              quantity={quantity}
              onChange={handleQuantity}
            />
            <Button
              variant="secondary"
              onClick={() => context?.removeOrder(id)}
            >
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
