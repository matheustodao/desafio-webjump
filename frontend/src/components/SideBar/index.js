/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container, Route } from './styles';

const routes = [
  {
    id: 1,
    name: 'Página Inicial',
    pathname: '/pagina-inicial',
  },

  {
    id: 2,
    name: 'Camiseta',
    pathname: '/pagina-inicial/camisetas',
  },

  {
    id: 3,
    name: 'Calças',
    pathname: '/pagina-inicial/calcas',
  },

  {
    id: 4,
    name: 'Sapatos',
    pathname: '/pagina-inicial/sapatos',
  },

  {
    id: 5,
    name: 'Contato',
    pathname: '/contatos',
  },

];

export default function SideBar({ state }) {
  return (
    <Container isOpen={state}>
      <nav>
        <Route>
          {routes.map((route) => (
            <li key={route.id}>
              <Link to={route.pathname}>{route.name}</Link>
            </li>
          ))}
        </Route>
      </nav>
    </Container>
  );
}

SideBar.propTypes = {
  state: PropTypes.bool.isRequired,
};
