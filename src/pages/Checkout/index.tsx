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
} from "./styles";
import { Input } from "../../components/Input";

export function Checkout() {
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
          <div>
            <label>
              <input type="radio" name="payment" value="credit" />
              <CreditCard size={16} />
              Cartão de crédito
            </label>
            <label>
              <input type="radio" name="payment" value="debit" />
              <Bank size={16} />
              Cartão de Débito
            </label>
            <label>
              <input type="radio" name="payment" value="cash" />
              <Money size={16} />
              Dinheiro
            </label>
          </div>
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
