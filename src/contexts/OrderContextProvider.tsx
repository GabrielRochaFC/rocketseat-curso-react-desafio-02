import { ReactNode, useState } from "react";
import { Order, OrderContext, OrderInfo } from "./OrderContext";

interface OrderProviderProps {
  children: ReactNode;
}

export function OrderProvider({ children }: OrderProviderProps) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [lastOrder, setLastOrder] = useState<OrderInfo | null>(null);

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

  function clearCart() {
    setOrders([]);
  }

  function confirmOrder(orderInfo: OrderInfo) {
    setLastOrder(orderInfo);
    clearCart();
  }

  return (
    <OrderContext.Provider
      value={{
        orders,
        lastOrder,
        addOrder,
        removeOrder,
        updateOrder,
        confirmOrder,
        clearCart,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
