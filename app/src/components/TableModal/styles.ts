import styled from 'styled-components/native';

export const Overlay = styled.KeyboardAvoidingView`
  padding: 0 24px;
  background: rgba(0, 0, 0, 0.6);
  flex: 1;
  align-items: stretch;
  justify-content: center;
`;

export const ModalBody = styled.View`
  padding: 24px;
  background: #FFFFFF;
  border-radius: 8px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.View`
  margin-top: 32px;
`;

export const Input = styled.TextInput`
  padding: 16px;
  margin-bottom: 24px;
  background: #FFFFFF;
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 8px;
`;
