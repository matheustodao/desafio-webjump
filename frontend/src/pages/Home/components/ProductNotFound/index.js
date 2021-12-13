import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ProductNotFound({ category, onRedirect }) {
  return (
    <Container onSubmit={() => onRedirect()}>
      <h4>Produto não encontrado nessa categoria!</h4>

      <div>
        {category.toLowerCase() === 'todas as categorias'
          ? (
            <>
              <p>Volte para à:</p>
              <button type="submit">
                Todas as categorias
              </button>
            </>
          )
          : (
            <>
              <p>Volte para alguma categoria:</p>
              <button type="submit">
                {`Categoria ${category.toLowerCase()}`}
              </button>
              <a
                href="/pagina-inicial"
                className="last__button"
              >
                Todas as categorias
              </a>
            </>
          )}
      </div>
    </Container>
  );
}

ProductNotFound.propTypes = {
  category: PropTypes.string.isRequired,
  onRedirect: PropTypes.func.isRequired,
};
