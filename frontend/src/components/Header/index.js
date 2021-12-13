import { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import {
  Container,
  SubHeader,
  Router,
} from './styles';

import SideBar from '../SideBar';

import logo from '../../assets/images/logo.svg';
import shoppingCart from '../../assets/images/icons/shopping-cart.svg';
import sideBarIcon from '../../assets/images/icons/side-bar.svg';
import closeIcon from '../../assets/images/icons/close.svg';

export default function Header({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleSideBar() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <Container>
      <div className="top__header">
        <div>
          <Link to="/sign-in">Acesse sua Conta</Link>
          <span>ou</span>
          <Link to="/sign-up">Cadastre-se</Link>
        </div>
      </div>

      <SubHeader>

        <div className="main__header">
          <div className="icons">
            <button
              type="button"
              onClick={handleToggleSideBar}
            >
              {isOpen
                ? <img src={closeIcon} alt="Close side bar" />
                : <img src={sideBarIcon} alt="Open side bar" />}
            </button>
          </div>
          <Link alt="Voltar para pagina de bem vindo(a) " to="/">
            <img id="logo" src={logo} alt="Webjump" />
          </Link>

          <div className="box__search">
            { children }
          </div>
          <div className="icons">
            <img src={shoppingCart} alt="Carrinho" />
          </div>
        </div>
        <nav>
          <Router>
            <li>
              <Link to="/pagina-inicial">Pagina Inicial</Link>
            </li>

            <li>
              <Link to="/pagina-inicial/camisetas">Camisetas</Link>
            </li>

            <li>
              <Link to="/pagina-inicial/calcas">Calças</Link>
            </li>

            <li>
              <Link to="/pagina-inicial/sapatos">Sapatos</Link>
            </li>

            <li>
              <Link to="/contatos">Contato</Link>
            </li>
          </Router>
        </nav>
      </SubHeader>
      <SideBar
        state={isOpen}
      />
    </Container>
  );
}

Header.propTypes = {
  children: PropTypes.node,
};

Header.defaultProps = {
  children: null,
};
