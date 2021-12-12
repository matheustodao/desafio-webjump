import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: 226px 1fr;
  grid-template-rows: 42px 1fr;
  grid-template-areas:
            "history history"
            "sideNavigation content";
  margin: 24px 0;
  .historyNavigation {
    grid-area: history;
    height: 20px;
    font-size: 14px;

    span {
      margin: 0 6px;
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
  width: 226px;
  border: 1px solid ${({ theme }) => theme.colors.grey[300]};
  height: fit-content;
  padding: 43px 18px;
  padding-top: 13px;

  h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.main.primary};
  }
`;

export const FilterBy = styled.div`
  margin-top: 14px;
  margin-bottom: 38px;

  h3 {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.main.secondaryDark};
    margin-bottom: 12px;
  }


`;

export const FilterOption = styled.ul`
  li {
    font-size: 16px;
    list-style-position: inside;
    color: ${({ theme }) => theme.colors.grey[400]};

    ::marker {
      font-size: 14px;
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
  width: 48px;
  height: 24px;
  background: ${({ color }) => color};

  & + & {
    margin-left: 3px;
  }
`;

export const Content = styled.div`
  grid-area: content;
  margin-left: 24px;

`;

export const HeaderContent = styled.div`
  h2 {
    font-size: 32px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.main.primary};
  }
`;

export const SubHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.grey[300]};
  margin-top: 8px;

  div:first-child {
    img {
      width: 20px;
      height: 20px;

      + img {
        margin-left: 6px;
      }
    }
  }

  strong {
    color: ${({ theme }) => theme.colors.grey[400]};
    margin-right: 13px;
    font-size: 11px;
    text-transform: uppercase;
  }

  select {
    border: none;
    border: 1px solid ${({ theme }) => theme.colors.grey[300]};
    background: #FFF;
    border-radius: 5px;
    padding: 4px;
    width: 216px;

    color: #8E8E8E;
  }
`;

export const ListProducts = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 212px);
  grid-gap: 20px;
  margin-top: 42px;
  margin-bottom: 24px;

  .product__not__found {
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
    h4 {
      width: 299px;
      color: #3C3B3B;
      font-size: 18px;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        color: #4E4E4E;
        margin-top: 10px;
        margin-bottom: 30px;
      }

      button {
        padding: 12px 24px;
        background: #04D1D2;
        font-weight: 700;
        color: #FFF;
        border-radius: 4px;
        border: none;
        box-shadow: 0px 2px 7px rgba(65, 185, 185, 0.53);
        font-size: 14px;
        cursor: pointer;
        width: 200px;

        &.last__button {
          background: #dddd;
          margin-top: 8px;
          color: #818181;
          box-shadow: none;
          font-weight: 400;
          width: 180px;

        }
      }
    }
  }
`;
