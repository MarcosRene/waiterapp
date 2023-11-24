import { Order } from '../../types/Order';

import { Container, OrdersContainer } from './styles';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  return (
    <Container>

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map(order => (
            <button type="button" key={order._id}>
              <strong>Mesa {order.table}</strong>
              <span>itens {order.products.length}</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Container>
  );
}
