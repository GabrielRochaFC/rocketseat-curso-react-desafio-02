import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import delivery from "/images/delivery.svg?url";
import {
  CheckoutSuccessContainer,
  OrderContent,
  OrderInfo,
  OrderInfoWrapper,
  OrderText,
  TextsContainer,
  TextsHeader,
} from "./styles";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import { Navigate } from "react-router-dom";

export function CheckoutSuccess() {
  const context = useContext(OrderContext);

  if (!context?.lastOrder) {
    return <Navigate to="/" />;
  }

  const { address, payment } = context.lastOrder;

  const paymentMethods = {
    "credit-card": "Cartão de Crédito",
    "debit-card": "Cartão de Débito",
    money: "Dinheiro",
  };

  return (
    <CheckoutSuccessContainer>
      <TextsContainer>
        <TextsHeader>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </TextsHeader>
        <OrderInfoWrapper>
          <OrderInfo>
            <OrderContent $color="purple">
              <span>
                <MapPin weight="fill" />
              </span>
              <OrderText>
                <p>
                  Entrega em{" "}
                  <span>
                    {address.street}, {address.number}
                  </span>
                </p>
                <p>
                  {address.neighborhood} - {address.city}, {address.state}
                </p>
              </OrderText>
            </OrderContent>
            <OrderContent $color="yellow">
              <span>
                <Timer weight="fill" />
              </span>
              <OrderText>
                <p>Previsão de entrega</p>
                <p>
                  <span>20 min - 30 min</span>
                </p>
              </OrderText>
            </OrderContent>
            <OrderContent $color="yellow-dark">
              <span>
                <CurrencyDollar />
              </span>
              <OrderText>
                <p>Pagamento na entrega</p>
                <p>
                  <span>{paymentMethods[payment]}</span>
                </p>
              </OrderText>
            </OrderContent>
          </OrderInfo>
        </OrderInfoWrapper>
      </TextsContainer>
      <div>
        <img src={delivery} alt="delivery man delivering a package" />
      </div>
    </CheckoutSuccessContainer>
  );
}
