import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  margin: 24px 0;
`;

export const SideNavigation = styled.div`
  margin-right: 24px;
  background: ${({ theme }) => theme.colors.grey[300]};
  padding: 12px 24px;

  nav {
    width: 212px;
    line-height: 27px;

    li {
      list-style-position: inside;
      font-size: 14px;

      ::marker {
        color: #121212;
        font-size: 12px;
      }

      a {
        text-decoration: none;
        color: #121212;

      }

    }
  }

`;

export const WrapperContent = styled.div` `;

export const Header = styled.div`
  width: 100%;
  height: 280px;
  background: #ACACAC;

`;

export const Content = styled.div`
  margin-top: 14px;

  h1 {
    font-size: 26px;
    font-weight: 400;
    margin-bottom: 6px;
  }
`;
