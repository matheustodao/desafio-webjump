import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    margin: 9px 0;
    width: 100%;
    background: ${({ theme }) => theme.colors.main.secondary};
    font-weight: 800;
    font-size: 18px;
    border: none;
    color: #FFF;
    padding: 8px 24px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 212px;
  max-height: 213px;
  width: 212px;
  height: 213px;
  padding: 9px 8px;
  border: 1px solid ${({ theme }) => theme.colors.grey[300]};

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 9px 8px;

  h3 {
    color: ${({ theme }) => theme.colors.grey[500]};
    font-weight: 400;
    text-transform: uppercase;
    font-size: 16px;
    text-align: center;
    max-height: 44px;
    height: 44px;
  }
`;

export const WrapperOfPrices = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 9px;

  strong {
    color: ${({ theme }) => theme.colors.main.tertiary};
    font-weight: 800;
    font-size: 18px;
  }
`;

export const PriceOFF = styled.small`
  color: ${({ theme }) => theme.colors.grey[400]};
  margin-right: 16px;
`;
