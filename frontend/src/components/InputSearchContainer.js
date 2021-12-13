import styled from 'styled-components';

export const InputSearchContainer = styled.form`
  width: 51.2rem;
  height: 4.4rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 856px) {
    width: 90%;
  }

  input {
    width: 100%;
    height: 100%;
    border: 1px solid #959595;

    padding: 1.6rem;

    &::-webkit-search-cancel-button {
      appearance: none;
    }
    &::placeholder {
      color: #BCBCBC;
    }
  }

  button {
    padding: 1.0rem 2.4rem;
    height: 100%;
    color: #FFF;
    font-weight: 800;
    font-size: 1.6rem;
    border: none;
    background: ${({ theme, colorButtonSearch }) => (
    !colorButtonSearch
      ? theme.colors.main.primary
      : colorButtonSearch)};

    cursor: pointer;
    text-transform: uppercase;
  }
`;
