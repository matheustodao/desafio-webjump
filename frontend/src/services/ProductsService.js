import HttpClient from './utils/HttpClient';

class ProductsService {
  constructor() {
    this.httpClient = new HttpClient(process.env.REACT_APP_BACKEND_URL);
  }

  async listProducts() {
    const tShirts = await this.listTShirts();
    const pants = await this.listPants();
    const shoes = await this.listShoes();
    const data = [].concat(tShirts.data, pants.data, shoes.data);
    const allProducts = {
      category: 'Todas as categorias',
      path: '/pagina-inicial',
      data,
    };
    const categoryProduct = [].concat(tShirts, pants, shoes, allProducts);

    return { categoryProduct };
  }

  async listTShirts() {
    const data = (await this.httpClient.get('/api/V1/categories/1')).items;
    return {
      category: 'Camiseta',
      path: '/pagina-inicial/camisetas',
      data,
    };
  }

  async listPants() {
    const data = (await this.httpClient.get('/api/V1/categories/2')).items;
    return {
      category: 'Calças',
      path: '/pagina-inicial/calcas',
      data,
    };
  }

  async listShoes() {
    const data = (await this.httpClient.get('/api/V1/categories/3')).items;
    return {
      category: 'Sapatos',
      path: '/pagina-inicial/sapatos',
      data,
    };
  }

  async listFilters() {
    const filters = (await this.httpClient.get('/api/V1/categories/list')).items;
    return { filters };
  }
}

export default new ProductsService();
