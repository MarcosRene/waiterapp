import { ReactNode } from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';
import { Text } from '../Text';

interface ButtonProps {
  children: ReactNode;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({ children, onPress, disabled = false, loading = false }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled || loading}>
      {loading
        ? <ActivityIndicator color="#FFFFFF" />
        : (
          <Text weight={600} color="#FFFFFF">
            {children}
          </Text>
        )
      }
    </Container>
  );
}
