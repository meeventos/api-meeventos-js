const Api = require("./Api");

class Event extends Api {
  constructor(baseURL, apiKey) {
    super(baseURL, apiKey);

    this.path = `${baseURL}api/v1/financial`
  }

  // Método que utiliza o GET para obter dados
  async list(id = null) {
    let endpoint = id ? `/${id}` : '';
    endpoint = `${this.path}${endpoint}`;

    return await this.get(endpoint);
  }

}

module.exports = Event;
