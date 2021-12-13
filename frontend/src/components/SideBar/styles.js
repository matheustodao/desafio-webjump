import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  @media screen and (max-width: 578px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    transition: all .2s ease-out;

  }
  position: absolute;
  bottom: -18rem;
  left: 0;
  width: 100%;
  padding: 1.8rem 2.4rem;
  padding-top: 2.8rem;
  background: linear-gradient(180deg, #FFFFFF 0%, #ECA7B1 84.64%);
  z-index: 10000;
`;

export const Route = styled.ul`
  font-size: 1.4rem;
  li {
    line-height: 2.4rem;
    list-style: none;

    a {
      text-decoration: none;
      color: #1E1E1E;
    }

    + li {
      margin-top: .9rem;
    }
  }

`;
