import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.main.secondary};
    width: 18px;
    height: 18px;
    max-width: 100%;
    max-height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
    :nth-child(1) {
      transform: rotate(180deg);
      margin-right: 18px;
    }

    :last-child {
      margin-left: 18px;
    }
  }

`;

export const ContainerPages = styled.div`
  display: flex;
  align-items: center;
`;

export const NumberPage = styled.button`
    color: ${({ theme, isCurrentPage }) => (isCurrentPage ? theme.colors.main.primary : theme.colors.grey[500])};
    font-weight: ${({ isCurrentPage }) => (isCurrentPage ? '700' : '400')};
    font-size: 16px;

    & + & {
      margin-left: 18px;
    }
`;
