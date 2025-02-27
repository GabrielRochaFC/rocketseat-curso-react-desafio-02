import { createContext } from "react";

export interface OrderInfo {
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  payment: "credit-card" | "debit-card" | "money";
}

export interface Order {
  id: string;
  product: string;
  quantity: number;
  price: number;
}

interface OrderContextData {
  orders: Order[];
  lastOrder: OrderInfo | null;
  addOrder: (order: Order) => void;
  removeOrder: (id: string) => void;
  updateOrder: (id: string, quantity: number) => void;
  confirmOrder: (orderInfo: OrderInfo) => void;
  clearCart: () => void;
}

export const OrderContext = createContext<OrderContextData | null>(null);
