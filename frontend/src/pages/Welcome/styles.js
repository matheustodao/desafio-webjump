import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  margin: 2.4rem 0;
`;

export const SideNavigation = styled.div`
  margin-right: 2.4rem;
  background: ${({ theme }) => theme.colors.grey[300]};
  padding: 1.2rem 2.4rem;

  nav {
    width: 21.2rem;
    line-height: 2.7rem;

    li {
      list-style-position: inside;
      font-size: 1.4rem;

      ::marker {
        color: #121212;
        font-size: 1.2rem;
      }

      a {
        text-decoration: none;
        color: #121212;

      }

    }
  }
  @media screen and (max-width: 578px) {
    display: none;
  }

`;

export const WrapperContent = styled.div`
  p {
    font-size: 1.6rem;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 28.0rem;
  background: #ACACAC;

  @media screen and (max-width: 778px) {
    height: 16.5rem;
  }

  @media screen and (max-width: 578px) {
    height: 15.6rem;
  }

  @media screen and (max-width: 378px) {
    height: 8.6rem;
  }
`;

export const Content = styled.div`
  margin-top: 1.4rem;

  h1 {
    font-size: 2.6rem;
    font-weight: 400;
    margin-bottom: .6rem;
  }
`;
