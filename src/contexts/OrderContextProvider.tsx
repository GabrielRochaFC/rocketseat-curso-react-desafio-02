import { ReactNode, useState } from "react";
import { Order, OrderContext } from "./OrderContext";

interface OrderProviderProps {
  children: ReactNode;
}

export function OrderProvider({ children }: OrderProviderProps) {
  const [orders, setOrders] = useState<Order[]>([]);

  function addOrder(order: Order) {
    const existingOrderIndex = orders.findIndex((o) => o.id === order.id);
    if (existingOrderIndex !== -1) {
      const updatedOrders = [...orders];
      updatedOrders[existingOrderIndex] = {
        ...updatedOrders[existingOrderIndex],
        quantity: updatedOrders[existingOrderIndex].quantity + order.quantity,
      };
      setOrders(updatedOrders);
    } else {
      setOrders([...orders, order]);
    }
  }

  function removeOrder(id: string) {
    const newOrders = orders.filter((order) => order.id !== id);
    setOrders(newOrders);
  }

  function updateOrder(id: string, quantity: number) {
    const updatedOrders = orders.map((order) => {
      if (order.id === id) {
        return { ...order, quantity };
      }
      return order;
    });
    setOrders(updatedOrders);
  }

  return (
    <OrderContext.Provider
      value={{ orders, addOrder, removeOrder, updateOrder }}
    >
      {children}
    </OrderContext.Provider>
  );
}
