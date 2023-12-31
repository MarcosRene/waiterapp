import styled from 'styled-components/native';

export const Image = styled.ImageBackground`
  width: 100%;
  height: 200px;
  background-color: red;
  align-items: flex-end;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  margin: 24px;
`;


export const ModalBody = styled.View`
  padding: 32px 24px 0;
  background: #FAFAFA;
  flex: 1;
`;

export const Header = styled.View``;

export const IngredientsContainer = styled.View`
  margin-top: 32px;
  flex: 1;
`;

export const Ingredient = styled.View`
  padding: 16px;
  margin-bottom: 4px;
  border: 1px solid rgba(204, 204, 204, 0.3);
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const Footer = styled.View`
  min-height: 100px;
  padding: 16px 24px;
  background: #FFFFFF;
`;

export const FooterContainer = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PriceContainer = styled.View``;

