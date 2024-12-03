const Api = require("./Api");

class Client extends Api {
  constructor(baseURL, apiKey) {
    super(baseURL, apiKey);
    this.path = `${baseURL}api/v1/clients`;
  }

  async list(id = null, options = {}) {
    let endpoint = id ? `/${id}` : '';
    endpoint = `${this.path}${endpoint}`;

    // Converter opções em string de consulta
    const queryParams = new URLSearchParams();

    // Adicionar parâmetros de ordenação
    if (options.sort) queryParams.append('sort', options.sort);
    if (options.field_sort) queryParams.append('field_sort', options.field_sort);

    // Adicionar parâmetros de busca
    if (options.search) queryParams.append('search', options.search);
    if (options.type) queryParams.append('type', options.type);

    // Adicionar parâmetros de paginação
    if (options.page) queryParams.append('page', options.page);
    if (options.limit) queryParams.append('limit', options.limit);

    // Adicionar quaisquer outros parâmetros personalizados
    for (const [key, value] of Object.entries(options)) {
      if (!['sort', 'field_sort', 'search', 'type', 'page', 'limit'].includes(key)) {
        queryParams.append(key, value);
      }
    }

    // Anexar a string de consulta à URL, se houver parâmetros
    const queryString = queryParams.toString();
    if (queryString) {
      endpoint += `?${queryString}`;
    }

    return await this.get(endpoint);
  }

  async create(data) {
    const endpoint = this.path;
    return await this.post(endpoint, data);
  }

  async update(id, data) {
    let endpoint = id ? `/${id}` : '';
    endpoint = `${this.path}${endpoint}`;

    return await this.put(endpoint, data);
  }


  async delete(id) {
    let endpoint = id ? `/${id}` : '';
    endpoint = `${this.path}${endpoint}`;
    return await super.delete(endpoint);
  }
}

module.exports = Client;
