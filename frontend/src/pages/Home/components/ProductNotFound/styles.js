import styled from 'styled-components';

export const Container = styled.form`
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

    }
    a.last__button {
      background: #dddd;
      margin-top: .8rem;
      color: #818181;
      box-shadow: none;
      font-weight: 400;
      width: 18rem;
      padding: 1.2rem 2.4rem;
      border-radius: 4px;
      font-size: 1.4rem;
      text-decoration: none;
    }
  }
`;
