import { useState } from 'react';
import { FlatList } from 'react-native';

import { formatCurrency } from '../../utils/formatCurrency';

import { Product, ProductImage, ProductDetails, Separator, AddToCartButton } from './styles';

import { Text } from '../Text';
import { PlusCircle } from '../Icons/PlusCircle';
import { ProductModal } from '../ProductModal';

import { Product as ProductProps } from '../../types/Product';

interface MenuProps {
  onAddToCart: (product: ProductProps) => void;
  products: ProductProps[]
}

export function Menu({ onAddToCart, products }: MenuProps) {
  const [isModalVisible, setIsModalVisible] =  useState(false);
  const [selectedProduct, setSelectedProduct] =  useState<ProductProps | null>(null);

  function handleOpenModal(product: ProductProps) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />

      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={product => product._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => (
          <Product onPress={() => handleOpenModal(product)}>
            <ProductImage
              source={{
                uri: `http://rn2qxky.anonymous.8081.exp.direct:3333/uploads/${product.imagePath}`
              }}
            />

            <ProductDetails>
              <Text weight={600}>{product.name}</Text>
              <Text size={14} color="#666666" style={{ marginVertical: 8 }}>{product.description}</Text>
              <Text size={14} weight={600}>{formatCurrency(product.price)}</Text>
            </ProductDetails>

            <AddToCartButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddToCartButton>
          </Product>
        )}
      />
    </>
  );
}
