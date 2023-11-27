import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  ${({ disabled }) => css`
    padding: 14px 24px;
    background: ${!disabled ? '#D73035' : '#999999'};
    border-radius: 48px;

    align-items: center;
    justify-content: center;
  `}
`;
