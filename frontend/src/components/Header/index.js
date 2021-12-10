import { Link } from 'react-router-dom';
import {
  Container,
  SubHeader,
  InpuSearchContainer,
  Router,
} from './styles';

import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <Container>
      <div className="top__header">
        <Link to="/sign-in">Acesse sua Conta</Link>
        <span>ou</span>
        <Link to="/sign-up">Cadastre-se</Link>
      </div>

      <SubHeader>
        <div className="main__header">
          <Link to="/">
            <img src={logo} alt="Webjump" />
          </Link>

          <InpuSearchContainer>
            <input type="search" placeholder="Buscar por..." />
            <button type="button">BUSCAR</button>
          </InpuSearchContainer>
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
              <Link to="/pagina-inicial/contatos">Contato</Link>
            </li>
          </Router>
        </nav>
      </SubHeader>
    </Container>
  );
}
