import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: 22.6rem 1fr;
  grid-template-rows: 4.2rem 1fr;
  grid-template-areas:
            "history history"
            "sideNavigation content";
  margin: 2.4rem 0;
  width: 100%;
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


    @media screen and (max-width: 577px) {
      width: 100%;
      padding: 0 2rem;
    }

    @media screen and (max-width: 551px) {
      margin-bottom: 1.2rem;
      padding: 0;
    }
  }

  @media screen and (max-width: 577px) {
    display: flex;
    flex-direction: column;
    align-items: center;
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


  @media screen and (max-width: 577px) {
    display: flex;
    flex-direction: column;
    width: 100%;
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
  .filter__color__option__container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
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


  @media screen and (max-width: 551px) {
    width: 100%;
  }
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
    @media screen and (max-width: 689px) {
      display: none;
    }

  }
  .order__by {

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

    @media screen and (max-width: 635px) {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      strong {
        font-size: 1rem;
        text-align: center;
      }
    }
  }

`;

export const ListProducts = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 21.2rem);
  grid-gap: 2rem;
  margin-top: 4.2rem;
  margin-bottom: 2.4rem;
  min-height: 16.8rem;

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

  /* @Media queries */

  @media screen and (max-width: 1247px) {
    grid-template-columns: repeat(4, 18rem);
    justify-content: center;

  }

  @media screen and (max-width: 1147px) {
    grid-template-columns: repeat(3, 18.5rem);

  }


  @media screen and (max-width: 982px) {
    grid-template-columns: repeat(3, 15.3rem);
  }


  @media screen and (max-width: 872px) {
    grid-template-columns: repeat(2, 21rem);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 18rem);
    grid-gap: 12px;
  }

  @media screen and (max-width: 697px) {
    grid-template-columns: repeat(2, 14.8rem);
  }

  @media screen and (max-width: 626px) {
    grid-template-columns: repeat(2, 48%);
  }

  @media screen and (max-width: 551px) {
    grid-template-columns: repeat(2, 45%);
    width: 100%;
  }

`;
