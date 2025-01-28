import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { Button } from "../../components/Button";
import {
  AddressPaymentSection,
  ChechoutHeader,
  CheckoutContainer,
  InputsContainer,
  OrderSummarySection,
  PaymentMethods,
} from "./styles";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { useContext, useState } from "react";

import { OrderItem } from "./components/OrderItem";
import { TotalPrice } from "./components/TotalPrice";
import { NavLink } from "react-router-dom";
import { OrderContext } from "../../contexts/OrderContext";
import data from "../../../data.json";

export function Checkout() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);

  const handleSelectPaymentMethod = (method: string) => {
    setSelectedPaymentMethod(method);
  };

  const context = useContext(OrderContext);

  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <AddressPaymentSection>
          <ChechoutHeader $color="yellow-dark">
            <MapPinLine size={22} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </ChechoutHeader>
          <InputsContainer>
            <Input type="text" placeholder="CEP" name="CEP" />
            <Input type="text" placeholder="Rua" name="street" />
            <Input type="text" placeholder="Número" name="number" />
            <Input
              type="text"
              placeholder="Complemento"
              name="complement"
              optional={true}
            />
            <Input type="text" placeholder="Bairro" name="neighborhood" />
            <Input type="text" placeholder="Cidade" name="city" />
            <Input type="text" placeholder="UF" name="state" />
          </InputsContainer>
        </AddressPaymentSection>
        <AddressPaymentSection>
          <ChechoutHeader $color="purple">
            <span>
              <CurrencyDollar size={22} />
            </span>
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </ChechoutHeader>
          <PaymentMethods>
            <Select
              onClick={() => handleSelectPaymentMethod("credit-card")}
              selected={selectedPaymentMethod === "credit-card"}
            >
              <CreditCard size={16} />
              Cartão de crédito
            </Select>
            <Select
              onClick={() => handleSelectPaymentMethod("debit-card")}
              selected={selectedPaymentMethod === "debit-card"}
            >
              <Bank size={16} />
              Cartão de Débito
            </Select>
            <Select
              onClick={() => handleSelectPaymentMethod("money")}
              selected={selectedPaymentMethod === "money"}
            >
              <Money size={16} />
              Dinheiro
            </Select>
          </PaymentMethods>
        </AddressPaymentSection>
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <OrderSummarySection>
          {context?.orders.map((item) => (
            <OrderItem
              key={item.id}
              id={item.id}
              name={item.product}
              price={item.price * item.quantity}
              image={`public/${
                data.coffees.find((coffee) => coffee.id === item.id)?.image
              }`}
              quantity={item.quantity}
              onChange={(value) => {
                context.updateOrder(item.id, value);
              }}
            />
          ))}
          <TotalPrice
            total={
              context?.orders.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
              ) || 0
            }
            delivery={context?.orders && context.orders.length > 0 ? 3.5 : 0}
          />
          <NavLink to="/checkout/success">
            <Button variant="primary">CONFIRMAR PEDIDO</Button>
          </NavLink>
        </OrderSummarySection>
      </div>
    </CheckoutContainer>
  );
}
