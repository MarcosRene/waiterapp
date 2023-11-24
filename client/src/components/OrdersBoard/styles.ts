import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
  border-radius: 16px;
  border: 1px solid rgba(204, 204, 204, 0.4);

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  flex: 1;

  > header {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const OrdersContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 24px;

  button {
    width: 100%;
    height: 128px;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 8px;
    background-color: #FFFFFF;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;

    strong {
      font-weight: 500;
    }

    span {
      color: #666666;
      font-size: 14px;
    }
  }
`;
