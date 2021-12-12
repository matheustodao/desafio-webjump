import PropTypes from 'prop-types';

import {
  Container,
  ImageWrapper,
  Information,
  WrapperOfPrices,
  PriceOFF,
} from './styles';

export default function CardProduct({ product, onHandleClickBuy }) {
  return (
    <Container>
      <ImageWrapper>
        <img src={`${process.env.REACT_APP_BACKEND_URL}/${product.image}`} alt={product.sku} />
      </ImageWrapper>

      <Information>
        <h3>{product.name}</h3>
        <WrapperOfPrices>

          {
          (product.specialPrice)
            ? (
              <>
                <PriceOFF>R$ {product.specialPrice.toFixed(2)}</PriceOFF>
                <strong>R$ {product.price.toFixed(2)}</strong>
              </>
            )
            : <strong>R$ {product.price.toFixed(2)}</strong>
          }

        </WrapperOfPrices>
      </Information>

      <button
        type="button"
        onClick={() => onHandleClickBuy({
          id: product.id,
          path: product.path,
        })}
      >
        Comprar
      </button>
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    sku: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    specialPrice: PropTypes.number,
    filter: PropTypes.arrayOf(PropTypes.shape).isRequired,
  }).isRequired,
  onHandleClickBuy: PropTypes.func.isRequired,
};

CardProduct.defaultProp = {
  product: {
    specialPrice: null,
  },
};
