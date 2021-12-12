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

`;

export const Content = styled.div`
  margin-top: 1.4rem;

  h1 {
    font-size: 2.6rem;
    font-weight: 400;
    margin-bottom: .6rem;
  }
`;
