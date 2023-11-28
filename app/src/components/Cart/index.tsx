import { FlatList, TouchableOpacity, View } from 'react-native';

import { formatCurrency } from '../../utils/formatCurrency';

import { Button } from '../Button';
import { PlusCircle } from '../Icons/PlusCircle';
import { MinusCircle } from '../Icons/MinusCircle';
import { Text } from '../Text';

import { CartItem } from '../../types/CartItem';

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
}

export function Cart({ cartItems }: CartProps) {
  return (
    <>
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
                    uri: `http://rn2qxky.anonymous.8081.exp.direct:3333/uploads/${cartItem.product.imagePath}`
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
                <TouchableOpacity>
                  <PlusCircle />
                </TouchableOpacity>

                <TouchableOpacity style={{ marginLeft: 24 }}>
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
              <Text size={20} weight={600}>{formatCurrency(120)}</Text>
            </>
          ): (
            <Text color="#999999">Seu carrinho está vazio</Text>
          )}
        </TotalContainer>

        <Button
          onPress={() => alert('Confirmar pedido')}
          disabled={cartItems.length === 0}
        >
          Confirmar pedido
        </Button>
      </Summary>
    </>
  );
}
