import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { Button } from "../../components/Button";
import {
  AddressPaymentSection,
  ChechoutHeader,
  CheckoutContainer,
  CheckoutForm,
  ErrorText,
  InputsContainer,
  OrderSummarySection,
  PaymentMethods,
} from "./styles";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { useContext } from "react";
import * as zod from "zod";

import { OrderItem } from "./components/OrderItem";
import { TotalPrice } from "./components/TotalPrice";
import { useNavigate } from "react-router-dom";
import { OrderContext, OrderInfo } from "../../contexts/OrderContext";
import data from "../../../data.json";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const checkoutFormValidationSchema = zod.object({
  CEP: zod
    .string()
    .regex(/^\d{5}-?\d{3}$/, "CEP deve ter 8 dígitos")
    .nonempty("CEP é obrigatório"),
  street: zod.string().nonempty("Rua é obrigatória"),
  number: zod.string().nonempty("Número é obrigatório"),
  complement: zod.string(),
  neighborhood: zod.string().nonempty("Bairro é obrigatório"),
  city: zod.string().nonempty("Cidade é obrigatória"),
  state: zod.string().nonempty("Obrigatório"),
  payment: zod.enum(["credit-card", "debit-card", "money"], {
    required_error: "Forma de pagamento é obrigatória",
  }),
});

export type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>;

export function Checkout() {
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      CEP: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
      payment: undefined,
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = checkoutForm;
  const navigate = useNavigate();

  const context = useContext(OrderContext);

  function handleConfirmOrder(data: CheckoutFormData) {
    const orderInfo: OrderInfo = {
      address: {
        street: data.street,
        number: data.number,
        neighborhood: data.neighborhood,
        city: data.city,
        state: data.state,
      },
      payment: data.payment,
    };

    context?.confirmOrder(orderInfo);
    navigate("/checkout/success");
  }

  const isDisabledButton = !context?.orders.length;

  return (
    <CheckoutContainer>
      <CheckoutForm onSubmit={handleSubmit(handleConfirmOrder)}>
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
              <Input name="CEP" control={control} label="CEP" />
              <Input name="street" control={control} label="Rua" />
              <Input name="number" control={control} label="Número" />
              <Input
                name="complement"
                control={control}
                label="Complemento"
                rules={{ required: false }}
              />
              <Input name="neighborhood" control={control} label="Bairro" />
              <Input name="city" control={control} label="Cidade" />
              <Input name="state" control={control} label="Estado" />
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
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </ChechoutHeader>
            <PaymentMethods>
              <Select
                label="Cartão de crédito"
                control={control}
                name="payment"
                value="credit-card"
              />
              <Select
                label="Cartão de Débito"
                control={control}
                name="payment"
                value="debit-card"
              />
              <Select
                label="Dinheiro"
                control={control}
                name="payment"
                value="money"
              />
              {errors.payment && (
                <ErrorText>{errors.payment.message}</ErrorText>
              )}
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
            <Button variant="primary" type="submit" disabled={isDisabledButton}>
              CONFIRMAR PEDIDO
            </Button>
          </OrderSummarySection>
        </div>
      </CheckoutForm>
    </CheckoutContainer>
  );
}
