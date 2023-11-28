import { useState, useEffect } from 'react';

import api from '../../utils/api';

import { OrdersBoard } from '../OrdersBoard';

import { Order } from '../../types/Order';

import { Container } from './styles';

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

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

  return (
    <Container>
      <OrdersBoard
        icon="🕐"
        title="File de espera"
        orders={waiting}
        onCancelOrder={handleCancelOrders}
      />

      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={inProduction}
        onCancelOrder={handleCancelOrders}
      />

      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={done}
        onCancelOrder={handleCancelOrders}
      />
    </Container>
  );
}
