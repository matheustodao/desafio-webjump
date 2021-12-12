import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: 22.6rem 1fr;
  grid-template-rows: 4.2rem 1fr;
  grid-template-areas:
            "history history"
            "sideNavigation content";
  margin: 2.4rem 0;
  .historyNavigation {
    grid-area: history;
    height: 2rem;
    font-size: 1.4rem;

    span {
      margin: 0 .6rem;
      color: #ACACAC;
      :last-child {
        display: none;
      }
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.main.primary};
      text-transform: capitalize;

      &:nth-child(1) {
        color: ${({ theme }) => theme.colors.main.secondary};
      }
    }
  }
`;

export const FilterContainer = styled.div`
  grid-area: sideNavigation;
  width: 22.6rem;
  border: 1px solid ${({ theme }) => theme.colors.grey[300]};
  height: fit-content;
  padding: 4.3rem 1.8rem;
  padding-top: 1.3rem;

  h2 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.main.primary};
  }
`;

export const FilterBy = styled.div`
  margin-top: 1.4rem;
  margin-bottom: 3.8rem;

  h3 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.main.secondaryDark};
    margin-bottom: 1.2rem;
  }


`;

export const FilterOption = styled.ul`
  li {
    font-size: 1.6rem;
    list-style-position: inside;
    color: ${({ theme }) => theme.colors.grey[400]};

    ::marker {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.grey[400]};
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.grey[400]};
    }
  }

  .filter__color__option__container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const FilterColorOption = styled.div`
  width: 4.8rem;
  height: 2.4rem;
  background: ${({ color }) => color};

  & + & {
    margin-left: .3rem;
  }
`;

export const Content = styled.div`
  grid-area: content;
  margin-left: 2.4rem;

`;

export const HeaderContent = styled.div`
  h2 {
    font-size: 3.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.main.primary};
  }
`;

export const SubHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.grey[300]};
  margin-top: .8rem;

  div:first-child {
    img {
      width: 2rem;
      height: 2rem;

      + img {
        margin-left: .6rem;
      }
    }
  }

  strong {
    color: ${({ theme }) => theme.colors.grey[400]};
    margin-right: 1.3rem;
    font-size: 1.1rem;
    text-transform: uppercase;
  }

  select {
    border: none;
    border: 1px solid ${({ theme }) => theme.colors.grey[300]};
    background: #FFF;
    border-radius: 5px;
    padding: 4px;
    width: 21.6rem;

    color: #8E8E8E;
  }
`;

export const ListProducts = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 21.2rem);
  grid-gap: 2rem;
  margin-top: 4.2rem;
  margin-bottom: 2.4rem;

  .product__not__found {
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
    h4 {
      width: 29.9rem;
      color: #3C3B3B;
      font-size: 1.8rem;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        color: #4E4E4E;
        margin-top: 1rem;
        margin-bottom: 3rem;
        font-size: 1.4rem;
      }

      button {
        padding: 1.2rem 2.4rem;
        background: #04D1D2;
        font-weight: 700;
        color: #FFF;
        border-radius: 4px;
        border: none;
        box-shadow: 0px 2px 7px rgba(65, 185, 185, 0.53);
        font-size: 1.4rem;
        cursor: pointer;
        width: 20rem;

        &.last__button {
          background: #dddd;
          margin-top: .8rem;
          color: #818181;
          box-shadow: none;
          font-weight: 400;
          width: 18rem;

        }
      }
    }
  }
`;
