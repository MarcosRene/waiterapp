import { useState, useEffect } from 'react';
import socketIO from 'socket.io-client';

import api from '../../utils/api';

import { OrdersBoard } from '../OrdersBoard';

import { Order } from '../../types/Order';

import { Container } from './styles';

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const socket = socketIO('http://localhost:3333', {
      transports: ['websocket']
    });

    socket.on('orders@new', (order) => {
      setOrders(prevState => prevState.concat(order));
    });
  }, []);

  useEffect(() => {
    api.get('/orders').then(({ data }) => {
      setOrders(data);
    });
  }, []);

  const waiting = orders.filter(order => order.status === 'WAITING');
  const inProduction = orders.filter(order => order.status === 'IN_PRODUCTION');
  const done = orders.filter(order => order.status === 'DONE');

  function handleCancelOrders(orderId: string) {
    setOrders(prevState => prevState.filter(order => order._id !== orderId));
  }

  function handleOrderStatusChange(orderId: string, status: Order['status']) {
    setOrders(prevState => prevState.map((order) => (
      order._id === orderId
        ? { ...order, status }
        : order
    )));
  }

  return (
    <Container>
      <OrdersBoard
        icon="🕐"
        title="File de espera"
        orders={waiting}
        onCancelOrder={handleCancelOrders}
        onChangeOrderStatus={handleOrderStatusChange}
      />

      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={inProduction}
        onCancelOrder={handleCancelOrders}
        onChangeOrderStatus={handleOrderStatusChange}
      />

      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={done}
        onCancelOrder={handleCancelOrders}
        onChangeOrderStatus={handleOrderStatusChange}
      />
    </Container>
  );
}
