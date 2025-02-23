import { createContext } from "react";

export interface Order {
  id: string;
  product: string;
  quantity: number;
  price: number;
}

interface OrderContextData {
  orders: Order[];
  addOrder: (order: Order) => void;
  removeOrder: (id: string) => void;
  updateOrder: (id: string, quantity: number) => void;
}

export const OrderContext = createContext<OrderContextData | null>(null);
