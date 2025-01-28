import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import delivery from "../../../public/images/delivery.svg";
import {
  CheckoutSuccessContainer,
  OrderContent,
  OrderInfo,
  OrderInfoWrapper,
  OrderText,
  TextsContainer,
  TextsHeader,
} from "./styles";

export function CheckoutSuccess() {
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
                  Entrega em <span>Rua João Daniel Martinelli, 102</span>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
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
                  <span>Cartão de Crédito</span>
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
