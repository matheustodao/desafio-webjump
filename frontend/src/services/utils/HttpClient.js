export default class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path, options = null) {
    const response = await fetch(`${this.baseURL}${path}`, options);
    return response.json();
  }
}
