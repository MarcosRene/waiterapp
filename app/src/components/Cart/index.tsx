import { useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';

import { formatCurrency } from '../../utils/formatCurrency';
import api from '../../utils/api';

import { Button } from '../Button';
import { PlusCircle } from '../Icons/PlusCircle';
import { MinusCircle } from '../Icons/MinusCircle';
import { OrderConfirmedModal } from '../OrderConfirmedModal';
import { Text } from '../Text';

import { CartItem } from '../../types/CartItem';
import { Product } from '../../types/Product';

import {
  Item,
  ProductContainer,
  Actions,
  Image,
  QuantityContainer,
  Summary,
  TotalContainer
} from './styles';

interface CartProps {
  cartItems: CartItem[];
  onAdd: (product: Product) => void;
  onDecrement: (product: Product) => void;
  onConfirmOrder: () => void;
  selectedTable: string;
}

export function Cart({
  cartItems,
  onAdd,
  onDecrement,
  onConfirmOrder,
  selectedTable
}: CartProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOrderModalVisible, setIsOrderModalVisible] = useState(false);

  const total = cartItems.reduce((acc, cartItem) => {
    return acc + (cartItem.quantity * cartItem.product.price);
  }, 0);

  async function handleConfirmOrder() {
    setIsLoading(true);
    const payload = {
      table: selectedTable,
      products: cartItems.map(cartItem => ({
        product: cartItem.product._id,
        quantity: cartItem.quantity
      }))
    };

    await api.post('/orders', payload);
    setIsLoading(false);
    setIsOrderModalVisible(true);
  }

  function handleOk() {
    onConfirmOrder();
    setIsOrderModalVisible(false);
  }

  return (
    <>
      <OrderConfirmedModal
        visible={isOrderModalVisible}
        onOk={handleOk}
      />

      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={({product}) => product._id}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 20, maxHeight: 150 }}
          renderItem={({item: cartItem}) => (
            <Item>
              <ProductContainer>
                <Image
                  source={{
                    uri: `${process.env.EXPO_PUBLIC_API_URL}/uploads/${cartItem.product.imagePath}`
                  }}
                />

                <QuantityContainer>
                  <Text size={14} color="#666666">{cartItem.quantity}x</Text>
                </QuantityContainer>

                <View>
                  <Text size={14} weight={600}>{cartItem.product.name}</Text>
                  <Text size={14} color="#666666" style={{ marginTop: 4 }}>{formatCurrency(cartItem.product.price)}</Text>
                </View>
              </ProductContainer>

              <Actions>
                <TouchableOpacity
                  style={{ marginRight: 24 }}
                  onPress={() => onAdd(cartItem.product)}
                >
                  <PlusCircle />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onDecrement(cartItem.product)}>
                  <MinusCircle />
                </TouchableOpacity>
              </Actions>
            </Item>
          )}
        />
      )}

      <Summary>
        <TotalContainer>
          {cartItems.length > 0 ? (
            <>
              <Text color="#666666">Total</Text>
              <Text size={20} weight={600}>{formatCurrency(total)}</Text>
            </>
          ): (
            <Text color="#999999">Seu carrinho está vazio</Text>
          )}
        </TotalContainer>

        <Button
          onPress={handleConfirmOrder}
          disabled={cartItems.length === 0}
          loading={isLoading}
        >
          Confirmar pedido
        </Button>
      </Summary>
    </>
  );
}
