import { ReactNode } from 'react';

import { Container } from './styles';
import { Text } from '../Text';

interface ButtonProps {
  children: ReactNode;
  onPress: () => void;
  disabled?: boolean;
}

export function Button({ children, onPress, disabled = false }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Text weight={600} color="#FFFFFF">
        {children}
      </Text>
    </Container>
  );
}
