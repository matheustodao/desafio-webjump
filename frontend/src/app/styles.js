import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 214px;
  margin: 0 5%;
  max-width: 90%;
  width: 100%;


  @media screen and (max-width: 578px) {
    padding-top: 15.4rem;
  }
`;
