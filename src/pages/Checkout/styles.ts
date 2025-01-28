import styled from "styled-components";
import { InputContainer } from "../../components/Input/styles";

export const CheckoutContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 40rem 1fr;
  gap: 2rem;
  padding: 2.5rem 0;

  h2 {
    padding-bottom: 1rem;
    font-size: 1.125rem;
  }
`;

interface ChechoutHeaderProps {
  $color: "yellow-dark" | "purple";
}

export const ChechoutHeader = styled.div<ChechoutHeaderProps>`
  display: flex;
  gap: 1rem;

  h3 {
    font-family: "Roboto", sans-serif;
    font-size: 0.5;
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 400;
  }

  svg {
    color: ${(props) => props.theme[props.$color]};
  }
`;

const CheckoutSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: ${(props) => props.theme["base-card"]};

  & + & {
    margin-top: 1rem;
  }
`;

export const AddressPaymentSection = styled(CheckoutSection)`
  gap: 2rem;
  border-radius: 6px;
`;

export const OrderSummarySection = styled(CheckoutSection)`
  gap: 1.5rem;
  border-radius: 6px 2.75rem 6px 2.75rem;
  a {
    text-decoration: none;
  }
`;

export const InputsContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 12.5rem 1fr 3.75rem;

  /* Ajuste para o InputContainer usando data-name */
  & > ${InputContainer}[data-name="CEP"] {
    grid-row: 1;
    grid-column: 1/2;
  }

  & > ${InputContainer}[data-name="street"] {
    grid-row: 2;
    grid-column: 1/4;
  }

  & > ${InputContainer}[data-name="number"] {
    grid-row: 3;
    grid-column: 1/2;
  }

  & > ${InputContainer}[data-name="complement"] {
    grid-row: 3;
    grid-column: 2/4;
  }

  & > ${InputContainer}[data-name="neighborhood"] {
    grid-row: 4;
    grid-column: 1/2;
  }

  & > ${InputContainer}[data-name="city"] {
    grid-row: 4;
    grid-column: 2/3;
  }

  & > ${InputContainer}[data-name="state"] {
    grid-row: 4;
    grid-column: 3/4;
  }
`;

export const PaymentMethods = styled.div`
  width: 100%;
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 1fr 1fr 1fr;
`;
