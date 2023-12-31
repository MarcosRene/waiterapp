import { useEffect } from 'react';

import { Overlay, ModalBody, StatusContainer, OrderDetails, Item, ProductDetails, Actions } from './styles';

import closeIcon from '../../assets/images/close-icon.svg';

import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';

interface OrderModalProps {
  visible: boolean;
  order: null | Order;
  onClose: () => void;
  onCancelOrder: () => void;
  isLoading: boolean;
  onChangeOrderStatus: () => void;
}

export function OrderModal({ visible, order, onClose, onCancelOrder, isLoading, onChangeOrderStatus }: OrderModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!visible || !order) {
    return null;
  }

  const renderStatus = {
    'WAITING': {icon: '🕑', title: 'Fila de espera'},
    'IN_PRODUCTION': {icon: '👨‍🍳', title: 'Em preparação'},
    'DONE': {icon: '✅', title: 'Pronto!'},
  };

  const renderLabelButton = {
    'WAITING': {icon: '👨‍🍳', label: 'Fila de espera'},
    'IN_PRODUCTION': {icon: '✅', label: 'Concluir pedido'},
  };

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + (product.price * quantity);
  }, 0);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="Close Icon" />
          </button>
        </header>

        <StatusContainer>
          <small>Status do Pedido</small>

          <div>
            <span>{renderStatus[order.status].icon}</span>
            <strong>{renderStatus[order.status].title}</strong>
          </div>
        </StatusContainer>

        <OrderDetails>
          <strong>Items</strong>

          {order.products.map(({ _id, product, quantity }) => (
            <Item key={_id}>
              <img
                src={`http://localhost:3333/uploads/${product.imagePath}`}
                alt={product.name}
                width="56"
                height="28.51"
              />

              <span>{quantity}x</span>

              <ProductDetails>
                <strong>{product.name}</strong>
                <span>{formatCurrency(product.price)}</span>
              </ProductDetails>
            </Item>
          ))}

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          {order.status !== 'DONE' && (
            <button type="button" onClick={onChangeOrderStatus} disabled={isLoading}>
              <span>{renderLabelButton[order.status].icon}</span>
              <strong>{renderLabelButton[order.status].label}</strong>
            </button>
          )}

          <button
            type="button"
            onClick={onCancelOrder}
            disabled={isLoading}
          >
            Cancelar
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
