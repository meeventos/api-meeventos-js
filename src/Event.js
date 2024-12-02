const Api = require("./Api");

class Event extends Api {
  constructor(baseURL, apiKey) {
    super(baseURL, apiKey);

    this.path = `${baseURL}api/v1/events`;
  }

  // Método que utiliza o GET para obter dados
  async list(id = null, options = {}) {
    let endpoint = id ? `/${id}` : '';
    endpoint = `${this.path}${endpoint}`;

    // Converter opções em string de consulta
    const queryParams = new URLSearchParams();

    // Adicionar parâmetros de ordenação
    if (options.sort) queryParams.append('sort', options.sort);
    if (options.field_sort) queryParams.append('field_sort', options.field_sort);

    // Adicionar parâmetros de período
    if (options.start) queryParams.append('start', options.start);
    if (options.end) queryParams.append('end', options.end);

    // Adicionar parâmetros de paginação
    if (options.page) queryParams.append('page', options.page);
    if (options.limit) queryParams.append('limit', options.limit);

    // Adicionar parâmetro de busca
    if (options.search) queryParams.append('search', options.search);

    // Adicionar quaisquer outros parâmetros personalizados
    for (const [key, value] of Object.entries(options)) {
      if (!['sort', 'field_sort', 'start', 'end', 'page', 'limit', 'search'].includes(key)) {
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
}

module.exports = Event;