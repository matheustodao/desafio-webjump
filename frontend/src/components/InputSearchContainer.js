import styled from 'styled-components';

export const InputSearchContainer = styled.form`
  width: 512px;
  height: 44px;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    height: 100%;
    border: 1px solid #959595;

    padding: 16px;

    &::-webkit-search-cancel-button {
      appearance: none;
    }
    &::placeholder {
      color: #BCBCBC;
    }
  }

  button {
    padding: 10px 24px;
    height: 100%;
    color: #FFF;
    font-weight: 800;
    font-size: 16px;
    border: none;
    background: ${({ theme, colorButtonSearch }) => (
    !colorButtonSearch
      ? theme.colors.main.primary
      : colorButtonSearch)};

    cursor: pointer;
    text-transform: uppercase;
  }
`;
