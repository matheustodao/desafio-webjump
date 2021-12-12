import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: #454545;
    font-size: 3rem;
  }
`;

export const Button = styled(Link)`
  padding: 1.2rem 2.4rem;
  background: #04D1D2;
  font-weight: 700;
  color: #FFF;
  border-radius: .4rem;
  text-decoration: none;
  margin-top: 3.6rem;
  font-size: 1.4rem;
`;
