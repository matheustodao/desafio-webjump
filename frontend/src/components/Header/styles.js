import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin-bottom: 214px;

  .top__header {
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.colors.main.black};
    color: #FFF;
    font-size: 1.4rem;
    width: 100%;
    div {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin: 0 auto;
      max-width: 90%;
      width: 100%;

    }
    span {
      padding: .6rem;
    }
    a {
      text-decoration: underline;
      color: #FFF;
      font-weight: 700;
    }

    @media screen and (max-width: 1302px) {
      padding-right: 2%;
      padding-left: 2%;
    }
  }

  .box__search {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    @media screen and (max-width: 578px) {
      display: none;
    }
  }
`;
export const SubHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  #logo {
    max-width: 262px;
    max-height: 50px;
    width: 100%;
    height: 100%:
  }

  .main__header {
    padding: 3rem 0rem;
    max-width: 90%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a img {
      width: 186px;
      height: 52px;
    }

    .icons {
      button {
        border: none;
        background: none;
        width: 30px;
        height: 30px;
        cursor: pointer;
      }

      img {
        width: 30px;
        height: 30px;
      }
      display: none;

      @media screen and (max-width: 578px) {
        display: flex;
      }
    }
  }

  nav {
    background: ${({ theme }) => theme.colors.main.primary};


    @media screen and (max-width: 578px) {
      display: none;
    }
  }
`;

export const Router = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  margin: 1.8rem auto;
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

  @media screen and (max-width: 842px) {
    li + li {
      margin-left: 4.0rem;
    }
  }

  @media screen and (max-width: 666px) {
    li + li {
      font-size: 1.4rem;
      margin-left: 2.4rem;

    }
  }
`;
