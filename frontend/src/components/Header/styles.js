import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;

  .top__header {
    padding: 4px 102px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: ${({ theme }) => theme.colors.main.black};
    color: #FFF;
    font-size: 14px;
    span {
      padding: 6px;
    }
    a {
      text-decoration: underline;
      color: #FFF;
      font-weight: 700;
    }
  }

  `;
export const SubHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  .main__header {
    padding: 30px 102px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 186px;
      height: 52px;
    }
  }

`;

export const InpuSearchContainer = styled.div`
  width: 512px;
  height: 44px;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    height: 100%;
    border: 1px solid #959595;

    padding: 16px;

    &::-webkit-search-cancel-button {
      appearance: none;
    }
    &::placeholder {
      color: #BCBCBC;
    }
  }

  button {
    padding: 10px 24px;
    height: 100%;
    color: #FFF;
    font-weight: 800;
    font-size: 16px;
    border: none;
    background: ${({ theme }) => theme.colors.main.primary};
    cursor: pointer;
  }
`;

export const Router = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  background: ${({ theme }) => theme.colors.main.primary};
  padding: 18px 102px;

  li {
    list-style: none;

    a {
      text-decoration: none;
      color: #FFF;
      font-weight: 800;
      text-transform: uppercase;
    }

    + li {
      margin-left: 80px;
    }
  }

`;
