import PropTypes from 'prop-types';

import { Container, ContainerPages, NumberPage } from './styles';

import arrow from '../../assets/images/icons/arrow.svg';

export default function Pagination({
  page,
  totalPages,
  onPrevPage,
  onNextPage,
  onSetPage,
}) {
  const listPages = [...Array(totalPages).keys()];

  return (
    <Container>
      <button type="button" onClick={onPrevPage}>
        <img src={arrow} alt="Página anterior" />
      </button>

      <ContainerPages>
        {listPages.map((item) => (
          <NumberPage
            type="button"
            key={item}
            onClick={() => onSetPage(item + 1)}
            isCurrentPage={item + 1 === page}
          >
            {item + 1}
          </NumberPage>
        ))}
      </ContainerPages>
      <button type="button" onClick={onNextPage}>
        <img src={arrow} alt="Proxima página" />
      </button>
    </Container>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPrevPage: PropTypes.func.isRequired,
  onNextPage: PropTypes.func.isRequired,
  onSetPage: PropTypes.func.isRequired,
};
