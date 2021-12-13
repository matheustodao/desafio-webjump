import {
  Fragment,
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import { ThemeConsumer } from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import {
  Container,
  FilterContainer,
  FilterBy,
  FilterOption,
  FilterColorOption,
  Content,
  HeaderContent,
  SubHeaderContent,
  ListProducts,
} from './styles';

import listIcon from '../../assets/images/icons/list.svg';
import gridIcon from '../../assets/images/icons/grid.svg';
import spinnerLoading from '../../assets/images/icons/spinner-loading.svg';

import CardProduct from '../../components/CardProduct';
import Header from '../../components/Header';
import { InputSearchContainer } from '../../components/InputSearchContainer';
import Pagination from '../../components/Pagination';

import ProductsService from '../../services/ProductsService';

import historyNavigation from './utils/isEqualPathname';
import removeSpecialCharacters from './utils/removeSpecialCharacters';

import usePagination from '../../hooks/usePagination';

export default function Home() {
  // Hooks Variables
  const [products, setProducts] = useState([]);
  const [filtersContext, setFiltersContext] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const searchTerm = useRef('');
  const { pathname: allPathname } = useLocation();
  const navigate = useNavigate();

  // Variables
  const pathname = allPathname.split('/').filter((item) => item !== false && item);

  // Functions
  const lengthProducts = useMemo(() => {
    if (products) {
      return products.data?.length;
    }

    if (filteredProducts) {
      return filteredProducts.length;
    }
  }, [filteredProducts, products]);

  const {
    nextPage,
    prevPage,
    setPage,
    firstItemContent,
    lastItemContent,
    totalPages,
    page,
  } = usePagination({
    lenghtContent: lengthProducts || 10,
    contentPerPage: 12,
  });

  const handleSearchTerm = useCallback((event) => {
    event.preventDefault();
    const filtered = products.data?.filter((item) => {
      const nameProduct = removeSpecialCharacters(item.name.toLowerCase());

      return nameProduct.includes(removeSpecialCharacters(searchTerm.current.value.toLowerCase()));
    });

    setFilteredProducts(filtered);
  }, [searchTerm.current.value]);

  const loadProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      setFilteredProducts(null);
      searchTerm.current.value = '';
      const { productsList, productsInfoList } = await ProductsService.listProducts();
      const [productByCategory] = productsInfoList.filter((product) => (
        allPathname.includes(product.path) && product
      ));

      if (productByCategory) {
        return setProducts(productByCategory);
      }
      setProducts({ data: productsList, category: 'Página Inicial' });
    } catch (error) {
      return error;
    } finally {
      setIsLoading(false);
    }
  }, [allPathname]);

  useEffect(() => {
    setPage(1);
    async function loadFilters() {
      const { filters } = await ProductsService.listFilters();
      setFiltersContext(filters);
    }

    loadProducts();
    loadFilters();
  }, [loadProducts, lengthProducts]);

  function renderListProducts() {
    if (!filteredProducts) {
      return (
        products.data?.slice(firstItemContent, lastItemContent)?.map((product) => (
          <CardProduct
            key={product.id}
            product={product}
            onHandleClickBuy={() => {}}
          />
        ))
      );
    // eslint-disable-next-line no-else-return
    } else if (searchTerm) {
      const goTo = products?.category.toLowerCase() === 'pagina inicial' ? pathname : '/pagina-inicial';
      return (
        <form className="product__not__found" onSubmit={() => navigate(goTo)}>
          <h4>Produto não encontrado nessa categoria!</h4>

          <div>

            {removeSpecialCharacters(products?.category.toLowerCase()) === 'pagina inicial'
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
                    Categoria
                    {
                      removeSpecialCharacters(products?.category.toLowerCase()) !== 'pagina inicial' && ` ${products?.category.toLowerCase()}`
                    }
                  </button>
                  <button
                    type="submit"
                    className="last__button"
                  >
                    Todas as categorias
                  </button>
                </>
              )}
          </div>
        </form>
      );
    } else {
      return (
        filteredProducts?.slice(firstItemContent, lastItemContent)?.map((product) => (
          <CardProduct
            key={product.id}
            product={product}
            onHandleClickBuy={() => {}}
          />
        ))
      );
    }
  }

  return (
    <>
      <ThemeConsumer>
        {(theme) => (
          <Header>
            <InputSearchContainer
              colorButtonSearch={`${theme.colors.main.secondary}`}
              noValidate
            >
              <input
                type="search"
                placeholder="Nome do produto..."
                ref={searchTerm}
              />
              <button type="submit" onClick={handleSearchTerm}>buscar</button>
            </InputSearchContainer>
          </Header>
        )}
      </ThemeConsumer>

      <Container>
        <div className="historyNavigation">
          {pathname.map((item, index, array) => (
            <Fragment
              key={`${(index + 1) * 3}`}
            >
              <Link to={historyNavigation(array, item)}>
                {item}
              </Link>
              <span>{'>'}</span>
            </Fragment>
          ))}
        </div>

        <FilterContainer className="filter">
          <h2>Filtre Por</h2>
          <FilterBy>
            <h3>Categorias</h3>
            {filtersContext.map((item) => (
              <FilterOption key={item.id}>
                <li>
                  <Link
                    to={item.path === 'calcados' ? 'sapatos' : item.path}
                  >
                    {item.name.includes('Calçados') ? 'Sapatos' : item.name}
                  </Link>
                </li>
              </FilterOption>
            ))}
          </FilterBy>

          <FilterBy>
            <h3>Cores</h3>
            <div className="filter__color__option__container">
              <FilterColorOption color="#CB0D1F" />
              <FilterColorOption color="#F26324" />
              <FilterColorOption color="#27A3A9" />
            </div>
          </FilterBy>

          <FilterBy>
            <h3>Tipos</h3>
            <FilterOption>
              <li>Corrida</li>
              <li>Caminhada</li>
              <li>Acessórios</li>
            </FilterOption>
          </FilterBy>
        </FilterContainer>

        <Content>
          <HeaderContent className="header">
            <h2>
              {!filteredProducts
                ? products?.category
                : `
                  Buscou em
                  ${products?.category.toLowerCase() === 'pagina inicial' ? 'todas as categorias' : products?.category}
                  por: ${searchTerm.current.value}
              `}
            </h2>

            {(!filteredProducts && searchTerm) && (
              <SubHeaderContent>
                <div>
                  <img src={gridIcon} alt="Listar forma de grid" />
                  <img src={listIcon} alt="Listar forma de lista" />
                </div>

                <div className="order__by">
                  <strong>Ordernar por</strong>
                  <select>
                    <option defaultChecked value="preco">Preço</option>
                  </select>
                </div>
              </SubHeaderContent>
            )}
          </HeaderContent>

          <ListProducts>
            {renderListProducts()}
          </ListProducts>

          {isLoading
            ? (
              <div id="loader">
                <img
                  src={spinnerLoading}
                  alt="Carregando os produtos"
                  width="100px"
                  height="100px"
                />
              </div>
            )
            : (!filteredProducts && searchTerm) && (
              <Pagination
                totalPages={totalPages}
                onNextPage={nextPage}
                onPrevPage={prevPage}
                onSetPage={setPage}
                page={page}
              />
            )}

        </Content>
      </Container>
    </>
  );
}
