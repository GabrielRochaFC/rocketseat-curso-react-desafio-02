import { TotalPriceContainer } from "./styles";

interface TotalPriceProps {
  total: number;
  delivery: number;
}

export function TotalPrice({ total, delivery }: TotalPriceProps) {
  function formatCurrency(value: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }

  return (
    <TotalPriceContainer>
      <p>Total de itens</p>
      <p>{formatCurrency(total)}</p>
      <p>Entrega</p>
      <p>{formatCurrency(delivery)}</p>
      <p>Total</p>
      <p>{formatCurrency(total + delivery)}</p>
    </TotalPriceContainer>
  );
}
