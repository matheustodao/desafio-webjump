import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  .top__header {
    padding: .4rem 10.2rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: ${({ theme }) => theme.colors.main.black};
    color: #FFF;
    font-size: 1.4rem;
    span {
      padding: .6rem;
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
    padding: 3rem 10.2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    a img {
      width: 186px;
      height: 52px;
    }

    .icons {
      img {
        width: 30px;
        height: 30px;
      }
      display: none;
    }
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
    font-size: 1.6rem;

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
