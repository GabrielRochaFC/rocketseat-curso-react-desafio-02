import { ReactNode, useState } from "react";
import { Order, OrderContext } from "./OrderContext";

interface OrderProviderProps {
  children: ReactNode;
}

export function OrderProvider({ children }: OrderProviderProps) {
  const [orders, setOrders] = useState<Order[]>([]);

  function addOrder(order: Order) {
    setOrders([...orders, order]);
  }

  function removeOrder(id: string) {
    const newOrders = orders.filter((order) => order.id !== id);
    setOrders(newOrders);
  }

  return (
    <OrderContext.Provider value={{ orders, addOrder, removeOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
