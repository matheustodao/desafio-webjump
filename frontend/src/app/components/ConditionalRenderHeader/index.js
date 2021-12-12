/* eslint-disable no-unused-vars */
import { useLocation } from 'react-router-dom';
import Header from '../../../components/Header';

import { InputSearchContainer } from '../../../components/InputSearchContainer';

export default function ConditionalRenderHeader() {
  const location = useLocation();
  const pagesHeaderCustomed = ['pagina-inicial'];

  if (location.pathname.includes(...pagesHeaderCustomed)) {
    return null;
  }

  return (
    <Header>
      <InputSearchContainer>
        <input type="search" placeholder="Buscar por..." />
        <button type="button">BUSCAR</button>
      </InputSearchContainer>
    </Header>
  );
}
