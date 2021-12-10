import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;

    box-sizing: border-box;
  }

  body {
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    background: ${({ theme }) => theme.colors.main.background};
  }

  input, button {
    font-family: 'Open Sans', sans-serif;
  }
`;
