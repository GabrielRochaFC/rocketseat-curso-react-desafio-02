import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "phosphor-react";
import { Button } from "../../components/Button";
import {
  ChechoutHeader,
  CheckoutContainer,
  CheckoutSection,
  InputsContainer,
  PaymentMethods,
} from "./styles";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { useState } from "react";

export function Checkout() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);

  const handleSelectPaymentMethod = (method: string) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <CheckoutSection>
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
        </CheckoutSection>
        <CheckoutSection>
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
        </CheckoutSection>
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <Button variant="primary">CONFIRMAR PEDIDO</Button>
        <Button variant="secondary">
          <Trash weight="bold" size={16} /> REMOVER
        </Button>
      </div>
    </CheckoutContainer>
  );
}
