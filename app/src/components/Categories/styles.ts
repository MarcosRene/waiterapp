import { Platform } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android';

export const Category = styled.TouchableOpacity`
  margin-left: 24px;
  align-items: center;
`;

export const Icon = styled.View`
  margin-top: 8px;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: #FFFFFF;

  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
  elevation: 2;
`;
