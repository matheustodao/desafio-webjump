import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import {
  Container,
  SubHeader,
  Router,
} from './styles';

import logo from '../../assets/images/logo.png';
import shoppingCart from '../../assets/images/icons/shopping-cart.svg';
import sideBar from '../../assets/images/icons/side-bar.svg';

export default function Header({ children }) {
  return (
    <Container>
      <div className="top__header">
        <Link to="/sign-in">Acesse sua Conta</Link>
        <span>ou</span>
        <Link to="/sign-up">Cadastre-se</Link>
      </div>

      <SubHeader>

        <div className="main__header">
          <div className="icons">
            <img src={sideBar} alt="Menu de navegação" />
          </div>
          <Link to="/">
            <img src={logo} alt="Webjump" />
          </Link>

          { children }
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
    </Container>
  );
}

Header.propTypes = {
  children: PropTypes.node,
};

Header.defaultProps = {
  children: null,
};
