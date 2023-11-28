import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);

  display: flex;
  align-items: center;
  justify-content: center;
`;


export const ModalBody = styled.div`
  width: 480px;
  padding: 32px;
  background: #FFFFFF;
  border-radius: 8px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      border: 0;
      background: transparent;
      line-height: 0;
    }
  }
`;


export const StatusContainer = styled.div`
  margin-top: 32px;

  small {
    opacity: 0.8;
  }

  div {
    margin-top: 8px;

    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
    display: block;
  }

   .total {
    margin-top: 24px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 14px;
      font-weight: 500;
      opacity: 0.8;
    }
  }
`;

export const Item = styled.div`
  display: flex;

  img {
    border-radius: 8px;
  }

  > span {
    min-height: 20px;
    margin-left: 12px;
    font-size: 14px;
    color: #666666;
    display: block;
  }

  & + & {
    margin-top: 16px;
  }
`;


export const ProductDetails = styled.div`
  margin-left: 4px;

  strong {
    display: block;
    margin-bottom: 4px;
  }

  span {
    font-size: 14px;
    color: #666666;
  }
`;


export const Actions = styled.footer`
  margin-top: 32px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  button {
    padding: 12px 24px;
    background: #333333;
    color: #FFFFFF;
    border-radius: 48px;
    border: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  button ~ button {
    padding: 12px 24px;
    font-weight: bold;
    border: 0;
    background: transparent;
    color: #B73035;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
