import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  height: 17.6rem;
  background: ${({ theme }) => theme.colors.main.primary};

  @media screen and (max-width: 1000px ) {
    width: 98%;
  }
`;
