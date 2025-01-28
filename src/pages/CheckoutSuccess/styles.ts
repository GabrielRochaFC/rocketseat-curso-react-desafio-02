import styled from "styled-components";

export const CheckoutSuccessContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.375rem;
  padding: 5rem 0;
  align-items: center;
`;

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const TextsHeader = styled.div`
  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme["yellow-dark"]};
    margin-bottom: 0.25rem;
  }
  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const OrderInfoWrapper = styled.div`
  background: linear-gradient(
    to right,
    ${(props) => props.theme["yellow"]},
    ${(props) => props.theme["purple"]}
  );
  border-radius: 6px 2.25rem 6px 2.25rem;
  padding: 1px;
`;

export const OrderInfo = styled.div`
  background-color: ${(props) => props.theme["background"]};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: inherit;
`;

interface OrderContentProps {
  $color: "yellow" | "purple" | "yellow-dark";
}

export const OrderContent = styled.div<OrderContentProps>`
  display: flex;
  gap: 0.75rem;

  & > span {
    background-color: ${(props) => props.theme[props.$color]};
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme["background"]};
  }
`;

export const OrderText = styled.div`
  p {
    span {
      font-weight: bold;
    }
  }
`;
