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
    padding: .8rem 2.4rem;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 212px;
  max-height: 213px;
  width: 100%;
  height: 100%;
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
  height: 100px;
  margin: 13px 0;
  justify-content: space-between;
  width: 100%;

  h3 {
    color: ${({ theme }) => theme.colors.grey[500]};
    font-weight: 400;
    text-transform: uppercase;
    font-size: 16px;
    text-align: center;
  }

  @media screen and (max-width: 619px) {
    height: 100%;
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

  @media screen and (max-width: 798px) {
    flex-direction: column;
    margin-top: 1rem;
    font-size: 2.1rem;
    text-align: center;
  }
`;

export const PriceOFF = styled.small`
  color: ${({ theme }) => theme.colors.grey[400]};
  font-size: 1.4rem;
  margin-right: 16px;
  text-decoration: line-through;

  @media screen and (max-width: 798px) {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    margin-right: 0;
  }

  @media screen and (max-width: 364px) {
    margin-bottom: 0;
    font-size: 1.5rem;
  }
`;
