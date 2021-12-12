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
  }
`;

export const Button = styled(Link)`
  padding: 12px 24px;
  background: #04D1D2;
  font-weight: 700;
  color: #FFF;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 36px;
`;
